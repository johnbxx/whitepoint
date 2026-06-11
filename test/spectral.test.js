// The spectral lab: colorimetry from first principles, validated against
// the very chromaticity tables the library started with. The deepest tests
// in the suite: Planck's law → integration → the CIE illuminant table.

import test from 'node:test';
import assert from 'node:assert';
import {
  CMF_1931_2, CMF_1964_10, D65_SPD,
  emissionToXyz, spectrumXy, reflectanceToXyz,
  planckianSPD, planckianXy, illuminantASPD, daylightSPD, sampleSpd,
} from '../src/spectral/index.js';
import { convert, illuminants, adapt, daylightXy } from '../src/index.js';

test('equal-energy spectrum lands on E (1/3, 1/3) for both observers', () => {
  const flat = { start: 360, step: 5, values: new Array(95).fill(1) };
  for (const cmf of [CMF_1931_2, CMF_1964_10]) {
    const xy = spectrumXy(flat, { cmf });
    assert.ok(Math.abs(xy[0] - 1 / 3) < 2e-4, `E x: ${xy[0]}`);
    assert.ok(Math.abs(xy[1] - 1 / 3) < 2e-4, `E y: ${xy[1]}`);
  }
});

test('Planck at 2856 K reproduces CIE illuminant A — physics meets the table', () => {
  // Illuminant A is DEFINED as a Planckian radiator at 2856 K (c2 = 1.4388e-2).
  // Integrating Planck's law against the CMFs must land on the chromaticity
  // we transcribed into the illuminant table at the very start of the project.
  const xy = planckianXy(2856);
  assert.ok(Math.abs(xy[0] - illuminants.A[0]) < 3e-4, `A x: ${xy[0]} vs ${illuminants.A[0]}`);
  assert.ok(Math.abs(xy[1] - illuminants.A[1]) < 3e-4, `A y: ${xy[1]} vs ${illuminants.A[1]}`);
});

test('the D65 SPD integrates to the D65 chromaticity', () => {
  const xy = spectrumXy(D65_SPD);
  assert.ok(Math.abs(xy[0] - illuminants.D65[0]) < 2e-4, `D65 x: ${xy[0]}`);
  assert.ok(Math.abs(xy[1] - illuminants.D65[1]) < 2e-4, `D65 y: ${xy[1]}`);
});

test('synthesized daylight lands on the daylight locus', () => {
  for (const T of [5003, 6504, 7504, 10000]) {
    const xy = spectrumXy(daylightSPD(T));
    const locus = daylightXy(T);
    assert.ok(Math.abs(xy[0] - locus[0]) < 1e-3, `${T}K x: ${xy[0]} vs ${locus[0]}`);
    assert.ok(Math.abs(xy[1] - locus[1]) < 1e-3, `${T}K y: ${xy[1]} vs ${locus[1]}`);
  }
});

test('the Planckian locus has the right shape', () => {
  // monotonically decreasing x with temperature; passes near known anchors
  let prevX = Infinity;
  for (const T of [1500, 2000, 2856, 4000, 6600, 10000, 20000]) {
    const [x] = planckianXy(T);
    assert.ok(x < prevX, `x not decreasing at ${T}K`);
    prevX = x;
  }
  // ~6600K is roughly where blackbody crosses near D65's x
  const [x6600] = planckianXy(6600);
  assert.ok(Math.abs(x6600 - 0.313) < 5e-3, `6600K x: ${x6600}`);
});

test('reflectance under an illuminant: exact invariants', () => {
  const flat = (r) => ({ start: 360, step: 5, values: new Array(95).fill(r) });
  // perfect reflector: Y = 1 exactly (by the normalization construction)
  const white = reflectanceToXyz(flat(1));
  assert.ok(Math.abs(white[1] - 1) < 1e-14, `perfect reflector Y: ${white[1]}`);
  // 18% gray: Y = 0.18 exactly, same chromaticity as the illuminant
  const gray = reflectanceToXyz(flat(0.18));
  assert.ok(Math.abs(gray[1] - 0.18) < 1e-14, `gray Y: ${gray[1]}`);
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(gray[i] - 0.18 * white[i]) < 1e-14, 'gray is scaled white');
  }
});

test('the full research loop: spectrum → hub → any space', () => {
  // a smooth reddish reflectance ramp, viewed under D65 vs illuminant A,
  // chromatically adapted back to D65 for comparison — the daily workflow
  // of color science, end to end in whitepoint.
  const ramp = {
    start: 360, step: 5,
    values: Array.from({ length: 95 }, (_, i) => 0.1 + 0.8 / (1 + Math.exp(-(i - 55) / 6))),
  };
  const underD65 = reflectanceToXyz(ramp);
  const underA = reflectanceToXyz(ramp, { illuminant: illuminantASPD() });
  // same object, different light: raw XYZ must differ...
  assert.ok(Math.abs(underD65[0] - underA[0]) > 0.01, 'illuminant must matter');
  // ...but after chromatic adaptation the appearance roughly reconciles
  const aWhite = spectrumXy(illuminantASPD());
  const d65White = spectrumXy(D65_SPD);
  const adapted = adapt(underA, aWhite, d65White);
  const lab1 = convert(underD65, 'xyz-d65', 'oklab');
  const lab2 = convert(adapted, 'xyz-d65', 'oklab');
  const dE = Math.hypot(lab1[0] - lab2[0], lab1[1] - lab2[1], lab1[2] - lab2[2]);
  assert.ok(dE < 0.05, `adapted appearance should roughly reconcile (deltaEOK ${dE})`);
  assert.ok(convert(underD65, 'xyz-d65', 'oklch').every(Number.isFinite));
});

test('sampleSpd interpolates and zero-pads', () => {
  const spd = { start: 400, step: 10, values: [1, 3] };
  assert.strictEqual(sampleSpd(spd, 405), 2);
  assert.strictEqual(sampleSpd(spd, 400), 1);
  assert.strictEqual(sampleSpd(spd, 410), 3);
  assert.strictEqual(sampleSpd(spd, 390), 0);
  assert.strictEqual(sampleSpd(spd, 420), 0);
});

test('emission tristimulus scales linearly', () => {
  const spd = planckianSPD(5000);
  const double = { ...spd, values: spd.values.map((v) => v * 2) };
  const a = emissionToXyz(spd);
  const b = emissionToXyz(double);
  for (let i = 0; i < 3; i++) assert.ok(Math.abs(b[i] - 2 * a[i]) < 1e-12);
});
