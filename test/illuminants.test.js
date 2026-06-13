// CIE high-pressure discharge illuminants (CIE 15:2004). The committed
// HP-series SPDs must integrate to their published Table T.3 chromaticities;
// the oracle values are colour-science's CCS_ILLUMINANTS — the same CIE
// dataset the SPDs are generated from — so this closes the provenance loop:
// our integral of the committed SPD reproduces the standard's xy.

import test from 'node:test';
import assert from 'node:assert';
import {
  HP1_SPD, HP2_SPD, HP3_SPD, HP4_SPD, HP5_SPD,
  lowPressureSodiumSPD, spectrumXy,
} from '../src/spectral/index.js';

// CIE 15:2004 Table T.3 (2° observer), via colour-science CCS_ILLUMINANTS.
const HP_XY = {
  HP1: [0.5330, 0.4150], HP2: [0.4778, 0.4158], HP3: [0.4302, 0.4075],
  HP4: [0.3812, 0.3797], HP5: [0.3776, 0.3713],
};
const SPDS = { HP1: HP1_SPD, HP2: HP2_SPD, HP3: HP3_SPD, HP4: HP4_SPD, HP5: HP5_SPD };

test('HP-series SPDs integrate to their CIE Table T.3 chromaticities', () => {
  for (const [name, [x, y]] of Object.entries(HP_XY)) {
    const xy = spectrumXy(SPDS[name]);
    assert.ok(Math.abs(xy[0] - x) < 0.001, `${name} x: ${xy[0]} vs ${x}`);
    assert.ok(Math.abs(xy[1] - y) < 0.001, `${name} y: ${xy[1]} vs ${y}`);
  }
});

test('HP1 standard high-pressure sodium is warm, and distinct from low-pressure sodium', () => {
  const hps = spectrumXy(HP1_SPD);
  const lps = spectrumXy(lowPressureSodiumSPD());
  assert.ok(hps[0] > 0.50 && hps[0] < 0.56, `HP1 x ${hps[0]} (warm orange-white)`);
  // The two sodium lamps are genuinely different sources, not aliases.
  assert.ok(Math.hypot(hps[0] - lps[0], hps[1] - lps[1]) > 0.02,
    `HPS and LPS should differ in chromaticity: ${hps} vs ${lps}`);
});

test('HP-series SPDs are well-formed 5 nm visible-range tables', () => {
  for (const [name, spd] of Object.entries(SPDS)) {
    assert.strictEqual(spd.start, 380, `${name} start`);
    assert.strictEqual(spd.step, 5, `${name} step`);
    assert.strictEqual(spd.values.length, 81, `${name} length`);
    assert.ok(spd.values.every((v) => v >= 0 && Number.isFinite(v)), `${name} values`);
  }
});
