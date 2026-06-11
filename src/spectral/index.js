// whitepoint/spectral — colorimetry from first principles.
//
// Every color begins as a spectrum; XYZ is its integral against the CIE
// color matching functions. This module closes the loop: measured
// reflectances under any illuminant, emission spectra, CIE daylight
// synthesis from CCT, and the TRUE Planckian locus from Planck's law —
// the derivation cct.js promised would "arrive with error bounds or not
// at all" (bounds are measured in test/spectral.test.js).
//
// Spectra are { start, step, values } on a uniform nanometer grid; linear
// interpolation between samples, zero outside (CIE 015 practice for
// abridged data). Integration is the standard Riemann sum at the CMF grid.

import { CMF_1931_2, CMF_1964_10, D65_SPD, DAYLIGHT_S } from './data.js';
import { daylightXy } from '../lab/cct.js';

export { CMF_1931_2, CMF_1964_10, D65_SPD, DAYLIGHT_S };
export { FL2_SPD, FL7_SPD, FL11_SPD } from './data-fluorescent.js';
export { simulateCVD } from './cvd.js';
export { reflectanceOf, kmMixReflectance, pigmentMix } from './pigment.js';

/** Sample a uniform-grid spectrum at wavelength λ (nm), linear interpolation. */
export function sampleSpd(spd, lambda) {
  const t = (lambda - spd.start) / spd.step;
  if (t < 0 || t > spd.values.length - 1) return 0;
  const i = Math.floor(t);
  if (i === spd.values.length - 1) return spd.values[i];
  const f = t - i;
  return spd.values[i] * (1 - f) + spd.values[i + 1] * f;
}

/**
 * Unnormalized tristimulus of an emission spectrum: X = Σ S(λ)·x̄(λ)·Δλ.
 * Proportional values — normalize per your application (e.g. divide by Y
 * for relative colorimetry, or use spectrumXy for chromaticity).
 */
export function emissionToXyz(spd, { cmf = CMF_1931_2 } = {}, out = [0, 0, 0]) {
  let X = 0, Y = 0, Z = 0;
  for (let i = 0; i < cmf.x.length; i++) {
    const lambda = cmf.start + i * cmf.step;
    const s = sampleSpd(spd, lambda);
    X += s * cmf.x[i];
    Y += s * cmf.y[i];
    Z += s * cmf.z[i];
  }
  out[0] = X * cmf.step;
  out[1] = Y * cmf.step;
  out[2] = Z * cmf.step;
  return out;
}

/** xy chromaticity of a spectrum. */
export function spectrumXy(spd, opts, out = [0, 0]) {
  const xyz = emissionToXyz(spd, opts, [0, 0, 0]);
  const sum = xyz[0] + xyz[1] + xyz[2];
  out[0] = xyz[0] / sum;
  out[1] = xyz[1] / sum;
  return out;
}

/**
 * Hub-ready XYZ (Y = 1 for the perfect reflector) of a reflectance spectrum
 * under an illuminant: the canonical CIE 015 object-color computation,
 *   X = k·Σ R(λ)·S(λ)·x̄(λ)·Δλ,  k = 1 / Σ S(λ)·ȳ(λ)·Δλ.
 * The result feeds convert()/adapt() directly.
 */
export function reflectanceToXyz(refl, { illuminant = D65_SPD, cmf = CMF_1931_2 } = {}, out = [0, 0, 0]) {
  let X = 0, Y = 0, Z = 0, k = 0;
  for (let i = 0; i < cmf.x.length; i++) {
    const lambda = cmf.start + i * cmf.step;
    const s = sampleSpd(illuminant, lambda);
    const r = sampleSpd(refl, lambda);
    const sr = s * r;
    X += sr * cmf.x[i];
    Y += sr * cmf.y[i];
    Z += sr * cmf.z[i];
    k += s * cmf.y[i];
  }
  out[0] = X / k;
  out[1] = Y / k;
  out[2] = Z / k;
  return out;
}

// ---- Planck's law: the true blackbody locus ----

const C2 = 1.4388e-2; // m·K — the CIE-adopted second radiation constant (ITS-90)

/**
 * Relative SPD of a Planckian (blackbody) radiator at temperature T,
 * normalized to 1 at 560 nm per CIE convention. Pure physics, no fit.
 */
export function planckianSPD(T, { start = 360, step = 5, end = 830 } = {}) {
  const n = Math.round((end - start) / step) + 1;
  const values = new Array(n);
  const l560 = 560e-9;
  const ref = Math.pow(l560, -5) / (Math.exp(C2 / (l560 * T)) - 1);
  for (let i = 0; i < n; i++) {
    const l = (start + i * step) * 1e-9;
    values[i] = (Math.pow(l, -5) / (Math.exp(C2 / (l * T)) - 1)) / ref;
  }
  return { start, step, values };
}

/**
 * The TRUE Planckian locus: blackbody chromaticity by integration of
 * Planck's law against the CMFs. Replaces fitted approximations entirely.
 * Valid wherever Planck's law is (any positive T).
 */
export function planckianXy(T, opts, out = [0, 0]) {
  return spectrumXy(planckianSPD(T), opts, out);
}

/** CIE standard illuminant A: a Planckian radiator at 2856 K (CIE 015). */
export function illuminantASPD(opts) {
  return planckianSPD(2856, opts);
}

// ---- CIE daylight synthesis (CIE 015 §4.1.2) ----

// ---- Inverse CCT: what temperature is this white? ----

// CIE 1960 uv (the chromaticity space CCT is defined in; CIE 015).
function uv1960(xy, out = [0, 0]) {
  const d = -2 * xy[0] + 12 * xy[1] + 3;
  out[0] = (4 * xy[0]) / d;
  out[1] = (6 * xy[1]) / d;
  return out;
}

/**
 * Correlated color temperature and Duv of a chromaticity — solved by
 * minimizing CIE 1960 uv distance to this library's EXACT Planckian locus
 * (Planck's law integrated against the CMFs), not a fitted approximation
 * like McCamy. Duv is signed: positive above the locus (greenish), negative
 * below (pinkish). CCT is conventionally meaningful for |duv| ≲ 0.05.
 *
 * @param {number[]} xy - chromaticity
 * @returns {{cct: number, duv: number}}
 */
export function cctOf(xy) {
  const target = uv1960(xy);
  const P = [0, 0];
  const locusUv = (T) => uv1960(planckianXy(T), P);
  const d2 = (T) => {
    const p = locusUv(T);
    const du = p[0] - target[0], dv = p[1] - target[1];
    return du * du + dv * dv;
  };

  // golden-section in mired (1e6/T), where the locus is most uniform
  const PHI = (Math.sqrt(5) - 1) / 2;
  let lo = 1e6 / 25000, hi = 1e6 / 1000;
  let x1 = hi - PHI * (hi - lo), x2 = lo + PHI * (hi - lo);
  let f1 = d2(1e6 / x1), f2 = d2(1e6 / x2);
  for (let i = 0; i < 60 && hi - lo > 1e-7; i++) {
    if (f1 < f2) {
      hi = x2; x2 = x1; f2 = f1;
      x1 = hi - PHI * (hi - lo); f1 = d2(1e6 / x1);
    } else {
      lo = x1; x1 = x2; f1 = f2;
      x2 = lo + PHI * (hi - lo); f2 = d2(1e6 / x2);
    }
  }
  const cct = 1e6 / ((lo + hi) / 2);

  // signed distance, Ohno's convention: positive when v sits above the
  // locus (greenish), negative below (pinkish)
  const p = locusUv(cct);
  const sign = Math.sign(target[1] - p[1]) || 1;
  return { cct, duv: sign * Math.sqrt(d2(cct)) };
}

/**
 * Relative SPD of CIE daylight at correlated color temperature T
 * (4000–25000 K), synthesized from the S0/S1/S2 basis functions with
 * weights M1/M2 from the daylight-locus chromaticity.
 */
export function daylightSPD(T) {
  const [xD, yD] = daylightXy(T);
  const M = 0.0241 + 0.2562 * xD - 0.7341 * yD;
  const M1 = (-1.3515 - 1.7703 * xD + 5.9114 * yD) / M;
  const M2 = (0.03 - 31.4424 * xD + 30.0717 * yD) / M;
  const { start, step, s0, s1, s2 } = DAYLIGHT_S;
  const values = new Array(s0.length);
  for (let i = 0; i < s0.length; i++) {
    values[i] = s0[i] + M1 * s1[i] + M2 * s2[i];
  }
  return { start, step, values };
}
