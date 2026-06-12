// Color rendering quality of light sources: CIE 13.3-1995 CRI and
// IES TM-30-20 / CIE 224:2017 color fidelity.
//
// Both answer "how faithfully does this lamp render colors?" by comparing
// test-sample appearance under the source against a reference illuminant
// of the same CCT. CRI is the 1965-vintage original (14 Munsell samples,
// U*V*W* color space, von Kries-style correction, Ra = mean of R1–R8);
// TM-30/CIE 224 is the modern replacement (99 spectrally-representative
// CES, CAM02-UCS, blended Planckian/daylight reference, fidelity Rf plus
// gamut index Rg). Both are implemented from their specs; the CIECAM02
// core is anchored to the CIE 159:2004 worked example in the test suite.

// Imported from the package index at call time only — the module cycle
// (index re-exports this file) is benign under ESM live bindings.
import {
  CMF_1931_2, CMF_1964_10, sampleSpd, emissionToXyz, spectrumXy,
  planckianSPD, daylightSPD, cctOf,
} from './index.js';
import { CMF_1931_2_1NM } from './data-1nm.js';
import { TCS_CIE1995 } from './data-tcs.js';
import { CES_CIE2017 } from './data-ces.js';

// ---- shared: tristimulus of a reflectance sample under an illuminant ----

// X = k·Σ R·S·x̄·Δλ with k normalizing the perfect reflector to Y = 100.
function sampleXyz(values, grid, spd, cmf, out = [0, 0, 0]) {
  const refl = { start: grid.start, step: grid.step, values };
  let X = 0, Y = 0, Z = 0, k = 0;
  for (let i = 0; i < cmf.x.length; i++) {
    const lambda = cmf.start + i * cmf.step;
    const s = sampleSpd(spd, lambda);
    const sr = s * sampleSpd(refl, lambda);
    X += sr * cmf.x[i];
    Y += sr * cmf.y[i];
    Z += sr * cmf.z[i];
    k += s * cmf.y[i];
  }
  out[0] = 100 * X / k; out[1] = 100 * Y / k; out[2] = 100 * Z / k;
  return out;
}

function whiteXyz(spd, cmf, out = [0, 0, 0]) {
  emissionToXyz(spd, { cmf }, out);
  const s = 100 / out[1];
  out[0] *= s; out[1] = 100; out[2] *= s;
  return out;
}

function uv1960(xyz, out = [0, 0]) {
  const d = xyz[0] + 15 * xyz[1] + 3 * xyz[2];
  out[0] = 4 * xyz[0] / d;
  out[1] = 6 * xyz[1] / d;
  return out;
}

// ---- CIE 13.3-1995 color rendering index ----

const cKD = (u, v) => (4 - u - 10 * v) / v;
const dKD = (u, v) => (1.708 * v + 0.404 - 1.481 * u) / v;

/**
 * CIE 13.3-1995 color rendering index of a light-source SPD.
 * Reference is a Planckian radiator below 5000 K, CIE daylight at or
 * above. Ra is the mean of R1–R8; the specials R9–R14 (R9 = strong red,
 * the famous LED-killer) ride along in `Ri`. CRI is conventionally
 * meaningful only near the locus (|duv| < 0.0054 per the spec) — the duv
 * is returned so you can judge.
 *
 * @param {{start:number, step:number, values:number[]}} spd
 * @returns {{Ra:number, Ri:number[], cct:number, duv:number}}
 */
export function cri(spd) {
  const { cct, duv } = cctOf(spectrumXy(spd));
  const ref = cct < 5000 ? planckianSPD(cct, { step: 1 }) : daylightSPD(Math.min(cct, 25000));
  // the 1 nm CMFs: F-series-style line+phosphor spectra are exactly what
  // the abridged 5 nm tables mis-integrate (measured: 3–5× the residual
  // against colour-science's 1 nm-practice computation)
  const cmf = CMF_1931_2_1NM;

  const wt = uv1960(whiteXyz(spd, cmf));
  const wr = uv1960(whiteXyz(ref, cmf));
  const ck = cKD(wt[0], wt[1]), dk = dKD(wt[0], wt[1]);
  const cr = cKD(wr[0], wr[1]), dr = dKD(wr[0], wr[1]);

  const Ri = [];
  const xyz = [0, 0, 0], uvT = [0, 0], uvR = [0, 0];
  for (const sample of TCS_CIE1995.samples) {
    sampleXyz(sample, TCS_CIE1995, ref, cmf, xyz);
    uv1960(xyz, uvR);
    const Wr = 25 * Math.cbrt(xyz[1]) - 17;
    const Ur = 13 * Wr * (uvR[0] - wr[0]);
    const Vr = 13 * Wr * (uvR[1] - wr[1]);

    sampleXyz(sample, TCS_CIE1995, spd, cmf, xyz);
    uv1960(xyz, uvT);
    // von Kries-type adaptive shift (CIE 13.3 §5.6): maps the test
    // adaptation to the reference; the test white lands exactly on the
    // reference white (asserted in the test suite, not assumed)
    const ci = cKD(uvT[0], uvT[1]), di = dKD(uvT[0], uvT[1]);
    const den = 16.518 + 1.481 * (cr / ck) * ci - (dr / dk) * di;
    const ua = (10.872 + 0.404 * (cr / ck) * ci - 4 * (dr / dk) * di) / den;
    const va = 5.52 / den;
    const Wt = 25 * Math.cbrt(xyz[1]) - 17;
    const Ut = 13 * Wt * (ua - wr[0]);
    const Vt = 13 * Wt * (va - wr[1]);

    const dE = Math.hypot(Ur - Ut, Vr - Vt, Wr - Wt);
    Ri.push(100 - 4.6 * dE);
  }
  const Ra = Ri.slice(0, 8).reduce((a, b) => a + b, 0) / 8;
  return { Ra, Ri, cct, duv };
}

// ---- CIECAM02 forward → CAM02-UCS (CIE 159:2004; internal) ----

const MCAT02 = [0.7328, 0.4296, -0.1624, -0.7036, 1.6975, 0.0061, 0.003, 0.0136, 0.9834];
const MCAT02_INV = [
  1.096123820835514, -0.278869000218287, 0.182745179382773,
  0.454369041975359, 0.473533154307412, 0.072097803717229,
  -0.009627608738429, -0.005698031216113, 1.015325639954543,
];
const MHPE = [0.38971, 0.68898, -0.07868, -0.22981, 1.1834, 0.04641, 0, 0, 1];

function mul3(m, v, out) {
  const x = v[0], y = v[1], z = v[2];
  out[0] = m[0] * x + m[1] * y + m[2] * z;
  out[1] = m[3] * x + m[4] * y + m[5] * z;
  out[2] = m[6] * x + m[7] * y + m[8] * z;
  return out;
}

function camAdapt(v, fl) {
  const x = Math.pow(fl * Math.abs(v) / 100, 0.42);
  return Math.sign(v) * 400 * x / (x + 27.13) + 0.1;
}

/**
 * Precompute CIECAM02 viewing conditions. Surround is `average`
 * (F = 1, c = 0.69, Nc = 1); pass discountIlluminant for D = 1.
 */
export function cam02ViewingConditions(whiteXyz100, La = 100, Yb = 20, discountIlluminant = false) {
  const F = 1, c = 0.69, Nc = 1;
  const rgbW = mul3(MCAT02, whiteXyz100, [0, 0, 0]);
  const D = discountIlluminant ? 1
    : Math.min(1, Math.max(0, F * (1 - (1 / 3.6) * Math.exp(-(La + 42) / 92))));
  const Yw = whiteXyz100[1];
  const dRgb = rgbW.map((v) => D * Yw / v + 1 - D);
  const k = 1 / (5 * La + 1);
  const fl = 0.2 * k ** 4 * 5 * La + 0.1 * (1 - k ** 4) ** 2 * Math.cbrt(5 * La);
  const n = Yb / Yw;
  const z = 1.48 + Math.sqrt(n);
  const nbb = 0.725 * Math.pow(1 / n, 0.2);
  const rgbWc = rgbW.map((v, i) => v * dRgb[i]);
  const rgbWp = mul3(MHPE, mul3(MCAT02_INV, rgbWc, [0, 0, 0]), [0, 0, 0]);
  const aW = rgbWp.map((v) => camAdapt(v, fl));
  const Aw = (2 * aW[0] + aW[1] + 0.05 * aW[2] - 0.305) * nbb;
  return { c, Nc, dRgb, fl, n, z, nbb, Aw };
}

/**
 * CIECAM02 → CAM02-UCS J′a′b′ for XYZ on the 0–100 scale. The forward
 * model only — exactly what CIE 224 / TM-30 needs.
 */
export function xyzToCam02Ucs(xyz100, vc, out = [0, 0, 0]) {
  const rgb = mul3(MCAT02, xyz100, out);
  for (let i = 0; i < 3; i++) rgb[i] *= vc.dRgb[i];
  const p = mul3(MHPE, mul3(MCAT02_INV, rgb, rgb), rgb);
  const ra = camAdapt(p[0], vc.fl), ga = camAdapt(p[1], vc.fl), ba = camAdapt(p[2], vc.fl);
  const a = ra - 12 * ga / 11 + ba / 11;
  const b = (ra + ga - 2 * ba) / 9;
  const h = Math.atan2(b, a);
  const et = (Math.cos(h + 2) + 3.8) / 4;
  const A = (2 * ra + ga + 0.05 * ba - 0.305) * vc.nbb;
  const J = 100 * Math.pow(Math.max(0, A) / vc.Aw, vc.c * vc.z);
  const t = (50000 / 13) * vc.Nc * vc.nbb * et * Math.hypot(a, b) / (ra + ga + 21 * ba / 20);
  const C = Math.pow(t, 0.9) * Math.sqrt(J / 100) * Math.pow(1.64 - Math.pow(0.29, vc.n), 0.73);
  const M = C * Math.pow(vc.fl, 0.25);
  const Jp = 1.7 * J / (1 + 0.007 * J);
  const Mp = Math.log(1 + 0.0228 * M) / 0.0228;
  out[0] = Jp; out[1] = Mp * Math.cos(h); out[2] = Mp * Math.sin(h);
  return out;
}

// ---- IES TM-30-20 / CIE 224:2017 color fidelity ----

// reference: Planckian below 4000 K, daylight above 5000 K, and a linear
// blend between — each component normalized to equal luminous output
// before mixing (10° observer, matching the computation)
function tm30Reference(cct) {
  if (cct < 4000) return planckianSPD(cct);
  const day = daylightSPD(Math.min(cct, 25000));
  if (cct >= 5000) return day;
  const pl = planckianSPD(cct);
  const lum = (spd) => {
    let L = 0;
    for (let i = 0; i < CMF_1964_10.y.length; i++) {
      L += sampleSpd(spd, CMF_1964_10.start + i * CMF_1964_10.step) * CMF_1964_10.y[i];
    }
    return L;
  };
  const lp = lum(pl), ld = lum(day);
  const w = (5000 - cct) / 1000;
  const values = [];
  const start = 360, step = 5, end = 830;
  for (let l = start; l <= end; l += step) {
    values.push(w * sampleSpd(pl, l) / lp + (1 - w) * sampleSpd(day, l) / ld);
  }
  return { start, step, values };
}

/**
 * IES TM-30-20 / CIE 224:2017 color fidelity of a light-source SPD:
 * fidelity index Rf (0–100, CAM02-UCS distance over 99 spectrally
 * representative CES) and gamut index Rg (100 = reference gamut area;
 * below = desaturating, above = oversaturating). The modern, vastly more
 * robust successor to CRI.
 *
 * @param {{start:number, step:number, values:number[]}} spd
 * @returns {{Rf:number, Rg:number, cct:number, duv:number}}
 */
export function tm30(spd) {
  const { cct, duv } = cctOf(spectrumXy(spd));
  const ref = tm30Reference(cct);
  const cmf = CMF_1964_10;

  const vcT = cam02ViewingConditions(whiteXyz(spd, cmf), 100, 20, true);
  const vcR = cam02ViewingConditions(whiteXyz(ref, cmf), 100, 20, true);

  const N = CES_CIE2017.samples.length;
  const BINS = 16;
  const binSum = Array.from({ length: BINS }, () => [0, 0, 0, 0, 0]); // aT bT aR bR n
  let dEsum = 0;
  const xyz = [0, 0, 0], jabT = [0, 0, 0], jabR = [0, 0, 0];
  for (const sample of CES_CIE2017.samples) {
    xyzToCam02Ucs(sampleXyz(sample, CES_CIE2017, spd, cmf, xyz), vcT, jabT);
    xyzToCam02Ucs(sampleXyz(sample, CES_CIE2017, ref, cmf, xyz), vcR, jabR);
    dEsum += Math.hypot(jabT[0] - jabR[0], jabT[1] - jabR[1], jabT[2] - jabR[2]);
    // hue bin by REFERENCE hue angle
    let h = Math.atan2(jabR[2], jabR[1]);
    if (h < 0) h += 2 * Math.PI;
    const bin = Math.min(BINS - 1, Math.floor(h / (2 * Math.PI / BINS)));
    const s = binSum[bin];
    s[0] += jabT[1]; s[1] += jabT[2]; s[2] += jabR[1]; s[3] += jabR[2]; s[4]++;
  }

  const RfPrime = 100 - 6.73 * (dEsum / N);
  const Rf = 10 * Math.log(Math.exp(RfPrime / 10) + 1);

  // gamut index: shoelace area of the 16 bin-mean (a′, b′) polygons
  const area = (pts) => {
    let A = 0;
    for (let i = 0; i < pts.length; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length];
      A += x1 * y2 - x2 * y1;
    }
    return Math.abs(A) / 2;
  };
  const used = binSum.filter((s) => s[4] > 0);
  const test = used.map((s) => [s[0] / s[4], s[1] / s[4]]);
  const refp = used.map((s) => [s[2] / s[4], s[3] / s[4]]);
  const Rg = 100 * area(test) / area(refp);

  return { Rf, Rg, cct, duv };
}
