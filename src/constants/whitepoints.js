// Standard illuminant white points as CIE 1931 2° xy chromaticities.
//
// Two families coexist on purpose, and the difference is real:
//
//  - `illuminants`: CIE 15:2004 values (5 significant digits). These are the
//    colorimetric reference values, used by the illuminant lab (adapt, CCT).
//  - `CSS_D65` / `CSS_D50`: the 4-digit values mandated by CSS Color 4 §10 and
//    the underlying RGB space standards (IEC 61966-2-1 etc.). These drive the
//    RGB↔XYZ matrix derivations so that our matrices agree with the CSS
//    ecosystem digit-for-digit.
//
// CIE D65 (0.31272, 0.32903) and CSS/sRGB D65 (0.3127, 0.3290) differ in the
// fifth digit. That discrepancy is in the standards, not in this library.

/** xy chromaticity → XYZ tristimulus with Y = 1. */
export function xyToXyz(xy, out = [0, 0, 0]) {
  const x = xy[0], y = xy[1];
  out[0] = x / y;
  out[1] = 1;
  out[2] = (1 - x - y) / y;
  return out;
}

// CIE 15:2004, Table T.3 (2° standard observer), as xy. These are the
// reference whites used for chromatic adaptation; the F-series is the
// CIE-recommended priority subset (F2/F7/F11), matching the shipped SPDs.
// Lamp SPDs that aren't adaptation whites (the HP discharge series,
// low-pressure sodium) live in whitepoint/spectral, not here.
/** CIE illuminant chromaticities (CIE 15:2004): A, B, C, D50–D75, E, F2/F7/F11. */
export const illuminants = {
  A:   [0.44757, 0.40745], // incandescent / tungsten, 2856 K
  B:   [0.34842, 0.35161], // direct sunlight at noon (deprecated by CIE, kept for completeness)
  C:   [0.31006, 0.31616], // average north-sky daylight (deprecated by CIE)
  D50: [0.34567, 0.35850], // horizon light; ICC profile connection space
  D55: [0.33242, 0.34743], // mid-morning / mid-afternoon daylight
  D65: [0.31272, 0.32903], // noon daylight; television/monitor reference
  D75: [0.29902, 0.31485], // north-sky daylight
  E:   [1 / 3, 1 / 3],     // equal-energy radiator (exact by definition)
  F2:  [0.37208, 0.37529], // cool white fluorescent
  F7:  [0.31292, 0.32933], // broadband daylight fluorescent (D65 simulator)
  F11: [0.38052, 0.37713], // narrow-band tri-phosphor fluorescent (TL84)
};

// CSS Color 4 §10 white points (4 digits, per the RGB space standards).
/** CSS Color 4 §10 white points — the 4-digit chromaticities the CSS spec normalizes to. */
export const CSS_D65 = [0.3127, 0.3290];
/** CSS Color 4 §10 D50 (4-digit). */
export const CSS_D50 = [0.3457, 0.3585];

/** CSS D65 as XYZ tristimulus (Y = 1). */
export const CSS_D65_XYZ = xyToXyz(CSS_D65);
/** CSS D50 as XYZ tristimulus (Y = 1). */
export const CSS_D50_XYZ = xyToXyz(CSS_D50);
