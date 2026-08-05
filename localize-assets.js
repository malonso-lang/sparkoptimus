#!/usr/bin/env node
/*
 * Rewrites every remote Webflow image reference to its downloaded local copy.
 *
 * Run AFTER download-assets.sh:
 *     bash download-assets.sh
 *     node localize-assets.js
 *
 * Mapping comes from site/assets/remote/MANIFEST.tsv (remote URL <TAB> local filename).
 * Only files that actually downloaded are rewritten, so a failed download keeps
 * its working remote URL instead of turning into a broken local path.
 */
const fs = require('fs');
const path = require('path');

const manifest = fs.readFileSync('site/assets/remote/MANIFEST.tsv', 'utf8')
  .trim().split('\n').map(l => l.split('\t')).filter(p => p.length === 2);

const map = new Map();
let missing = 0;
for (const [url, name] of manifest) {
  if (fs.existsSync(path.join('site/assets/remote', name))) {
    map.set(url, 'site/assets/remote/' + name);
  } else missing++;
}
console.log('mapped ' + map.size + ' downloaded assets (' + missing + ' not on disk, left remote)');

function targets() {
  const out = [];
  for (const f of fs.readdirSync('.')) if (f.endsWith('.html')) out.push(f);
  for (const d of ['site/scripts', 'site/styles']) {
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) if (/\.(js|css)$/.test(f)) out.push(path.join(d, f));
  }
  return out;
}

let touched = 0, swaps = 0;
for (const file of targets()) {
  let t = fs.readFileSync(file, 'utf8');
  const before = t;
  for (const [url, local] of map) {
    if (t.indexOf(url) !== -1) { t = t.split(url).join(local); swaps++; }
    // JSON-escaped form inside stringified HTML bodies
    const esc = url.replace(/\//g, '\\/');
    if (t.indexOf(esc) !== -1) { t = t.split(esc).join(local.replace(/\//g, '\\/')); swaps++; }
  }
  if (t !== before) { fs.writeFileSync(file, t); touched++; }
}
console.log('rewrote ' + swaps + ' references across ' + touched + ' files');

const leftover = [];
for (const file of targets()) {
  const t = fs.readFileSync(file, 'utf8');
  const m = t.match(/https?:\\?\/\\?\/(?:cdn\.prod\.website-files\.com|uploads-ssl\.webflow\.com)[^"'\s\\<>]+/g);
  if (m) leftover.push(file + ': ' + m.length);
}
if (leftover.length) {
  console.log('\nStill remote (download these manually if needed):');
  leftover.forEach(l => console.log('  ' + l));
} else {
  console.log('\nNo remote Webflow references remain — the site is self-contained.');
}
