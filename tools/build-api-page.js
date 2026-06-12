// Generates docs/api.html: the complete API reference, extracted from the
// source JSDoc at build time. Exports are enumerated by importing the four
// entry points — the page cannot drift from reality — and any export
// without a doc comment is listed under "undocumented" so gaps are loud.
//
// Usage: node tools/build-api-page.js

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const srcRoot = new URL('../src/', import.meta.url).pathname;

// ---- collect JSDoc blocks preceding exported declarations ----
const docs = new Map(); // name → { text, file }
function scan(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { scan(p); continue; }
    if (!f.endsWith('.js')) continue;
    const src = readFileSync(p, 'utf8');
    // allow a few intervening lines (memo declarations, comments) between a
    // doc block and its export, but never another doc or export
    const re = /\/\*\*([\s\S]*?)\*\/\s*\n(?:(?!export |\/\*\*)[^\n]*\n){0,8}?export (?:async )?(?:function|const|let) (\w+)/g;
    for (const m of src.matchAll(re)) {
      const text = m[1].split('\n').map((l) => l.replace(/^\s*\* ?/, '')).join('\n').trim();
      if (!docs.has(m[2])) docs.set(m[2], { text, file: p.slice(srcRoot.length) });
    }
  }
}
scan(srcRoot);

// ---- enumerate real exports ----
const [core, codegen, spectral, sky] = await Promise.all([
  import('../src/index.js'), import('../src/codegen/index.js'),
  import('../src/spectral/index.js'), import('../src/sky/index.js'),
]);
const names = (m) => Object.keys(m).filter((k) => k !== 'default').sort();

// the 42 registry spaces get a table, not prose entries
const spaceIds = Object.keys(core.spaces).sort();
const spaceObjects = new Set(
  names(core).filter((n) => core[n] && typeof core[n] === 'object' && core[n].id && core.spaces[core[n].id]),
);

const GROUPS = [
  ['Conversions', 'whitepoint', ['convert', 'convertBuffer', 'resolve', 'registerRoute', 'spaces', 'makeYCbCr', 'oklabToRgbDirect']],
  ['CSS strings', 'whitepoint', ['parse', 'parseTo', 'NAMED_COLORS', 'serialize']],
  ['Bytes & hex', 'whitepoint', ['toBytes', 'fromBytes', 'toHex', 'fromHex']],
  ['Illuminants & adaptation', 'whitepoint', ['adapt', 'adaptMatrix', 'illuminants', 'illuminantFromCCT', 'daylightXy', 'cats', 'xyToXyz', 'CSS_D50', 'CSS_D65', 'CSS_D50_XYZ', 'CSS_D65_XYZ']],
  ['Gamut', 'whitepoint', ['toGamut', 'inGamut', 'clip', 'findCusp', 'findCuspNumerical', 'maxChromaAt', 'deltaEOK']],
  ['Mixing & difference', 'whitepoint', ['mix', 'mixAlpha', 'hueDelta', 'deltaE2000', 'deltaECAM16', 'contrastWCAG2', 'wcagLuminance']],
  ['Compositing & blending', 'whitepoint', ['composite', 'overStack', 'premultiply', 'unpremultiply', 'porterDuffOperators', 'blend', 'blendModes']],
  ['Appearance (CAM16)', 'whitepoint', ['cam16ViewingConditions', 'xyzToCam16', 'cam16ToXyz', 'CAM16_DEFAULT_VC']],
  ['Device boundaries', 'whitepoint', ['cmykFromSrgb', 'srgbFromCmyk', 'ansi16FromSrgb', 'ansi256FromSrgb', 'srgbFromAnsi256']],
  ['Direct space routes', 'whitepoint', ['srgbToHsl', 'hslToSrgb', 'srgbToHsv', 'hsvToSrgb', 'srgbToHsi', 'hsiToSrgb', 'srgbToHwb', 'hwbToSrgb']],
  ['Math & internals', 'whitepoint', ['mul', 'mulVec', 'invert', 'deriveRgbMatrices', 'polarToRect', 'rectToPolar', 'transfer', 'pqDecode', 'pqEncode', 'DEG2RAD', 'RAD2DEG', 'YW']],
  ['Shader emission', 'whitepoint/codegen', names(codegen)],
  ['Spectra & CMFs', 'whitepoint/spectral', ['sampleSpd', 'emissionToXyz', 'spectrumXy', 'reflectanceToXyz', 'CMF_1931_2', 'CMF_1964_10', 'D65_SPD', 'DAYLIGHT_S', 'FL2_SPD', 'FL7_SPD', 'FL11_SPD']],
  ['Illuminant synthesis', 'whitepoint/spectral', ['planckianSPD', 'planckianXy', 'illuminantASPD', 'daylightSPD', 'cctOf', 'lineSPD', 'sodiumSPD']],
  ['Lamp quality', 'whitepoint/spectral', ['cri', 'tm30', 'cam02ViewingConditions', 'xyzToCam02Ucs']],
  ['Vision & media', 'whitepoint/spectral', ['simulateCVD', 'photopicLuminance', 'scotopicLuminance', 'mesopic', 'V_PRIME_1951', 'attenuate', 'WATER_ABSORPTION']],
  ['Pigments (Kubelka–Munk)', 'whitepoint/spectral', ['reflectanceOf', 'kmMixReflectance', 'pigmentMix']],
  ['Sky (Hosek–Wilkie)', 'whitepoint/sky', names(sky)],
];

const grouped = new Set(GROUPS.flatMap(([, , ns]) => ns));
const leftovers = [
  ...names(core).filter((n) => !grouped.has(n) && !spaceObjects.has(n)),
  ...names(spectral).filter((n) => !grouped.has(n)),
].filter((n, i, a) => a.indexOf(n) === i);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const mdish = (s) => esc(s)
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
  .replace(/\n\n/g, '</p><p>')
  .replace(/@param \{([^}]*)\} (\[?[\w.]+\]?)( - )?/g, '<br><code class="prm">$2</code> <span class="typ">$1</span> ')
  .replace(/@returns? (\{[^}]*\})?/g, '<br><b>returns</b> <span class="typ">$1</span> ');

let undocumented = [];
function entry(name, mod) {
  const d = docs.get(name);
  if (!d) { undocumented.push(`${mod}: ${name}`); return ''; }
  return `<article id="${name}"><h4><code>${name}</code> <span class="src">${d.file}</span></h4><p>${mdish(d.text)}</p></article>`;
}

const groupHtml = GROUPS.map(([title, mod, ns]) => `
<section>
  <h3>${title} <span class="mod">${mod}</span></h3>
  ${ns.map((n) => entry(n, mod)).join('\n')}
</section>`).join('\n');

const spacesRows = spaceIds.map((id) => {
  const s = core.spaces[id];
  return `<tr><td><code>${id}</code></td><td>${esc(s.name ?? '')}</td></tr>`;
}).join('\n');

const leftoverHtml = leftovers.length
  ? `<section><h3>Ungrouped</h3>${leftovers.map((n) => entry(n, '?')).join('\n')}</section>` : '';

if (undocumented.length) {
  console.warn(`undocumented exports (${undocumented.length}):\n  ` + undocumented.join('\n  '));
}

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>whitepoint — API reference</title>
<style>
  :root { --bg: #0c0d10; --panel: #14161b; --edge: #23262e; --text: #e8eaf0; --dim: #9aa0ae; --accent: #4ba3f7; --mono: ui-monospace, SFMono-Regular, Menlo, monospace; }
  * { box-sizing: border-box; margin: 0; }
  body { background: var(--bg); color: var(--text); font: 16px/1.6 system-ui, -apple-system, sans-serif; padding-bottom: 6rem; }
  main { max-width: 880px; margin: 0 auto; padding: 0 1.25rem; }
  header { padding: 3.5rem 0 1rem; }
  h1 { font-size: 2rem; letter-spacing: -0.02em; }
  h3 { font-size: 1.25rem; margin: 2.5rem 0 0.75rem; }
  h4 { font-size: 1rem; margin: 1.4rem 0 0.25rem; }
  code { font-family: var(--mono); font-size: 0.85em; background: var(--panel); padding: 0.1em 0.4em; border-radius: 5px; }
  .mod { font-family: var(--mono); font-size: 0.75rem; color: var(--accent); font-weight: 400; margin-left: 0.5rem; }
  .src { font-family: var(--mono); font-size: 0.7rem; color: var(--dim); font-weight: 400; margin-left: 0.5rem; }
  .typ { color: var(--dim); font-family: var(--mono); font-size: 0.8em; }
  .prm { color: var(--accent); background: none; padding: 0; }
  article p { color: var(--dim); font-size: 0.92rem; max-width: 46rem; }
  table { border-collapse: collapse; font-size: 0.9rem; }
  td { padding: 0.25rem 1rem 0.25rem 0; border-bottom: 1px solid var(--edge); color: var(--dim); }
  a { color: var(--accent); text-decoration: none; }
  nav { position: sticky; top: 0; background: rgba(12,13,16,0.85); backdrop-filter: blur(8px); border-bottom: 1px solid var(--edge); z-index: 10; }
  .navin { max-width: 880px; margin: 0 auto; display: flex; justify-content: space-between; align-items: baseline; padding: 0.65rem 1.25rem; }
  .brand { font-weight: 650; color: var(--text); text-decoration: none; }
  .navlinks a { color: var(--dim); margin-left: 1.1rem; font-size: 0.9rem; }
  .navlinks a:hover, .navlinks a.here { color: var(--text); }
</style>
</head>
<body>
<nav><div class="navin">
  <a class="brand" href="./index.html">whitepoint</a>
  <div class="navlinks">
    <a href="./index.html">demos</a>
    <a href="./light.html">light lab</a>
    <a href="./accuracy.html">accuracy</a>
    <a href="./recipes.html">recipes</a>
    <a class="here" href="./api.html">api</a>
    <a href="https://www.npmjs.com/package/whitepoint">npm</a>
    <a href="https://github.com/somejohnbforya/whitepoint">github</a>
  </div>
</div></nav>
<main>
<header>
  <h1>API reference</h1>
  <p style="color: var(--dim); margin-top: 0.5rem">Generated from the source JSDoc by
  <code>tools/build-api-page.js</code> — exports are enumerated by importing the entry
  points, so this page cannot drift from the package. Numerical policy: garbage in,
  garbage out, but conversions never throw and never hang; in-domain inputs always
  produce finite outputs (enforced in <code>test/garbage.test.js</code>).</p>
</header>

<section>
  <h3>The 42 spaces, ${spaceIds.length} ids <span class="mod">whitepoint</span></h3>
  <p style="color: var(--dim); font-size: 0.92rem">Every id below works in
  <code>convert()</code>, <code>mix()</code>, <code>toGamut()</code>, and friends; each
  also has a named export object (<code>sRGB</code>, <code>OKLCH</code>, …) for
  zero-dispatch hot loops.</p>
  <table>${spacesRows}</table>
</section>

${groupHtml}
${leftoverHtml}

<footer style="margin-top: 4rem; color: var(--dim); font-size: 0.85rem">
  <p>Regenerate with <code>node tools/build-api-page.js</code>.</p>
</footer>
</main>
</body>
</html>
`;
writeFileSync(new URL('../docs/api.html', import.meta.url), html);
console.log(`docs/api.html: ${spaceIds.length} space ids, ${GROUPS.length} groups, ${undocumented.length} undocumented`);
