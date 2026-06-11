// Kubelka–Munk pigment mixing on Jakob–Hanika derived spectra.

import test from 'node:test';
import assert from 'node:assert';
import { reflectanceOf, pigmentMix, kmMixReflectance, reflectanceToXyz } from '../src/spectral/index.js';
import { convert, mix } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('derived reflectances integrate back to their colors (the Newton solve)', () => {
  const rand = mulberry32(0x5167);
  let worst = 0;
  for (let n = 0; n < 150; n++) {
    const c = [0.03 + rand() * 0.94, 0.03 + rand() * 0.94, 0.03 + rand() * 0.94];
    const xyz = convert(c, 'srgb', 'xyz-d65');
    const back = reflectanceToXyz(reflectanceOf(c));
    for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(xyz[i] - back[i]));
  }
  assert.ok(worst < 1e-8, `round-trip via spectrum: ${worst.toExponential(2)}`);
});

test('derived reflectances are physical: smooth and within (0, 1)', () => {
  for (const c of [[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0], [0.5, 0.5, 0.5], [0.9, 0.1, 0.7]]) {
    const r = reflectanceOf(c);
    for (const v of r.values) assert.ok(v > 0 && v < 1, `${c}: reflectance ${v} out of (0,1)`);
  }
});

test('THE demo: the blue→yellow pigment path passes through green; light does not', () => {
  const blue = [0.10, 0.20, 0.85];
  const yellow = [0.95, 0.85, 0.05];
  // Pigment physics: blue is the stronger pigment (as in real paint), so the
  // green band sits toward the yellow end of the concentration sweep.
  let greenest = null;
  for (let t = 0.05; t <= 0.95; t += 0.05) {
    const lch = convert(pigmentMix(blue, yellow, t), 'srgb', 'oklch');
    if (lch[2] > 120 && lch[2] < 175 && (!greenest || lch[1] > greenest[1])) greenest = lch;
  }
  assert.ok(greenest, 'pigment sweep never entered the green band');
  assert.ok(greenest[1] > 0.07, `pigment green should be saturated (C=${greenest?.[1]})`);
  // Light (additive) mixing of the same pair heads to gray, not green.
  const light = mix(blue, yellow, 0.5, 'srgb');
  const lightC = convert(light, 'srgb', 'oklch')[1];
  assert.ok(lightC < 0.05, `light mix should be near-gray (C=${lightC})`);
});

test('pigment endpoints and symmetry', () => {
  const a = [0.7, 0.3, 0.2], b = [0.1, 0.5, 0.8];
  const at0 = pigmentMix(a, b, 0);
  const at1 = pigmentMix(a, b, 1);
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(at0[i] - a[i]) < 1e-6, `t=0: ${at0} vs ${a}`);
    assert.ok(Math.abs(at1[i] - b[i]) < 1e-6, `t=1: ${at1} vs ${b}`);
  }
  const ab = pigmentMix(a, b, 0.3);
  const ba = pigmentMix(b, a, 0.7);
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(ab[i] - ba[i]) < 1e-9, 'mix(a,b,t) === mix(b,a,1−t)');
  }
});

test('pigment mixing darkens (subtractive), unlike light', () => {
  // mixing two saturated paints can't exceed either's reflectance anywhere
  const a = reflectanceOf([0.9, 0.1, 0.1]);
  const b = reflectanceOf([0.1, 0.1, 0.9]);
  const m = kmMixReflectance(a, b, 0.5);
  for (let i = 0; i < m.values.length; i++) {
    const hi = Math.max(a.values[i], b.values[i]);
    assert.ok(m.values[i] <= hi + 1e-9, `mixture brighter than both parents at index ${i}`);
  }
});

test('grays mix to grays', () => {
  const m = pigmentMix([0.85, 0.85, 0.85], [0.15, 0.15, 0.15], 0.5);
  const c = convert(m, 'srgb', 'oklch')[1];
  assert.ok(c < 0.02, `gray mix picked up chroma: ${c}`);
  // and darker than the arithmetic midpoint — the K-M signature
  assert.ok(m[0] < 0.5, `K-M gray mix should sit below linear midpoint: ${m[0]}`);
});
