// First-pass benchmark: whitepoint vs @texel/color vs culori.
// Methodology: fixed sample sets, warmup, best-of-5 wall time. Honest caveats:
// single machine, microbenchmark, culori's object API includes allocation
// that is part of its design, texel's cusp mapping uses fitted polynomials
// while ours is still numerical ground truth behind a cache.
// Usage: npm run bench

import { convert, toGamut } from '../src/index.js';
import * as texel from '@texel/color';
import { converter, toGamut as culoriToGamut } from 'culori';

const N = 16384;
const oklchVecs = Array(N).fill().map((_, i) => {
  const t = i / (N - 1);
  return [0.2 + t * 0.6, t * 0.35, (t * 997) % 360];
});
const srgbVecs = Array(N).fill().map((_, i) => {
  const t = i / (N - 1);
  return [t, (t * 7) % 1, (t * 13) % 1];
});
const culoriOklch = oklchVecs.map((v) => ({ mode: 'oklch', l: v[0], c: v[1], h: v[2] }));
const culoriSrgb = srgbVecs.map((v) => ({ mode: 'rgb', r: v[0], g: v[1], b: v[2] }));
const tmp = [0, 0, 0];

function bench(label, fn, rounds = 5) {
  fn(); fn();
  let best = Infinity;
  for (let r = 0; r < rounds; r++) {
    const t0 = performance.now();
    fn();
    best = Math.min(best, performance.now() - t0);
  }
  console.log(`  ${label.padEnd(34)} ${best.toFixed(2).padStart(8)} ms  (${(best * 1e6 / N).toFixed(0)} ns/op)`);
  return best;
}

console.log(`\n== conversion: oklch → srgb (${N}/run, best of 5) ==`);
bench('whitepoint convert()', () => { for (const v of oklchVecs) convert(v, 'oklch', 'srgb', tmp); });
bench('texel convert()', () => { for (const v of oklchVecs) texel.convert(v, texel.OKLCH, texel.sRGB, tmp); });
{ const f = converter('rgb'); bench('culori converter()', () => { for (const v of culoriOklch) f(v); }); }

console.log(`\n== conversion: srgb → oklch ==`);
bench('whitepoint convert()', () => { for (const v of srgbVecs) convert(v, 'srgb', 'oklch', tmp); });
bench('texel convert()', () => { for (const v of srgbVecs) texel.convert(v, texel.sRGB, texel.OKLCH, tmp); });
{ const f = converter('oklch'); bench('culori converter()', () => { for (const v of culoriSrgb) f(v); }); }

console.log(`\n== conversion: srgb → rec2020 (fused RGB↔RGB route) ==`);
bench('whitepoint convert()', () => { for (const v of srgbVecs) convert(v, 'srgb', 'rec2020', tmp); });
bench('texel convert()', () => { for (const v of srgbVecs) texel.convert(v, texel.sRGB, texel.Rec2020, tmp); });
{ const f = converter('rec2020'); bench('culori converter()', () => { for (const v of culoriSrgb) f(v); }); }

console.log(`\n== gamut mapping: oklch → srgb gamut ==`);
// Warm whitepoint's cusp cache so we measure mapping, not cusp discovery
// (texel's polynomial cusp needs no warmup — noted as their advantage).
for (const v of oklchVecs) toGamut(v, 'oklch', { gamut: 'srgb', method: 'cusp' }, tmp);
bench('whitepoint css (reference)', () => { for (const v of oklchVecs) toGamut(v, 'oklch', { gamut: 'srgb', method: 'css' }, tmp); });
bench('whitepoint cusp (warm cache)', () => { for (const v of oklchVecs) toGamut(v, 'oklch', { gamut: 'srgb', method: 'cusp' }, tmp); });
bench('whitepoint clip', () => { for (const v of oklchVecs) toGamut(v, 'oklch', { gamut: 'srgb', method: 'clip' }, tmp); });
bench('texel gamutMapOKLCH (cusp fit)', () => { for (const v of oklchVecs) texel.gamutMapOKLCH(v, texel.sRGBGamut, texel.OKLCH, tmp); });
{ const f = culoriToGamut('rgb'); bench('culori toGamut (css)', () => { for (const v of culoriOklch) f(v); }); }

console.log(`\n_Node ${process.version}, ${process.arch}. Conversions verified equivalent in test/differential.test.js._`);
