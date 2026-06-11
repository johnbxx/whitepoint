// YCbCr family: spec anchors, the derived-validates-transcribed luma check,
// explicit-variant policy, round-trips.

import test from 'node:test';
import assert from 'node:assert';
import { convert, makeYCbCr, sRGB, Rec2020 } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('spec luma constants match our derived Y rows at published precision', () => {
  // BT.709's 0.2126/0.7152/0.0722 and BT.2020's 0.2627/0.6780/0.0593 are the
  // standards' roundings of the colorimetric Y row — which we derive.
  const sY = sRGB.m.toXyz.slice(3, 6); // bt709 shares sRGB matrices
  assert.ok(Math.abs(sY[0] - 0.2126) < 5e-5 && Math.abs(sY[1] - 0.7152) < 5e-5 && Math.abs(sY[2] - 0.0722) < 5e-5,
    `709 luma vs derived: ${sY}`);
  const rY = Rec2020.m.toXyz.slice(3, 6);
  assert.ok(Math.abs(rY[0] - 0.2627) < 5e-5 && Math.abs(rY[1] - 0.6780) < 5e-5 && Math.abs(rY[2] - 0.0593) < 5e-5,
    `2020 luma vs derived: ${rY}`);
});

test('there is no bare ycbcr, and the factory requires every choice', () => {
  assert.throws(() => convert([0.5, 0.5, 0.5], 'ycbcr', 'srgb'), /unknown color space/);
  assert.throws(() => makeYCbCr(), /requires matrix/);
  assert.throws(() => makeYCbCr({ matrix: '709' }), /requires range/);
  assert.throws(() => makeYCbCr({ matrix: '240M', range: 'full' }), /requires matrix/);
});

test('601-full anchors (the JPEG/JFIF numbers)', () => {
  const white = convert([1, 1, 1], 'srgb', 'ycbcr-601-full');
  assert.ok(Math.abs(white[0] - 1) < 1e-12 && Math.abs(white[1] - 128 / 255) < 1e-12 && Math.abs(white[2] - 128 / 255) < 1e-12,
    `white: ${white}`);
  const black = convert([0, 0, 0], 'srgb', 'ycbcr-601-full');
  assert.ok(Math.abs(black[0]) < 1e-12 && Math.abs(black[1] - 128 / 255) < 1e-12 && Math.abs(black[2] - 128 / 255) < 1e-12);
  // pure red: Y = 0.299, Cr at full positive excursion
  const red = convert([1, 0, 0], 'srgb', 'ycbcr-601-full');
  assert.ok(Math.abs(red[0] - 0.299) < 1e-12, `red Y: ${red[0]}`);
  assert.ok(Math.abs(red[2] - (128 / 255 + 0.5)) < 1e-12, `red Cr: ${red[2]}`);
});

test('709-limited anchors (the video code points)', () => {
  const white = convert([1, 1, 1], 'bt709', 'ycbcr-709-limited');
  assert.ok(Math.abs(white[0] - 235 / 255) < 1e-12, `white Y: ${white[0] * 255}`);
  assert.ok(Math.abs(white[1] - 128 / 255) < 1e-12 && Math.abs(white[2] - 128 / 255) < 1e-12);
  const black = convert([0, 0, 0], 'bt709', 'ycbcr-709-limited');
  assert.ok(Math.abs(black[0] - 16 / 255) < 1e-12, `black Y: ${black[0] * 255}`);
});

test('all variants round-trip within 1e-12', () => {
  const rand = mulberry32(0x4C6C);
  const custom = makeYCbCr({ matrix: '2020', range: 'full' });
  const variants = ['ycbcr-601-full', 'ycbcr-709-limited', custom];
  const failures = [];
  for (const v of variants) {
    let worst = 0;
    for (let n = 0; n < 300; n++) {
      const c = [rand(), rand(), rand()];
      const back = convert(convert(c, 'srgb', v), v, 'srgb');
      for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
    }
    const id = typeof v === 'string' ? v : v.id;
    if (worst >= 1e-12) failures.push(`${id}: ${worst.toExponential(2)}`);
  }
  assert.deepStrictEqual(failures, []);
});
