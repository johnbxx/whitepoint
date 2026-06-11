// CVD simulation (Brettel 1997, derived) and inverse CCT (exact locus).

import test from 'node:test';
import assert from 'node:assert';
import { simulateCVD, cctOf, planckianXy, spectrumXy, daylightSPD } from '../src/spectral/index.js';
import { convert, illuminants, cats, mulVec, invert } from '../src/index.js';

const TYPES = ['protanopia', 'deuteranopia', 'tritanopia'];

test('CVD simulation is exactly idempotent (it is a projection)', () => {
  for (const type of TYPES) {
    for (const c of [[0.8, 0.2, 0.3], [0.1, 0.6, 0.9], [0.5, 0.5, 0.1], [0.9, 0.9, 0.2]]) {
      const once = simulateCVD(c, 'srgb', { type });
      const twice = simulateCVD(once, 'srgb', { type });
      for (let i = 0; i < 3; i++) {
        assert.ok(Math.abs(once[i] - twice[i]) < 1e-12, `${type}: not idempotent at ${c}`);
      }
    }
  }
});

test('CVD preserves the white point and the neutral axis', () => {
  for (const type of TYPES) {
    for (const g of [1, 0.7, 0.4, 0.1]) {
      const sim = simulateCVD([g, g, g], 'srgb', { type });
      for (let i = 0; i < 3; i++) {
        assert.ok(Math.abs(sim[i] - g) < 1e-9, `${type}: gray ${g} → ${sim}`);
      }
    }
  }
});

test('CVD collapses confusion pairs (colors differing only in the lost cone)', () => {
  const LMS = cats.vonkries;
  const LMS_INV = invert(LMS);
  const cases = [['protanopia', 0], ['deuteranopia', 1], ['tritanopia', 2]];
  for (const [type, axis] of cases) {
    const xyz = convert([0.55, 0.45, 0.35], 'srgb', 'xyz-d65');
    const lms = mulVec(LMS, xyz, [0, 0, 0]);
    const lms2 = [...lms];
    lms2[axis] *= 1.3; // same color except the cone this observer lacks
    const xyz2 = mulVec(LMS_INV, lms2, [0, 0, 0]);
    const a = simulateCVD(xyz, 'xyz-d65', { type });
    const b = simulateCVD(xyz2, 'xyz-d65', { type });
    for (let i = 0; i < 3; i++) {
      assert.ok(Math.abs(a[i] - b[i]) < 1e-12, `${type}: confusion pair did not collapse`);
    }
  }
});

test('CVD severity interpolates from identity to the dichromat point', () => {
  // midpoint property holds in LINEAR space (the lerp happens in LMS);
  // gamma-encoded sRGB would distort it.
  const c = convert([0.85, 0.3, 0.2], 'srgb', 'srgb-linear');
  const none = simulateCVD(c, 'srgb-linear', { type: 'protanopia', severity: 0 });
  const half = simulateCVD(c, 'srgb-linear', { type: 'protanopia', severity: 0.5 });
  const full = simulateCVD(c, 'srgb-linear', { type: 'protanopia', severity: 1 });
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(none[i] - c[i]) < 1e-12, 'severity 0 is identity');
    assert.ok(Math.abs(half[i] - (c[i] + full[i]) / 2) < 1e-9, 'severity 0.5 is the midpoint in linear space');
  }
  // protanopia makes pure red dramatically darker/yellower — sanity
  const red = simulateCVD([1, 0, 0], 'srgb', { type: 'protanopia' });
  assert.ok(red[0] < 0.8 && red[1] > 0.1, `protan red: ${red}`);
  assert.throws(() => simulateCVD(c, 'srgb', { type: 'nope' }), /unknown CVD type/);
});

// ---- inverse CCT ----

test('cctOf round-trips the exact Planckian locus', () => {
  for (const T of [1500, 2856, 5000, 6504, 12000, 20000]) {
    const { cct, duv } = cctOf(planckianXy(T));
    assert.ok(Math.abs(cct - T) / T < 2e-4, `${T}K → ${cct}`);
    assert.ok(Math.abs(duv) < 1e-6, `${T}K duv: ${duv}`);
  }
});

test('cctOf reproduces the textbook values for standard illuminants', () => {
  const a = cctOf(illuminants.A);
  assert.ok(Math.abs(a.cct - 2856) < 6, `A: ${a.cct}K`);
  assert.ok(Math.abs(a.duv) < 5e-4, `A duv: ${a.duv}`);
  // D65: CCT ≈ 6504 K, Duv ≈ +0.0032 — the daylight locus sits slightly
  // green of the blackbody locus, and the sign convention must show it.
  const d65 = cctOf(illuminants.D65);
  assert.ok(Math.abs(d65.cct - 6504) < 20, `D65: ${d65.cct}K`);
  assert.ok(d65.duv > 0.002 && d65.duv < 0.0045, `D65 duv: ${d65.duv}`);
});

test('cctOf agrees with the daylight synthesis loop', () => {
  for (const T of [5003, 6504, 9000]) {
    const { cct, duv } = cctOf(spectrumXy(daylightSPD(T)));
    assert.ok(Math.abs(cct - T) / T < 5e-3, `daylight ${T}K → ${cct}`);
    assert.ok(duv > 0, `daylight should sit above the locus (duv ${duv})`);
  }
});
