// Catalog sweep: HSLuv/HPLuv (npm hsluv reference as oracle), XYB (culori
// oracle), Hunter Lab (anchors + round-trip), device utilities, deltaECAM16.

import test from 'node:test';
import assert from 'node:assert';
import { Hsluv } from 'hsluv';
import { converter } from 'culori';
import {
  convert, deltaECAM16,
  cmykFromSrgb, srgbFromCmyk, srgbFromAnsi256, ansi256FromSrgb, ansi16FromSrgb,
} from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('HSLuv/HPLuv agree with the reference implementation', () => {
  const ref = new Hsluv();
  const rand = mulberry32(0x451);
  let worstHs = 0, worstHp = 0;
  for (let n = 0; n < 300; n++) {
    const h = rand() * 360, s = rand() * 100, l = 1 + rand() * 98;
    ref.hsluv_h = h; ref.hsluv_s = s; ref.hsluv_l = l;
    ref.hsluvToRgb();
    const ours = convert([h, s, l], 'hsluv', 'srgb');
    worstHs = Math.max(worstHs,
      Math.abs(ours[0] - ref.rgb_r), Math.abs(ours[1] - ref.rgb_g), Math.abs(ours[2] - ref.rgb_b));

    ref.hpluv_h = h; ref.hpluv_p = s; ref.hpluv_l = l; // reference calls HPLuv saturation "p"
    ref.hpluvToRgb();
    const oursP = convert([h, s, l], 'hpluv', 'srgb');
    worstHp = Math.max(worstHp,
      Math.abs(oursP[0] - ref.rgb_r), Math.abs(oursP[1] - ref.rgb_g), Math.abs(oursP[2] - ref.rgb_b));
  }
  assert.ok(worstHs < 1e-8, `hsluv vs reference: ${worstHs.toExponential(2)}`);
  assert.ok(worstHp < 1e-8, `hpluv vs reference: ${worstHp.toExponential(2)}`);
});

test('HSLuv semantics: s=100 sits on the sRGB boundary', () => {
  for (const h of [12, 110, 230, 340]) {
    const rgb = convert([h, 100, 55], 'hsluv', 'srgb');
    const eps = 1e-7;
    const onEdge = rgb.some((v) => v < eps || v > 1 - eps);
    assert.ok(onEdge, `hsluv(${h},100,55) → ${rgb} should touch the gamut edge`);
    assert.ok(rgb.every((v) => v > -1e-9 && v < 1 + 1e-9), 'and stay inside');
  }
});

test('XYB agrees with culori', () => {
  const toXyb = converter('xyb');
  const rand = mulberry32(0x1B);
  let worst = 0;
  for (let n = 0; n < 300; n++) {
    const c = [rand(), rand(), rand()];
    const ours = convert(c, 'srgb', 'xyb');
    const t = toXyb({ mode: 'rgb', r: c[0], g: c[1], b: c[2] });
    worst = Math.max(worst,
      Math.abs(ours[0] - t.x), Math.abs(ours[1] - t.y), Math.abs(ours[2] - t.b));
  }
  // culori transcribes an 11-digit inverse mix matrix; we compute it. The
  // forward direction shares constants, so agreement is tight.
  assert.ok(worst < 1e-7, `xyb vs culori: ${worst.toExponential(2)}`);
});

test('Hunter Lab anchors and round-trip', () => {
  const white = convert([1, 1, 1], 'srgb', 'hunter-lab');
  assert.ok(Math.abs(white[0] - 100) < 1e-9 && Math.abs(white[1]) < 1e-9 && Math.abs(white[2]) < 1e-9,
    `hunter white: ${white}`);
  const rand = mulberry32(0x4477);
  let worst = 0;
  for (let n = 0; n < 300; n++) {
    const c = [0.02 + rand() * 0.96, 0.02 + rand() * 0.96, 0.02 + rand() * 0.96];
    const back = convert(convert(c, 'srgb', 'hunter-lab'), 'hunter-lab', 'srgb');
    for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
  }
  assert.ok(worst < 1e-9, `hunter-lab round-trip: ${worst.toExponential(2)}`);
});

test('new registry spaces round-trip', () => {
  const rand = mulberry32(0x5EED);
  const failures = [];
  for (const id of ['hsluv', 'hpluv', 'xyb']) {
    let worst = 0;
    for (let n = 0; n < 300; n++) {
      const c = [0.05 + rand() * 0.9, 0.05 + rand() * 0.9, 0.05 + rand() * 0.9];
      const back = convert(convert(c, 'srgb', id), id, 'srgb');
      for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
    }
    if (worst >= 1e-8) failures.push(`${id}: ${worst.toExponential(2)}`);
  }
  assert.deepStrictEqual(failures, []);
});

test('naive CMYK round-trips and hits anchors', () => {
  assert.deepStrictEqual(cmykFromSrgb([1, 0, 0]), [0, 1, 1, 0]);
  assert.deepStrictEqual(cmykFromSrgb([0, 0, 0]), [0, 0, 0, 1]);
  assert.deepStrictEqual(srgbFromCmyk([0, 0, 0, 0]), [1, 1, 1]);
  const rand = mulberry32(0xC4C4);
  for (let n = 0; n < 200; n++) {
    const c = [rand(), rand(), rand()];
    const back = srgbFromCmyk(cmykFromSrgb(c));
    for (let i = 0; i < 3; i++) assert.ok(Math.abs(back[i] - c[i]) < 1e-12);
  }
});

test('ANSI palettes: exact table points and idempotent quantization', () => {
  assert.deepStrictEqual(srgbFromAnsi256(196), [1, 0, 0]); // cube (5,0,0)
  assert.deepStrictEqual(srgbFromAnsi256(16), [0, 0, 0]);  // cube origin
  assert.deepStrictEqual(srgbFromAnsi256(231), [1, 1, 1]); // cube max
  // every palette point must quantize to itself
  const c = [0, 0, 0];
  for (let i = 16; i < 256; i++) {
    srgbFromAnsi256(i, c);
    const q = ansi256FromSrgb(c);
    // gray-ramp entries may legitimately collide with identical cube grays
    const rq = srgbFromAnsi256(q);
    assert.ok(Math.max(...c.map((v, j) => Math.abs(v - rq[j]))) < 1e-12, `index ${i} → ${q}`);
  }
  for (let i = 0; i < 16; i++) {
    assert.strictEqual(ansi16FromSrgb(srgbFromAnsi256(i)), i);
  }
  assert.throws(() => srgbFromAnsi256(256), RangeError);
});

test('deltaECAM16 behaves like a colour difference', () => {
  assert.strictEqual(deltaECAM16([0.5, 0.2, 0.7], [0.5, 0.2, 0.7]), 0);
  const d1 = deltaECAM16([1, 0, 0], [0, 0, 1]);
  const d2 = deltaECAM16([1, 0, 0], [0.9, 0.1, 0.1]);
  assert.ok(d1 > d2 && d2 > 0, `red↔blue ${d1} should exceed red↔near-red ${d2}`);
  assert.ok(Math.abs(deltaECAM16([1, 0, 0], [0, 0, 1]) - deltaECAM16([0, 0, 1], [1, 0, 0])) < 1e-12);
});
