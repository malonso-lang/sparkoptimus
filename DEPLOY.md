# Deploying this site

Static HTML. No server, no database, no build step. Upload the folder and it runs.

---

## Required before you unpublish the Webflow site

### 1. Download the images (546 files)

Every photo still points at Webflow's CDN (`cdn.prod.website-files.com`). If the
Webflow site is unpublished or the subscription lapses, **every image breaks**.

```bash
bash download-assets.sh      # fetches all 546 into site/assets/remote/
node localize-assets.js      # rewrites every reference to the local copy
```

`localize-assets.js` only rewrites files that actually downloaded — if a download
fails, that image keeps its working remote URL rather than becoming a dead local
path. It prints a leftover report at the end.

Mapping lives in `site/assets/remote/MANIFEST.tsv` (remote URL, tab, local filename).

### 2. Point the domain at the folder

`index.html` is the home page. All internal links are relative, so the site works
from a domain root or a subfolder.

---

## Other things to know

### Content is fully migrated — nothing links back to the old site
- 99 cases, 33 insights, 70 blog posts, 16 CEO stories, all with full body text.
- 218 individual pages, each with its own `<title>`, meta description, OG tags and canonical.
- In-body links were rewritten to local pages. Only `mailto:` addresses point outward.
- `sitemap.xml` (241 URLs) and `robots.txt` are generated and ready.

### External dependencies that remain (all fine to keep, but worth a decision)
| What | Where | If it must go offline-proof |
|---|---|---|
| Google Fonts | every page `<head>` | download the woff2 files into `site/fonts/` and swap the `<link>` for `@font-face` |
| unpkg (React, Babel, Lucide) | `index.html` only | the home page uses React for one section; other pages don't. Self-host the three files or convert that section to plain HTML |
| YouTube embeds | CEO story pages | click-to-play posters already load locally; only the player itself is remote |
| Spotify links | CEO stories | outbound by design |

Nothing else calls a third party. There are no forms posting to Webflow, no
Storyblok/HubSpot/MailerLite calls, and no analytics tags.

### No forms, no phone, no email
Every form has been removed, and so has every SparkOptimus phone number and email
address — nothing on the site points at a channel that gets cancelled. The office
address stays. LinkedIn and Instagram links remain (those accounts survive).

The only `<input>` on the site is the search overlay, which runs entirely
client-side against `site/scripts/search-index.js`.

Contact CTAs now route to `contact.html`, which explains the EY-Parthenon move
and links onward to EY-Parthenon.

### Things that intentionally point outward
- "Meet our partners" on the Let's talk page goes to EY-Parthenon by design.
- Careers links point to `careers.html`; the live recruiting site is not embedded.

### URLs differ from the old site
Old: `/cases/schiphol` → new: `case-schiphol.html`.
If you want the old paths to keep working, add redirects at the host, or map
extensionless URLs (`/cases/schiphol` → `case-schiphol.html`) in your web server.
Slugs match Webflow exactly, so the mapping is mechanical.

### Regenerating content later
The datasets are the source of truth:
- `site/scripts/cases-data.js` + `cases-bodies.js`
- `site/scripts/insights-data.js` + `insights-bodies.js`
- `site/scripts/blog-data.js` + `blog-bodies.js`
- `site/scripts/ceo-stories-data.js`
- `site/scripts/permalinks.js` maps every item to its page file

All were generated from the Webflow CSV exports in `uploads/`. Re-exporting and
re-running the ingest is the way to refresh content.
