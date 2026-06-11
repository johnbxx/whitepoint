// The illuminant lab: chromatic adaptation and CCT.

import test from 'node:test';
import assert from 'node:assert';
import { adapt, adaptMatrix, illuminants, xyToXyz, daylightXy, illuminantFromCCT, cats } from '../src/index.js';

test('every CAT maps source white exactly to destination white', () => {
  // White-to-white exactness is by construction of the von Kries scaling —
  // it must hold to float64 precision for every cone matrix.
  for (const cat of Object.keys(cats)) {
    for (const [from, to] of [['D65', 'D50'], ['A', 'D65'], ['F11', 'E'], ['D75', 'F2']]) {
      const got = adapt(xyToXyz(illuminants[from]), from, to, [0, 0, 0], { cat });
      const want = xyToXyz(illuminants[to]);
      for (let i = 0; i < 3; i++) {
        assert.ok(Math.abs(got[i] - want[i]) < 1e-12, `${cat} ${from}→${to}[${i}]: ${got[i]} vs ${want[i]}`);
      }
    }
  }
});

test('adapt round-trips: A → D65 → A within 1e-12', () => {
  const xyz = [0.4, 0.3, 0.2];
  for (const cat of Object.keys(cats)) {
    const back = adapt(adapt(xyz, 'A', 'D65', [0, 0, 0], { cat }), 'D65', 'A', [0, 0, 0], { cat });
    for (let i = 0; i < 3; i++) {
      assert.ok(Math.abs(back[i] - xyz[i]) < 1e-12, `${cat}: round-trip [${i}] ${back[i]}`);
    }
  }
});

test('adapt accepts xy chromaticities and XYZ white points directly', () => {
  const xyz = [0.5, 0.5, 0.5];
  const byName = adapt(xyz, 'D65', 'D50');
  const byXy = adapt(xyz, illuminants.D65, illuminants.D50);
  const byXyz = adapt(xyz, xyToXyz(illuminants.D65), xyToXyz(illuminants.D50));
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(byName[i] - byXy[i]) < 1e-14);
    assert.ok(Math.abs(byName[i] - byXyz[i]) < 1e-14);
  }
});

test('identity adaptation is a perfect copy', () => {
  const xyz = [0.123456789, 0.987654321, 0.555];
  const got = adapt(xyz, 'D65', 'D65');
  assert.deepStrictEqual(got, xyz);
});

test('unknown illuminant and CAT names throw with helpful messages', () => {
  assert.throws(() => adapt([1, 1, 1], 'D99', 'D65'), /unknown illuminant "D99"/);
  assert.throws(() => adapt([1, 1, 1], 'D65', 'D50', [0, 0, 0], { cat: 'nope' }), /unknown CAT "nope"/);
});

test('daylight locus reproduces CIE D illuminants near their CCT', () => {
  // Nominal CCTs on the revised (c2 = 1.4388) temperature scale: T × 1.4388/1.4380.
  // The locus is a published fit; CIE tabulated values agree to ~1e-4 in xy.
  const cases = [
    ['D50', 5000 * 1.4388 / 1.4380],
    ['D55', 5500 * 1.4388 / 1.4380],
    ['D65', 6500 * 1.4388 / 1.4380],
    ['D75', 7500 * 1.4388 / 1.4380],
  ];
  for (const [name, T] of cases) {
    const xy = daylightXy(T);
    const want = illuminants[name];
    assert.ok(Math.abs(xy[0] - want[0]) < 2e-4, `${name} x: ${xy[0]} vs ${want[0]}`);
    assert.ok(Math.abs(xy[1] - want[1]) < 2e-4, `${name} y: ${xy[1]} vs ${want[1]}`);
  }
});

test('illuminantFromCCT output works as an adapt() white point', () => {
  const w = illuminantFromCCT(6504);
  const xyz = adapt([0.5, 0.5, 0.5], w, 'D50');
  assert.ok(xyz.every(Number.isFinite));
});

test('daylightXy rejects out-of-domain temperatures', () => {
  assert.throws(() => daylightXy(3999), RangeError);
  assert.throws(() => daylightXy(25001), RangeError);
  assert.throws(() => daylightXy(NaN), RangeError);
});

test('adaptMatrix(A→B) is the exact inverse of adaptMatrix(B→A)', () => {
  const ab = adaptMatrix('A', 'D65');
  const ba = adaptMatrix('D65', 'A');
  // multiply and compare to identity
  const I = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  const prod = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      prod[r * 3 + c] = ab[r * 3] * ba[c] + ab[r * 3 + 1] * ba[3 + c] + ab[r * 3 + 2] * ba[6 + c];
    }
  }
  for (let i = 0; i < 9; i++) {
    assert.ok(Math.abs(prod[i] - I[i]) < 1e-14, `product[${i}] = ${prod[i]}`);
  }
});
