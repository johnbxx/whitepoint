// OKHSL and OKHSV (Björn Ottosson 2021, "Two new color spaces for color
// picking" — https://bottosson.github.io/posts/colorpicker/), sRGB-defined.
//
// One deliberate divergence from the reference implementation: where the
// reference approximates the gamut cusp and boundary with fitted polynomials
// (plus one Halley step), whitepoint uses its EXACT cusp and boundary
// solvers. Away from the sRGB blue corner the two agree to ~1e-5 or better;
// near it the reference's fit errs by up to ~3e-2 (measured in
// tools/cusp-accuracy.js) and whitepoint is on the true boundary. The
// toe (K1/K2/K3) and the ST_mid shaping polynomial are definitional to the
// spaces and kept verbatim from the reference.

import { sRGB } from './rgb.js';
import { OKLab, oklabToRgbDirect } from './oklab.js';
import { findCusp, maxChromaAt } from '../gamut/index.js';
import { DEG2RAD, RAD2DEG } from '../core/polar.js';

const K1 = 0.206;
const K2 = 0.03;
const K3 = (1 + K1) / (1 + K2);

const toe = (x) => 0.5 * (K3 * x - K1 + Math.sqrt((K3 * x - K1) * (K3 * x - K1) + 4 * K2 * K3 * x));
const toeInv = (x) => (x * x + K1 * x) / (K3 * (x + K2));

const linSrgbOfOklab = oklabToRgbDirect(sRGB);
const TMP3 = [0, 0, 0];
const LAB = [0, 0, 0];

function scaleL(Lvt, Cvt, a, b) {
  LAB[0] = Lvt; LAB[1] = a * Cvt; LAB[2] = b * Cvt;
  linSrgbOfOklab(LAB, TMP3);
  const mx = Math.max(TMP3[0], TMP3[1], TMP3[2], 0);
  return Math.cbrt(1 / mx);
}

// ST_mid shaping polynomial — definitional to OKHSL (reference, verbatim).
function stMid(a, b) {
  const s = 0.11516993 + 1.0 / (
    7.4477897 + 4.1590124 * b +
    a * (-2.19557347 + 1.75198401 * b +
      a * (-2.13704948 - 10.02301043 * b +
        a * (-4.24894561 + 5.38770819 * b + 4.69891013 * a))));
  const t = 0.11239642 + 1.0 / (
    1.6132032 - 0.68124379 * b +
    a * (0.40370612 + 0.90148123 * b +
      a * (-0.27087943 + 0.6122399 * b +
        a * (0.00299215 - 0.45399568 * b - 0.14661872 * a))));
  return [s, t];
}

function getCs(L, hDeg, a, b) {
  const cusp = findCusp(hDeg, sRGB);
  const cMax = maxChromaAt(L, hDeg, sRGB);
  const sMax = cusp[1] / cusp[0];
  const tMax = cusp[1] / (1 - cusp[0]);
  const k = cMax / Math.min(L * sMax, (1 - L) * tMax);

  const [sMid, tMid] = stMid(a, b);
  let ca = L * sMid;
  let cb = (1 - L) * tMid;
  const cMid = 0.9 * k * Math.sqrt(Math.sqrt(1 / (1 / (ca * ca * ca * ca) + 1 / (cb * cb * cb * cb))));

  ca = L * 0.4;
  cb = (1 - L) * 0.8;
  const c0 = Math.sqrt(1 / (1 / (ca * ca) + 1 / (cb * cb)));
  return [c0, cMid, cMax];
}

function hueOf(lab) {
  let h = Math.atan2(lab[2], lab[1]) * RAD2DEG;
  if (h < 0) h += 360;
  return h;
}

// ---- OKHSL ↔ OKLab ----

function okhslToOklab(hsl, out) {
  const l = hsl[2];
  if (l >= 1 - 1e-9) { out[0] = 1; out[1] = 0; out[2] = 0; return out; }
  if (l <= 1e-9) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  const h = ((hsl[0] % 360) + 360) % 360;
  const s = hsl[1];
  const hr = h * DEG2RAD;
  const a = Math.cos(hr), b = Math.sin(hr);
  const L = toeInv(l);
  const [c0, cMid, cMax] = getCs(L, h, a, b);

  let C;
  if (s < 0.8) {
    const t = 1.25 * s;
    const k1 = 0.8 * c0;
    const k2 = 1 - k1 / cMid;
    C = (t * k1) / (1 - k2 * t);
  } else {
    const t = 5 * (s - 0.8);
    const k0 = cMid;
    const k1 = (0.2 * cMid * cMid * 1.25 * 1.25) / c0;
    const k2 = 1 - k1 / (cMax - cMid);
    C = k0 + (t * k1) / (1 - k2 * t);
  }
  out[0] = L; out[1] = C * a; out[2] = C * b;
  return out;
}

function oklabToOkhsl(lab, out) {
  const L = lab[0];
  const C = Math.sqrt(lab[1] * lab[1] + lab[2] * lab[2]);
  if (L >= 1 - 1e-9) { out[0] = 0; out[1] = 0; out[2] = 1; return out; }
  if (L <= 1e-9) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  if (C < 1e-12) { out[0] = 0; out[1] = 0; out[2] = toe(L); return out; }
  const a = lab[1] / C, b = lab[2] / C;
  const h = hueOf(lab);
  const [c0, cMid, cMax] = getCs(L, h, a, b);

  let s;
  if (C < cMid) {
    const k1 = 0.8 * c0;
    const k2 = 1 - k1 / cMid;
    const t = C / (k1 + k2 * C);
    s = t * 0.8;
  } else {
    const k0 = cMid;
    const k1 = (0.2 * cMid * cMid * 1.25 * 1.25) / c0;
    const k2 = 1 - k1 / (cMax - cMid);
    const t = (C - k0) / (k1 + k2 * (C - k0));
    s = 0.8 + 0.2 * t;
  }
  out[0] = h; out[1] = s; out[2] = toe(L);
  return out;
}

// ---- OKHSV ↔ OKLab ----

function okhsvToOklab(hsv, out) {
  const v = hsv[2];
  if (v <= 1e-9) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  const h = ((hsv[0] % 360) + 360) % 360;
  const s = hsv[1];
  const hr = h * DEG2RAD;
  const a = Math.cos(hr), b = Math.sin(hr);
  const cusp = findCusp(h, sRGB);
  const sMax = cusp[1] / cusp[0];
  const tMax = cusp[1] / (1 - cusp[0]);
  const S0 = 0.5;
  const k = 1 - S0 / sMax;

  const denom = S0 + tMax - tMax * k * s;
  const Lv = 1 - (s * S0) / denom;
  const Cv = (s * tMax * S0) / denom;

  let L = v * Lv;
  let C = v * Cv;

  const Lvt = toeInv(Lv);
  const Cvt = (Cv * Lvt) / Lv;
  const Lnew = toeInv(L);
  C = L === 0 ? 0 : (C * Lnew) / L;
  L = Lnew;

  const sc = scaleL(Lvt, Cvt, a, b);
  L *= sc;
  C *= sc;

  out[0] = L; out[1] = C * a; out[2] = C * b;
  return out;
}

function oklabToOkhsv(lab, out) {
  let L = lab[0];
  let C = Math.sqrt(lab[1] * lab[1] + lab[2] * lab[2]);
  if (L <= 1e-9) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  if (C < 1e-12) {
    out[0] = 0; out[1] = 0; out[2] = toe(L);
    return out;
  }
  const a = lab[1] / C, b = lab[2] / C;
  const h = hueOf(lab);
  const cusp = findCusp(h, sRGB);
  const sMax = cusp[1] / cusp[0];
  const tMax = cusp[1] / (1 - cusp[0]);
  const S0 = 0.5;
  const k = 1 - S0 / sMax;

  const t = tMax / (C + L * tMax);
  const Lv = t * L;
  const Cv = t * C;

  const Lvt = toeInv(Lv);
  const Cvt = (Cv * Lvt) / Lv;

  const sc = scaleL(Lvt, Cvt, a, b);
  L /= sc;
  C /= sc;

  C = (C * toe(L)) / L;
  L = toe(L);

  out[0] = h;
  out[1] = ((S0 + tMax) * Cv) / (tMax * S0 + tMax * k * Cv);
  out[2] = L / Lv;
  return out;
}

// ---- space objects ----

const MID = [0, 0, 0];

export const OKHSL = {
  id: 'okhsl',
  toXyz(c, out = [0, 0, 0]) { return OKLab.toXyz(okhslToOklab(c, MID), out); },
  fromXyz(xyz, out = [0, 0, 0]) { return oklabToOkhsl(OKLab.fromXyz(xyz, MID), out); },
};

export const OKHSV = {
  id: 'okhsv',
  toXyz(c, out = [0, 0, 0]) { return OKLab.toXyz(okhsvToOklab(c, MID), out); },
  fromXyz(xyz, out = [0, 0, 0]) { return oklabToOkhsv(OKLab.fromXyz(xyz, MID), out); },
};
