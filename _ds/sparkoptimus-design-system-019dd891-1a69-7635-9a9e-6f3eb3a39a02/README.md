# SparkOptimus Design System

> A design system for **SparkOptimus** — a digital strategy & transformation consultancy headquartered in Amsterdam. They help organisations turn digital, AI, data, and sustainability disruption into business opportunity.

This system contains everything needed to design slides, mocks, prototypes, or production work that looks and feels like SparkOptimus.

---

## Sources used

| Source | Where |
|---|---|
| Logo (raster, full color) | `uploads/HUL8ctFjaZI0.webp` (uploaded by user) |
| Logo mark (vector) | Pulled from live site: `https://cdn.prod.website-files.com/64c8da9b784a8ef67b0e1369/66017a808322d5711aa1ec31_SO%20logo.svg` |
| Logo wordmark (vector) | `https://cdn.prod.website-files.com/64c8da9b784a8ef67b0e1369/66017a808322d5711aa1ec33_logoletters.svg` |
| Service icon set | `cdn.prod.website-files.com/64c8db4525075f4f57f9539a/...SparkOptimus-*.svg` |
| Pillar illustrations | `cdn.prod.website-files.com/64c8da9b784a8ef67b0e1369/65c627*.png/.svg` |
| Sample editorial imagery | Pulled from live insights/cases pages |
| Live website | `https://www.sparkoptimus.com/` |
| Brand fonts (`BG-Spark Fonts (2).zip`) | **Not delivered** — see Caveats below. Substituted with Manrope. |

---

## Index

```
SparkOptimus-Design-System/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest (works in Claude Code too)
├── colors_and_type.css        ← all foundation tokens
├── assets/                    ← logos, service icons, pillar marks, sample imagery
├── preview/                   ← review cards rendered into the Design System tab
├── ui_kits/
│   └── website/               ← marketing-site UI kit (the only product they ship)
│       ├── README.md
│       ├── index.html
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── ServicesGrid.jsx
│       ├── ClientsRow.jsx
│       ├── InsightsRow.jsx
│       ├── Quote.jsx
│       └── Footer.jsx
└── fonts/                     ← (empty — pending delivery of BG-Spark .woff2 files)
```

---

## Company at a glance

- **Name:** SparkOptimus
- **HQ:** Jacob Obrechtplein 1, 1071 KS Amsterdam, NL
- **What they do:** Digital strategy & transformation consultancy. Five service lines:
  1. Digital Strategy & Transformation
  2. Sustainability Strategy & Transformation
  3. AI & Data Strategy & Transformation
  4. Mergers & Acquisitions
  5. Ventures & scale-ups
- **Five-pillar framework:** Customer · Technology · Way of working · Data · Organization
- **Tagline:** *"We make disruption work for you."*
- **Notable clients:** Bol.com, Albert Heijn, Unilever, ING, Heineken, Schneider Electric, IKEA, ABN-AMRO, Henkel, Nestlé, Schiphol, JDE, NS, Auping, Anne Frank Foundation, PVH.
- **One product surface only:** the marketing website (`sparkoptimus.com`). No SaaS app, no portal — content + lead gen.

---

## Content fundamentals

**Voice.** Confident, plain, professional. No jargon-stacking, no startup hype, no corporate hedging. Reads like a senior consultant explaining clearly.

**Person.** Mostly **second person** ("you", "your industry", "your customers") in headlines and pitch copy. Switches to **first-person plural** ("we help organizations…", "our team") when the firm is the subject. Almost never uses "I".

**Casing.**
- Headlines and section titles use **sentence case**, not Title Case. *"We make disruption work for you"* — never *"We Make Disruption Work For You"*.
- Service-line names are the only consistent Title Case exception: *Digital Strategy & Transformation*, *Mergers and Acquisitions*.
- Eyebrows are short noun phrases: *Your challenge*, *Our services*, *Insights*, *Our team*. Often lowercase or sentence case.

**Sentence shape.** Short declarative leads, longer explanatory follow-up. Often paired:
> *"Digital is not about digital for digital's sake. It's about using technology and data to serve customers and consumers better, faster and more sustainable."*

> *"We help organizations unlock the power of disruption – translating new technologies into opportunities for your business."*

**Punctuation.** En-dash ` – ` (with spaces) for asides. Oxford comma not used. Numbers spelled out under ten in body, numerals in stats. American spelling appears mixed with British ("organizations" / "organisation"); when in doubt use **American** ("organize", "color", "behavior").

**Vocabulary signals (use these).** disruption · transformation · pragmatic · grounded · adapt · unlock · scalable · concrete · no-nonsense · drive · accelerate · future-fit · getting-it-done · spark.

**Vocabulary anti-signals (avoid).** synergy · leverage (as a verb) · revolutionary · seamless · world-class · cutting-edge · empower (cliché). Avoid stacked adjectives.

**Emoji.** Never. Not in copy, not in UI, not in slides. Brand voice is professional.

**Quote / testimonial style.** Real names, real titles, real companies. Quotes are full paragraphs (~30–80 words) not snappy 5-word pull-blurbs. Always credited with name + title + company on three lines.

**Example sentences (real, from site).**
- *"Digital is not about digital for digital's sake."*
- *"When digital disruption hits, new business models grow exponentially, customers switch rapidly, and investment reroutes at scale."*
- *"Spark your knowledge on a monthly basis!"*

---

## Visual foundations

### Colors

- **Primary spark cyan** `#00D9F4` — used for the logo dot, accents, hover, micro-interactions, and small fills. Not used as a flat background for large hero areas; it's a punctuation color.
- **Ink navy** `#0E172A → #060B1A` — primary text, dark sections, charts. Real near-black is reserved; default ink is the navy `#0E172A`.
- **Warm paper neutrals** `#FAFAFA → #E7E7EA` — page backgrounds, cards, dividers. Slight warmth, never cool gray.
- **Editorial photography colors** — Many insights cards use full-bleed photography with *natural / outdoor* tones (greens, soft daylight). No duotones, no heavy color grading, no grain.

The system stays **mostly monochrome** — ink on paper, with cyan as a single accent. Multi-color illustrations are limited to the 5 service icons.

### Type
- Display + body: **Manrope** (substitute for BG-Spark, see Caveats). Geometric, slightly rounded, modern; matches the wordmark's character.
- Editorial pull-quotes: **Lora** italic — used sparingly for testimonials.
- Mono: **JetBrains Mono** — for any code/data UI.
- **Sentence-case** headlines, generous line-height, balanced text-wrap. Hero size scales with `clamp(2.75rem, 1.6rem + 4vw, 5rem)`.

### Spacing & rhythm
4px base. Sections breathe — vertical padding between sections is large (96–160px on desktop). Inside cards, 24–48px is typical.

### Backgrounds
- **Mostly white / off-white.** Color is delivered through photography and through the cyan dot.
- **Full-bleed editorial photography** for insights cards (cropped square or 4:3).
- **Dark navy sections** appear occasionally for contrast (footer, certain testimonial blocks).
- **No gradients.** No noise. No repeating patterns. No hand-drawn illustrations. No mesh or aurora backgrounds.
- Service icons use a flat geometric illustration style — multi-color, slight rounding, no outlines.

### Borders
- Hairlines: `rgba(15, 23, 42, 0.08)` for soft separation.
- Stronger at `0.14` for inputs and cards on hover.
- Borders are used **sparingly** — most separation comes from spacing, not lines.
- **No left-accent-border cards.** Avoided.

### Corners
**Generous and consistent rounding is a brand signal.** Cards use 20–28px. Buttons use pill (`999px`). Image masks use 16–20px. Inputs are 14px or pill. Never sharp 0px corners on interactive elements.

### Shadows
Soft, low-contrast, ambient-occlusion style. Never harsh drops. The "lifted card" feel comes from `0 18px 48px rgba(15,23,42,0.10)`. Cyan focus glow `0 0 0 6px rgba(0,217,244,0.18)` on focused inputs / primary buttons.

### Motion
- **Ease:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; standard ease-in-out otherwise.
- **Durations:** 140ms for hover, 240ms default, 420ms for layout transitions.
- **Style:** Calm fades and small Y-translates (8–16px). No bounces, no spring overshoot, no sequence-staggered fireworks. The hero plays a muted product video on loop.
- **Hover states:** Buttons tint slightly darker; cards lift (translateY -2px + shadow). Links transition to cyan-700.
- **Press states:** No scale shrink. Just a flat, slightly darker fill for ~100ms.

### Transparency & blur
Used very rarely. Only place we use blur is the sticky header on dark photography — `backdrop-filter: saturate(1.2) blur(8px)` over `rgba(255,255,255,0.7)`. No frosted-glass cards elsewhere.

### Imagery vibe
Real photography, editorial, daylight, landscape orientation. Subjects are people, places of work, nature (for sustainability), or abstract architectural details. No stock-photo handshakes. No diverse-team-pointing-at-laptop tropes. Imagery is shown at full saturation; warm-neutral leaning.

### Cards
- White background, 20–28px rounding, subtle shadow `--shadow-md`, no visible border.
- 24–32px internal padding.
- Hover: rise 2px + shadow grows to `--shadow-lg`.
- Image-on-top variant: image fills 100% width, mask radius matches the card.

### Layout rules
- Containers: 1080px (default content), 1280px (wide), 1440px (full).
- 12-col grid with 24px gutters on desktop; collapses to single-col under 768px.
- Hero is left-aligned, never centered. Body copy is also left-aligned.

---

## Iconography

SparkOptimus does **not** use a system icon font (no Lucide, no Heroicons in the live site). Iconography splits into two registers:

1. **Service & pillar marks** — flat, multi-color, illustrative SVGs. Roughly 80–96px square. Each service line has its own custom illustration. These are **not interchangeable with UI icons** — they are illustrations. Stored in `assets/`:
   - `icon-digital-strategy.svg`, `icon-sustainability.svg`, `icon-ai-data.svg`, `icon-mergers.svg`, `icon-ventures.svg`
   - `pillar-tech.png`, `pillar-way-of-working.png`, `pillar-customer.svg`, `pillar-data.png`, `pillar-organisation.png`

2. **Inline UI icons** — there are only a handful (chevron, arrow, hamburger, social glyphs). They're 1.5px-stroke thin-line, no fill. For our prototypes we substitute **Lucide** at default settings (1.5px stroke) which matches their feel cleanly.

   ```html
   <script src="https://unpkg.com/lucide@latest"></script>
   ```

**Emoji:** never used.
**Unicode glyphs:** never used as UI icons (no `→` arrows in nav etc).
**PNG icons:** the pillar set (`tech`, `data`, `organisation`, `way-of-working`) is shipped as flat PNG illustrations on the live site; we copied them as-is.
**Logo lockups:** mark + wordmark or mark alone. Never mark on a colored background other than white or near-white.

---

## Caveats & open questions

> **Action required from the user.**

1. **Fonts.** Brand typeface is **BG Spark** (Regular / Bold / Title cuts, plus italics) — installed in `/fonts`. The "Title" cut maps to weight 800 (`var(--font-display)`); Bold maps to 700; Regular to 400. The logo wordmark itself appears to use the lighter Regular weight at large sizes.
2. **Color palette confirmation.** Cyan `#00D9F4` was sampled from the logo. The full neutral / accent extension is **my proposal** based on what I saw on the live site; SparkOptimus may have an internal brand book with specific brand neutrals. Please share if so.
3. **No internal codebase or Figma.** The website is a **Webflow** build, so there's no React component source to mine. The UI kit is a high-fidelity recreation built from the live DOM. If you have an internal Figma library, sharing it would let me make the kit pixel-exact.
4. **Sustainability service icon** appears to be a placeholder (`Untitled design.svg`) on the live CDN. Imported as-is.
