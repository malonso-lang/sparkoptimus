from pathlib import Path
root = Path(r'c:/Users/MiguelAlonso/Downloads/NEW WEB')
checks = ['blog.html', 'cases.html', 'insights.html', 'books.html', 'careers.html']
for p in checks:
    path = root / p
    text = path.read_text(encoding='utf-8', errors='ignore')
    print(f'{p}: exists={path.exists()} redirect={"http-equiv=\"refresh\"" in text}')

for p in ['pages/blog/blog.html', 'pages/cases/cases.html', 'pages/insights/insights.html', 'pages/books/books.html', 'pages/careers/careers.html']:
    path = root / p
    print(f'{p}: exists={path.exists()}')
