// Generates src/spectral/data-lines.js from the NIST Atomic Spectra Database.
// No spectral value in whitepoint is ever typed by hand — this script is the
// provenance chain. Source:
//
//  - NIST ASD lines query (physics.nist.gov/cgi-bin/ASD/lines1.pl),
//    neutral-atom (I) observed air wavelengths and relative intensities,
//    380–780 nm, tab-delimited. Raw responses are cached in tools/data/ as
//    asd-<element>.tsv and committed; the module is regenerated from cache.
//
// ASD relative intensities are qualitative — they come from heterogeneous
// observations and carry no common scale across (or strictly within)
// elements. Line *positions* dominate the chromaticity of a discharge, so
// the generated module is validated where it matters: this script prints
// the integrated chromaticity per element, and test/lines.test.js pins the
// physically-known regions (Ne red-orange, Hg blue-white, Na amber).
//
// Usage: node tools/build-gas-lines.js [--refetch]

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CMF_1931_2_1NM } from '../src/spectral/data-1nm.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'tools', 'data');
const refetch = process.argv.includes('--refetch');

// Neutral-atom spectra: the dominant emission of low-pressure sign tubes.
const SPECIES = {
  hydrogen: 'H I',
  helium: 'He I',
  neon: 'Ne I',
  sodium: 'Na I',
  argon: 'Ar I',
  krypton: 'Kr I',
  xenon: 'Xe I',
  mercury: 'Hg I',
};

const LOW_NM = 380;
const HIGH_NM = 780;

function asdUrl(spectrum) {
  const params = new URLSearchParams({
    spectra: spectrum,
    limits_type: '0',
    low_w: String(LOW_NM),
    upp_w: String(HIGH_NM),
    unit: '1', // nm
    format: '3', // tab-delimited
    remove_js: 'on',
    en_unit: '1', // eV
    output: '0',
    show_obs_wl: '1',
    order_out: '0',
    show_av: '2', // air wavelengths for 200 nm–2 µm
    A_out: '0', // Aki
    intens_out: 'on',
    enrg_out: 'on', // Ei, Ek
    g_out: 'on', // gi, gk
    allowed_out: '1',
    forbid_out: '1',
    line_out: '0',
    no_spaces: 'on',
  });
  return `https://physics.nist.gov/cgi-bin/ASD/lines1.pl?${params}`;
}

async function fetchCached(element, spectrum) {
  const file = join(dataDir, `asd-${element}.tsv`);
  if (!refetch && existsSync(file)) return readFileSync(file, 'utf8');
  const res = await fetch(asdUrl(spectrum));
  if (!res.ok) throw new Error(`ASD ${spectrum}: HTTP ${res.status}`);
  const text = await res.text();
  if (!text.includes('obs_wl')) throw new Error(`ASD ${spectrum}: unexpected response\n${text.slice(0, 200)}`);
  writeFileSync(file, text);
  console.log(`fetched ${spectrum} → tools/data/asd-${element}.tsv`);
  return text;
}

// A TSV row is quoted fields named by the header line. The qualitative
// `intens` column is deliberately ignored — its values mix observation
// series with incompatible scales (Ne I lists 692.9 nm at 100000 from one
// source and 640.2 nm at 20000 from another). We keep only the critically
// evaluated quantities: observed air wavelength, transition probability
// Aki, upper-level statistical weight g_k, and upper-level energy Ek.
function parseLines(tsv) {
  const rows = tsv.trim().split('\n');
  const header = rows[0].split('\t').map((h) => h.trim());
  const [iWl, iAki, iEk, iGk] = ['obs_wl_air(nm)', 'Aki(s^-1)', 'Ek(eV)', 'g_k']
    .map((name) => header.indexOf(name));
  if ([iWl, iAki, iEk, iGk].includes(-1)) throw new Error(`unexpected ASD header: ${rows[0]}`);
  const out = [];
  for (const row of rows.slice(1)) {
    const cells = row.split('\t').map((c) => c.replaceAll('"', '').trim());
    const wl = parseFloat(cells[iWl]);
    const aki = parseFloat(cells[iAki]);
    const ek = parseFloat(cells[iEk]?.replaceAll(/[[\]()?+x]/g, ''));
    const gk = parseFloat(cells[iGk]);
    if (![wl, aki, ek, gk].every(Number.isFinite) || wl < LOW_NM || wl > HIGH_NM) continue;
    out.push([wl, Number((gk * aki).toPrecision(4)), Number(ek.toFixed(4))]);
  }
  return out.sort((a, b) => a[0] - b[0]);
}

// Chromaticity report — the discharge model + line synthesis duplicated
// from src/spectral so the generator never imports the package that
// imports the module it writes. Optically-thin emission with Boltzmann
// upper-level populations at excitation temperature kT (eV):
// power ∝ (g_k·A_ki/λ)·exp(−E_k/kT).
function chromaticity(transitions, kT) {
  const sigma = 2 / (2 * Math.sqrt(2 * Math.LN2));
  const amp = 1 / (sigma * Math.sqrt(2 * Math.PI));
  let X = 0, Y = 0, Z = 0;
  const { start, step, x, y, z } = CMF_1931_2_1NM;
  for (let i = 0; i < x.length; i++) {
    const nm = start + i * step;
    let s = 0;
    for (const [center, gA, Ek] of transitions) {
      const d = (nm - center) / sigma;
      if (Math.abs(d) < 8) s += (gA / center) * Math.exp(-Ek / kT) * amp * Math.exp(-0.5 * d * d);
    }
    X += s * x[i]; Y += s * y[i]; Z += s * z[i];
  }
  const sum = X + Y + Z;
  return [X / sum, Y / sum];
}

const fetchedAt = '2026-06-12';
const entries = [];
for (const [element, spectrum] of Object.entries(SPECIES)) {
  const lines = parseLines(await fetchCached(element, spectrum));
  if (lines.length === 0) throw new Error(`${spectrum}: no usable lines`);
  entries.push([element, spectrum, lines]);
}

// kT scan: where does each element land across plausible excitation
// temperatures? The committed validation values live in test/lines.test.js.
const SCAN = [0.3, 0.5, 0.8, 1.0, 1.5, 2.0];
console.log(`         lines  ${SCAN.map((t) => `xy@${t}eV`.padEnd(14)).join('')}`);
for (const [element, spectrum, lines] of entries) {
  const xys = SCAN.map((kT) => chromaticity(lines, kT).map((v) => v.toFixed(3)).join(' '));
  console.log(`${spectrum.padEnd(6)} ${String(lines.length).padStart(4)}   ${xys.map((s) => s.padEnd(14)).join('')}`);
}

let body = '';
for (const [element, spectrum, lines] of entries) {
  body += `  /** ${spectrum}, ${lines.length} lines with evaluated transition probabilities. */\n`;
  body += `  ${element}: [${lines.map((row) => `[${row.join(',')}]`).join(',')}],\n`;
}

const module = `// GENERATED by tools/build-gas-lines.js — do not edit.
// Neutral-atom emission-line transitions, NIST Atomic Spectra Database
// (fetched ${fetchedAt}): observed air wavelength λ (nm), g_k·A_ki (s⁻¹),
// and upper-level energy E_k (eV), ${LOW_NM}–${HIGH_NM} nm, for every line
// with a critically evaluated transition probability. Raw query responses:
// tools/data/asd-*.tsv. ASD's qualitative \`intens\` column is not used —
// line powers are derived, not transcribed: see emissionSPD.

/** Emission-line transitions per element: arrays of [λ_air nm, g_k·A_ki s⁻¹, E_k eV]. */
export const EMISSION_LINES = {
${body}};
`;

writeFileSync(join(root, 'src', 'spectral', 'data-lines.js'), module);
console.log('wrote src/spectral/data-lines.js');
