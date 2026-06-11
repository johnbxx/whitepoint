// Cross-engine benchmark: the conversion hot paths in V8 (Chromium),
// JavaScriptCore (WebKit), and SpiderMonkey (Firefox), via Playwright.
// Closes the "fastest measured" caveat that all prior numbers were Node/V8.
// Usage: node tools/browser-bench.js

import { chromium, webkit, firefox } from 'playwright';
import { readFileSync } from 'node:fs';

const bundle = readFileSync(new URL('../docs/whitepoint.js', import.meta.url), 'utf8');

const BENCH = `
import { convert, OKLCH, sRGB, Rec2020 } from '/whitepoint.js';
const N = 16384;
const oklchVecs = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1);
  return [0.2 + t * 0.6, t * 0.35, (t * 997) % 360];
});
const srgbVecs = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1);
  return [t, (t * 7) % 1, (t * 13) % 1];
});
const tmp = [0, 0, 0];
let sink = 0; // checksum defeats dead-code elimination
const K = 16; // inner repetitions: keeps timed windows >> coarsened timers (FF ~1ms)
function best(fn) {
  fn(); fn();
  let b = Infinity;
  for (let r = 0; r < 7; r++) {
    const t0 = performance.now();
    for (let k = 0; k < K; k++) fn();
    b = Math.min(b, performance.now() - t0);
  }
  return (b * 1e6) / (N * K); // ns/op
}
window.__results = {
  'oklch->srgb': best(() => { for (const v of oklchVecs) { convert(v, OKLCH, sRGB, tmp); sink += tmp[0]; } }),
  'srgb->oklch': best(() => { for (const v of srgbVecs) { convert(v, sRGB, OKLCH, tmp); sink += tmp[0]; } }),
  'srgb->rec2020': best(() => { for (const v of srgbVecs) { convert(v, sRGB, Rec2020, tmp); sink += tmp[0]; } }),
};
window.__sink = sink;
window.__done = true;
`;

const PAGE = `<!doctype html><html><body><script type="module">${BENCH}</script></body></html>`;

const engines = [
  ['Chromium (V8)', chromium],
  ['WebKit (JavaScriptCore)', webkit],
  ['Firefox (SpiderMonkey)', firefox],
];

const rows = {};
for (const [label, engine] of engines) {
  const browser = await engine.launch();
  const page = await browser.newPage();
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.endsWith('/whitepoint.js')) {
      return route.fulfill({ contentType: 'text/javascript', body: bundle });
    }
    return route.fulfill({ contentType: 'text/html', body: PAGE });
  });
  await page.goto('http://bench.local/');
  await page.waitForFunction(() => window.__done, undefined, { timeout: 60000 });
  rows[label] = await page.evaluate(() => window.__results);
  await browser.close();
}

const benches = Object.keys(rows[engines[0][0]]);
console.log(`| ns/op | ${Object.keys(rows).join(' | ')} |`);
console.log(`|---|${Object.keys(rows).map(() => '---').join('|')}|`);
for (const b of benches) {
  console.log(`| ${b} | ${Object.keys(rows).map((e) => rows[e][b].toFixed(0)).join(' | ')} |`);
}
