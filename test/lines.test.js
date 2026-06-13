// There is no standard illuminant for neon — so the validation is physics,
// not a spec fixture: dischargeSPD derives line powers from NIST ASD
// transition probabilities and level energies (never the qualitative
// intensity column), and each gas must land in its known color region,
// robustly across the plausible glow-discharge excitation range.

import test from 'node:test';
import assert from 'node:assert';
import { dischargeSPD, sodiumSPD, lineSPD, spectrumXy, EMISSION_LINES } from '../src/spectral/index.js';
import { CMF_1931_2_1NM } from '../src/spectral/data-1nm.js';

const xyOf = (el, kT) => spectrumXy(dischargeSPD(EMISSION_LINES[el], { kT }), { cmf: CMF_1931_2_1NM });

// Known color regions at the default excitation temperature. Bounds are
// physical expectations (tube colors), not snapshots of our own output.
const REGIONS = {
  neon: { x: [0.63, 0.70], y: [0.30, 0.36] }, // red-orange — the brief's x ≈ 0.65–0.70
  sodium: { x: [0.55, 0.59], y: [0.41, 0.45] }, // D-line amber
  mercury: { x: [0.18, 0.28], y: [0.20, 0.30] }, // blue-white
  hydrogen: { x: [0.50, 0.62], y: [0.20, 0.28] }, // Balmer pink-magenta
  argon: { x: [0.33, 0.43], y: [0.20, 0.32] }, // pale lavender
  krypton: { x: [0.33, 0.42], y: [0.18, 0.28] }, // pale white-lavender
  xenon: { x: [0.10, 0.22], y: [0.06, 0.15] }, // blue-violet
  helium: { x: [0.45, 0.55], y: [0.33, 0.42] }, // peach
};

test('each discharge lands in its known color region at default kT', () => {
  for (const [el, { x, y }] of Object.entries(REGIONS)) {
    const xy = xyOf(el);
    assert.ok(xy[0] >= x[0] && xy[0] <= x[1], `${el} x: ${xy[0]}`);
    assert.ok(xy[1] >= y[0] && xy[1] <= y[1], `${el} y: ${xy[1]}`);
  }
});

test('neon is red-orange across the whole glow-discharge kT range', () => {
  for (const kT of [0.3, 0.5, 0.8, 1.0]) {
    const xy = xyOf('neon', kT);
    assert.ok(xy[0] > 0.6, `neon x at kT=${kT}: ${xy[0]}`);
  }
});

test('the strongest derived neon line is 640.2 nm, as observed in sign tubes', () => {
  const powers = EMISSION_LINES.neon
    .map(([wl, gA, Ek]) => [wl, (gA / wl) * Math.exp(-Ek / 0.5)])
    .sort((a, b) => b[1] - a[1]);
  assert.ok(Math.abs(powers[0][0] - 640.2248) < 0.01, `strongest: ${powers[0][0]}`);
});

test('Na I data carries the D doublet at the wavelengths sodiumSPD types', () => {
  // The one place line constants are hand-typed (sodiumSPD) must agree
  // with the fetched data — the provenance chain closes on itself.
  for (const d of [588.9950, 589.5924]) {
    assert.ok(EMISSION_LINES.sodium.some(([wl]) => Math.abs(wl - d) < 1e-3), `D line ${d} missing`);
  }
});

test('full Na I discharge stays within 0.005 of the sodiumSPD doublet chromaticity', () => {
  const lamp = spectrumXy(sodiumSPD(), { cmf: CMF_1931_2_1NM });
  const element = xyOf('sodium');
  assert.ok(Math.abs(lamp[0] - element[0]) < 0.005, `x: ${lamp[0]} vs ${element[0]}`);
  assert.ok(Math.abs(lamp[1] - element[1]) < 0.005, `y: ${lamp[1]} vs ${element[1]}`);
});

test('transition data is sane: visible λ, positive gA, bound Ek, sorted', () => {
  const elements = Object.keys(EMISSION_LINES);
  assert.deepStrictEqual(
    elements.sort(),
    ['argon', 'helium', 'hydrogen', 'krypton', 'mercury', 'neon', 'sodium', 'xenon'],
  );
  for (const el of elements) {
    const rows = EMISSION_LINES[el];
    assert.ok(rows.length >= 10, `${el}: only ${rows.length} lines`);
    let prev = 0;
    for (const [wl, gA, Ek] of rows) {
      assert.ok(wl >= 380 && wl <= 780, `${el} λ ${wl}`);
      assert.ok(gA > 0, `${el} gA ${gA} at ${wl}`);
      // Core-excited autoionizing levels are real ASD entries (Na I
      // quartets sit near 36 eV); the Boltzmann factor silences them
      // (exp(−36/0.5) ≈ 1e-31), so the data stays complete and uncurated.
      assert.ok(Ek > 0 && Ek < 50, `${el} Ek ${Ek} at ${wl}`);
      assert.ok(wl >= prev, `${el} not sorted at ${wl}`);
      prev = wl;
    }
  }
});

test('dischargeSPD forwards grid options to lineSPD', () => {
  const spd = dischargeSPD(EMISSION_LINES.neon, { start: 400, end: 700, step: 1, fwhm: 4 });
  assert.strictEqual(spd.start, 400);
  assert.strictEqual(spd.values.length, 301);
  // Wider profile, same integral — compared on the full default grid, where
  // no line's tail crosses the boundary (the 703.2 nm line straddles a
  // 400–700 window, so a clipped grid would NOT conserve power).
  const wide = dischargeSPD(EMISSION_LINES.neon, { fwhm: 4 });
  const narrow = dischargeSPD(EMISSION_LINES.neon);
  const sum = (s) => s.values.reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(sum(wide) / sum(narrow) - 1) < 1e-3);
});

test('lineSPD remains the open mechanism: a hand-built doublet matches sodiumSPD', () => {
  const a = sodiumSPD();
  const b = lineSPD([[588.9950, 2], [589.5924, 1]]);
  assert.deepStrictEqual(a.values, b.values);
});
