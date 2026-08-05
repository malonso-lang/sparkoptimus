from pathlib import Path
from typing import List, Tuple
import re
import shutil

root = Path(r"c:\Users\MiguelAlonso\Downloads\NEW WEB")
pages_root = root / "pages"
pages_root.mkdir(exist_ok=True)

mappings = {
    "blog": ["blog", "blog-detail"],
    "cases": ["case", "cases", "cases-print", "case-detail"],
    "insights": ["insight", "insights", "insights-detail"],
    "books": ["book", "books"],
    "benchmarks": ["benchmark"],
    "careers": ["career", "career-events", "vacancy", "vacancies", "job-posting"],
    "about": ["board", "contact", "welcome", "dei-commitment", "environmental-policy", "human-labour-rights", "privacy-statement", "team", "employee-testimonials", "life-at-sparkoptimus", "our-approach", "project-planning"],
    "services": ["service", "services", "sector", "sectors"],
    "ceo-stories": ["ceo-story", "ceo-stories"],
}

# keep root-level pages that should remain at the top level
root_keep = {"index.html", "index-v1-backup.html", "robots.txt", "sitemap.xml", "site.webmanifest"}

for folder, names in mappings.items():
    (pages_root / folder).mkdir(exist_ok=True)

for path in sorted(root.iterdir()):
    if not path.is_file() or path.name in root_keep:
        continue
    if path.suffix.lower() != ".html":
        continue

    name = path.stem
    target_folder = None
    for folder, name_prefixes in mappings.items():
        if any(name == prefix or name.startswith(prefix + "-") or name.startswith(prefix + "_") for prefix in name_prefixes):
            target_folder = folder
            break
    if target_folder is None:
        # leave unclassified files at the root for now
        continue

    dest = pages_root / target_folder / path.name
    if dest.exists():
        # keep a numbered suffix if a clash exists
        suffix = 1
        while True:
            candidate = pages_root / target_folder / f"{path.stem}-{suffix}.html"
            if not candidate.exists():
                dest = candidate
                break
            suffix += 1

    # Move the file
    shutil.move(str(path), str(dest))

    # Insert a base href to keep asset paths working from the new location
    text = dest.read_text(encoding="utf-8")
    if "<base href=\"../../\"" not in text and "<head>" in text:
        text = text.replace("<head>", "<head>\n  <base href=\"../../\">", 1)
        dest.write_text(text, encoding="utf-8")

    # Create a redirect page at the old location
    rel_new = dest.relative_to(root).as_posix()
    redirect_html = f'''<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url={rel_new}">
    <link rel="canonical" href="{rel_new}">
    <title>Redirecting…</title>
  </head>
  <body>
    <p>This page has moved. Redirecting to <a href="{rel_new}">{rel_new}</a>.</p>
  </body>
</html>
'''
    redirect_path = root / path.name
    redirect_path.write_text(redirect_html, encoding="utf-8")

print("Reorganization complete")
