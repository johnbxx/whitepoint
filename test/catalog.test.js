// Catalog batch: Luv/LCHuv (culori oracle), HSV/HSI (culori oracle),
// OKHSL/OKHSV (texel oracle — with the documented exact-vs-fitted divergence
// near the sRGB blue corner, where whitepoint is on the true boundary).

import test from 'node:test';
import assert from 'node:assert';
import { convert } from '../src/index.js';
import { converter } from 'culori';
import * as texel from '@texel/color';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const N = 300;
const D2R = Math.PI / 180;

function hueAwareDiff(ours, theirs, hueIdx) {
  let worst = 0;
  for (let i = 0; i < 3; i++) {
    let d;
    if (i === hueIdx) {
      d = Math.abs(ours[i] - theirs[i]);
      if (d > 180) d = 360 - d;
      // weight hue degrees by a nominal radius so near-achromatic noise
      // doesn't dominate; chroma/sat channel scales it below
      d *= D2R * Math.max(ours[(hueIdx + 1) % 3], 0.01);
    } else {
      d = Math.abs(ours[i] - theirs[i]);
    }
    worst = Math.max(worst, d);
  }
  return worst;
}

// Luv tolerances inherit culori's Bradford-transcription gap (~5e-8 in XYZ,
// see differential.test.js) amplified by Luv's ×13L scaling; the polar form
// combines both channel errors in C.
const CULORI_CASES = [
  ['luv', 'luv', (o) => [o.l ?? 0, o.u ?? 0, o.v ?? 0], -1, 1e-4],
  ['lchuv', 'lchuv', (o) => [o.l ?? 0, o.c ?? 0, o.h ?? 0], 2, 3e-4],
  ['hsv', 'hsv', (o) => [o.h ?? 0, o.s ?? 0, o.v ?? 0], 0, 1e-9],
  ['hsi', 'hsi', (o) => [o.h ?? 0, o.s ?? 0, o.i ?? 0], 0, 1e-9],
];

test('Luv/LCHuv/HSV/HSI agree with culori', () => {
  const rand = mulberry32(0xCA7A);
  const failures = [];
  for (const [id, mode, pick, hueIdx, tol] of CULORI_CASES) {
    const conv = converter(mode);
    let worst = 0;
    for (let n = 0; n < N; n++) {
      const c = [rand(), rand(), rand()];
      const ours = convert(c, 'srgb', id);
      const theirs = pick(conv({ mode: 'rgb', r: c[0], g: c[1], b: c[2] }));
      worst = Math.max(worst, hueAwareDiff(ours, theirs, hueIdx));
    }
    if (worst >= tol) failures.push(`${id}: worst ${worst.toExponential(2)} (tol ${tol})`);
  }
  assert.deepStrictEqual(failures, []);
});

test('OKHSL/OKHSV agree with texel away from the blue corner', () => {
  // Both libraries implement Ottosson's spaces; texel uses the reference's
  // fitted cusp, whitepoint solves the cusp/boundary exactly. The fit errs
  // up to ~3e-2 near hue 264° (see tools/cusp-accuracy.js), so agreement is
  // asserted tightly on a typical-case percentile and loosely at the max.
  const rand = mulberry32(0x0CC5);
  for (const [id, tSpace] of [['okhsl', texel.OKHSL], ['okhsv', texel.OKHSV]]) {
    const diffs = [];
    for (let n = 0; n < 500; n++) {
      const c = [rand() * 360, rand(), 0.05 + rand() * 0.9];
      const ours = convert(c, id, 'srgb');
      const theirs = texel.convert(c, tSpace, texel.sRGB);
      diffs.push(Math.max(
        Math.abs(ours[0] - theirs[0]),
        Math.abs(ours[1] - theirs[1]),
        Math.abs(ours[2] - theirs[2]),
      ));
    }
    diffs.sort((a, b) => a - b);
    const p90 = diffs[Math.floor(0.9 * diffs.length)];
    const max = diffs[diffs.length - 1];
    assert.ok(p90 < 1e-4, `${id}: p90 vs texel ${p90.toExponential(2)}`);
    assert.ok(max < 0.05, `${id}: max vs texel ${max.toExponential(2)}`);
  }
});

test('new spaces round-trip from sRGB within tolerance', () => {
  const rand = mulberry32(0x2042);
  const CASES = [
    ['luv', 1e-9], ['lchuv', 1e-9], ['hsv', 1e-9], ['hsi', 1e-9],
    // okhsl/okhsv carry the boundary bisection through getCs/scale —
    // round-trips bounded by that solver's tolerance
    ['okhsl', 1e-6], ['okhsv', 1e-6],
  ];
  const failures = [];
  for (const [id, tol] of CASES) {
    let worst = 0;
    for (let n = 0; n < 300; n++) {
      const c = [0.02 + rand() * 0.96, 0.02 + rand() * 0.96, 0.02 + rand() * 0.96];
      const back = convert(convert(c, 'srgb', id), id, 'srgb');
      for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
    }
    if (worst >= tol) failures.push(`${id}: worst round-trip ${worst.toExponential(2)} (tol ${tol})`);
  }
  assert.deepStrictEqual(failures, []);
});

test('OKHSL/OKHSV semantic anchors', () => {
  // s=1 means exactly on the sRGB gamut boundary (ours is the TRUE boundary)
  const onBoundary = convert([30, 1, 0.6], 'okhsl', 'srgb');
  assert.ok(onBoundary.every((v) => v > -1e-6 && v < 1 + 1e-6), `s=1 in gamut: ${onBoundary}`);
  // v=1, s=0 is white; v=0 is black
  const white = convert([0, 0, 1], 'okhsv', 'srgb');
  for (const ch of white) assert.ok(Math.abs(ch - 1) < 1e-6, `okhsv white: ${white}`);
  const black = convert([123, 0.5, 0], 'okhsv', 'srgb');
  for (const ch of black) assert.ok(Math.abs(ch) < 1e-9, `okhsv black: ${black}`);
  // okhsl l matches toe-mapped OKLab lightness for grays
  const gray = convert([0.5, 0.5, 0.5], 'srgb', 'okhsl');
  assert.ok(gray[1] < 1e-6, `gray has no saturation: ${gray}`);
});
