// Load-time derivation: every light in the alley starts as a spectrum,
// never a hex code. The naive pipeline's colors are derived here too, by
// doing exactly what a design workflow does — collapse the true color to
// clipped sRGB once, then treat those 8-bit-ish values as the light.
//
// The trick that makes the render exact for diffuse surfaces: for each
// (light, material) pair we integrate SPD × reflectance × CMF → XYZ here,
// on the CPU, once. Spatial falloff is wavelength-independent, so the GPU
// only ever scales and sums these precomputed responses — no spectral math
// per frame, no approximation for diffuse bounce.

import {
  dischargeSPD, sodiumSPD, EMISSION_LINES,
  emissionToXyz, reflectanceOf, reflectanceToXyz,
} from '../../src/spectral/index.js';
import { CMF_1931_2_1NM } from '../../src/spectral/data-1nm.js';
import { convert, parseTo, clip } from '../../src/index.js';

const CMF = { cmf: CMF_1931_2_1NM };

/** Gas catalog for the picker: label + the physics behind the color. */
export const GASES = ['neon', 'argon', 'mercury', 'helium', 'krypton', 'xenon', 'hydrogen'];

/** Y-normalized SPD of a gas discharge — intensity knobs mean luminance. */
export function gasSPD(gas) {
  const spd = gas === 'sodium-lamp' ? sodiumSPD() : dischargeSPD(EMISSION_LINES[gas]);
  const Y = emissionToXyz(spd, CMF)[1];
  return { start: spd.start, step: spd.step, values: spd.values.map((v) => v / Y) };
}

/** XYZ (Y = 1) of a light SPD. */
export function lightXyz(spd) {
  return emissionToXyz(spd, CMF);
}

/** The "design tool" equivalent: true XYZ collapsed to clipped sRGB. */
export function naiveSrgb(xyz) {
  return clip(convert(xyz, 'xyz-d65', 'srgb'));
}

/**
 * Materials: plausible reflectance spectra solved from base colors
 * (Jakob–Hanika via reflectanceOf — smooth, physical, honest-labeled as
 * plausible rather than measured).
 */
export const MATERIALS = {
  brick: parseTo('#7c4935', 'srgb'),
  mortar: parseTo('#8d857a', 'srgb'),
  asphalt: parseTo('#34363c', 'srgb'),
  asphaltWet: parseTo('#22242a', 'srgb'),
  door: parseTo('#2e5950', 'srgb'),
  concrete: parseTo('#6f6a62', 'srgb'),
};

export function materialReflectance(name) {
  return reflectanceOf(MATERIALS[name], 'srgb');
}

/**
 * The full precomputation: lights × materials.
 * Returns per-light { spd, xyz, naive } and per-material per-light pair XYZ.
 */
export function deriveScene(lightDefs) {
  const lights = lightDefs.map((def) => {
    const spd = gasSPD(def.gas);
    const xyz = lightXyz(spd);
    return { ...def, spd, xyz, naive: naiveSrgb(xyz) };
  });
  const pairs = {};
  for (const name of Object.keys(MATERIALS)) {
    const refl = materialReflectance(name);
    pairs[name] = lights.map((l) => reflectanceToXyz(refl, { illuminant: l.spd, ...CMF }));
  }
  return { lights, pairs };
}
