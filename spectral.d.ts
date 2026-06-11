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

/** Jakob–Hanika sigmoid reflectance, Newton-solved to integrate back to the color exactly. */
export function reflectanceOf(coords: ArrayLike<number>, space?: string | object): Spectrum;
/** Kubelka–Munk mix of two reflectance spectra at concentration t. */
export function kmMixReflectance(ra: Spectrum, rb: Spectrum, t: number, out?: Spectrum): Spectrum;
/** Mix two colors as pigments (subtractive, Kubelka–Munk): yellow + blue = green. */
export function pigmentMix(a: ArrayLike<number>, b: ArrayLike<number>, t: number, space?: string | object, out?: number[]): number[];
