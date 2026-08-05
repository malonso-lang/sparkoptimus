# SparkOptimus — Code Refactoring Plan

**Date:** June 2026  
**Rule:** Zero UI/UX changes. Only code structure changes.  
**Future stack:** Astro + Vercel (each page's `<style>` maps to a future `.astro` component's scoped `<style>`)

---

## Guiding principles

1. **Keep the CSS split as-is** — `tokens.css` (foundations) → `site.css` (shared components) → page inline `<style>` (page-specific). This maps cleanly to Astro's global stylesheet + scoped component styles.
2. **Move to `site.css` only** CSS that is identical across 2+ pages. Never invent new tokens or change values.
3. **Keep inline** all page-specific layout, hero overrides, and component variants that appear on exactly one page.
4. **No inline `style=""` migration** — structural inline styles on HTML elements are left in place unless they are clearly wrong (e.g., `!important` fights).
5. **Fix bugs found** — CSS syntax errors, unreachable rules, genuine specificity fights — without changing visuals.
6. **Astro compatibility** — inline `<style>` blocks will become `<style>` in `.astro` files (scoped). Global utilities in `site.css` will be a global import. No changes needed to support this.

---

## What moves to `site.css`

These components appeared **identically** on 2+ pages:

| Component | Classes | Source pages |
|---|---|---|
| Section head | `.sec-head`, `.sec-head--center` | `sector-detail`, `service-detail` |
| Page hero action row | `.page-hero__actions`, `.page-hero__tags` | `sector-detail`, `service-detail` |
| Credentials marquee | `.creds`, `.creds__track`, `.creds__logo`, `@keyframes creds-scroll` | `sector-detail`, `service-detail` |
| Article grid | `.article-grid`, `.article__*` | `sector-detail`, `service-detail` |
| Expert contact grid | `.experts-grid`, `.expert__*` | `sector-detail`, `service-detail` |
| Quote reel (dark) | `.quotes`, `.quotes__*`, `.quote-card__*` | `sector-detail`, `service-detail` |
| Outline cyan button | `.btn--outline-cyan` | `sectors`, `insights` |

---

## What stays inline per page

| Page | Inline CSS kept |
|---|---|
| `index.html` | Homepage layout (.wrap, .section--dark/light/paper, .sec-title, .link-arrow, .client-grid, mobile overrides) |
| `our-approach.html` | `.numblock` spacing overrides, `.ap-blocks-cta` |
| `services.html` | Accordion mobile/desktop rules, `.svc-row__name` link style |
| `cases.html` | `.page-hero__bg-img` (cases-specific), `::before` z-index fix, `.cases-featured`, `.ins-filter` (select variant), `.so-case.is-featured` |
| `insights.html` | All insights-specific components: `.ins-title-block`, `.ins-feat`, `.ins-filter` (dropdown variant), `.ins-dd`, `.ins-grid`, `.ins-card`, `.ins-quotes`, `.ins-statbreak` |
| `contact.html` | Entire contact layout: `.contact-hero`, `.contact-card`, `.contact-form-*` |
| `team.html` | `.pcard` portrait overrides, `.team-filter`, tweaks panel data-attr selectors |
| `sectors.html` | `.sec-row`, `.sec-row__*`, `.sec-row__logos` |
| `sector-detail.html` | `.sec-intro`, `.svc-acc`, `.acc`, `.verticals`, `.vert`, `.secstats`, `.quote-card__logostrip` |
| `service-detail.html` | `.svc-intro`, `.svc-intro__*` |
| `careers.html` | `.car-hero`, `.work-card`, `.proc`, `.vac-row` |
| `vacancies.html` | `.vacancies-hero`, `.vacancy-card`, `.recruiter-contact` |
| `life-at-sparkoptimus.html` | `.las-hero`, `.photo-grid`, `.photo-item`, `.lb-backdrop` |
| `ceo-stories.html` | `.ep-feat`, `.ep-card`, `.platforms` |
| `events.html` | `.events-hero`, `.events-grid`, `.event-card` |
| `board.html` | `.pcard` ink variant overrides |

---

## Bugs fixed

| File | Bug | Fix |
|---|---|---|
| `life-at-sparkoptimus.html` | `.las-hero h1` selector missing — properties were orphaned (not inside any rule). Visually harmless because `tokens.css` provides h1 defaults, but invalid CSS. | Restored missing `.las-hero h1 {` selector |
| `cases.html` | `.page-hero`, `.page-hero--tall`, `.page-hero h1`, `.page-hero h1 em`, `.page-hero__lead` duplicated verbatim from `site.css` | Removed duplicates |
| `vacancies.html` | `.btn-primary` and `.btn-secondary` (single-dash) defined in `<style>` but never used in HTML (page uses `.btn--primary`, `.btn--ghost`) | Removed unused CSS rules |

---

## Astro migration notes (future)

- Each HTML page → `.astro` page component
- `<style>` block → `<style>` inside `.astro` (scoped by default — add `is:global` for any global selectors)
- `site.css` + `tokens.css` → imported in `Layout.astro` as global styles
- `site/scripts/site.js` → partial Astro hydration (`client:load` island for nav/footer React)
- `site/scripts/search-index.js` → Astro content collection or API route
- `<image-slot>` web component → Astro `<Image>` component with Vercel image optimization
- `.jsx` files (hero, sections, app) → proper Astro/React components

---

## File map (after refactoring)

```
site/styles/
  tokens.css          ← design tokens (unchanged)
  site.css            ← global components (+ 7 shared component groups added)

Per-page <style> blocks cleaned:
  sector-detail.html  ← removed 6 shared component groups (~180 lines saved)
  service-detail.html ← removed 6 shared component groups (~170 lines saved)
  sectors.html        ← removed .btn--outline-cyan (8 lines saved)
  insights.html       ← removed .btn--outline-cyan (8 lines saved)
  cases.html          ← removed page-hero duplicates (~8 lines saved)
  life-at-sparkoptimus.html ← fixed h1 CSS syntax error
  vacancies.html      ← removed unused .btn-primary/.btn-secondary rules
```
