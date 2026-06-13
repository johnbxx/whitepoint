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
import * as spectral from '../src/spectral/index.js';

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

// Full F-series and LED-series: CIE 15 Table T.3 / CIE 15:2018 chromaticities
// (colour-science CCS_ILLUMINANTS, the dataset the SPDs are generated from).
const FL_XY = {
  FL1: [0.3131, 0.3371], FL2: [0.3721, 0.3751], FL3: [0.4091, 0.3941],
  FL4: [0.4402, 0.4031], FL5: [0.3138, 0.3452], FL6: [0.3779, 0.3882],
  FL7: [0.3129, 0.3292], FL8: [0.3458, 0.3586], FL9: [0.3741, 0.3727],
  FL10: [0.3458, 0.3588], FL11: [0.3805, 0.3769], FL12: [0.4370, 0.4042],
};
const LED_XY = {
  LED_B1: [0.4560, 0.4078], LED_B2: [0.4357, 0.4012], LED_B3: [0.3756, 0.3723],
  LED_B4: [0.3422, 0.3502], LED_B5: [0.3118, 0.3236], LED_BH1: [0.4474, 0.4066],
  LED_RGB1: [0.4557, 0.4211], LED_V1: [0.4548, 0.4044], LED_V2: [0.3781, 0.3775],
};

test('full F-series SPDs integrate to their CIE Table T.3 chromaticities', () => {
  for (const [name, [x, y]] of Object.entries(FL_XY)) {
    const spd = spectral[`${name}_SPD`];
    assert.ok(spd, `${name}_SPD exported`);
    const xy = spectrumXy(spd);
    assert.ok(Math.abs(xy[0] - x) < 0.001 && Math.abs(xy[1] - y) < 0.001, `${name}: ${xy} vs ${[x, y]}`);
  }
});

test('LED-series SPDs integrate to their CIE 15:2018 chromaticities', () => {
  for (const [name, [x, y]] of Object.entries(LED_XY)) {
    const spd = spectral[`${name}_SPD`];
    assert.ok(spd, `${name}_SPD exported`);
    const xy = spectrumXy(spd);
    assert.ok(Math.abs(xy[0] - x) < 0.001 && Math.abs(xy[1] - y) < 0.001, `${name}: ${xy} vs ${[x, y]}`);
  }
});
