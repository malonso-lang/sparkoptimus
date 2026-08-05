from pathlib import Path
import shutil

root = Path(r'c:/Users/MiguelAlonso/Downloads/NEW WEB')
(root / 'tools').mkdir(exist_ok=True)
for name in ['_reorganize_site.py', 'verify_reorg.py']:
    p = root / name
    if p.exists():
        shutil.move(str(p), str(root / 'tools' / name))

careers = root / 'careers.html'
if careers.exists():
    dest = root / 'pages' / 'careers' / 'careers.html'
    dest.parent.mkdir(exist_ok=True)
    if not dest.exists():
        shutil.move(str(careers), str(dest))

    redirect = '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=pages/careers/careers.html">
    <link rel="canonical" href="pages/careers/careers.html">
    <title>Redirecting…</title>
  </head>
  <body>
    <p>This page has moved. Redirecting to <a href="pages/careers/careers.html">pages/careers/careers.html</a>.</p>
  </body>
</html>
'''
    careers.write_text(redirect, encoding='utf-8')

print('cleanup complete')
