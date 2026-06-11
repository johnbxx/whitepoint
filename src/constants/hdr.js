// HDR constants: the SMPTE ST 2084 Perceptual Quantizer and the matrices for
// ICtCp (ITU-R BT.2100-2) and Jzazbz (Safdar, Cui, Kim & Luo 2017,
// Optics Express 25(13), "Perceptually uniform color space for image signals
// including high dynamic range and wide gamut").
//
// Every ST 2084 / BT.2100 constant is an exact dyadic rational, kept as the
// expression. Absolute-luminance anchor: relative Y = 1 maps to 203 cd/m²
// (ITU-R BT.2408 diffuse white) — the convention used across the ecosystem
// (colorjs.io, culori), verified by differential tests.

export const YW = 203; // cd/m², BT.2408 reference (diffuse/graphics) white

// ---- SMPTE ST 2084 (PQ) ----

export const PQ_M1 = 2610 / 16384;
export const PQ_M2 = (2523 / 4096) * 128;
export const PQ_C1 = 3424 / 4096;
export const PQ_C2 = (2413 / 4096) * 32;
export const PQ_C3 = (2392 / 4096) * 32;

/** Absolute luminance (cd/m², ≥0) → PQ signal (0–1). Inverse EOTF. */
export function pqEncode(nits) {
  if (nits <= 0) return 0;
  const y = Math.pow(nits / 10000, PQ_M1);
  return Math.pow((PQ_C1 + PQ_C2 * y) / (1 + PQ_C3 * y), PQ_M2);
}

/** PQ signal (0–1) → absolute luminance (cd/m²). EOTF. */
export function pqDecode(signal) {
  if (signal <= 0) return 0;
  const e = Math.pow(signal, 1 / PQ_M2);
  const num = Math.max(e - PQ_C1, 0);
  return 10000 * Math.pow(num / (PQ_C2 - PQ_C3 * e), 1 / PQ_M1);
}

// Jzazbz uses the PQ curve with ρ = 1.7·m2 and a 1e4 peak; same c1/c2/c3.
export const JZ_RHO = 1.7 * PQ_M2;
export const JZ_B = 1.15;
export const JZ_G = 0.66;
export const JZ_D = -0.56;
export const JZ_D0 = 1.6295499532821566e-11;

export function jzPqEncode(nits) {
  if (nits <= 0) return 0;
  const y = Math.pow(nits / 10000, PQ_M1);
  return Math.pow((PQ_C1 + PQ_C2 * y) / (1 + PQ_C3 * y), JZ_RHO);
}

export function jzPqDecode(signal) {
  if (signal <= 0) return 0;
  const e = Math.pow(signal, 1 / JZ_RHO);
  const num = Math.max(e - PQ_C1, 0);
  return 10000 * Math.pow(num / (PQ_C2 - PQ_C3 * e), 1 / PQ_M1);
}

// ---- ICtCp matrices (BT.2100-2, exact rationals) ----

// linear BT.2020 RGB → LMS
export const ICTCP_RGB_TO_LMS = [
  1688 / 4096, 2146 / 4096, 262 / 4096,
  683 / 4096, 2951 / 4096, 462 / 4096,
  99 / 4096, 309 / 4096, 3688 / 4096,
];

// PQ-encoded L'M'S' → ICtCp
export const ICTCP_LMS_TO_ITP = [
  0.5, 0.5, 0,
  6610 / 4096, -13613 / 4096, 7003 / 4096,
  17933 / 4096, -17390 / 4096, -543 / 4096,
];

// ---- Jzazbz matrices (Safdar et al. 2017, Table 1) ----

// pre-adapted X'Y'Z (absolute) → LMS
export const JZ_XYZ_TO_LMS = [
  0.41478972, 0.579999, 0.014648,
  -0.20151, 1.120649, 0.0531008,
  -0.0166008, 0.2648, 0.6684799,
];

// PQ'-encoded L'M'S' → Iz az bz
export const JZ_LMS_TO_IAB = [
  0.5, 0.5, 0,
  3.524000, -4.066708, 0.542708,
  0.199076, 1.096799, -1.295875,
];
