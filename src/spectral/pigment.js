// Pigment (subtractive) mixing via Kubelka–Munk theory on derived spectra.
//
// Two pieces, both derivation rather than tables:
//
// 1. Spectral upsampling (Jakob & Hanika 2019, "A Low-Dimensional Function
//    Space for Efficient Spectral Upsampling"): a color's plausible
//    reflectance is R(λ) = sigmoid(c₂ + c₁·λ̃ + c₀·λ̃²), with the three
//    coefficients NEWTON-SOLVED per color so that integrating R under D65
//    against our CMFs reproduces the color's XYZ exactly. The paper
//    precomputes lookup tables; we solve directly (analytic Jacobian,
//    damped Newton) — no transcribed coefficients anywhere.
//
// 2. Kubelka–Munk single-constant mixing (Kubelka & Munk 1931; Duncan 1940
//    for mixtures): per wavelength, K/S = (1−R)²/(2R); concentrations mix
//    linearly in K/S; back via R = 1 + K/S − √((K/S)² + 2·K/S).
//
// `t` is pigment concentration, not perceptual position — that's the
// physics. Mixing yellow and blue passes through green, as paint does.

import { CMF_1931_2, D65_SPD } from './data.js';
import { sampleSpd, reflectanceToXyz } from './index.js';
import { convert } from '../core/convert.js';
import { invert, mulVec } from '../core/mat3.js';

const N = CMF_1931_2.x.length;
const START = CMF_1931_2.start;
const STEP = CMF_1931_2.step;

// Precomputed per-grid-point: normalized wavelength basis and D65-weighted
// CMF products with the perfect-reflector normalization folded in.
const LT = new Array(N); // λ̃ ∈ [-1, 1], centered for conditioning
const SX = new Array(N);
const SY = new Array(N);
const SZ = new Array(N);
{
  let k = 0;
  for (let i = 0; i < N; i++) {
    const lambda = START + i * STEP;
    LT[i] = (lambda - 595) / 235;
    const s = sampleSpd(D65_SPD, lambda);
    SX[i] = s * CMF_1931_2.x[i];
    SY[i] = s * CMF_1931_2.y[i];
    SZ[i] = s * CMF_1931_2.z[i];
    k += SY[i];
  }
  for (let i = 0; i < N; i++) {
    SX[i] /= k; SY[i] /= k; SZ[i] /= k;
  }
}

const sigmoid = (x) => 0.5 + x / (2 * Math.sqrt(1 + x * x));
const sigmoidInv = (y) => {
  const u = 2 * y - 1;
  return u / Math.sqrt(1 - u * u);
};

// Integrate the sigmoid-polynomial reflectance and its Jacobian.
function evalF(c, F, J) {
  F[0] = 0; F[1] = 0; F[2] = 0;
  for (let r = 0; r < 9; r++) J[r] = 0;
  for (let i = 0; i < N; i++) {
    const lt = LT[i];
    const p = c[0] * lt * lt + c[1] * lt + c[2];
    const R = sigmoid(p);
    F[0] += R * SX[i]; F[1] += R * SY[i]; F[2] += R * SZ[i];
    const d = 0.5 / Math.pow(1 + p * p, 1.5); // S'(p)
    const b0 = d * lt * lt, b1 = d * lt, b2 = d;
    J[0] += b0 * SX[i]; J[1] += b1 * SX[i]; J[2] += b2 * SX[i];
    J[3] += b0 * SY[i]; J[4] += b1 * SY[i]; J[5] += b2 * SY[i];
    J[6] += b0 * SZ[i]; J[7] += b1 * SZ[i]; J[8] += b2 * SZ[i];
  }
}

const _F = [0, 0, 0];
const _J = new Array(9);
const _step = [0, 0, 0];
const _resid = [0, 0, 0];

function solveCoeffs(xyz) {
  // clamp luminance into the solvable open interval, preserving chromaticity
  let [X, Y, Z] = xyz;
  if (Y <= 1e-6) return [0, 0, sigmoidInv(1e-4)]; // black: flat dark reflectance
  const yClamp = Math.min(Math.max(Y, 5e-4), 0.9995);
  const s = yClamp / Y;
  X *= s; Y *= s; Z *= s;

  const c = [0, 0, sigmoidInv(Math.min(Math.max(Y, 1e-3), 0.999))];
  let err = Infinity;
  for (let iter = 0; iter < 60; iter++) {
    evalF(c, _F, _J);
    _resid[0] = _F[0] - X; _resid[1] = _F[1] - Y; _resid[2] = _F[2] - Z;
    err = Math.max(Math.abs(_resid[0]), Math.abs(_resid[1]), Math.abs(_resid[2]));
    if (err < 1e-10) break;
    mulVec(invert(_J), _resid, _step);
    // damped: halve the step while it increases the residual
    let scale = 1;
    for (let h = 0; h < 10; h++) {
      const trial = [c[0] - scale * _step[0], c[1] - scale * _step[1], c[2] - scale * _step[2]];
      evalF(trial, _F, _J);
      const e2 = Math.max(Math.abs(_F[0] - X), Math.abs(_F[1] - Y), Math.abs(_F[2] - Z));
      if (e2 < err) {
        c[0] = trial[0]; c[1] = trial[1]; c[2] = trial[2];
        break;
      }
      scale *= 0.5;
      if (h === 9) { c[0] -= scale * _step[0]; c[1] -= scale * _step[1]; c[2] -= scale * _step[2]; }
    }
  }
  return c;
}

const _cache = new Map();

/**
 * A plausible smooth reflectance spectrum for a color (Jakob–Hanika sigmoid,
 * Newton-solved so it integrates back to the color's XYZ under D65 exactly).
 * Cached per color.
 */
export function reflectanceOf(coords, space = 'srgb') {
  const xyz = convert(coords, space, 'xyz-d65');
  const key = `${xyz[0].toFixed(6)},${xyz[1].toFixed(6)},${xyz[2].toFixed(6)}`;
  let spd = _cache.get(key);
  if (spd) return spd;
  const c = solveCoeffs(xyz);
  const values = new Array(N);
  for (let i = 0; i < N; i++) {
    const lt = LT[i];
    values[i] = sigmoid(c[0] * lt * lt + c[1] * lt + c[2]);
  }
  spd = { start: START, step: STEP, values };
  if (_cache.size > 512) _cache.clear();
  _cache.set(key, spd);
  return spd;
}

/**
 * Kubelka–Munk mix of two reflectance spectra at concentration t
 * (0 → all a, 1 → all b). Spectra must share a grid (reflectanceOf's do).
 */
export function kmMixReflectance(ra, rb, t, out) {
  const n = ra.values.length;
  const values = out?.values ?? new Array(n);
  for (let i = 0; i < n; i++) {
    const a = Math.min(Math.max(ra.values[i], 1e-5), 1 - 1e-5);
    const b = Math.min(Math.max(rb.values[i], 1e-5), 1 - 1e-5);
    const ksA = ((1 - a) * (1 - a)) / (2 * a);
    const ksB = ((1 - b) * (1 - b)) / (2 * b);
    const ks = ksA + t * (ksB - ksA);
    values[i] = 1 + ks - Math.sqrt(ks * ks + 2 * ks);
  }
  return { start: ra.start, step: ra.step, values };
}

const _xyzOut = [0, 0, 0];

/**
 * Mix two colors as PIGMENTS (subtractive, Kubelka–Munk) rather than as
 * light. Yellow + blue = green. Input/output in `space`; t is pigment
 * concentration of b.
 */
export function pigmentMix(a, b, t, space = 'srgb', out = [0, 0, 0]) {
  const ra = reflectanceOf(a, space);
  const rb = reflectanceOf(b, space);
  const rm = kmMixReflectance(ra, rb, t);
  reflectanceToXyz(rm, undefined, _xyzOut);
  return convert(_xyzOut, 'xyz-d65', space, out);
}
