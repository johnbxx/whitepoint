// Differential testing against independent implementations: @texel/color and
// culori as oracles. Agreement here means independent derivations of the same
// standards converge — disagreement beyond tolerance means someone transcribed
// something.
//
// Tolerances are per-family and documented:
//  - Matrix/transfer spaces: 1e-9 (all parties derive from the same primaries)
//  - OKLab family: 1e-6 (Ottosson's published constants are rounded to 10
//    digits and ecosystems differ in whether they use his published inverses
//    or computed inverses; see constants/oklab.js)

import test from 'node:test';
import assert from 'node:assert';
import { convert } from '../src/index.js';
import * as texel from '@texel/color';
import { converter } from 'culori';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function maxDiff(a, b, circularIdx = -1) {
  let m = 0;
  for (let i = 0; i < 3; i++) {
    let d = Math.abs(a[i] - b[i]);
    if (i === circularIdx) d = Math.min(d, Math.abs(360 - d));
    m = Math.max(m, d);
  }
  return m;
}

// L/C/H values are compared in rectangular form: raw hue differences blow up
// without bound as chroma → 0 (dH ≈ dab/C), which is a property of polar
// coordinates, not of either implementation.
const DEG2RAD = Math.PI / 180;
function lchDiff(a, b) {
  const aa = a[1] * Math.cos(a[2] * DEG2RAD), ab = a[1] * Math.sin(a[2] * DEG2RAD);
  const ba = b[1] * Math.cos(b[2] * DEG2RAD), bb = b[1] * Math.sin(b[2] * DEG2RAD);
  return Math.max(Math.abs(a[0] - b[0]), Math.abs(aa - ba), Math.abs(ab - bb));
}

const N = 300;

// --- vs @texel/color ---

const TEXEL_SPACES = [
  ['srgb-linear', texel.sRGBLinear, 1e-9],
  ['display-p3', texel.DisplayP3, 1e-9],
  ['a98-rgb', texel.A98RGB, 1e-9],
  ['prophoto-rgb', texel.ProPhotoRGB, 1e-9],
  ['rec2020', texel.Rec2020, 1e-9],
  ['xyz-d65', texel.XYZ, 1e-9],
  ['xyz-d50', texel.XYZD50, 1e-9],
  ['oklab', texel.OKLab, 1e-6],
  ['oklch', texel.OKLCH, 1e-6],
];

test('agrees with @texel/color from sRGB into every shared space', () => {
  const rand = mulberry32(0xBEEF);
  const failures = [];
  for (const [id, tSpace, tol] of TEXEL_SPACES) {
    const polar = id === 'oklch';
    let worst = 0;
    for (let n = 0; n < N; n++) {
      const c = [rand(), rand(), rand()];
      const ours = convert(c, 'srgb', id);
      const theirs = texel.convert(c, texel.sRGB, tSpace);
      worst = Math.max(worst, polar ? lchDiff(ours, theirs) : maxDiff(ours, theirs));
    }
    if (worst >= tol) failures.push(`${id}: worst diff vs texel ${worst.toExponential(2)} (tol ${tol})`);
  }
  assert.deepStrictEqual(failures, []);
});

// --- vs culori ---

const CULORI_SPACES = [
  ['srgb-linear', 'lrgb', (o) => [o.r, o.g, o.b], 1e-9],
  ['display-p3', 'p3', (o) => [o.r, o.g, o.b], 1e-9],
  ['a98-rgb', 'a98', (o) => [o.r, o.g, o.b], 1e-9],
  // culori transcribes an older 10-digit ProPhoto matrix; we and texel derive
  // it (and match current css-color-4/conversions.js). The ~1e-7 gap is
  // culori's transcription, amplified by the 1/1.8 power near zero.
  ['prophoto-rgb', 'prophoto', (o) => [o.r, o.g, o.b], 5e-7],
  ['rec2020', 'rec2020', (o) => [o.r, o.g, o.b], 1e-9],
  ['xyz-d65', 'xyz65', (o) => [o.x, o.y, o.z], 1e-9],
  // Same transcription story as ProPhoto below: culori's D65→D50 Bradford
  // matrix is the older 10-digit print; ours is computed and matches the
  // current css-color-4/conversions.js to 1e-12 (see derivation.test.js).
  ['xyz-d50', 'xyz50', (o) => [o.x, o.y, o.z], 5e-7],
  // Lab inherits culori's Bradford transcription gap (~5e-8 in XYZ) amplified
  // by Lab's ~×500 partial derivatives; observed ~4e-5 in Lab units (L: 0–100).
  ['lab', 'lab', (o) => [o.l, o.a, o.b], 1e-4],
  ['lch', 'lch', (o) => [o.l, o.c, o.h ?? 0], 1e-4],
  ['hsl', 'hsl', (o) => [o.h ?? 0, o.s, o.l], 1e-9],
  ['hwb', 'hwb', (o) => [o.h ?? 0, o.w, o.b], 1e-9],
  ['oklab', 'oklab', (o) => [o.l, o.a, o.b], 1e-6],
  ['oklch', 'oklch', (o) => [o.l, o.c, o.h ?? 0], 1e-6],
];

test('agrees with culori from sRGB into every shared space', () => {
  const rand = mulberry32(0xFACE);
  const failures = [];
  for (const [id, mode, pick, tol] of CULORI_SPACES) {
    const conv = converter(mode);
    const polar = id === 'oklch' || id === 'lch';
    const circular = (id === 'hsl' || id === 'hwb') ? 0 : -1;
    let worst = 0;
    for (let n = 0; n < N; n++) {
      const c = [rand(), rand(), rand()];
      const ours = convert(c, 'srgb', id);
      const theirs = pick(conv({ mode: 'rgb', r: c[0], g: c[1], b: c[2] }));
      worst = Math.max(worst, polar ? lchDiff(ours, theirs) : maxDiff(ours, theirs, circular));
    }
    if (worst >= tol) failures.push(`${id}: worst diff vs culori ${worst.toExponential(2)} (tol ${tol})`);
  }
  assert.deepStrictEqual(failures, []);
});
