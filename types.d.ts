// Type definitions for whitepoint — main entry.
// All color coordinates are plain arrays of three numbers; every conversion
// accepts an optional `out` array for zero-allocation hot loops.

/** Three color coordinates. Channels are 0–1 floats; hue channels are degrees. */
export type Vec3 = number[];

export type TransferName = 'srgb' | 'a98' | 'prophoto' | 'rec2020' | 'linear';

export type SpaceId =
  | 'srgb' | 'srgb-linear' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec2020'
  | 'oklab' | 'oklch' | 'lab' | 'lch' | 'hsl' | 'hwb'
  | 'xyz-d65' | 'xyz' | 'xyz-d50'
  | 'ictcp' | 'jzazbz' | 'jzczhz'
  | 'luv' | 'lchuv' | 'hsv' | 'hsi' | 'okhsl' | 'okhsv'
  | 'bt709' | 'dci-p3' | 'aces2065-1' | 'acescg' | 'acescc' | 'acescct'
  | 'rec2100-pq' | 'rec2100-hlg' | 'din99o' | 'din99o-lch'
  | 'cam16' | 'cam16-ucs' | 'hct'
  | 'hsluv' | 'hpluv' | 'hunter-lab' | 'xyb'
  | 'ycbcr-601-full' | 'ycbcr-709-limited';

export interface ColorSpace {
  readonly id: string;
  toXyz(coords: ArrayLike<number>, out?: Vec3): Vec3;
  fromXyz(xyz: ArrayLike<number>, out?: Vec3): Vec3;
  /** RGB spaces only: transfer curve name. */
  readonly transferName?: TransferName;
  /** RGB spaces only: linear-light 3×3 matrices (row-major, length 9). */
  readonly m?: { toXyz: number[]; fromXyz: number[] };
}

export type SpaceLike = ColorSpace | SpaceId;

export type IlluminantName =
  | 'A' | 'B' | 'C' | 'D50' | 'D55' | 'D65' | 'D75' | 'E' | 'F2' | 'F7' | 'F11';

export type CatName = 'bradford' | 'cat02' | 'cat16' | 'vonkries' | 'xyz-scaling';

/** A white point: illuminant name, [x, y] chromaticity, or [X, Y, Z] tristimulus. */
export type WhitePoint = IlluminantName | number[];

// ---- conversion engine ----

/** Batch path: interleaved buffer in, route resolved once, zero-alloc loop. */
export function convertBuffer(
  src: ArrayLike<number>,
  from: string | object,
  to: string | object,
  dst?: number[] | Float32Array | Float64Array,
): number[] | Float32Array | Float64Array;

export function convert(coords: ArrayLike<number>, from: SpaceLike, to: SpaceLike, out?: Vec3): Vec3;

/** A parsed CSS color: registry space, library-convention coordinates, alpha. */
export interface ParsedColor {
  space: SpaceId;
  coords: Vec3;
  alpha: number;
}
/**
 * Parse a CSS Color 4 <color> string (hex, the 148 named colors,
 * rgb/hsl/hwb/lab/lch/oklab/oklch in modern + legacy forms, color()).
 * Returns null on unparseable input; `none` components become NaN.
 */
export function parse(str: string): ParsedColor | null;
/** Parse a CSS color string straight to coordinates in `to` (alpha dropped). */
export function parseTo(str: string, to: SpaceLike, out?: Vec3): Vec3 | null;
/** The 148 CSS named colors (CSS Color 4 §6.1), name → #rrggbb. */
export const NAMED_COLORS: Record<string, string>;

export function resolve(space: SpaceLike): ColorSpace;
export function registerRoute(fromId: string, toId: string, fn: (coords: ArrayLike<number>, out?: Vec3) => Vec3): void;
export const spaces: Record<SpaceId, ColorSpace>;

// ---- space objects ----

export const sRGB: ColorSpace;
export const sRGBLinear: ColorSpace;
export const DisplayP3: ColorSpace;
export const A98RGB: ColorSpace;
export const ProPhotoRGB: ColorSpace;
export const Rec2020: ColorSpace;
export const OKLab: ColorSpace;
export const OKLCH: ColorSpace;
export const Lab: ColorSpace;
export const LCH: ColorSpace;
export const HSL: ColorSpace;
export const HWB: ColorSpace;
export const XYZD65: ColorSpace;
export const XYZD50: ColorSpace;
export const ICtCp: ColorSpace;
export const Jzazbz: ColorSpace;
export const JzCzhz: ColorSpace;
export const Luv: ColorSpace;
export const LCHuv: ColorSpace;
export const HSV: ColorSpace;
export const HSI: ColorSpace;
export const OKHSL: ColorSpace;
export const OKHSV: ColorSpace;
export const BT709: ColorSpace;
export const DCIP3: ColorSpace;
export const ACES2065_1: ColorSpace;
export const ACEScg: ColorSpace;
export const ACEScc: ColorSpace;
export const ACEScct: ColorSpace;
export const Rec2100PQ: ColorSpace;
export const Rec2100HLG: ColorSpace;
export const DIN99o: ColorSpace;
export const DIN99oLCH: ColorSpace;
export const CAM16JCh: ColorSpace;
export const CAM16UCS: ColorSpace;
export const HCT: ColorSpace;
export const HSLuv: ColorSpace;
export const HPLuv: ColorSpace;
export const HunterLab: ColorSpace;
export const XYB: ColorSpace;
export const YCbCr601Full: ColorSpace;
export const YCbCr709Limited: ColorSpace;
/** Build a YCbCr space — both options required; there is no default YCbCr. */
export function makeYCbCr(opts: { matrix: '601' | '709' | '2020'; range: 'full' | 'limited' }): ColorSpace;

/** CAM16-UCS color difference ΔE′ (Euclidean in cam16-ucs). */
export function deltaECAM16(a: ArrayLike<number>, b: ArrayLike<number>, space?: SpaceLike): number;

// Device-model boundary utilities (not registry spaces)
export function cmykFromSrgb(rgb: ArrayLike<number>, out?: number[]): number[];
export function srgbFromCmyk(cmyk: ArrayLike<number>, out?: Vec3): Vec3;
export function srgbFromAnsi256(index: number, out?: Vec3): Vec3;
export function ansi256FromSrgb(rgb: ArrayLike<number>): number;
export function ansi16FromSrgb(rgb: ArrayLike<number>): number;

export interface Cam16ViewingConditions {
  fl: number; fl25: number; n: number; z: number; c: number; nc: number;
  nbb: number; ncb: number; aw: number; rgbD: number[]; cz: number;
}
/** Precompute CAM16 viewing conditions (defaults = Material HCT's). */
export function cam16ViewingConditions(opts?: {
  white?: number[]; adaptingLuminance?: number; backgroundLstar?: number;
  surround?: 'average' | 'dim' | 'dark'; discounting?: boolean;
}): Cam16ViewingConditions;
/** XYZ (Y 0–100) → CAM16 [J, C, h]. */
export function xyzToCam16(xyz100: ArrayLike<number>, vc?: Cam16ViewingConditions, out?: Vec3): Vec3;
/** CAM16 [J, C, h] → XYZ (Y 0–100). */
export function cam16ToXyz(jch: ArrayLike<number>, vc?: Cam16ViewingConditions, out?: Vec3): Vec3;
export const CAM16_DEFAULT_VC: Cam16ViewingConditions;

export function hsvToSrgb(hsv: ArrayLike<number>, out?: Vec3): Vec3;
export function srgbToHsv(rgb: ArrayLike<number>, out?: Vec3): Vec3;
export function hsiToSrgb(hsi: ArrayLike<number>, out?: Vec3): Vec3;
export function srgbToHsi(rgb: ArrayLike<number>, out?: Vec3): Vec3;
/** Exact max in-gamut chroma at fixed OKLCH lightness and hue. */
export function maxChromaAt(L: number, h: number, gamut: SpaceLike, iterations?: number): number;

/** SMPTE ST 2084 inverse EOTF: absolute cd/m² → PQ signal. */
export function pqEncode(nits: number): number;
/** SMPTE ST 2084 EOTF: PQ signal → absolute cd/m². */
export function pqDecode(signal: number): number;
/** BT.2408 diffuse-white anchor (cd/m²) mapping relative Y=1 to absolute luminance. */
export const YW: number;

export function hslToSrgb(hsl: ArrayLike<number>, out?: Vec3): Vec3;
export function srgbToHsl(rgb: ArrayLike<number>, out?: Vec3): Vec3;
export function hwbToSrgb(hwb: ArrayLike<number>, out?: Vec3): Vec3;
export function srgbToHwb(rgb: ArrayLike<number>, out?: Vec3): Vec3;

/** Build a precomposed OKLab → RGB-space converter (hot-path rendering). */
export function oklabToRgbDirect(rgbSpace: ColorSpace): (lab: ArrayLike<number>, out?: Vec3) => Vec3;

// ---- the illuminant lab ----

export function adapt(xyz: ArrayLike<number>, from: WhitePoint, to: WhitePoint, out?: Vec3, opts?: { cat?: CatName }): Vec3;
export function adaptMatrix(from: WhitePoint, to: WhitePoint, cat?: CatName): number[];
/** CIE daylight-locus chromaticity for 4000 K ≤ T ≤ 25000 K. */
export function daylightXy(T: number, out?: number[]): number[];
/** Daylight white point at temperature T, usable directly with adapt(). */
export function illuminantFromCCT(T: number, out?: Vec3): Vec3;
export function xyToXyz(xy: ArrayLike<number>, out?: Vec3): Vec3;
export const illuminants: Record<IlluminantName, number[]>;
export const cats: Record<CatName, number[]>;
export const CSS_D65: number[];
export const CSS_D50: number[];
export const CSS_D65_XYZ: Vec3;
export const CSS_D50_XYZ: Vec3;

// ---- gamut ----

export function inGamut(coords: ArrayLike<number>, space: SpaceLike, gamut?: SpaceLike, epsilon?: number): boolean;
export function toGamut(
  coords: ArrayLike<number>,
  space: SpaceLike,
  opts?: { gamut?: SpaceLike; method?: 'css' | 'cusp' | 'clip' },
  out?: Vec3,
): Vec3;
export function clip(coords: ArrayLike<number>, out?: Vec3): Vec3;
/** Euclidean distance in OKLab — the deltaE of CSS Color 4 gamut mapping. */
export function deltaEOK(a: ArrayLike<number>, b: ArrayLike<number>): number;
/** Exact gamut cusp [L, C] for an OKLCH hue (solved, not fitted; cached). */
export function findCusp(h: number, gamut: SpaceLike): number[];
/** Brute-force cusp via full conversions — the ground truth findCusp is verified against. */
export function findCuspNumerical(h: number, gamut: SpaceLike): number[];

// ---- coordinate operations ----

export type HueMethod = 'shorter' | 'longer' | 'increasing' | 'decreasing';

/** Mix two colors (both in `space`) per CSS Color 4 §12. */
export function mix(a: ArrayLike<number>, b: ArrayLike<number>, t: number, space: SpaceLike, opts?: { hue?: HueMethod }, out?: Vec3): Vec3;
/** Premultiplied-alpha mix per CSS Color 4 §12.3. Inputs/output are [c0, c1, c2, alpha]. */
export function mixAlpha(a: ArrayLike<number>, b: ArrayLike<number>, t: number, space: SpaceLike, opts?: { hue?: HueMethod }, out?: number[]): number[];
/** Hue delta per CSS Color 4 §12.4, from normalized hues. */
export function hueDelta(ha: number, hb: number, method: HueMethod): number;

/** Serialize coordinates to a CSS color string (output only — parsing is out of scope). */
export function serialize(coords: ArrayLike<number>, space: SpaceLike, opts?: { alpha?: number; precision?: number }): string;

/** WCAG 2.x relative luminance of gamma sRGB coordinates (spec-literal formula). */
export function wcagLuminance(srgb: ArrayLike<number>): number;
/** WCAG 2.x contrast ratio (1–21) between two colors in `space`. */
export function contrastWCAG2(a: ArrayLike<number>, b: ArrayLike<number>, space?: SpaceLike): number;

/** CIEDE2000 color difference on CIE Lab coordinates (CIE 015; Sharma 2005). */
export function deltaE2000(lab1: ArrayLike<number>, lab2: ArrayLike<number>, weights?: { kL?: number; kC?: number; kH?: number }): number;

// ---- compositing (Porter-Duff 1984; W3C Compositing & Blending L1) ----

export type PorterDuffOperator =
  | 'clear' | 'copy' | 'destination' | 'source-over' | 'destination-over'
  | 'source-in' | 'destination-in' | 'source-out' | 'destination-out'
  | 'source-atop' | 'destination-atop' | 'xor' | 'lighter';

export type BlendMode =
  | 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten'
  | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light'
  | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';

/** Straight [c0,c1,c2,a] → premultiplied. */
export function premultiply(c: ArrayLike<number>, out?: number[]): number[];
/** Premultiplied → straight (1/alpha error amplification; alpha-0 passes channels through). */
export function unpremultiply(c: ArrayLike<number>, out?: number[]): number[];
/** Porter-Duff compositing of premultiplied colors. Polar spaces refused. */
export function composite(srcP: ArrayLike<number>, dstP: ArrayLike<number>, op?: PorterDuffOperator, space?: SpaceLike, out?: number[]): number[];
/** Source-over of a premultiplied layer stack (layers[0] on top), closed-form. */
export function overStack(layers: ArrayLike<number>[], space?: SpaceLike, out?: number[]): number[];
/** W3C blend-then-composite on straight-alpha colors (spec default: gamma sRGB). */
export function blend(src: ArrayLike<number>, dst: ArrayLike<number>, mode?: BlendMode, space?: SpaceLike, out?: number[]): number[];
export const porterDuffOperators: PorterDuffOperator[];
export const blendModes: BlendMode[];

// ---- pixel boundary (the only rounding in the library) ----

export function toBytes(coords: ArrayLike<number>, out?: number[]): number[];
export function fromBytes(bytes: ArrayLike<number>, out?: Vec3): Vec3;
export function toHex(coords: ArrayLike<number>): string;
export function fromHex(hex: string, out?: Vec3): Vec3;

// ---- polar helpers ----

export function rectToPolar(v: ArrayLike<number>, out?: Vec3): Vec3;
export function polarToRect(v: ArrayLike<number>, out?: Vec3): Vec3;
export const DEG2RAD: number;
export const RAD2DEG: number;

// ---- low level ----

export function mulVec(m: ArrayLike<number>, v: ArrayLike<number>, out?: Vec3): Vec3;
export function mul(a: ArrayLike<number>, b: ArrayLike<number>, out?: number[]): number[];
export function invert(m: ArrayLike<number>, out?: number[]): number[];
export function deriveRgbMatrices(def: {
  r: number[]; g: number[]; b: number[]; white: number[];
}): { toXyz: number[]; fromXyz: number[]; whiteXyz: Vec3 };
export const transfer: Record<TransferName, { decode(v: number): number; encode(v: number): number }>;
