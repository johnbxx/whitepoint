// Load-time derivation: every light in the alley starts as a spectrum,
// never a hex code. The naive pipeline's colors are derived here too, by
// doing exactly what a design workflow does — collapse the true color to
// clipped sRGB once, then treat those values as the light.
//
// The trick that makes the render exact for diffuse surfaces: for each
// (light, material) pair we integrate SPD × reflectance × CMF → XYZ here,
// on the CPU, once. Spatial falloff is wavelength-independent, so the GPU
// only ever scales and sums these precomputed responses — no spectral math
// per frame, no approximation for diffuse bounce.

import {
  dischargeSPD, sodiumSPD, EMISSION_LINES,
  emissionToXyz, reflectanceOf, reflectanceToXyz,
  planckianSPD, attenuate,
} from '../../src/spectral/index.js';
import { CMF_1931_2_1NM } from '../../src/spectral/data-1nm.js';
import { convert, parseTo, clip } from '../../src/index.js';

const CMF = { cmf: CMF_1931_2_1NM };
const GRID = { start: 360, step: 1, end: 830 };

/** Gas catalog for the picker, with the physics behind each color. */
export const GASES = {
  neon: 'Ne I — the classic red-orange; 640.2 nm strongest',
  argon: 'Ar I — pale lavender',
  mercury: 'Hg I — blue-white; 435.8 / 546.1 nm',
  helium: 'He I — peach; D3 587.6 nm',
  krypton: 'Kr I — pale white-lavender',
  xenon: 'Xe I — blue-violet',
  hydrogen: 'H I — Balmer pink; Hα 656.3 nm',
};

function yNorm(spd) {
  const Y = emissionToXyz(spd, CMF)[1];
  return { start: spd.start, step: spd.step, values: spd.values.map((v) => v / Y) };
}

/** Y-normalized SPD of a gas discharge — intensity knobs mean luminance.
 * kT (eV) is the one model parameter: the excitation temperature of the
 * Boltzmann emission model. The sodium streetlight is a lamp model (the
 * D doublet), not a Boltzmann gas — it ignores kT. */
export function gasSPD(gas, kT) {
  return yNorm(gas === 'sodium-lamp' ? sodiumSPD() : dischargeSPD(EMISSION_LINES[gas], { kT }));
}

/** CSS color of a monochromatic line: the CMF sample at λ, library-routed. */
export function lineColorCss(lambda) {
  const i = Math.round(lambda) - CMF_1931_2_1NM.start;
  const xyz = [CMF_1931_2_1NM.x[i], CMF_1931_2_1NM.y[i], CMF_1931_2_1NM.z[i]];
  const s = clip(convert(xyz.map((v) => v / Math.max(...xyz, 1e-6)), 'xyz-d65', 'srgb'));
  return `rgb(${s.map((v) => Math.round(v * 255)).join(',')})`;
}

/** Relative line powers of a gas under the discharge model, for plotting. */
export function linePowers(gas, kT = 0.5) {
  if (gas === 'sodium-lamp') return [[588.995, 1], [589.5924, 0.5]];
  const lines = EMISSION_LINES[gas].map(([wl, gA, Ek]) => [wl, (gA / wl) * Math.exp(-Ek / kT)]);
  const max = Math.max(...lines.map((l) => l[1]));
  return lines.map(([wl, p]) => [wl, p / max]);
}

/** The "design tool" equivalent: true XYZ collapsed to clipped sRGB. */
export function naiveSrgb(xyz) {
  return clip(convert(xyz, 'xyz-d65', 'srgb'));
}

/**
 * Stained glass: a 2700 K incandescent bulb (Planck's law — shipped)
 * filtered through plausible colorant transmittances (Jakob–Hanika via
 * reflectanceOf, honest-labeled: smooth and physical, not measured dyes),
 * applied with Beer–Lambert attenuate(). Returns per-pane XYZ for the
 * window geometry plus the aggregate SPD that lights the alley.
 */
export function windowLight(paneHexes) {
  const bulb = yNorm(planckianSPD(2700, GRID));
  const panes = paneHexes.map((hex) => {
    const T = reflectanceOf(parseTo(hex, 'srgb'), 'srgb');
    const absorption = {
      start: T.start, step: T.step,
      values: T.values.map((v) => -Math.log(Math.max(v, 1e-3))),
    };
    const spd = attenuate(bulb, absorption, 1);
    const xyz = emissionToXyz(spd, CMF);
    return { spd, xyz, naive: naiveSrgb(xyz) };
  });
  const sum = { ...GRID, values: new Array(bulb.values.length).fill(0) };
  for (const p of panes) p.spd.values.forEach((v, i) => { sum.values[i] += v; });
  return { panes, spd: yNorm(sum) };
}

/**
 * Materials: plausible reflectance spectra solved from base colors
 * (Jakob–Hanika — smooth, physical, honest-labeled as plausible rather
 * than measured).
 */
export const MATERIALS = {
  brick: parseTo('#7c4935', 'srgb'),
  mortar: parseTo('#8d857a', 'srgb'),
  asphalt: parseTo('#3a3c42', 'srgb'),
  asphaltWet: parseTo('#1c1e24', 'srgb'),
  door: parseTo('#2e5950', 'srgb'),
  concrete: parseTo('#6f6a62', 'srgb'),
  panel: parseTo('#16181d', 'srgb'),
  metal: parseTo('#2c3138', 'srgb'),
};

/**
 * The full precomputation: lights × materials.
 * Light defs: { name, gas } | { name, window: [paneHexes] }, plus
 * pos/intensity passed through. Returns lights with { spd, xyz, naive },
 * the per-material pair table, and window pane colors for the geometry.
 */
export function deriveScene(lightDefs) {
  let windowPanes = null;
  const lights = lightDefs.map((def) => {
    let spd;
    if (def.window) {
      const w = windowLight(def.window);
      windowPanes = w.panes;
      spd = w.spd;
    } else {
      spd = gasSPD(def.gas);
    }
    const xyz = emissionToXyz(spd, CMF);
    return { ...def, spd, xyz, naive: naiveSrgb(xyz) };
  });
  const pairs = {};
  for (const [name, coords] of Object.entries(MATERIALS)) {
    const refl = reflectanceOf(coords, 'srgb');
    pairs[name] = lights.map((l) => reflectanceToXyz(refl, { illuminant: l.spd, ...CMF }));
  }
  // Night sky over a city is mostly scattered streetlight: reuse the sodium
  // chromaticity at rooftop-glow level rather than inventing a sky color.
  const sky = emissionToXyz(gasSPD('sodium-lamp'), CMF).map((v) => v * 0.035);
  return { lights, pairs, windowPanes, sky, skyNaive: naiveSrgb(sky.map((v) => v * 12)) };
}

/** Recompute one light's spectral identity in place (gas picker / kT slider). */
export function swapGas(derived, index, gas, kT) {
  const l = derived.lights[index];
  l.gas = gas;
  l.spd = gasSPD(gas, kT);
  l.xyz = emissionToXyz(l.spd, CMF);
  l.naive = naiveSrgb(l.xyz);
  for (const [name, coords] of Object.entries(MATERIALS)) {
    derived.pairs[name][index] = reflectanceToXyz(reflectanceOf(coords, 'srgb'), { illuminant: l.spd, ...CMF });
  }
  return l;
}
