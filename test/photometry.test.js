// Photometry: scotopic V′, the 555 nm photopic/scotopic anchor, CIE 191
// mesopic blending, and emission-line spectra. The anchors here are
// physics loops, not assumptions: Km·V and K′m·V′ must agree where the
// system was anchored, and known S/P engineering ratios must emerge from
// the integrals.

import test from 'node:test';
import assert from 'node:assert';
import {
  V_PRIME_1951, photopicLuminance, scotopicLuminance, mesopic,
  lineSPD, sodiumSPD, illuminantASPD, spectrumXy, sampleSpd, CMF_1931_2,
} from '../src/spectral/index.js';
import { CMF_1931_2_1NM } from '../src/spectral/data-1nm.js';

test('V′ peaks at 507 nm with unit value', () => {
  // the 1 nm CVRL interpolation has a flat unit peak at 506–508
  assert.strictEqual(sampleSpd(V_PRIME_1951, 507), 1);
  assert.ok(V_PRIME_1951.values.every((v) => v <= 1));
});

test('the 555 nm anchor: Km·V and K′m·V′ agree where photometry is pinned', () => {
  // a line spectrum needs the 1 nm CMFs — on the 5 nm grid the Riemann sum
  // of a 2 nm-wide line is off by >2×, which is the abridgment error the
  // 1 nm tables exist to avoid
  const line = lineSPD([[555, 1]]);
  const p = photopicLuminance(line, { cmf: CMF_1931_2_1NM });
  const s = scotopicLuminance(line);
  assert.ok(Math.abs(p - s) / p < 5e-3, `Lp ${p} vs Ls ${s}`);
});

test('S/P ratios reproduce engineering values', () => {
  const a = illuminantASPD({ start: 380, step: 1, end: 780 });
  const spA = scotopicLuminance(a) / photopicLuminance(a);
  assert.ok(spA > 1.3 && spA < 1.5, `incandescent S/P ${spA} (expect ≈1.4)`);

  const lps = sodiumSPD();
  const spLps = scotopicLuminance(lps) / photopicLuminance(lps, { cmf: CMF_1931_2_1NM });
  assert.ok(spLps > 0.15 && spLps < 0.3, `LPS S/P ${spLps} (expect ≈0.2)`);
});

test('CIE 191 mesopic system: endpoints, monotonicity, self-consistency', () => {
  assert.strictEqual(mesopic(5, 5).m, 1);
  assert.strictEqual(mesopic(80, 60).m, 1);
  assert.strictEqual(mesopic(0.005, 0.005).m, 0);
  assert.strictEqual(mesopic(0.001, 0.002).m, 0);

  // m rises monotonically with light level at fixed S/P = 1.4
  let prev = -1;
  for (const L of [0.006, 0.02, 0.1, 0.5, 2, 4.9]) {
    const { m } = mesopic(L, 1.4 * L);
    assert.ok(m > prev, `m(${L}) = ${m} not > ${prev}`);
    assert.ok(m > 0 && m < 1, `m(${L}) = ${m} not interior`);
    prev = m;
  }

  // the returned luminance satisfies the spec's implicit equation
  const vp555 = sampleSpd(V_PRIME_1951, 555);
  const { m, luminance } = mesopic(0.5, 0.9);
  const lhs = luminance;
  const rhs = (m * 0.5 + (1 - m) * 0.9 * vp555) / (m + (1 - m) * vp555);
  assert.ok(Math.abs(lhs - rhs) < 1e-9, `L ${lhs} vs implicit ${rhs}`);
  assert.ok(Math.abs(m - (0.7670 + 0.3334 * Math.log10(luminance))) < 1e-9);
});

test('lineSPD integrates to its line powers', () => {
  const spd = lineSPD([[450, 2.5], [600, 1]]);
  const total = spd.values.reduce((a, b) => a + b, 0) * spd.step;
  assert.ok(Math.abs(total - 3.5) < 1e-5, `integral ${total} vs 3.5`);
});

test('sodium doublet sits on the spectral locus at its centroid', () => {
  // intensity-weighted doublet centroid: (588.995·2 + 589.5924)/3
  const centroid = (588.995 * 2 + 589.5924) / 3;
  const mono = [
    sampleSpd({ start: CMF_1931_2_1NM.start, step: CMF_1931_2_1NM.step, values: CMF_1931_2_1NM.x }, centroid),
    sampleSpd({ start: CMF_1931_2_1NM.start, step: CMF_1931_2_1NM.step, values: CMF_1931_2_1NM.y }, centroid),
    sampleSpd({ start: CMF_1931_2_1NM.start, step: CMF_1931_2_1NM.step, values: CMF_1931_2_1NM.z }, centroid),
  ];
  const sum = mono[0] + mono[1] + mono[2];
  const xy = spectrumXy(sodiumSPD(), { cmf: CMF_1931_2_1NM });
  assert.ok(Math.abs(xy[0] - mono[0] / sum) < 1e-3, `x ${xy[0]} vs ${mono[0] / sum}`);
  assert.ok(Math.abs(xy[1] - mono[1] / sum) < 1e-3, `y ${xy[1]} vs ${mono[1] / sum}`);
});

test('sodium with the 5 nm CMFs stays within abridgment error of the 1 nm result', () => {
  const a = spectrumXy(sodiumSPD(), { cmf: CMF_1931_2 });
  const b = spectrumXy(sodiumSPD(), { cmf: CMF_1931_2_1NM });
  // line spectra are exactly what the 1 nm tables exist for — the 5 nm
  // result is close but measurably worse; document the gap, don't hide it
  assert.ok(Math.abs(a[0] - b[0]) < 5e-3 && Math.abs(a[1] - b[1]) < 5e-3,
    `5 nm (${a}) vs 1 nm (${b})`);
});
