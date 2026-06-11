// Measures cusp accuracy: whitepoint's exact cusp vs @texel/color's fitted
// polynomial + one-Halley-step cusp (after Ottosson 2021).
//
// Metric 1 — fit error, isolated: texel's findCuspOKLCH output vs the EXACT
// cusp computed from texel's own matrices (bracketed bisection on the
// channel-zero cubic, the same method whitepoint uses on its own matrices).
// Using their matrices removes constant-table differences from the
// comparison; what remains is purely the polynomial fit + Halley residual.
//
// Metric 2 — boundary residual: a true cusp has its darkest linear channel
// at exactly 0 and its brightest at exactly 1. Evaluate each library's
// claimed cusp with that library's own conversions and report
// max(|min(lin)|, |max(lin)−1|).
//
// Usage: node tools/cusp-accuracy.js

import { convert, findCusp, spaces, mulVec } from '../src/index.js';
import * as texel from '@texel/color';

const DEG2RAD = Math.PI / 180;

// Exact cusp from texel's own matrices (Ottosson structure: alphas are 1).
function texelExactCusp(a, b, gamut) {
  const M = texel.getGamutLMStoRGB(gamut); // rows: linear RGB from LMS
  const K = texel.OKLab_to_LMS_M;          // rows i: lms'_i = L + (K[i]·(a,b))·C
  const kl = K[0][1] * a + K[0][2] * b;
  const km = K[1][1] * a + K[1][2] * b;
  const ks = K[2][1] * a + K[2][2] * b;
  const g = (s) => {
    let l = 1 + kl * s, m = 1 + km * s, q = 1 + ks * s;
    l = l * l * l; m = m * m * m; q = q * q * q;
    const r0 = M[0][0] * l + M[0][1] * m + M[0][2] * q;
    const r1 = M[1][0] * l + M[1][1] * m + M[1][2] * q;
    const r2 = M[2][0] * l + M[2][1] * m + M[2][2] * q;
    return [Math.min(r0, r1, r2), Math.max(r0, r1, r2)];
  };
  let lo = 0, hi = 0.05;
  while (g(hi)[0] > 0) { lo = hi; hi *= 2; if (hi > 16) throw new Error('no cusp'); }
  for (let i = 0; i < 52; i++) {
    const mid = 0.5 * (lo + hi);
    if (g(mid)[0] > 0) lo = mid; else hi = mid;
  }
  const L = Math.cbrt(1 / g(lo)[1]);
  return [L, lo * L];
}

// Boundary residual of a claimed cusp, per library, in linear channels.
function wpResidual(cusp, h, gamutId) {
  const xyz = convert([cusp[0], cusp[1], h], 'oklch', 'xyz-d65');
  const lin = mulVec(spaces[gamutId].m.fromXyz, xyz);
  return Math.max(Math.abs(Math.min(...lin)), Math.abs(Math.max(...lin) - 1));
}

function texResidual(cusp, h, linSpace) {
  const lin = texel.convert([cusp[0], cusp[1], h], texel.OKLCH, linSpace);
  return Math.max(Math.abs(Math.min(...lin)), Math.abs(Math.max(...lin) - 1));
}

const GAMUTS = [
  ['srgb', texel.sRGBGamut, texel.sRGBLinear],
  ['display-p3', texel.DisplayP3Gamut, texel.DisplayP3Linear],
  ['rec2020', texel.Rec2020Gamut, texel.Rec2020Linear],
];

console.log('hue sweep: 0–360° in 0.1° steps (3600 points per gamut)\n');

for (const [id, tGamut, tLin] of GAMUTS) {
  if (!tGamut) { console.log(`${id}: texel gamut not exported, skipping`); continue; }
  let fitMaxL = 0, fitMaxC = 0, fitWorstHue = 0;
  let texResMax = 0, wpResMax = 0;
  const texCusp = [0, 0];
  for (let i = 0; i < 3600; i++) {
    const h = i * 0.1;
    const hr = h * DEG2RAD;
    const a = Math.cos(hr), b = Math.sin(hr);

    texel.findCuspOKLCH(a, b, tGamut, texCusp);
    const tExact = texelExactCusp(a, b, tGamut);
    const dL = Math.abs(texCusp[0] - tExact[0]);
    const dC = Math.abs(texCusp[1] - tExact[1]);
    if (Math.max(dL, dC) > Math.max(fitMaxL, fitMaxC)) fitWorstHue = h;
    fitMaxL = Math.max(fitMaxL, dL);
    fitMaxC = Math.max(fitMaxC, dC);

    texResMax = Math.max(texResMax, texResidual(texCusp, h, tLin));
    wpResMax = Math.max(wpResMax, wpResidual(findCusp(h, id), h, id));
  }
  console.log(`== ${id} ==`);
  console.log(`  texel fit error vs exact-on-their-matrices: max |ΔL| ${fitMaxL.toExponential(2)}, max |ΔC| ${fitMaxC.toExponential(2)} (worst near ${fitWorstHue.toFixed(1)}°)`);
  console.log(`  boundary residual (own conversions):  texel ${texResMax.toExponential(2)}   whitepoint ${wpResMax.toExponential(2)}\n`);
}
