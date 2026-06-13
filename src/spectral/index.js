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
import { CMF_1931_2_1NM } from './data-1nm.js';
import { daylightXy } from '../lab/cct.js';
import { convert } from '../core/convert.js';
import { xyToXyz } from '../constants/whitepoints.js';
import { findCusp } from '../gamut/index.js';

import { V_PRIME_1951 } from './data-scotopic.js';

export { CMF_1931_2, CMF_1964_10, D65_SPD, DAYLIGHT_S };
export { FL2_SPD, FL7_SPD, FL11_SPD } from './data-fluorescent.js';
export { HP1_SPD, HP2_SPD, HP3_SPD, HP4_SPD, HP5_SPD } from './data-hp.js';
export { simulateCVD } from './cvd.js';
export { reflectanceOf, kmMixReflectance, pigmentMix } from './pigment.js';
export { WATER_ABSORPTION } from './data-water.js';
import { EMISSION_LINES } from './data-lines.js';
export { EMISSION_LINES };
export { V_PRIME_1951 };
export { cri, tm30, cam02ViewingConditions, xyzToCam02Ucs } from './quality.js';

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

// ---- Photometry: photopic, scotopic, mesopic ----

// Maximum luminous efficacies. Km anchors the SI definition of the candela
// to V(λ) (683.002 lm/W at the 555 nm peak; CIE 015); K′m = 1700.06 lm/W
// is its scotopic counterpart, anchored so both curves agree at 555.016 nm.
const KM = 683.002;
const KM_PRIME = 1700.06;

/**
 * Photopic luminance of a spectral radiance distribution:
 * Lp = Km·Σ S(λ)·V(λ)·Δλ, with V(λ) = the CMF ȳ. If S is in
 * W·m⁻²·sr⁻¹·nm⁻¹ the result is cd/m²; relative input gives relative output.
 */
export function photopicLuminance(spd, { cmf = CMF_1931_2 } = {}) {
  let L = 0;
  for (let i = 0; i < cmf.y.length; i++) {
    L += sampleSpd(spd, cmf.start + i * cmf.step) * cmf.y[i];
  }
  return KM * L * cmf.step;
}

/**
 * Scotopic (rod-vision) luminance: Ls = K′m·Σ S(λ)·V′(λ)·Δλ, with the
 * CIE 1951 scotopic efficiency V′(λ). Same units convention as
 * photopicLuminance. The two agree by construction on a 555 nm line —
 * that anchor is verified in the test suite, not assumed.
 */
export function scotopicLuminance(spd) {
  let L = 0;
  for (let i = 0; i < V_PRIME_1951.values.length; i++) {
    L += sampleSpd(spd, V_PRIME_1951.start + i * V_PRIME_1951.step) * V_PRIME_1951.values[i];
  }
  return KM_PRIME * L * V_PRIME_1951.step;
}

/**
 * CIE 191:2010 recommended system for mesopic photometry (MES2): the rod/
 * cone blend weight m and mesopic luminance for given photopic and scotopic
 * luminances (cd/m²). m = 1 at and above 5 cd/m² (cones only), m = 0 at and
 * below 0.005 cd/m² (rods only); between, m solves the spec's implicit
 * equation by its published iteration. The constants 0.7670 and 0.3334 are
 * the spec's rounded solutions of those two endpoint conditions.
 *
 * @returns {{m: number, luminance: number}}
 */
export function mesopic(photopic, scotopic) {
  const vp555 = sampleSpd(V_PRIME_1951, 555);
  let m = 0.5, L = photopic;
  for (let i = 0; i < 64; i++) {
    L = (m * photopic + (1 - m) * scotopic * vp555) / (m + (1 - m) * vp555);
    const next = Math.min(1, Math.max(0, 0.7670 + 0.3334 * Math.log10(L)));
    if (Math.abs(next - m) < 1e-12) { m = next; break; }
    m = next;
  }
  if (m === 1) L = photopic;
  if (m === 0) L = scotopic;
  return { m, luminance: L };
}

// ---- Beer–Lambert attenuation ----

/**
 * Attenuate a spectrum through an absorbing medium: Beer–Lambert
 * S(λ)·exp(−a(λ)·d). Pair with WATER_ABSORPTION (Pope & Fry 1997, 1/m)
 * and d in meters for underwater light; any absorption spectrum with
 * reciprocal-length units works the same way.
 */
export function attenuate(spd, absorption, distance) {
  const values = new Array(spd.values.length);
  for (let i = 0; i < values.length; i++) {
    const a = sampleSpd(absorption, spd.start + i * spd.step);
    values[i] = spd.values[i] * Math.exp(-a * distance);
  }
  return { start: spd.start, step: spd.step, values };
}

/**
 * Resample a uniform-grid spectrum onto a new grid by Sprague (1880)
 * quintic interpolation — the method CIE 167:2005 recommends for spectral
 * data tabulated at equal intervals. Exact at source nodes; interior
 * segments (two nodes in from each end) reproduce polynomials through
 * degree 4 to rounding and hit the analytic Planckian to ~4e-9 relative;
 * the two segments at each end use the CIE 167 boundary polynomials,
 * which are approximations tuned for spectra (~4e-4 on the Planckian) —
 * prefer sources that extend a little past the range you need. Never
 * extrapolates: the target grid must lie within the source range.
 * Verified against colour-science's SpragueInterpolator and Planck's law
 * in test/resample.test.js.
 */
export function resample(spd, { start = spd.start, step = 1, end } = {}) {
  const y = spd.values;
  const n = y.length;
  if (n < 6) throw new RangeError('resample: Sprague interpolation needs at least 6 samples');
  const srcEnd = spd.start + (n - 1) * spd.step;
  if (end === undefined) end = srcEnd;
  if (start < spd.start || end > srcEnd + 1e-9) {
    throw new RangeError(`resample: target [${start}, ${end}] outside source [${spd.start}, ${srcEnd}]`);
  }
  // Virtual points beyond each boundary (CIE 167:2005 end polynomials).
  const before2 = (884 * y[0] - 1960 * y[1] + 3033 * y[2] - 2648 * y[3] + 1080 * y[4] - 180 * y[5]) / 209;
  const before1 = (508 * y[0] - 540 * y[1] + 488 * y[2] - 367 * y[3] + 144 * y[4] - 24 * y[5]) / 209;
  const after1 = (-24 * y[n - 6] + 144 * y[n - 5] - 367 * y[n - 4] + 488 * y[n - 3] - 540 * y[n - 2] + 508 * y[n - 1]) / 209;
  const after2 = (-180 * y[n - 6] + 1080 * y[n - 5] - 2648 * y[n - 4] + 3033 * y[n - 3] - 1960 * y[n - 2] + 884 * y[n - 1]) / 209;
  const p = (i) => (i < 0 ? (i === -1 ? before1 : before2) : i >= n ? (i === n ? after1 : after2) : y[i]);
  const count = Math.round((end - start) / step) + 1;
  const values = new Array(count);
  for (let k = 0; k < count; k++) {
    const t = (start + k * step - spd.start) / spd.step;
    // Snap to a node when within fp noise of one — keeps node values exact.
    const i = Math.floor(t + 1e-9);
    const X = t - i < 1e-9 ? 0 : t - i;
    const p0 = p(i - 2), p1 = p(i - 1), p2 = p(i), p3 = p(i + 1), p4 = p(i + 2), p5 = p(i + 3);
    const a1 = (2 * p0 - 16 * p1 + 16 * p3 - 2 * p4) / 24;
    const a2 = (-p0 + 16 * p1 - 30 * p2 + 16 * p3 - p4) / 24;
    const a3 = (-9 * p0 + 39 * p1 - 70 * p2 + 66 * p3 - 33 * p4 + 7 * p5) / 24;
    const a4 = (13 * p0 - 64 * p1 + 126 * p2 - 124 * p3 + 61 * p4 - 12 * p5) / 24;
    const a5 = (-5 * p0 + 25 * p1 - 50 * p2 + 50 * p3 - 25 * p4 + 5 * p5) / 24;
    values[k] = p2 + X * (a1 + X * (a2 + X * (a3 + X * (a4 + X * a5))));
  }
  return { start, step, values };
}

// ---- Emission-line spectra ----

/**
 * SPD of a set of emission lines, each [λ_center nm, power], as Gaussian
 * profiles whose integrals equal the line powers. Real discharge lines are
 * ~0.1 nm wide; the default 2 nm FWHM is the narrowest a 1 nm grid sums
 * exactly (discrete-integral aliasing < 2e-6 by Poisson summation, vs ~5%
 * at 1 nm FWHM), and chromaticity is insensitive to width at this scale.
 * Integrate against the 1 nm CMFs (whitepoint/spectral-1nm) for spiky
 * spectra.
 */
export function lineSPD(lines, { start = 360, step = 1, end = 830, fwhm = 2 } = {}) {
  const sigma = fwhm / (2 * Math.sqrt(2 * Math.LN2));
  const amp = 1 / (sigma * Math.sqrt(2 * Math.PI));
  const n = Math.round((end - start) / step) + 1;
  const values = new Array(n).fill(0);
  for (const [center, power] of lines) {
    for (let i = 0; i < n; i++) {
      const d = (start + i * step - center) / sigma;
      values[i] += power * amp * Math.exp(-0.5 * d * d);
    }
  }
  return { start, step, values };
}

/**
 * SPD of a named atomic emitter, or of your own transition data, derived —
 * not transcribed — from atomic physics: optically-thin emission with
 * Boltzmann-populated upper levels, line power ∝ (g_k·A_ki/λ)·exp(−E_k/kT).
 *
 *   emissionSPD('neon')               // a name from EMISSION_LINES
 *   emissionSPD(EMISSION_LINES.neon)  // the same, data passed directly
 *   emissionSPD(myLines)              // your own [λ_nm, g·A s⁻¹, E_k eV] rows
 *
 * There is no standard illuminant for a neon sign — this is how you compute
 * one. The same model fits any thermally-excited atomic emitter, a discharge
 * tube or a flame metal (sodium, lithium…). kT is the excitation temperature
 * in eV; the 0.5 eV default sits in the measured glow-discharge range, and
 * since level energies dominate the line ratios, each emitter lands in its
 * known color region across that whole range (neon red-orange x ≈ 0.67,
 * argon lavender, mercury blue-white — pinned in test/lines.test.js).
 * Honesty: sign plasmas are not in LTE; kT is an effective parameter, and
 * ASD's qualitative observed-intensity column is deliberately unused. The
 * lines are spiky — integrate against the 1 nm observer (see emissionColor,
 * or pass CMF_1931_2_1NM to spectrumXy/emissionToXyz).
 */
export function emissionSPD(emitter, { kT = 0.5, ...opts } = {}) {
  const transitions = typeof emitter === 'string' ? EMISSION_LINES[emitter] : emitter;
  if (!transitions) {
    throw new RangeError(`emissionSPD: unknown emitter '${emitter}' — known: ${Object.keys(EMISSION_LINES).join(', ')}`);
  }
  const lines = transitions.map(([wl, gA, Ek]) => [wl, (gA / wl) * Math.exp(-Ek / kT)]);
  return lineSPD(lines, opts);
}

/**
 * The render-ready color of an atomic emitter, in one call — the spectral
 * pipeline a web developer actually wants:
 *
 *   emissionColor('neon')                          // → [0.63, 0.26, 33] oklch, sRGB-safe
 *   emissionColor('neon', { gamut: 'display-p3' }) // → a redder neon a wide screen can show
 *   emissionColor('argon', { to: 'srgb' })         // → sRGB coords, ready for a hex
 *
 * The hue *and saturation* are the physics: emissionSPD → XYZ against the
 * 1 nm observer (so the spiky lines don't alias — the trap of the
 * lower-level path) → the emitter's chromaticity. The color is returned at
 * the chosen display's cusp *lightness* (as bright as that gamut allows for
 * the hue — right for a glowing light), carrying the emitter's own chroma
 * clamped to what the display can show. So saturated emitters land on the
 * cusp (vivid neon) while pale ones stay pale (argon's lavender, not a
 * cranked magenta) — never out of range. `gamut` picks the display (default
 * 'srgb'); a wider gamut shows the same hue with more chroma (the
 * wide-gamut win, made literal). `to` is just the output coordinate space.
 *
 * The physics is here, at load. For the GPU side, emit the matching color
 * math with whitepoint/codegen (glsl, glslGamutMap) — same constants,
 * parity-tested. This is a convenience over emissionSPD + emissionToXyz +
 * findCusp + convert; every step stays individually exported.
 */
export function emissionColor(emitter, { to = 'oklch', gamut = 'srgb', kT } = {}) {
  const xy = spectrumXy(emissionSPD(emitter, { kT }), { cmf: CMF_1931_2_1NM });
  // Hue and chroma at unit luminance; oklab L and C both scale as the cube
  // root of overall luminance, so rescaling to the cusp lightness is exact.
  const [L1, C1, h] = convert(xyToXyz(xy), 'xyz-d65', 'oklch');
  const [Lc, Cc] = findCusp(h, gamut);
  const C = Math.min(C1 * (Lc / L1), Cc); // the emitter's saturation, gamut-clamped
  return convert([Lc, C, h], 'oklch', to);
}

/**
 * Low-pressure sodium (SOX) lamp: the Na D doublet, D2 588.9950 nm and
 * D1 589.5924 nm (NIST ASD, air wavelengths) at the 2:1 statistical-weight
 * intensity ratio. The canonical near-monochromatic illuminant — under it,
 * color appearance collapses to a single hue.
 *
 * Note this is NOT a CIE standard illuminant: the CIE standardizes only the
 * *high*-pressure sodium lamps (HP1_SPD, HP2_SPD). It's a modeled idealized
 * lamp, kept exact as two lines; for the full Na I line set under the
 * discharge model see emissionSPD('sodium').
 */
export function lowPressureSodiumSPD(opts) {
  return lineSPD([[588.9950, 2], [589.5924, 1]], opts);
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
