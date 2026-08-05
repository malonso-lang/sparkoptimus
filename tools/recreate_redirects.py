from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
categories = ['blog', 'insights', 'cases', 'ceo-stories']

placeholder_template = '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url={target}">
    <link rel="canonical" href="{target}">
    <title>Redirecting…</title>
  </head>
  <body>
    <p>This page has moved. Redirecting to <a href="{target}">{target}</a>.</p>
  </body>
</html>
'''

placeholder_pattern = re.compile(r'<meta http-equiv=["\"]refresh["\"] content=["\"]0; url=(.+?)["\"]', re.IGNORECASE)

created = 0
skipped = 0

for category in categories:
    category_dir = root / category
    if not category_dir.exists() or not category_dir.is_dir():
        print(f'Skipped missing folder: {category_dir}')
        continue

    for item in sorted(category_dir.glob('*.html')):
        target = f'{category}/{item.name}'
        root_redirect = root / item.name

        if root_redirect.exists():
            if root_redirect.is_file():
                text = root_redirect.read_text(encoding='utf-8', errors='ignore')
                match = placeholder_pattern.search(text)
                if match and match.group(1) == target:
                    print(f'Already exists: {root_redirect.name} -> {target}')
                    skipped += 1
                    continue
                else:
                    print(f'Skipped existing root file: {root_redirect.name}')
                    skipped += 1
                    continue
            else:
                print(f'Skipped existing non-file: {root_redirect.name}')
                skipped += 1
                continue

        root_redirect.write_text(placeholder_template.format(target=target), encoding='utf-8')
        print(f'Created redirect: {root_redirect.name} -> {target}')
        created += 1

print(f'Finished. Created: {created}, Skipped: {skipped}')
