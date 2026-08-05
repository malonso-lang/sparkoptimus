from pathlib import Path
root = Path(r'c:/Users/MiguelAlonso/Downloads/NEW WEB')
checks = ['blog.html', 'cases.html', 'insights.html', 'books.html', 'careers.html']
for p in checks:
    path = root / p
    text = path.read_text(encoding='utf-8', errors='ignore')
    print(f'{p}: exists={path.exists()} redirect={"http-equiv=\"refresh\"" in text}')
print('careers page exists', (root / 'pages' / 'careers' / 'careers.html').exists())
print('tools folder exists', (root / 'tools').exists())
