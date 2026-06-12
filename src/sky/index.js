// whitepoint/sky — the Hosek–Wilkie spectral sky-dome radiance model.
//
// L. Hosek and A. Wilkie, "An Analytic Model for Full Spectral Sky-Dome
// Radiance," ACM TOG 31(4) (SIGGRAPH 2012). This is an exact port of the
// authors' reference implementation v1.4a (3-clause BSD); the coefficient
// datasets are copied verbatim by tools/build-sky-data.js and the port is
// verified against the compiled reference (tools/build-sky-oracle.js).
//
// The model: per 40 nm band, nine coefficients of an extended Perez-style
// formula are interpolated from fitted brute-force path-tracing results —
// quintic Bézier in cube-root solar elevation, linear in turbidity and
// ground albedo. Output is absolute spectral radiance, W·m⁻²·sr⁻¹·nm⁻¹.
//
// Domain: solar elevation 0–π/2 (sun above horizon), turbidity 1–10,
// albedo 0–1, view angles on the upper hemisphere, wavelength 320–720 nm
// (0 outside, with the reference's linear fade above 720).

import { SKY_WL, SKY_DATASETS, SKY_RADIANCES } from './data.js';
import { SOLAR_DATASETS, LIMB_DARKENING } from './data-solar.js';

export { SKY_WL };

// Quintic Bernstein blend of 6 control points read at `off` with `stride`.
function quintic(data, off, stride, t) {
  const u = 1 - t;
  return u * u * u * u * u * data[off]
    + 5 * u * u * u * u * t * data[off + stride]
    + 10 * u * u * u * t * t * data[off + 2 * stride]
    + 10 * u * u * t * t * t * data[off + 3 * stride]
    + 5 * u * t * t * t * t * data[off + 4 * stride]
    + t * t * t * t * t * data[off + 5 * stride];
}

// Four-corner albedo/turbidity blend of the elevation quintic. `block` is
// the size of one (albedo, turbidity) cell; the albedo-1 half of the
// dataset starts at 10·block.
function cook(data, block, stride, turbidity, albedo, t, off, out, n) {
  const it = Math.trunc(turbidity);
  const rem = turbidity - it;
  const w00 = (1 - albedo) * (1 - rem), w10 = albedo * (1 - rem);
  const w01 = (1 - albedo) * rem, w11 = albedo * rem;
  const lo0 = block * (it - 1), lo1 = block * 10 + block * (it - 1);
  for (let i = 0; i < n; i++) {
    let v = w00 * quintic(data, lo0 + off + i, stride, t)
      + w10 * quintic(data, lo1 + off + i, stride, t);
    if (it < 10) {
      v += w01 * quintic(data, lo0 + block + off + i, stride, t)
        + w11 * quintic(data, lo1 + block + off + i, stride, t);
    }
    out[i] = v;
  }
  return out;
}

/**
 * Precompute a sky state for given conditions. The returned object feeds
 * skyRadiance/skySPD; reuse it across the whole dome.
 *
 * @param {object} opts
 * @param {number} opts.elevation - solar elevation above horizon, radians (0–π/2)
 * @param {number} [opts.turbidity=3] - Linke-style atmospheric turbidity (1–10)
 * @param {number} [opts.albedo=0.1] - ground albedo (0–1)
 */
export function skyModel({ elevation, turbidity = 3, albedo = 0.1 } = {}) {
  if (!(elevation >= 0 && elevation <= Math.PI / 2 + 1e-12)) {
    throw new RangeError(`solar elevation ${elevation} outside 0–π/2`);
  }
  if (!(turbidity >= 1 && turbidity <= 10)) {
    throw new RangeError(`turbidity ${turbidity} outside 1–10`);
  }
  if (!(albedo >= 0 && albedo <= 1)) {
    throw new RangeError(`albedo ${albedo} outside 0–1`);
  }
  // the reference's elevation parametrization: cube root of the fraction
  // of the way to zenith
  const t = Math.pow(elevation / (Math.PI / 2), 1 / 3);
  const configs = [], radiances = new Array(SKY_WL.length);
  for (let wl = 0; wl < SKY_WL.length; wl++) {
    configs.push(cook(SKY_DATASETS[wl], 9 * 6, 9, turbidity, albedo, t, 0, new Array(9), 9));
    radiances[wl] = cook(SKY_RADIANCES[wl], 6, 1, turbidity, albedo, t, 0, [0], 1)[0];
  }
  return { elevation, turbidity, albedo, configs, radiances };
}

// The extended Perez-style distribution (reference GetRadianceInternal).
function distribution(c, theta, gamma) {
  const cosG = Math.cos(gamma), cosT = Math.cos(theta);
  const expM = Math.exp(c[4] * gamma);
  const rayM = cosG * cosG;
  const mieM = (1 + cosG * cosG) / Math.pow(1 + c[8] * c[8] - 2 * c[8] * cosG, 1.5);
  const zenith = Math.sqrt(cosT);
  return (1 + c[0] * Math.exp(c[1] / (cosT + 0.01)))
    * (c[2] + c[3] * expM + c[5] * rayM + c[6] * mieM + c[7] * zenith);
}

/**
 * Spectral sky radiance for a view direction, W·m⁻²·sr⁻¹·nm⁻¹.
 * Linear interpolation between the model's 40 nm bands, exactly as the
 * reference implementation does.
 *
 * @param {object} state - from skyModel()
 * @param {number} theta - view zenith angle, radians (0 = zenith)
 * @param {number} gamma - angular distance from the sun, radians
 * @param {number} wavelength - nm (320–720; 0 outside)
 */
export function skyRadiance(state, theta, gamma, wavelength) {
  const band = (wavelength - 320) / 40;
  const low = Math.trunc(band);
  if (low < 0 || low >= SKY_WL.length) return 0;
  const interp = band % 1;
  const valLow = distribution(state.configs[low], theta, gamma) * state.radiances[low];
  if (interp < 1e-6) return valLow;
  let result = (1 - interp) * valLow;
  if (low + 1 < SKY_WL.length) {
    result += interp * distribution(state.configs[low + 1], theta, gamma) * state.radiances[low + 1];
  }
  return result;
}

/**
 * The sky's SPD for a view direction, on a uniform grid ready for
 * spectrumXy()/reflectanceToXyz()/cctOf(). Same units as skyRadiance.
 */
export function skySPD(state, theta, gamma, { start = 320, step = 5, end = 720 } = {}) {
  const n = Math.round((end - start) / step) + 1;
  const values = new Array(n);
  for (let i = 0; i < n; i++) {
    values[i] = skyRadiance(state, theta, gamma, start + i * step);
  }
  return { start, step, values };
}

// ---- the solar disc (reference v1.4a solar radiance function) ----

const SOLAR_RADIUS = (0.51 * Math.PI / 180) / 2; // terrestrial, radians
const PIECES = 45, ORDER = 4;

// piecewise cubic in cube-root-transformed elevation; exact port of the
// reference's backward-reading coefficient walk
function srInternal(data, turb0, elevation) {
  let pos = Math.trunc(Math.pow(2 * elevation / Math.PI, 1 / 3) * PIECES);
  if (pos > 44) pos = 44;
  const breakX = Math.pow(pos / PIECES, 3) * (Math.PI * 0.5);
  let off = ORDER * PIECES * turb0 + ORDER * (pos + 1) - 1;
  const x = elevation - breakX;
  let res = 0, xExp = 1;
  for (let i = 0; i < ORDER; i++) {
    res += xExp * data[off--];
    xExp *= x;
  }
  return res;
}

/**
 * Direct radiance of the solar disc itself, W·m⁻²·sr⁻¹·nm⁻¹ — zero
 * outside the disc (angular radius 0.255°), limb-darkened within it
 * (the sun is visibly dimmer and warmer at its edge; the model carries
 * the astronomical 5th-order fit per band). The reference's
 * `solar_radiance` is this plus skyRadiance — add them for a view that
 * includes both the disc and the in-scattered sky.
 *
 * @param {object} state - from skyModel()
 * @param {number} theta - view zenith angle, radians
 * @param {number} gamma - angular distance from the sun's center, radians
 * @param {number} wavelength - nm (320–720; 0 outside)
 */
export function sunRadiance(state, theta, gamma, wavelength) {
  if (wavelength < 320 || wavelength > 720) return 0;
  // disc test: sampleCosine = cos of the angle at the solar surface
  const sinR = Math.sin(SOLAR_RADIUS);
  const sinG = Math.sin(gamma);
  const sc2 = 1 - (sinG * sinG) / (sinR * sinR);
  if (sc2 <= 0) return 0;
  const sampleCosine = Math.sqrt(sc2);

  const elevation = Math.PI / 2 - theta; // the reference evaluates at the VIEW's elevation
  let turbLow = Math.trunc(state.turbidity) - 1;
  let turbFrac = state.turbidity - (turbLow + 1);
  if (turbLow === 9) { turbLow = 8; turbFrac = 1; }
  let wlLow = Math.trunc((wavelength - 320) / 40);
  let wlFrac = (wavelength % 40) / 40;
  if (wlLow === 10) { wlLow = 9; wlFrac = 1; }

  const direct =
    (1 - turbFrac) * ((1 - wlFrac) * srInternal(SOLAR_DATASETS[wlLow], turbLow, elevation)
      + wlFrac * srInternal(SOLAR_DATASETS[wlLow + 1], turbLow, elevation))
    + turbFrac * ((1 - wlFrac) * srInternal(SOLAR_DATASETS[wlLow], turbLow + 1, elevation)
      + wlFrac * srInternal(SOLAR_DATASETS[wlLow + 1], turbLow + 1, elevation));

  let darkening = 0, cExp = 1;
  for (let i = 0; i < 6; i++) {
    darkening += ((1 - wlFrac) * LIMB_DARKENING[wlLow][i] + wlFrac * LIMB_DARKENING[wlLow + 1][i]) * cExp;
    cExp *= sampleCosine;
  }
  return direct * darkening;
}

/**
 * The direct sun's SPD for a view direction (disc only — add skySPD for
 * the total). Default gamma 0 looks at the disc's center: the color of
 * direct sunlight through this atmosphere.
 */
export function sunSPD(state, theta, gamma = 0, { start = 320, step = 5, end = 720 } = {}) {
  const n = Math.round((end - start) / step) + 1;
  const values = new Array(n);
  for (let i = 0; i < n; i++) {
    values[i] = sunRadiance(state, theta, gamma, start + i * step);
  }
  return { start, step, values };
}
