from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent

moves = [
    (root / 'pages' / 'blog', root / 'blog'),
    (root / 'pages' / 'insights', root / 'insights'),
    (root / 'pages' / 'cases', root / 'cases'),
    (root / 'pages' / 'ceo-stories', root / 'ceo-stories'),
]

for src, dst in moves:
    if src.exists() and not dst.exists():
        dst.parent.mkdir(parents=True, exist_ok=True)
        src.rename(dst)
        print(f'Moved {src} -> {dst}')
    elif dst.exists():
        print(f'Skipped move because destination exists: {dst}')
    else:
        print(f'Skipped move because source missing: {src}')

# Update references in all HTML files across the site
replacements = [
    (r'pages/blog/', 'blog/'),
    (r'pages/insights/', 'insights/'),
    (r'pages/cases/', 'cases/'),
    (r'pages/ceo-stories/', 'ceo-stories/'),
]
html_files = list(root.rglob('*.html'))
for path in html_files:
    text = path.read_text(encoding='utf-8', errors='ignore')
    new_text = text
    for old, new in replacements:
        new_text = new_text.replace(old, new)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        print(f'Updated links in {path.relative_to(root)}')

# Remove root-level placeholder HTML files that redirect to moved blog/, insights/, cases/ or ceo-stories/ paths
placeholder_pattern = re.compile(r'<meta http-equiv="refresh" content="0; url=(blog/|insights/|cases/|ceo-stories/).+">', re.IGNORECASE)
pages_dir = root / 'pages'
for path in sorted(root.glob('*.html')):
    text = path.read_text(encoding='utf-8', errors='ignore')
    if placeholder_pattern.search(text):
        path.unlink()
        print(f'Removed placeholder {path.name}')

# Clean up empty pages folder if nothing remains
if pages_dir.exists() and not any(pages_dir.iterdir()):
    pages_dir.rmdir()
    print('Removed empty pages/ folder')
