// The F-series loop: integrating the published fluorescent SPDs must
// reproduce the F2/F7/F11 chromaticities the illuminant table has carried
// since the first commit — and the 1 nm CMFs must agree with the 5 nm
// tables on smooth spectra while serving the spiky ones.

import test from 'node:test';
import assert from 'node:assert';
import { spectrumXy, planckianXy, D65_SPD, FL2_SPD, FL7_SPD, FL11_SPD } from '../src/spectral/index.js';
import { CMF_1931_2_1NM } from '../src/spectral/data-1nm.js';
import { illuminants } from '../src/index.js';

const F = [['F2', FL2_SPD], ['F7', FL7_SPD], ['F11', FL11_SPD]];

test('F-series SPDs integrate to the illuminant-table chromaticities (5 nm CMFs)', () => {
  for (const [name, spd] of F) {
    const xy = spectrumXy(spd);
    assert.ok(Math.abs(xy[0] - illuminants[name][0]) < 1.5e-3, `${name} x: ${xy[0]} vs ${illuminants[name][0]}`);
    assert.ok(Math.abs(xy[1] - illuminants[name][1]) < 1.5e-3, `${name} y: ${xy[1]} vs ${illuminants[name][1]}`);
  }
});

test('F-series with 1 nm CMFs lands at least as close', () => {
  for (const [name, spd] of F) {
    const xy = spectrumXy(spd, { cmf: CMF_1931_2_1NM });
    assert.ok(Math.abs(xy[0] - illuminants[name][0]) < 1.5e-3, `${name} x@1nm: ${xy[0]}`);
    assert.ok(Math.abs(xy[1] - illuminants[name][1]) < 1.5e-3, `${name} y@1nm: ${xy[1]}`);
  }
});

test('1 nm CMFs tighten the Planck → illuminant A anchor', () => {
  const xy = planckianXy(2856, { cmf: CMF_1931_2_1NM });
  assert.ok(Math.abs(xy[0] - illuminants.A[0]) < 1.5e-4, `A x@1nm: ${xy[0]} vs ${illuminants.A[0]}`);
  assert.ok(Math.abs(xy[1] - illuminants.A[1]) < 1.5e-4, `A y@1nm: ${xy[1]} vs ${illuminants.A[1]}`);
});

test('1 nm and 5 nm CMFs agree on smooth spectra (the abridgment claim)', () => {
  const a = spectrumXy(D65_SPD);
  const b = spectrumXy(D65_SPD, { cmf: CMF_1931_2_1NM });
  assert.ok(Math.abs(a[0] - b[0]) < 2e-4 && Math.abs(a[1] - b[1]) < 2e-4,
    `D65 5nm (${a}) vs 1nm (${b})`);
});
