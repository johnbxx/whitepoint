// Round-trip bounds and derivational invariants, CI-enforced.

import test from 'node:test';
import assert from 'node:assert';
import { convert, spaces, CSS_D65_XYZ } from '../src/index.js';

// Deterministic PRNG so failures reproduce (mulberry32).
function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const ROUNDTRIP_TOL = 1e-9; // published bound; measured ~1e-13

const SPACE_IDS = [
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec2020',
  'oklab', 'oklch', 'lab', 'lch', 'hsl', 'hwb', 'xyz-d65', 'xyz-d50',
];

test('srgb → space → srgb round-trips within 1e-9 (500 random colors/space)', () => {
  const rand = mulberry32(0xC0FFEE);
  for (const id of SPACE_IDS) {
    let maxErr = 0;
    for (let n = 0; n < 500; n++) {
      const c = [rand(), rand(), rand()];
      const there = convert(c, 'srgb', id);
      const back = convert(there, id, 'srgb');
      for (let i = 0; i < 3; i++) maxErr = Math.max(maxErr, Math.abs(c[i] - back[i]));
    }
    assert.ok(maxErr < ROUNDTRIP_TOL, `${id}: max round-trip error ${maxErr.toExponential(2)}`);
  }
});

test('oklch → space → oklch round-trips within 1e-9 (chromatic colors)', () => {
  const rand = mulberry32(0xDECAF);
  for (const id of SPACE_IDS) {
    let maxErr = 0;
    for (let n = 0; n < 500; n++) {
      // keep C well away from the achromatic axis so hue is well-defined
      const c = [0.2 + rand() * 0.6, 0.03 + rand() * 0.12, rand() * 360];
      const back = convert(convert(c, 'oklch', id), id, 'oklch');
      let dh = Math.abs(c[2] - back[2]);
      if (dh > 180) dh = 360 - dh; // hue wraparound
      maxErr = Math.max(maxErr, Math.abs(c[0] - back[0]), Math.abs(c[1] - back[1]), dh);
    }
    assert.ok(maxErr < ROUNDTRIP_TOL, `${id}: max round-trip error ${maxErr.toExponential(2)}`);
  }
});

test('invariant: RGB white maps exactly to the hub white point', () => {
  for (const id of ['srgb', 'srgb-linear', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec2020']) {
    const xyz = convert([1, 1, 1], id, 'xyz-d65');
    for (let i = 0; i < 3; i++) {
      assert.ok(Math.abs(xyz[i] - CSS_D65_XYZ[i]) < 1e-12,
        `${id} white → XYZ[${i}] = ${xyz[i]} vs ${CSS_D65_XYZ[i]}`);
    }
  }
});

test('invariant: white is Lab [100, 0, 0] and OKLab [1, 0, 0]', () => {
  const lab = convert([1, 1, 1], 'srgb', 'lab');
  assert.ok(Math.abs(lab[0] - 100) < 1e-9 && Math.abs(lab[1]) < 1e-9 && Math.abs(lab[2]) < 1e-9,
    `lab white = ${lab}`);
  const ok = convert([1, 1, 1], 'srgb', 'oklab');
  // OKLab's published matrices only place white at L=1 to ~1e-7 — a property
  // of the source constants (rounded to 10 digits), not of this implementation.
  assert.ok(Math.abs(ok[0] - 1) < 1e-6 && Math.abs(ok[1]) < 1e-6 && Math.abs(ok[2]) < 1e-6,
    `oklab white = ${ok}`);
});

test('every space pair converts without error and stays finite', () => {
  const probe = [0.6, 0.4, 0.3];
  for (const a of SPACE_IDS) {
    const inA = convert(probe, 'srgb', a);
    for (const b of SPACE_IDS) {
      const r = convert(inA, a, b);
      assert.ok(r.every(Number.isFinite), `${a} → ${b} produced ${r}`);
    }
  }
});
