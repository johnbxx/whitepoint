// Type definitions for whitepoint/spectral.

export interface Spectrum {
  /** First wavelength, nm. */
  start: number;
  /** Grid step, nm. */
  step: number;
  values: number[];
}

export interface CMF {
  start: number;
  step: number;
  x: number[];
  y: number[];
  z: number[];
}

export const CMF_1931_2: CMF;
export const CMF_1964_10: CMF;
export const D65_SPD: Spectrum;
export const DAYLIGHT_S: { start: number; step: number; s0: number[]; s1: number[]; s2: number[] };

export function sampleSpd(spd: Spectrum, lambda: number): number;
export function emissionToXyz(spd: Spectrum, opts?: { cmf?: CMF }, out?: number[]): number[];
export function spectrumXy(spd: Spectrum, opts?: { cmf?: CMF }, out?: number[]): number[];
export function reflectanceToXyz(refl: Spectrum, opts?: { illuminant?: Spectrum; cmf?: CMF }, out?: number[]): number[];
export function planckianSPD(T: number, opts?: { start?: number; step?: number; end?: number }): Spectrum;
export function planckianXy(T: number, opts?: { cmf?: CMF }, out?: number[]): number[];
export function illuminantASPD(opts?: { start?: number; step?: number; end?: number }): Spectrum;
export function daylightSPD(T: number): Spectrum;

/** CCT and signed Duv, solved against the exact Planckian locus. */
export function cctOf(xy: ArrayLike<number>): { cct: number; duv: number };

/** Brettel 1997 color-vision-deficiency simulation, anchors derived from the CMFs. */
export function simulateCVD(
  coords: ArrayLike<number>,
  space: string | object,
  opts: { type: 'protanopia' | 'deuteranopia' | 'tritanopia'; severity?: number },
  out?: number[],
): number[];

/** Pure-water spectral absorption, 1/m (Pope & Fry 1997, via OMLC). */
export const WATER_ABSORPTION: Spectrum;
/** CIE 1951 scotopic luminous efficiency V′(λ) (CVRL). */
export const V_PRIME_1951: Spectrum;

/** Km·∫S·V — cd/m² for absolute radiance input, relative otherwise. */
export function photopicLuminance(spd: Spectrum, opts?: { cmf?: CMF }): number;
/** K′m·∫S·V′ — the rod-vision counterpart of photopicLuminance. */
export function scotopicLuminance(spd: Spectrum): number;
/** CIE 191:2010 MES2 mesopic blend weight and luminance from photopic + scotopic cd/m². */
export function mesopic(photopic: number, scotopic: number): { m: number; luminance: number };

/** Beer–Lambert: S(λ)·exp(−a(λ)·d). Pair with WATER_ABSORPTION and meters. */
export function attenuate(spd: Spectrum, absorption: Spectrum, distance: number): Spectrum;

/** Sprague (1880) quintic resampling per CIE 167:2005. No extrapolation; target must lie within the source range. */
export function resample(spd: Spectrum, opts?: { start?: number; step?: number; end?: number }): Spectrum;

/** Emission lines [λ nm, power] as integral-preserving Gaussian profiles. */
export function lineSPD(lines: ArrayLike<number>[], opts?: { start?: number; step?: number; end?: number; fwhm?: number }): Spectrum;
/** Low-pressure sodium: the Na D doublet (NIST ASD), 2:1 intensity. */
export function sodiumSPD(opts?: { start?: number; step?: number; end?: number; fwhm?: number }): Spectrum;
/** Neutral-atom transitions per element (NIST ASD): [λ_air nm, g_k·A_ki s⁻¹, E_k eV]. */
export const EMISSION_LINES: {
  hydrogen: number[][]; helium: number[][]; neon: number[][]; sodium: number[][];
  argon: number[][]; krypton: number[][]; xenon: number[][]; mercury: number[][];
};
/** Low-pressure discharge SPD, derived: line power ∝ (g_k·A_ki/λ)·exp(−E_k/kT), kT in eV. */
export function dischargeSPD(transitions: ArrayLike<number>[], opts?: { kT?: number; start?: number; step?: number; end?: number; fwhm?: number }): Spectrum;

/** CIE 13.3-1995 color rendering index: Ra (mean R1–R8) + all 14 Ri (R9 = strong red). */
export function cri(spd: Spectrum): { Ra: number; Ri: number[]; cct: number; duv: number };
/** IES TM-30-20 / CIE 224:2017 color fidelity Rf and gamut index Rg. */
export function tm30(spd: Spectrum): { Rf: number; Rg: number; cct: number; duv: number };

export interface Cam02VC {
  c: number; Nc: number; dRgb: number[]; fl: number; n: number; z: number; nbb: number; Aw: number;
}
/** CIECAM02 viewing conditions (average surround); the TM-30 engine, exported for reuse. */
export function cam02ViewingConditions(whiteXyz100: ArrayLike<number>, La?: number, Yb?: number, discountIlluminant?: boolean): Cam02VC;
/** CIECAM02 forward → CAM02-UCS J′a′b′, XYZ on the 0–100 scale. */
export function xyzToCam02Ucs(xyz100: ArrayLike<number>, vc: Cam02VC, out?: number[]): number[];

/** Jakob–Hanika sigmoid reflectance, Newton-solved to integrate back to the color exactly. */
export function reflectanceOf(coords: ArrayLike<number>, space?: string | object): Spectrum;
/** Kubelka–Munk mix of two reflectance spectra at concentration t. */
export function kmMixReflectance(ra: Spectrum, rb: Spectrum, t: number, out?: Spectrum): Spectrum;
/** Mix two colors as pigments (subtractive, Kubelka–Munk): yellow + blue = green. */
export function pigmentMix(a: ArrayLike<number>, b: ArrayLike<number>, t: number, space?: string | object, out?: number[]): number[];
