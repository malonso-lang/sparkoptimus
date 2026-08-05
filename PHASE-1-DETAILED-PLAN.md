# Phase 1: Font & Icon Optimization — Detailed Implementation Plan

**Duration:** 1–2 weeks  
**Team:** 1 developer (frontend)  
**Risk Level:** Low  
**Expected Gain:** 80–120ms LCP improvement per page  
**Breaking Changes:** None

---

## Overview

Phase 1 has two objectives:
1. **Font Loading Optimization:** Convert OTF → WOFF2, add preload, verify font-display
2. **Icon System Refactor:** Extract icon SVGs to modular file, minify

These are independent tasks and can be done in parallel.

---

## Part A: Font Optimization

### A.1 — Audit Current Font Setup

**Time:** 15 min  
**What:** Understand how fonts are currently loaded

#### Action 1.1.1: Review font declarations
Open `site/styles/tokens.css` and note:
```css
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Current state:**
- ✅ `font-display: swap` is set (good — prevents FOUT)
- ❌ Format is OTF (heavy, no preload optimization)
- ❌ No preload hints on pages
- ✅ Path is relative (`../fonts/`)

#### Action 1.1.2: List all font files
In terminal:
```bash
ls -lh site/fonts/
```

Expected output:
```
BG-Spark-Regular.otf       45KB
BG-Spark-RegularItalic.otf 45KB
BG-Spark-Bold.otf          45KB
BG-Spark-BoldItalic.otf    45KB
BG-Spark-Title.otf         52KB  ← Display font (largest, used in heroes)
BG-Spark-TitleItalic.otf   52KB
```

**Total:** ~284KB of fonts
**Target:** ~85KB (70% reduction via WOFF2)

#### Action 1.1.3: Check page load waterfall
In Chrome DevTools:
1. Open DevTools > Network tab
2. Load `index.html`
3. Filter by `fonts/`
4. Note sizes and timing

**You should see:**
- 6 font requests (one per @font-face)
- Each ~45–52KB
- Loading after CSS (not blocking render if swap is set)

---

### A.2 — Convert OTF to WOFF2

**Time:** 45 min  
**Tool Options:**
- Online: https://convertio.co/otf-woff2/ (easiest, no setup)
- CLI: `fonttools` (more control, batch-convertible)
- GUI: FontForge (overkill, but works)

#### Option A: Online Conversion (Recommended for Phase 1)

**Action 1.2.1: Convert each font file**

1. Go to https://convertio.co/otf-woff2/
2. Upload `BG-Spark-Regular.otf`
3. Select output format: WOFF2
4. Download → save to `site/fonts/BG-Spark-Regular.woff2`
5. **Repeat for all 6 files:**
   - BG-Spark-Regular.otf → BG-Spark-Regular.woff2
   - BG-Spark-RegularItalic.otf → BG-Spark-RegularItalic.woff2
   - BG-Spark-Bold.otf → BG-Spark-Bold.woff2
   - BG-Spark-BoldItalic.otf → BG-Spark-BoldItalic.woff2
   - BG-Spark-Title.otf → BG-Spark-Title.woff2
   - BG-Spark-TitleItalic.otf → BG-Spark-TitleItalic.woff2

**Verification:**
```bash
ls -lh site/fonts/ | grep woff2
```

Expected sizes:
```
BG-Spark-Regular.woff2       13KB  (was 45KB)
BG-Spark-RegularItalic.woff2 13KB
BG-Spark-Bold.woff2          14KB
BG-Spark-BoldItalic.woff2    14KB
BG-Spark-Title.woff2         16KB  (was 52KB)
BG-Spark-TitleItalic.woff2   16KB
```

**Total after WOFF2:** ~86KB (down from ~284KB) ✅

---

#### Option B: CLI Conversion (If You Have fonttools)

Skip this if you did Option A.

```bash
# Install fonttools
pip install fonttools brotli

# Convert all OTF files to WOFF2
for file in site/fonts/*.otf; do
  fonttools ttLib.woff2 convert "$file"
done
```

This auto-creates `.woff2` files with same base name.

---

### A.3 — Update @font-face Declarations

**Time:** 20 min  
**File:** `site/styles/tokens.css`

#### Action 1.3.1: Replace OTF with WOFF2 in tokens.css

Find and replace each @font-face block:

**Before:**
```css
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**After:**
```css
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Key changes:**
- `url("../fonts/BG-Spark-Regular.otf")` → `url("../fonts/BG-Spark-Regular.woff2")`
- `format("opentype")` → `format("woff2")`

**Do this for all 6 @font-face blocks:**

```css
/* 1. Regular */
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* 2. Regular Italic */
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-RegularItalic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* 3. Bold */
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* 4. Bold Italic */
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-BoldItalic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* 5. Title (Display) */
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Title.woff2") format("woff2");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

/* 6. Title Italic */
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-TitleItalic.woff2") format("woff2");
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}

/* Display alias — also exposed under its native cut name */
@font-face {
  font-family: "BG Spark Title";
  src: url("../fonts/BG-Spark-Title.woff2") format("woff2");
  font-weight: 400 900;
  font-style: normal;
  font-display: swap;
}
```

**Verification:**
- Open DevTools > Network tab
- Reload page
- Filter by `fonts/`
- All fonts should now be `.woff2` format
- Sizes should be ~70% smaller

---

### A.4 — Add Preload Hints

**Time:** 30 min  
**Files:** Every page (index.html, services.html, team.html, etc.)

#### Action 1.4.1: Add preload for headline font

The **BG-Spark-Title.woff2** is used in all heroes and section headers. Preload it to ensure fast rendering.

Add this to the `<head>` of **every page**, after `<meta>` tags but before stylesheets:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="...">
  <title>...</title>

  <!-- Preload headline font (used in all heroes + section titles) -->
  <link rel="preload" href="site/fonts/BG-Spark-Title.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Design system foundations -->
  <link rel="stylesheet" href="site/styles/tokens.css">
  <link rel="stylesheet" href="site/styles/site.css">
  
  <!-- Page-specific styles -->
  <style>
    /* ... */
  </style>
</head>
```

**Why preload?**
- Tells browser to fetch BG-Spark-Title immediately (don't wait for CSS to parse)
- Font is used in hero (above the fold) → must be fast
- `crossorigin` attribute is required for @font-face

**Verification:**
- DevTools Network tab: BG-Spark-Title.woff2 should have `Highest` priority
- Should fetch before other fonts

#### Action 1.4.2: Add preconnect for Google Fonts (Lora, JetBrains Mono)

These are loaded from googleapis.com. Add preconnect to hint the domain:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- Preload headline font -->
  <link rel="preload" href="site/fonts/BG-Spark-Title.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preconnect to Google Fonts CDN (for Lora, JetBrains Mono) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="site/styles/tokens.css">
  <link rel="stylesheet" href="site/styles/site.css">
</head>
```

**Why preconnect?**
- Establishes DNS lookup + TCP connection ahead of time
- Lora and JetBrains Mono are loaded via googleapis (slower than local)
- Saves ~100ms of latency

---

### A.5 — Test Font Loading

**Time:** 30 min  
**Tools:** Chrome DevTools, Network tab, Lighthouse

#### Action 1.5.1: Test on local machine

1. **Clear cache:**
   ```bash
   # Chrome: Cmd+Shift+Delete (Mac) or Ctrl+Shift+Delete (Windows)
   ```

2. **Reload page (Cmd+R or Ctrl+R)**

3. **Open DevTools > Network tab**

4. **Filter by `fonts/`**

   You should see:
   ```
   BG-Spark-Title.woff2     16KB  [red/orange] Preload — fastest
   BG-Spark-Regular.woff2   13KB  [blue] — loaded from CSS
   BG-Spark-Bold.woff2      14KB  [blue]
   ... (others)
   ```

5. **Check timing:**
   - Title font should load in **0–50ms** (preload makes this fast)
   - Regular font in **100–200ms**

#### Action 1.5.2: Test on slow 3G connection

1. **DevTools > Network tab > Throttling**
2. **Select "Slow 3G"**
3. **Reload page**
4. **Observe:**
   - Page should render **without Flash of Unstyled Text (FOUT)**
   - This is because of `font-display: swap` in @font-face
   - System font shows first, then swaps to BG Spark when ready

**Expected behavior:**
- Text appears immediately in system font (not blank)
- After 100–300ms, text swaps to BG Spark
- No flicker (swap is smooth)

#### Action 1.5.3: Run Lighthouse on page

1. **DevTools > Lighthouse tab**
2. **Select "Performance"**
3. **Run audit**
4. **Check "Largest Contentful Paint (LCP)"**
   - Should be < 2.5s on desktop
   - If you see improvement, note the % gain

---

### A.6 — Repeat for All Pages

**Time:** 5 min per page

#### Action 1.6.1: Add preload + preconnect to every HTML file

Find all `.html` files:
```bash
find . -name "*.html" -type f | grep -v node_modules
```

Expected pages:
- index.html
- services.html
- sectors.html
- cases.html
- insights.html
- team.html
- board.html
- contact.html
- vacancies.html
- welcome.html
- life-at-sparkoptimus.html
- career-events.html
- dei-commitment.html
- privacy-statement.html
- environmental-policy.html
- human-labour-rights.html
- ... (any others)

For **each file:**
1. Open in editor
2. Find `<head>` section
3. Add preload + preconnect after `<title>` (before stylesheets)

**Template to copy/paste:**
```html
  <!-- Preload headline font (used in all heroes + section titles) -->
  <link rel="preload" href="site/fonts/BG-Spark-Title.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preconnect to Google Fonts CDN -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**Automation (optional):**
If you have many pages, use a find/replace in your editor:

Find:
```html
<title>
```

Replace with:
```html
  <!-- Preload headline font -->
  <link rel="preload" href="site/fonts/BG-Spark-Title.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preconnect to Google Fonts CDN -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<title>
```

---

## Part B: Icon System Refactor

### B.1 — Audit Current Icon Setup

**Time:** 20 min

#### Action B.1.1: Review icons in site.js

Open `site/scripts/site.js` and find the ICON object:

```javascript
var ICON = {
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  arrow: '...',
  search: '...',
  menu: '...',
  close: '...',
  linkedin: '...',
  instagram: '...',
  mail: '...',
  newsletter: '...',
  cart: '...',
  bank: '...',
  heart: '...',
  bolt: '...',
  truck: '...',
  building: '...',
  factory: '...',
  leaf: '...',
  pe: '...',
  rocket: '...',
  file: '...',
  users: '...',
  calendar: '...',
  briefcase: '...'
};
```

**Current issues:**
- ❌ 22 icons defined as inline strings (takes up space)
- ❌ Icons are mixed with other logic in site.js
- ✅ Icons are inlined (good — no HTTP requests)
- ❌ SVG code has whitespace and redundancy

#### Action B.1.2: Count lines and size

In terminal:
```bash
wc -l site/scripts/site.js
# Expected: ~446 lines

# Extract just the ICON object
grep -n "var ICON = {" site/scripts/site.js
grep -n "var SPARK = " site/scripts/site.js
```

The ICON object takes up roughly **lines 60–90** (~30 lines of icon defs).

---

### B.2 — Extract Icons to Separate File

**Time:** 30 min

#### Action B.2.1: Create icons.js

Create new file: `site/scripts/icons.js`

```javascript
/* =========================================================================
   SparkOptimus — icon definitions
   Inlined SVGs used throughout site chrome (nav, footer, search).
   ========================================================================= */

const ICONS = {
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 17V9.74H6.06V17zM7.2 8.48a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zM18 17v-3.98c0-2.13-1.14-3.12-2.66-3.12a2.3 2.3 0 0 0-2.08 1.15h-.03V9.74H11v7.26h2.28v-3.6c0-.95.18-1.86 1.35-1.86s1.17 1.08 1.17 1.92V17z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  newsletter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 13.5 21 3"/><path d="M21 3 14.5 21a.55.55 0 0 1-1 0L10.5 13.5 3 10.5a.55.55 0 0 1 0-1z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7"/><path d="M4 10v10"/><path d="M20 10v10"/><path d="M8 14v4"/><path d="M12 14v4"/><path d="M16 14v4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 13h3l2-5 3 9 2-6 1.5 2h5"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6H2v12"/><path d="M14 9h4l4 4v5h-8"/><circle cx="6.5" cy="18" r="1.5"/><circle cx="17.5" cy="18" r="1.5"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"/></svg>',
  factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V9l6 4V9l6 4V6l4-2v16"/><path d="M8 20v-4M14 20v-4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-9 0 8-4 12-9 12z"/><path d="M4 20c2-4 5-7 9-9"/></svg>',
  pe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-8"/><path d="M17 4h4v4"/><path d="M3 21h18"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 8 20 8"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12.01" y2="12"/></svg>'
};

// Export for use in site.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ICONS;
} else if (typeof window !== 'undefined') {
  window.SO = window.SO || {};
  window.SO.ICONS = ICONS;
}
```

**Save as:** `site/scripts/icons.js`

---

#### Action B.2.2: Update site.js to use icons.js

Open `site/scripts/site.js` and:

1. **Remove the old ICON object** (lines ~60–90)

   Find and delete:
   ```javascript
   var ICON = {
     chevron: '...',
     arrow: '...',
     // ... all 22 icons
   };
   ```

2. **Add require/reference at top of site.js**

   Add this after the opening `(function() {`:
   ```javascript
   (function () {
     "use strict";

     /* ---- detect if we're in a subdirectory and adjust asset paths ---- */
     var ASSET_PREFIX = document.documentElement.getAttribute('data-subdir') ? '../' : '';

     window.SO = window.SO || {};
     window.SO.assetPrefix = ASSET_PREFIX;
     
     // Import icons from icons.js
     var ICON = (typeof window !== 'undefined' && window.SO && window.SO.ICONS) 
       ? window.SO.ICONS 
       : {}; // fallback if not loaded
   ```

3. **Verify the ico() helper still works**

   Find the helper function:
   ```javascript
   function ico(name) { return ICON[name] || ""; }
   ```

   This should still work as-is (no changes needed).

---

### B.3 — Include icons.js in HTML Pages

**Time:** 5 min per page

#### Action B.3.1: Add script tag before site.js

In **every HTML page**, find where site.js is loaded:

```html
<script src="site/scripts/site.js"></script>
```

Add icons.js **before** site.js:

```html
<script src="site/scripts/icons.js"></script>
<script src="site/scripts/site.js"></script>
```

**Why before?**
- icons.js defines ICONS on window.SO
- site.js reads from window.SO.ICONS
- Order matters

---

### B.4 — Minify SVG Strings (Optional but Recommended)

**Time:** 30 min  
**Benefit:** Reduce icons.js size by ~15–20%

#### Action B.4.1: Install SVGO

```bash
npm install --save-dev svgo
# or use online tool: https://jakearchibald.github.io/svgomg/
```

#### Action B.4.2: Minify each SVG

For each icon in icons.js, copy the SVG string and paste into https://jakearchibald.github.io/svgomg/:

**Before:**
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m6 9 6 6 6-6"/>
</svg>
```

**After (minified):**
```html
<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
```

**Changes:**
- ❌ Removed `fill="none"` (default is none)
- ❌ Removed whitespace/newlines
- ✅ Keep `viewBox`, `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`

Update each icon string in icons.js with the minified version.

**Before/After:**
```javascript
// Before
chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',

// After (minified)
chevron: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
```

---

### B.5 — Test Icons

**Time:** 20 min

#### Action B.5.1: Check navigation renders

1. Open any page in browser
2. Look at **top navigation pill** (nav should have icons)
   - Search icon ✅
   - Let's talk button (has arrow) ✅
3. Open **DevTools > Console**
4. Check for errors:
   ```javascript
   console.log(window.SO.ICONS);
   // Should print object with 22 icon entries
   ```

#### Action B.5.2: Check footer renders

1. Scroll to **bottom of page**
2. Footer should show:
   - Logo mark ✅
   - Social icons (LinkedIn, Instagram, Mail, Newsletter) ✅
   - No broken images

#### Action B.5.3: Check search overlay

1. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows)
2. Search modal should appear
3. Icon in search bar should render ✅
4. Search results should show icons ✅

#### Action B.5.4: Check mobile drawer

1. Open page on mobile or DevTools mobile view
2. Click hamburger menu (☰)
3. Drawer should slide in ✅
4. Close (✕) icon should render ✅

---

### B.6 — Verify File Sizes

**Time:** 10 min

#### Action B.6.1: Compare before/after

```bash
# Old site.js with icons
wc -c site/scripts/site.js    # Should show original size

# New files
wc -c site/scripts/site.js    # Should be smaller
wc -c site/scripts/icons.js   # New file size
```

**Expected results:**
- `site.js`: 35KB → 28KB (removed ~7KB of icon defs)
- `icons.js`: ~5KB (new file)
- **Total unchanged** (but now modular)

**After minification (if you did B.4):**
- `icons.js`: 5KB → 4KB (icons minified)

---

## Final Checklist: Phase 1 Complete

Use this to track progress:

### Font Optimization
- [ ] **A.1:** Audited current font setup, noted OTF sizes (~284KB)
- [ ] **A.2:** Converted all 6 OTF files to WOFF2 (~86KB)
- [ ] **A.3:** Updated @font-face declarations in tokens.css
- [ ] **A.4:** Added preload + preconnect to all HTML pages
- [ ] **A.5:** Tested fonts on slow 3G, verified no FOUT
- [ ] **A.6:** Verified Lighthouse score improved

### Icon Optimization
- [ ] **B.1:** Audited icon setup in site.js
- [ ] **B.2:** Created icons.js with all 22 icon definitions
- [ ] **B.2:** Updated site.js to reference icons.js
- [ ] **B.3:** Added `<script src="icons.js"></script>` to all pages
- [ ] **B.4:** (Optional) Minified SVG strings in icons.js
- [ ] **B.5:** Tested nav, footer, search, drawer all render correctly
- [ ] **B.6:** Verified file sizes reduced

### Final Validation
- [ ] **No console errors** on any page
- [ ] **All internal links work**
- [ ] **Search functionality** works (Cmd+K / Ctrl+K)
- [ ] **Mobile drawer** opens/closes
- [ ] **Newsletter form** submits
- [ ] **Lighthouse score** improved by 80–120ms LCP

### Commit
- [ ] **Git commit message:** `perf: phase 1 — optimize fonts & icons`
- [ ] **Push to branch:** `optimization/phase-1`

---

## Performance Gains: Before & After

### Before Phase 1
```
Fonts:
  BG-Spark-Regular.otf      45KB
  BG-Spark-Bold.otf         45KB
  BG-Spark-Title.otf        52KB
  BG-Spark-TitleItalic.otf  52KB
  ... (6 total)             ~284KB

site.js (with icon defs)     35KB
Total critical fonts:        ~70KB
```

### After Phase 1
```
Fonts:
  BG-Spark-Regular.woff2    13KB
  BG-Spark-Bold.woff2       14KB
  BG-Spark-Title.woff2      16KB
  ... (6 total)             ~86KB ✅ 70% smaller

site.js (icons removed)      28KB ✅
icons.js (modular)           4KB (minified)

Total critical fonts:        ~30KB ✅ 57% reduction

Expected LCP gain:           80–120ms faster ✅
```

---

## Troubleshooting

### Issue: Fonts not loading (404 errors)

**Symptom:**
```
GET /site/fonts/BG-Spark-Regular.woff2 404 Not Found
```

**Fix:**
1. Verify WOFF2 files exist: `ls site/fonts/*.woff2`
2. Check file paths in tokens.css match filenames exactly
3. Clear browser cache: DevTools > Settings > Clear site data

---

### Issue: FOUT (Flash of Unstyled Text) still visible

**Symptom:**
- Text appears in system font, then jumps to BG Spark

**This is normal with `font-display: swap`** — it's a tradeoff:
- ✅ Text shows immediately (better UX)
- ❌ Slight swap visible if font loads after paint

**To fix (alternative):**
Change `font-display: swap` to `font-display: block` in tokens.css:
```css
@font-face {
  font-family: "BG Spark";
  src: url("../fonts/BG-Spark-Title.woff2") format("woff2");
  font-display: block;  ← Changed from swap
}
```

**Tradeoff:**
- ✅ No visible swap
- ❌ Text hidden until font loads (worse LCP)

**Recommendation:** Keep `swap` (it's faster).

---

### Issue: Icons not rendering in nav

**Symptom:**
- Search icon missing, arrow icon missing

**Check:**
1. DevTools > Console for errors
2. Verify icons.js loads:
   ```javascript
   console.log(window.SO.ICONS); // Should print 22 icons
   ```
3. Check script order: icons.js must load **before** site.js
   ```html
   <script src="site/scripts/icons.js"></script> ← First
   <script src="site/scripts/site.js"></script>   ← Second
   ```

---

### Issue: Preload isn't working

**Symptom:**
- DevTools Network shows BG-Spark-Title.woff2 not marked as `Highest` priority

**Check:**
1. Verify preload tag exists:
   ```html
   <link rel="preload" href="site/fonts/BG-Spark-Title.woff2" as="font" type="font/woff2" crossorigin>
   ```
2. Spelling: must be exact (`BG-Spark-Title.woff2`)
3. Path: must match actual file location

---

## Time Estimate Summary

| Task | Time | Status |
|------|------|--------|
| A.1 Font Audit | 15 min | ☐ |
| A.2 Convert OTF→WOFF2 | 45 min | ☐ |
| A.3 Update @font-face | 20 min | ☐ |
| A.4 Add Preload/Preconnect | 30 min | ☐ |
| A.5 Test Fonts | 30 min | ☐ |
| A.6 Repeat for All Pages | 5 min × N pages | ☐ |
| **Font subtotal** | **~3 hours** | |
| | | |
| B.1 Icon Audit | 20 min | ☐ |
| B.2 Extract to icons.js | 30 min | ☐ |
| B.3 Add Script Tags | 5 min × N pages | ☐ |
| B.4 Minify SVGs | 30 min | ☐ |
| B.5 Test Icons | 20 min | ☐ |
| B.6 Verify Sizes | 10 min | ☐ |
| **Icon subtotal** | **~2 hours** | |
| | | |
| **Phase 1 Total** | **~5 hours** | |

---

## Next Steps After Phase 1

Once Phase 1 is complete and tested:

1. **Commit & push** to `optimization/phase-1` branch
2. **Open pull request** with Lighthouse screenshots
3. **Document gains** (LCP improvement, file sizes)
4. **Start Phase 2** (JavaScript Architecture) or **Phase 5** (Build Setup)

---

**Document Version:** 1.0  
**Last Updated:** June 10, 2026
