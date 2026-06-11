// DIN99o (DIN 6176:2001-03): a 26°-rotated, log-compressed transform of
// CIELab intended to even out CIELab's chroma non-uniformity. Built on
// Lab with a D65 reference (the DIN/culori convention — NOT the CSS D50 Lab),
// with kE = kCH = 1.

import { rectToPolar, polarToRect } from '../core/polar.js';
import { CSS_D65_XYZ } from '../constants/whitepoints.js';

const EPSILON = 216 / 24389;
const KAPPA = 24389 / 27;
const CBRT_EPSILON = 6 / 29;

const WX = CSS_D65_XYZ[0], WY = CSS_D65_XYZ[1], WZ = CSS_D65_XYZ[2];

const THETA = (26 / 180) * Math.PI;
const COS = Math.cos(THETA);
const SIN = Math.sin(THETA);
const L_FACTOR = 100 / Math.log(139 / 100); // ≈ 303.67

function labF(t) {
  return t > EPSILON ? Math.cbrt(t) : (KAPPA * t + 16) / 116;
}
function labFInv(t) {
  return t > CBRT_EPSILON ? t * t * t : (116 * t - 16) / KAPPA;
}

// hub XYZ-D65 ↔ Lab-D65 (no chromatic adaptation — D65-referenced by design)
function xyzToLab65(xyz, out) {
  const fx = labF(xyz[0] / WX);
  const fy = labF(xyz[1] / WY);
  const fz = labF(xyz[2] / WZ);
  out[0] = 116 * fy - 16;
  out[1] = 500 * (fx - fy);
  out[2] = 200 * (fy - fz);
  return out;
}
function lab65ToXyz(lab, out) {
  const fy = (lab[0] + 16) / 116;
  const fx = lab[1] / 500 + fy;
  const fz = fy - lab[2] / 200;
  out[0] = labFInv(fx) * WX;
  out[1] = labFInv(fy) * WY;
  out[2] = labFInv(fz) * WZ;
  return out;
}

const LAB = [0, 0, 0];
const LCH = [0, 0, 0];

// Lab-D65 → DIN99o LCh
function lab65ToDin99oLch(lab, out) {
  const e = lab[1] * COS + lab[2] * SIN;
  const f = 0.83 * (lab[2] * COS - lab[1] * SIN);
  const G = Math.sqrt(e * e + f * f);
  out[0] = L_FACTOR * Math.log(1 + 0.0039 * lab[0]);
  out[1] = Math.log(1 + 0.075 * G) / 0.0435;
  let h = ((Math.atan2(f, e) + THETA) / Math.PI) * 180;
  h = ((h % 360) + 360) % 360;
  out[2] = G === 0 ? 0 : h;
  return out;
}
function din99oLchToLab65(lch, out) {
  out[0] = (Math.exp(lch[0] / L_FACTOR) - 1) / 0.0039;
  const G = (Math.exp(0.0435 * lch[1]) - 1) / 0.075;
  const hRad = (lch[2] / 180) * Math.PI - THETA;
  const e = G * Math.cos(hRad);
  const f = G * Math.sin(hRad);
  out[1] = e * COS - (f / 0.83) * SIN;
  out[2] = e * SIN + (f / 0.83) * COS;
  return out;
}

export const DIN99o = {
  id: 'din99o',
  fromXyz(xyz, out = [0, 0, 0]) {
    lab65ToDin99oLch(xyzToLab65(xyz, LAB), LCH);
    return polarToRect(LCH, out);
  },
  toXyz(lab99, out = [0, 0, 0]) {
    rectToPolar(lab99, LCH);
    return lab65ToXyz(din99oLchToLab65(LCH, LAB), out);
  },
};

export const DIN99oLCH = {
  id: 'din99o-lch',
  fromXyz(xyz, out = [0, 0, 0]) {
    return lab65ToDin99oLch(xyzToLab65(xyz, LAB), out);
  },
  toXyz(lch, out = [0, 0, 0]) {
    return lab65ToXyz(din99oLchToLab65(lch, LAB), out);
  },
};
