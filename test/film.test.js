// Film & broadcast batch: ACES family, BT.709, DCI-P3.
// Oracles: colorjs.io for ACEScg/ACEScc; structural identities for the rest
// (BT.709 shares sRGB's derived matrices exactly; DCI-P3's non-D65 white
// maps to the hub white by CAT construction, like ProPhoto's D50).

import test from 'node:test';
import assert from 'node:assert';
import Color from 'colorjs.io';
import { convert, sRGB, BT709, CSS_D65_XYZ } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('BT.709 shares sRGB derived matrices exactly', () => {
  for (let i = 0; i < 9; i++) {
    assert.strictEqual(BT709.m.toXyz[i], sRGB.m.toXyz[i]);
    assert.strictEqual(BT709.m.fromXyz[i], sRGB.m.fromXyz[i]);
  }
  // but the encodings differ: mid-gray encodes differently under the OETF
  const viaSrgb = convert([0.5, 0.5, 0.5], 'srgb', 'srgb-linear');
  const viaBt709 = convert([0.5, 0.5, 0.5], 'bt709', 'srgb-linear');
  assert.ok(Math.abs(viaSrgb[0] - viaBt709[0]) > 0.01, 'OETF should differ from sRGB curve');
});

test('film-space whites map exactly to the hub white point', () => {
  // dci-p3 (~6300K) and ACES (~D60) whites land on D65 by CAT construction.
  for (const id of ['bt709', 'dci-p3', 'aces2065-1', 'acescg']) {
    const xyz = convert([1, 1, 1], id, 'xyz-d65');
    for (let i = 0; i < 3; i++) {
      assert.ok(Math.abs(xyz[i] - CSS_D65_XYZ[i]) < 1e-12, `${id} white → ${xyz}`);
    }
  }
});

test('ACEScc/ACEScct encode scene-linear 1.0 to the spec anchor', () => {
  // S-2014-003: ACEScc(1.0) = (log2(1) + 9.72)/17.52 = 9.72/17.52
  const anchor = 9.72 / 17.52;
  const cc = convert([1, 1, 1], 'acescg', 'acescc');
  const cct = convert([1, 1, 1], 'acescg', 'acescct');
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(cc[i] - anchor) < 1e-12, `acescc white: ${cc}`);
    assert.ok(Math.abs(cct[i] - anchor) < 1e-12, `acescct white: ${cct}`);
  }
  // ACEScct's linear toe departs from ACEScc below the breakpoint
  const dark = convert([0.001, 0.001, 0.001], 'acescg', 'acescct');
  const darkCc = convert([0.001, 0.001, 0.001], 'acescg', 'acescc');
  assert.ok(Math.abs(dark[0] - darkCc[0]) > 1e-4, 'toe should differ from pure log');
});

test('ACEScg and ACEScc agree with colorjs.io', () => {
  const rand = mulberry32(0xF11);
  let worstCg = 0, worstCc = 0;
  for (let n = 0; n < 200; n++) {
    const c = [rand(), rand(), rand()];
    const cg = convert(c, 'srgb', 'acescg');
    const cc = convert(c, 'srgb', 'acescc');
    const jsCg = new Color('srgb', c).to('acescg').coords;
    const jsCc = new Color('srgb', c).to('acescc').coords;
    for (let i = 0; i < 3; i++) {
      worstCg = Math.max(worstCg, Math.abs(cg[i] - jsCg[i]));
      worstCc = Math.max(worstCc, Math.abs(cc[i] - jsCc[i]));
    }
  }
  assert.ok(worstCg < 1e-6, `acescg vs colorjs: ${worstCg.toExponential(2)}`);
  assert.ok(worstCc < 1e-6, `acescc vs colorjs: ${worstCc.toExponential(2)}`);
});

test('DCI-P3 white differs visibly from Display P3 white in chromaticity', () => {
  // Same primaries, different calibration white: converting DCI white into
  // display-p3 must yield exactly [1,1,1] (whites chain through the hub),
  // while a DCI-encoded mid-gray must NOT equal a display-p3 mid-gray.
  const w = convert([1, 1, 1], 'dci-p3', 'display-p3');
  for (let i = 0; i < 3; i++) assert.ok(Math.abs(w[i] - 1) < 1e-12, `${w}`);
  const g = convert([0.5, 0.5, 0.5], 'dci-p3', 'display-p3');
  assert.ok(Math.abs(g[0] - 0.5) > 0.01, 'gamma 2.6 vs sRGB curve must differ');
});

test('film spaces round-trip within 1e-9', () => {
  const rand = mulberry32(0xACE5);
  const failures = [];
  for (const id of ['bt709', 'dci-p3', 'aces2065-1', 'acescg', 'acescc', 'acescct']) {
    let worst = 0;
    for (let n = 0; n < 300; n++) {
      const c = [0.01 + rand() * 0.98, 0.01 + rand() * 0.98, 0.01 + rand() * 0.98];
      const back = convert(convert(c, 'srgb', id), id, 'srgb');
      for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
    }
    if (worst >= 1e-9) failures.push(`${id}: ${worst.toExponential(2)}`);
  }
  assert.deepStrictEqual(failures, []);
});
