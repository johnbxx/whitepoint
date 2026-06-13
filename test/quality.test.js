// Color rendering quality: the CIECAM02 core is pinned to the CIE 159:2004
// worked example; CRI is anchored to the published F-series values (the
// same SPDs whose chromaticities the illuminant table reproduces); TM-30
// is anchored by construction (a reference rendered against itself must
// score 100) and by ordering. A fixture-gated test compares against
// python colour-science when test/fixtures/quality-oracle.json exists
// (generate with tools/build-quality-oracle.py).

import test from 'node:test';
import assert from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import {
  cri, tm30, cam02ViewingConditions, xyzToCam02Ucs,
  planckianSPD, daylightSPD, lowPressureSodiumSPD, illuminantASPD,
  FL2_SPD, FL7_SPD, FL11_SPD,
} from '../src/spectral/index.js';

test('CIECAM02 reproduces the CIE 159:2004 worked example', () => {
  // Case 1: XYZ (19.01, 20, 21.78), white (95.05, 100, 108.88),
  // La = 318.31, Yb = 20, average surround → J = 41.731, h = 219.048°
  const vc = cam02ViewingConditions([95.05, 100, 108.88], 318.31, 20, false);
  const [Jp, ap, bp] = xyzToCam02Ucs([19.01, 20, 21.78], vc);
  const J = Jp / (1.7 - 0.007 * Jp);
  let h = Math.atan2(bp, ap) * 180 / Math.PI;
  if (h < 0) h += 360;
  assert.ok(Math.abs(J - 41.731) < 0.02, `J ${J} vs 41.731`);
  assert.ok(Math.abs(h - 219.048) < 0.1, `h ${h} vs 219.048`);
});

test('CRI of a reference illuminant is 100 by construction', () => {
  // same 1 nm grid as the reference cri() builds internally — the
  // construction holds only when test and reference share a representation
  const { Ra, Ri } = cri(planckianSPD(2856, { step: 1 }));
  assert.ok(Math.abs(Ra - 100) < 1e-4, `Planckian Ra ${Ra}`);
  assert.ok(Ri.every((r) => Math.abs(r - 100) < 1e-4));
  // daylight: cctOf solves ~6502 for the 6504 synthesis — sub-0.5 wiggle
  assert.ok(cri(daylightSPD(6504)).Ra > 99.5, `D65 Ra ${cri(daylightSPD(6504)).Ra}`);
});

test('CRI reproduces the published F-series values', () => {
  const f2 = cri(FL2_SPD), f7 = cri(FL7_SPD), f11 = cri(FL11_SPD);
  assert.ok(Math.abs(f2.Ra - 64) < 1.5, `F2 Ra ${f2.Ra} (published 64)`);
  assert.ok(Math.abs(f7.Ra - 90) < 1.5, `F7 Ra ${f7.Ra} (published 90)`);
  assert.ok(Math.abs(f11.Ra - 83) < 1.5, `F11 Ra ${f11.Ra} (published 83)`);
  // R9 (strong red) is the famous discriminator: tri-band F11 falls apart
  assert.ok(f11.Ri[8] < 30, `F11 R9 ${f11.Ri[8]}`);
});

test('CRI of low-pressure sodium is catastrophic, as it should be', () => {
  const { Ra, duv } = cri(lowPressureSodiumSPD());
  assert.ok(Ra < -20 && Ra > -80, `LPS Ra ${Ra} (published ≈ −44)`);
  assert.ok(Math.abs(duv) > 0.005, 'LPS sits well off the locus');
});

test('TM-30: reference-vs-itself scores Rf = 100; D65 stays ≈ 100', () => {
  const p = tm30(planckianSPD(3000));
  assert.ok(Math.abs(p.Rf - 100) < 0.05, `Planckian Rf ${p.Rf}`);
  assert.ok(Math.abs(p.Rg - 100) < 0.05, `Planckian Rg ${p.Rg}`);
  const d = tm30(daylightSPD(6504));
  assert.ok(d.Rf > 99 && Math.abs(d.Rg - 100) < 1, `D65 Rf ${d.Rf} Rg ${d.Rg}`);
});

test('TM-30 orders the lamps sensibly', () => {
  const f2 = tm30(FL2_SPD), f7 = tm30(FL7_SPD), f11 = tm30(FL11_SPD);
  const lps = tm30(lowPressureSodiumSPD());
  assert.ok(f7.Rf > f11.Rf && f7.Rf > f2.Rf, `broadband F7 (${f7.Rf}) must beat F11 (${f11.Rf}) and F2 (${f2.Rf})`);
  for (const [name, r] of [['F2', f2], ['F7', f7], ['F11', f11]]) {
    assert.ok(r.Rf > 55 && r.Rf < 95, `${name} Rf ${r.Rf} in plausible band`);
    assert.ok(r.Rg > 80 && r.Rg < 115, `${name} Rg ${r.Rg} in plausible band`);
  }
  assert.ok(lps.Rf < 30, `LPS Rf ${lps.Rf}`);
  assert.ok(lps.Rg < 60, `LPS gamut collapses: Rg ${lps.Rg}`);
});

test('illuminant A scores ≈ 100 on both metrics (it IS its own reference)', () => {
  const a = illuminantASPD();
  assert.ok(cri(a).Ra > 99.5, `A Ra ${cri(a).Ra}`);
  assert.ok(tm30(a).Rf > 99.5, `A Rf ${tm30(a).Rf}`);
});

const fixture = new URL('./fixtures/quality-oracle.json', import.meta.url);
test('agreement with python colour-science',
  { skip: !existsSync(fixture) && 'run tools/build-quality-oracle.py (needs pip colour-science) to generate the fixture' },
  () => {
    const rows = JSON.parse(readFileSync(fixture, 'utf8')).rows;
    const SPDS = { FL2: FL2_SPD, FL7: FL7_SPD, FL11: FL11_SPD, A: illuminantASPD(), D65: daylightSPD(6504) };
    for (const { name, Ra, Rf, Rg } of rows) {
      const ours = { Ra: cri(SPDS[name]).Ra, ...tm30(SPDS[name]) };
      // measured agreement: Rf/Rg ≤ 0.002, Ra ≤ 0.027 (the residual is
      // linear-vs-Sprague interpolation flavor, far below the metrics'
      // integer-published precision). Tolerances sit just above so any
      // regression from today's agreement fails loudly.
      assert.ok(Math.abs(ours.Ra - Ra) < 0.05, `${name} Ra ${ours.Ra} vs oracle ${Ra}`);
      assert.ok(Math.abs(ours.Rf - Rf) < 0.01, `${name} Rf ${ours.Rf} vs oracle ${Rf}`);
      assert.ok(Math.abs(ours.Rg - Rg) < 0.01, `${name} Rg ${ours.Rg} vs oracle ${Rg}`);
    }
  });
