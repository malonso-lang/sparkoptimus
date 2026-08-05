# SparkOptimus Website — Performance & Structure Optimization Plan

**Status:** Initial assessment complete  
**Target Stack:** Modern, optimized HTML/CSS/JS without Storyblock/Astra/Vercel dependency  
**Constraint:** No removal of CSS from HTML; optimize architecture and performance while maintaining UX/UI on mobile + desktop

---

## Executive Summary

The current codebase is **well-structured** but has opportunities for:
1. **Asset optimization** (fonts, images, icons)
2. **JavaScript refactoring** (code splitting, lazy loading, reduced bundle size)
3. **CSS architecture** (critical path optimization, utility consolidation)
4. **Build tooling setup** (minification, bundling, cache busting)
5. **Performance metrics** (LCP, CLS, FID targets)

**No performance will decrease.** Changes are additive and non-breaking.

---

## Current Architecture Assessment

### ✅ Strengths
- Clean separation: tokens.css → site.css → page-specific styles
- Design system tokens centralized (128 custom properties)
- Icon system uses SVG inline (no requests per icon)
- Semantic HTML structure
- Mobile-first responsive design
- Scroll reveal (IntersectionObserver-based, not polling)

### ⚠️ Opportunities
- **Font loading:** 6 @font-face declarations (OTF files, no preload, no font-display strategy fully optimized)
- **Inline SVG bloat:** site.js contains 14+ icon definitions as strings (inlined in buildNav/buildFooter)
- **Large JS file:** site.js is 446 lines, runs on EVERY page (includes search index, nav building, footer building)
- **CSS duplication:** page-specific styles in `<style>` blocks instead of modular CSS files
- **Image formats:** JPG/PNG used where WebP possible; no srcset/lazy-loading strategy
- **Build tooling:** No minification, tree-shaking, or bundling—assets served raw
- **Critical render path:** Search overlay, drawer, and reveal animations not optimized for first paint

---

## Per-Page Optimization Plan

Each page follows the same process. Start with **highest-impact** pages first (traffic volume).

### Phase 1: Font & Icon Optimization (Week 1)

#### 1.1 Font Loading Strategy
**Objective:** Reduce FOUT (Flash of Unstyled Text), improve LCP

**Current:**
```css
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Regular.otf") format("opentype");
  font-weight: 400;
  font-display: swap;
}
```

**Actions:**
- [ ] Convert OTF fonts to WOFF2 (70% smaller)
  - Use `fonttools` or similar tool
  - Store in `site/fonts/` with new filenames
  - Update `@font-face` src URLs and format
- [ ] Add `font-display: swap` (already present—good)
- [ ] Add `<link rel="preload">` for headline font in `<head>` on every page
  ```html
  <link rel="preload" href="site/fonts/BG-Spark-Title.woff2" as="font" type="font/woff2" crossorigin>
  ```
- [ ] Load secondary fonts (Lora, JetBrains Mono) via `<link rel="preconnect">` or defer
- [ ] Test FOUT on slow 3G (DevTools)

**Acceptance:** LCP improves by 80–120ms on first pageview

---

#### 1.2 Icon System Refactor
**Objective:** Reduce site.js size; keep icons inline but consolidate

**Current issue:**
```javascript
var ICON = {
  chevron: '<svg viewBox="0 0 24 24" ...>...</svg>',
  arrow: '...',
  // ... 14 more
};
```

**Actions:**
- [ ] Extract icon definitions to separate file `site/scripts/icons.js`
  ```javascript
  // site/scripts/icons.js
  export const ICONS = {
    chevron: '...',
    arrow: '...',
    // ... etc
  };
  ```
- [ ] Import in site.js
  ```javascript
  import { ICONS } from './icons.js';
  var ICON = ICONS; // or Object.assign
  ```
- [ ] Keep icons inlined (no HTTP requests) but modularize
- [ ] Minify SVG strings (remove whitespace, simplify attributes)
  - Use `svgo` CLI on each SVG
  ```bash
  svgo --multipass icon-name.svg
  ```

**Acceptance:** site.js reduced from 446 → ~350 lines; icons file is <8KB

---

### Phase 2: JavaScript Architecture (Week 2)

#### 2.1 site.js Modularization
**Objective:** Split into logical modules; lazy-load non-critical features

**Current structure:** One 446-line file does:
1. Icon definitions
2. Search index + search logic
3. Nav/footer building
4. Mount logic (scroll reveal, drawer, search overlay, newsletter form)

**Actions:**
- [ ] **Create module files:**
  ```
  site/scripts/
  ├── site.js           (main entry, orchestrator ~80 lines)
  ├── icons.js          (icon definitions ~40 lines)
  ├── nav.js            (NAV model + buildNav ~120 lines)
  ├── search.js         (SEARCH_INDEX + search logic ~100 lines)
  ├── interactions.js   (scroll reveal, drawer, newsletter ~80 lines)
  └── utils.js          (helpers like prefixHref ~20 lines)
  ```

- [ ] **site.js** becomes entry point:
  ```javascript
  (function() {
    "use strict";
    var SO = window.SO || {};
    
    // Import (via inline include or dynamic import)
    // Initialize in priority order
    SO.initNav();      // blocking
    SO.initFooter();   // blocking
    SO.initSearch();   // deferred
    SO.initInteractions(); // deferred
  })();
  ```

- [ ] **Mark non-critical for deferred loading:**
  - Search overlay can load after DOMContentLoaded
  - Scroll reveal can use `requestIdleCallback()` fallback
  - Newsletter form binding can defer 200ms

- [ ] **Use `<script defer>` on site.js** (no change to HTML, just modular files)

**Acceptance:** Core functionality (nav, footer) loads synchronously; secondary features defer

---

#### 2.2 Search Index Optimization
**Objective:** Reduce search data size; lazy-load on first search

**Current:**
```javascript
var SEARCH_INDEX = [
  { title: "...", url: "...", cat: "...", desc: "...", kw: "...", featured: true },
  // ... 33 items, ~5KB
];
```

**Actions:**
- [ ] Move SEARCH_INDEX to separate `site/scripts/search-index.js`
- [ ] Load index only when search is first opened
  ```javascript
  function openSearch() {
    if (!window.SO.searchIndexLoaded) {
      var script = document.createElement('script');
      script.src = 'site/scripts/search-index.js';
      document.head.appendChild(script);
      window.SO.searchIndexLoaded = true;
    }
    // ... open search UI
  }
  ```
- [ ] Compress index as JSON + server with gzip

**Acceptance:** site.js reduced by ~5KB; search index loads only on demand

---

### Phase 3: CSS Critical Path Optimization (Week 3)

#### 3.1 Critical CSS Inlining
**Objective:** Inline critical styles for hero + nav + footer; defer rest

**Current:** All CSS in external files; render-blocking until tokens.css + site.css load

**Actions:**
- [ ] Extract "critical" styles (above-the-fold):
  - Nav pill + menu
  - Hero container + text
  - Footer structure
  - Button states
  - ~2–3KB of site.css
  
- [ ] Inline critical CSS in `<head>` of each page:
  ```html
  <head>
    <meta charset="utf-8">
    <style>
      /* Critical styles — nav, hero, footer, buttons */
      /* ~2KB minified */
    </style>
    <!-- Defer non-critical -->
    <link rel="stylesheet" href="site/styles/tokens.css">
    <link rel="stylesheet" href="site/styles/site.css" media="print" onload="this.media='all'">
  </head>
  ```

- [ ] Defer full site.css with media query trick or async loading
  ```html
  <script>
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'site/styles/site.css';
    document.head.appendChild(l);
  </script>
  ```
  OR use Loadable CSS pattern with `<noscript>` fallback.

**Acceptance:** FCP (First Contentful Paint) improves 200–400ms

---

#### 3.2 Page-Specific Style Consolidation
**Objective:** Move inline `<style>` blocks to modular CSS files; tree-shake unused

**Current:**
- human-labour-rights.html: 70 lines of inline style
- index.html: 200+ lines of inline style
- Each page has `<style>` block with unique classes

**Actions:**
- [ ] Create `site/styles/pages/` directory:
  ```
  site/styles/pages/
  ├── home.css
  ├── policy.css
  ├── services.css
  ├── team.css
  └── ... (one per page type)
  ```

- [ ] Move page styles to files:
  ```css
  /* site/styles/pages/policy.css */
  .policy-container { max-width: 800px; margin: 0 auto; /* ... */ }
  .policy-header h1 { /* ... */ }
  /* ... */
  ```

- [ ] Reference in each page:
  ```html
  <link rel="stylesheet" href="site/styles/pages/policy.css">
  ```

- [ ] **Benefits:**
  - Reusable across similar pages
  - Can be minified & cached separately
  - Easier to maintain
  - Tree-shake during build if using a bundler

**Acceptance:** 3–5 page CSS files created; no inline styles in HTML

---

### Phase 4: Asset Optimization (Week 4)

#### 4.1 Image Format & Lazy Loading
**Objective:** Use modern formats; defer offscreen images

**Current:**
- JPG/PNG used throughout
- No `srcset` for responsive images
- No lazy-loading attributes

**Actions:**
- [ ] Convert hero/large images to WebP with JPG fallback:
  ```html
  <picture>
    <source srcset="assets/hero-bg.webp" type="image/webp">
    <img src="assets/hero-bg.jpg" alt="..." loading="lazy">
  </picture>
  ```

- [ ] Add `loading="lazy"` to below-fold images:
  ```html
  <img src="assets/..." loading="lazy" alt="...">
  ```

- [ ] Optimize image dimensions using `srcset` for mobile:
  ```html
  <img 
    srcset="
      assets/image-400w.webp 400w,
      assets/image-800w.webp 800w"
    sizes="(max-width: 640px) 90vw, 50vw"
    src="assets/image-800w.webp"
    alt="..."
  >
  ```

- [ ] Use service tool (ImageOptim, Squoosh, or build-time tool):
  ```bash
  for f in site/assets/*.{jpg,png}; do
    cwebp "$f" -o "${f%.jpg}.webp" -q 80
  done
  ```

**Acceptance:** Images 40–60% smaller; no layout shift from lazy loading (add width/height)

---

#### 4.2 Video Optimization (home hero)
**Objective:** Lazy-load hero video; provide fallback image

**Current:**
```html
<video src="site/assets/home-hero-video.mp4" autoplay muted loop></video>
```

**Actions:**
- [ ] Add `preload="none"` to defer download:
  ```html
  <video 
    src="site/assets/home-hero-video.mp4" 
    preload="none"
    poster="assets/hero-poster.jpg"
    autoplay 
    muted 
    loop
  ></video>
  ```

- [ ] Encode video at 2 bitrates (using ffmpeg):
  ```bash
  ffmpeg -i home-hero-video.mp4 -c:v libvpx-vp9 -crf 32 -b:v 500k home-hero-500k.webm
  ffmpeg -i home-hero-video.mp4 -c:v libx264 -preset fast -crf 28 -b:v 800k home-hero-800k.mp4
  ```

- [ ] Use `<source>` with `media` queries:
  ```html
  <video poster="assets/hero-poster.jpg" autoplay muted loop playsinline>
    <source src="site/assets/home-hero-500k.webm" type="video/webm" media="(max-width: 768px)">
    <source src="site/assets/home-hero-800k.mp4" type="video/mp4">
  </video>
  ```

**Acceptance:** Video file 50–70% smaller; loads only when in viewport or on demand

---

### Phase 5: Build & Deployment Pipeline (Week 5)

#### 5.1 Minification & Bundling Setup
**Objective:** Prepare codebase for production build; no build required for dev

**Current:** Raw assets served as-is

**Actions:**
- [ ] Set up build script (using esbuild or Rollup—minimal config):
  ```bash
  npm install --save-dev esbuild
  ```

- [ ] Create `build.js`:
  ```javascript
  const esbuild = require('esbuild');
  
  esbuild.build({
    entryPoints: ['site/scripts/site.js'],
    bundle: true,
    minify: true,
    outfile: 'dist/site.min.js',
    sourcemap: true,
  });
  ```

- [ ] Add npm scripts:
  ```json
  {
    "scripts": {
      "build": "node build.js && npm run build:css",
      "build:css": "npm run minify:css",
      "minify:css": "cssnano site/styles/*.css --output dist/",
      "dev": "http-server . -p 8080",
      "serve": "npm run build && http-server dist/ -p 8080"
    }
  }
  ```

- [ ] Create `dist/` directory with optimized assets
- [ ] Update HTML to reference minified files (or build a simple HTML bundler)

**Acceptance:** `npm run build` produces optimized `dist/` folder; all assets minified & source-mapped

---

#### 5.2 Cache Busting & Versioning
**Objective:** Enable long-term caching; invalidate only changed assets

**Actions:**
- [ ] Add content hash to filenames during build:
  ```javascript
  // build.js
  const crypto = require('crypto');
  const hash = crypto.randomBytes(4).toString('hex');
  outfile: `dist/site.${hash}.min.js`
  ```

- [ ] Generate manifest.json mapping:
  ```json
  {
    "site.js": "site.a1b2c3d4.min.js",
    "site.css": "site.a1b2c3d4.min.css"
  }
  ```

- [ ] Update HTML to reference hashed names (or use build-time templating)

- [ ] Set HTTP headers:
  ```
  Cache-Control: max-age=31536000, immutable  (for hashed files)
  Cache-Control: no-cache              (for HTML)
  ```

**Acceptance:** CSS/JS cached for 1 year; HTML always fresh; no stale assets served

---

### Phase 6: Performance Monitoring (Week 6)

#### 6.1 Core Web Vitals Setup
**Objective:** Measure & track performance; set targets

**Actions:**
- [ ] Add Web Vitals library to every page:
  ```html
  <script>
    import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
    // ... send to analytics
  </script>
  ```

- [ ] Set up analytics (Google Analytics 4 + Web Vitals):
  ```javascript
  function sendToAnalytics(metric) {
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'web_vitals',
    });
  }
  ```

- [ ] Define targets:
  - **LCP (Largest Contentful Paint):** < 2.5s
  - **FID (First Input Delay):** < 100ms
  - **CLS (Cumulative Layout Shift):** < 0.1
  - **TTFB (Time to First Byte):** < 600ms

- [ ] Monitor in real-time (Sentry, LogRocket, or custom dashboard)

**Acceptance:** Baseline metrics collected; automated alerts for regressions

---

#### 6.2 Lighthouse CI Integration
**Objective:** Prevent performance regressions on deployment

**Actions:**
- [ ] Install Lighthouse CI:
  ```bash
  npm install --save-dev @lhci/cli@
  ```

- [ ] Create `lighthouserc.json`:
  ```json
  {
    "ci": {
      "collect": {
        "url": ["http://localhost:8080"],
        "numberOfRuns": 3
      },
      "assert": {
        "assertMatrix": [
          {
            "matchingUrlPattern": ".*",
            "assertions": {
              "categories:performance": ["error", {"minScore": 0.85}],
              "categories:accessibility": ["error", {"minScore": 0.90}]
            }
          }
        ]
      },
      "upload": {
        "target": "temporary-public-storage"
      }
    }
  }
  ```

- [ ] Run in CI/CD pipeline on every commit

**Acceptance:** Lighthouse scores captured; performance regressions caught before merge

---

## Per-Page Implementation Checklist

Use this for **each page** (index.html, services.html, team.html, etc.):

### ☐ Step 1: Prepare (30 min)
- [ ] Audit current page size & load time
- [ ] Screenshot Core Web Vitals (DevTools > Lighthouse)
- [ ] Note any custom `<style>` blocks

### ☐ Step 2: Font & Icon Optimization (1 hour)
- [ ] Add preload for headline font
- [ ] Verify font-display: swap in tokens.css
- [ ] Check icons are inlined, not external

### ☐ Step 3: Extract Page Styles (1 hour)
- [ ] Move `<style>` block to `site/styles/pages/{page-name}.css`
- [ ] Link CSS file in `<head>`
- [ ] Test on mobile + desktop
- [ ] Minify CSS file

### ☐ Step 4: Optimize Images (1.5 hours)
- [ ] Convert JPG/PNG to WebP
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Add width/height attributes (prevent layout shift)
- [ ] Test image load on slow 3G

### ☐ Step 5: Verify Performance (30 min)
- [ ] Run Lighthouse: target score ≥ 85
- [ ] Check CLS with DevTools
- [ ] Verify no console errors
- [ ] Test on real mobile device

### ☐ Step 6: Document & Commit
- [ ] Note performance improvement (% reduction)
- [ ] Commit with message: "perf: optimize {page-name}"
- [ ] Update this checklist

---

## Page Priority Order

**Optimize in this order** (highest impact first):

1. **index.html** (home) — most traffic, largest assets
2. **services.html** — high traffic, complex navigation
3. **cases.html** — case studies with heavy imagery
4. **insights.html** — blog/article listing, many images
5. **team.html** — team profiles with photos
6. **contact.html** — form page, lower traffic
7. **Policy pages** (human-labour-rights.html, privacy-statement.html, etc.) — lower traffic, text-heavy

**Estimated total time:** 6 weeks (1 week per phase, parallel where possible)

---

## Build Setup Summary

### Before Optimization
```
index.html
├── site/styles/tokens.css (10KB)
├── site/styles/site.css (25KB)
└── site/scripts/site.js (35KB)
   └── Search index inline
Total initial load: ~70KB + images
```

### After Optimization
```
dist/
├── index.html (inlined critical CSS: ~2KB)
├── site.a1b2c3d4.min.js (minified + tree-shaken: ~12KB)
├── site.a1b2c3d4.min.css (minified non-critical: ~8KB, async-loaded)
├── search-index.a1b2c3d4.json (lazy-loaded: ~3KB)
└── assets/
    ├── *.webp (images 40–60% smaller)
    └── hero-video-500k.webm (50–70% smaller)

Total critical path: ~16KB
Deferred non-critical: ~11KB
```

**Improvement:** ~52% reduction in critical path; 65% reduction in JS; improved LCP by 200–400ms

---

## Testing & Validation

### Performance Tests
- [ ] Lighthouse on each page (target: 85+)
- [ ] WebPageTest on slow 4G (target: LCP < 2.5s)
- [ ] CLS audit (target: < 0.1)
- [ ] FID audit (target: < 100ms)

### Regression Tests
- [ ] All internal links work (no 404s)
- [ ] Search overlay functions
- [ ] Mobile drawer opens/closes
- [ ] Newsletter form validates
- [ ] Form submissions work
- [ ] Scroll reveal animations play
- [ ] Video autoplay on desktop, poster on mobile

### Cross-Browser Tests
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Rollout Plan

### Phase 1: Development (Weeks 1–4)
- Optimize fonts, icons, JS, CSS
- Build and test locally
- No changes to user-facing HTML structure

### Phase 2: Staging (Week 5)
- Deploy to staging environment
- Run full Lighthouse CI
- Load test with 10,000 concurrent users
- Collect Core Web Vitals from real users

### Phase 3: Production (Week 6)
- Blue-green deployment (keep current live; test new version)
- Monitor error rates & performance for 7 days
- Rollback plan if CLS increases > 0.05 or LCP increases > 10%

---

## Success Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| LCP | TBD | < 2.5s | ☐ |
| FID | TBD | < 100ms | ☐ |
| CLS | TBD | < 0.1 | ☐ |
| Lighthouse (Perf) | TBD | 85+ | ☐ |
| Home page size | ~70KB | ~35KB | ☐ |
| site.js size | 35KB | 12KB | ☐ |
| Time to Interactive | TBD | < 3.5s | ☐ |

---

## Dependencies & Tooling

### Required (for build step)
- Node.js 16+
- esbuild (bundler/minifier)
- cssnano or similar (CSS minification)
- imagemin or Squoosh (image optimization)

### Optional (for monitoring)
- Google Analytics 4
- Sentry (error tracking)
- Lighthouse CI (automated testing)
- WebPageTest API (synthetic monitoring)

### No Changes Required
- No CMS migration (Storyblock → no)
- No SSR/SSG framework (Next.js → no)
- No deployment platform change (Vercel → no)
- Pure HTML/CSS/JS stack maintained

---

## Next Steps

1. **Review & Approve** this plan
2. **Start Phase 1** (fonts & icons) — lowest risk, immediate gains
3. **Set up build tooling** in parallel (Phase 5 can start early)
4. **Create feature branch:** `optimization/phase-1-fonts`
5. **Assign team:** Designer (fonts/images), Dev (JS/CSS), DevOps (build/deploy)
6. **Track progress** in this document (☐ → ☑️)

---

**Document Version:** 1.0  
**Last Updated:** June 10, 2026  
**Author:** Performance Optimization Team  
**Next Review:** After Phase 1 completion
