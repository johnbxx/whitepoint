// CIE 1931 2° CMFs at the normative 1 nm resolution (CVRL). Opt-in module:
// needed for spiky spectra (fluorescent/discharge lines); the default 5 nm
// tables agree to ~1e-4 in chromaticity for smooth spectra.
import type { CMF } from './spectral.d.ts';
export const CMF_1931_2_1NM: CMF;
