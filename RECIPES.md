# whitepoint recipes

Job-to-be-done snippets. Conventions throughout: colors are plain arrays,
channels are 0–1 floats (hue in degrees; CIE Lab/Luv L runs 0–100), every
function takes an optional `out` array for zero-allocation loops.

## Hex in, any space out

```js
import { fromHex, toHex, convert } from 'whitepoint';

const oklch = convert(fromHex('#4ba3f7'), 'srgb', 'oklch');
// → [0.6976, 0.1334, 250.4]
toHex(convert([0.6976, 0.1334, 250.4], 'oklch', 'srgb')); // '#4ba3f7'
```

## A perceptual gradient (CSS output)

```js
import { mix, convert, serialize, toGamut } from 'whitepoint';

const a = convert(fromHex('#0b3d91'), 'srgb', 'oklch');
const b = convert(fromHex('#f7b32b'), 'srgb', 'oklch');
const stops = Array.from({ length: 9 }, (_, i) => {
  const c = mix(a, b, i / 8, 'oklch');                 // CSS Color 4 §12 hue arcs
  return serialize(toGamut(c, 'oklch'), 'oklch');      // gamut-safe css strings
});
```

## The same gradient, in your fragment shader

```js
import { glslMix, glsl } from 'whitepoint/codegen';

const shaderSrc = `
  ${glsl('oklch', 'srgb')}        // vec3 wp_oklch_to_srgb(vec3 c)
  ${glslMix('oklch')}             // vec3 wp_mix_oklch_shorter(vec3 a, vec3 b, float t)
  // in main(): color = wp_oklch_to_srgb(wp_mix_oklch_shorter(A, B, t));
`;
// constants are digit-identical to the JS above — same tables, parity-tested
```

## Display a wide-gamut color on an sRGB screen

```js
import { toGamut, convert } from 'whitepoint';

const p3Color = [0, 1, 0.2];                            // out of sRGB
const safe = toGamut(convert(p3Color, 'display-p3', 'oklch'), 'oklch',
  { gamut: 'srgb', method: 'css' });                    // spec algorithm
// method: 'cusp' = faster, hue-exact; 'clip' = the blunt baseline
```

## Check (and fix) text contrast

```js
import { contrastWCAG2, mix, convert } from 'whitepoint';

let fg = convert(fromHex('#888888'), 'srgb', 'oklch');
const bg = [1, 1, 1];
while (contrastWCAG2(convert(fg, 'oklch', 'srgb'), bg) < 4.5) {
  fg[0] -= 0.01;                                        // darken in OKLCH: hue-stable
}
```

## Re-light a brand color (the illuminant lab)

```js
import { adapt, convert, illuminantFromCCT } from 'whitepoint';

const xyz = convert(brandSrgb, 'srgb', 'xyz-d65');
const underStoreLight = adapt(xyz, 'F2', 'D65');        // fluorescent → display
const underTungsten  = adapt(xyz, 'A', 'D65', undefined, { cat: 'cat16' });
const at5000K        = adapt(xyz, illuminantFromCCT(5000), 'D65');
```

## A Material-style tonal palette via HCT

```js
import { convert } from 'whitepoint';

const [h, c] = convert(seedSrgb, 'srgb', 'hct');
const tones = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((t) =>
  toHex(toGamut(convert([h, c, t], 'hct', 'srgb'), 'srgb', { method: 'cusp' })));
```

## Sort by perceptual similarity

```js
import { deltaE2000, deltaEOK, convert } from 'whitepoint';

const target = convert(pick, 'srgb', 'lab');
swatches.sort((p, q) =>
  deltaE2000(convert(p, 'srgb', 'lab'), target) -
  deltaE2000(convert(q, 'srgb', 'lab'), target));
// deltaEOK (fast) and deltaECAM16 (appearance-grade) take the same shape
```

## HDR: tone operations in ICtCp, on the GPU

```js
import { glsl } from 'whitepoint/codegen';

const src = `
  ${glsl('rec2100-pq', 'ictcp')}   // decode PQ signal into ICtCp
  ${glsl('ictcp', 'rec2100-pq')}   // and back after your tone curve on I
`;
```

## VFX handoff: sRGB ↔ ACEScg

```js
import { convert } from 'whitepoint';

const acescg = convert(srgb, 'srgb', 'acescg');          // scene-linear AP1
const log = convert(acescg, 'acescg', 'acescc');         // colorist log
// ~D60 white point handled by the same CAT machinery as everything else
```

## Spectral: a measured sample under two lights

```js
import { reflectanceToXyz, illuminantASPD, D65_SPD } from 'whitepoint/spectral';
import { convert, adapt } from 'whitepoint';

const refl = { start: 380, step: 10, values: measuredReflectance }; // 0–1
const day = reflectanceToXyz(refl);                       // D65 by default
const night = reflectanceToXyz(refl, { illuminant: illuminantASPD() });
// compare appearance: adapt 'night' to D65 first, then deltaE in oklab
```

## Check your palette for color-blind users

```js
import { simulateCVD } from 'whitepoint/spectral';
import { deltaEOK, convert } from 'whitepoint';

// Brettel 1997, anchors derived from the CMFs — not transcribed matrices
const seen = palette.map((c) => simulateCVD(c, 'srgb', { type: 'deuteranopia' }));
// flag pairs that collapse for a deuteranope:
const confusable = deltaEOK(
  convert(seen[0], 'srgb', 'oklab'), convert(seen[1], 'srgb', 'oklab')) < 0.04;
// types: protanopia | deuteranopia | tritanopia; severity: 0–1
```

## What temperature is this white?

```js
import { cctOf, spectrumXy, D65_SPD } from 'whitepoint/spectral';

cctOf([0.3127, 0.329]);   // { cct: ~6503, duv: +0.0032 } — D65, slightly green
cctOf([0.4476, 0.4074]);  // { cct: ~2856, duv: ~0 }      — tungsten, on-locus
// solved against the exact Planckian locus, not McCamy's fitted formula;
// duv > 0 is greenish, < 0 pinkish; CCT is meaningful for |duv| ≲ 0.05
```

## Mix paint, not light (Kubelka–Munk)

```js
import { pigmentMix, reflectanceOf, kmMixReflectance } from 'whitepoint/spectral';

pigmentMix(blue, yellow, 0.7, 'srgb');  // passes through real green —
// reflectance spectra are Newton-solved per color (Jakob–Hanika sigmoids,
// no lookup tables), then mixed as K/S per Kubelka–Munk. t is pigment
// concentration: strong pigments dominate, exactly like real paint.

// hot loops: solve the endpoint spectra once, mix per step
const ra = reflectanceOf(a), rb = reflectanceOf(b);
const rm = kmMixReflectance(ra, rb, t); // → reflectanceToXyz(rm) → convert
```

## Composite layers without losing precision

```js
import { premultiply, overStack, unpremultiply, blend } from 'whitepoint';

const layers = sprites.map((s) => premultiply(s));       // [r,g,b,a] straight → premul
const flat = unpremultiply(overStack(layers, 'srgb-linear')); // divide ONCE, at the end
const moody = blend(top, bottom, 'soft-light');           // W3C blend modes, straight alpha
```

## YCbCr from a JPEG decoder

```js
import { convert, makeYCbCr } from 'whitepoint';

convert([y, cb, cr].map((v) => v / 255), 'ycbcr-601-full', 'srgb'); // JFIF
const video = makeYCbCr({ matrix: '709', range: 'limited' });        // both REQUIRED
// there is deliberately no bare 'ycbcr' — the name underdetermines the math
```

## The zero-allocation hot loop

```js
import { convert, OKLCH, sRGB } from 'whitepoint';

const out = [0, 0, 0];
for (const px of pixels) {
  convert(px, OKLCH, sRGB, out);   // space OBJECTS + out array: 47 ns, 0 B
  write(out);
}
```

## CSS strings in, CSS strings out

```js
import { parse, parseTo, serialize } from 'whitepoint';
parseTo('#ff8800', 'oklch');               // hex straight to coordinates
parse('oklch(70% 0.15 250deg)');           // { space, coords, alpha } | null
parse('rebeccapurple');                    // all 148 named colors
serialize(coords, 'oklch');                // and back out
// parse(serialize(c)) round-trips; bad strings return null, never throw
```

## Underwater color at depth

```js
import { D65_SPD, WATER_ABSORPTION, attenuate, reflectanceToXyz, reflectanceOf }
  from 'whitepoint/spectral';
// daylight after 12 m of seawater (Pope & Fry 1997 absorption, Beer-Lambert)
const light = attenuate(D65_SPD, WATER_ABSORPTION, 12);
// what a red wetsuit looks like down there (spoiler: black)
const xyz = reflectanceToXyz(reflectanceOf([0.8, 0.1, 0.1]), { illuminant: light });
```

## Night vision (mesopic photometry)

```js
import { photopicLuminance, scotopicLuminance, mesopic } from 'whitepoint/spectral';
// CIE 191:2010: below 5 cd/m2 rods take over and color fades
const Lp = photopicLuminance(spd);      // cd/m2 for absolute input
const Ls = scotopicLuminance(spd);      // rod-weighted (V', K'm = 1700.06)
const { m } = mesopic(Lp, Ls);          // 1 = full color, 0 = rod gray
```

## Lamp spectra: sodium, fluorescent, lines

```js
import { sodiumSPD, lineSPD, FL2_SPD, FL11_SPD, spectrumXy } from 'whitepoint/spectral';
import { CMF_1931_2_1NM } from 'whitepoint/spectral-1nm';
const lps = sodiumSPD();                      // Na D doublet (NIST), 2:1
const neon = lineSPD([[640.2, 1], [585.2, 0.5]]);
spectrumXy(lps, { cmf: CMF_1931_2_1NM });     // line spectra want 1 nm CMFs
```

## The sky, by wavelength (Hosek-Wilkie)

```js
import { skyModel, skySPD } from 'whitepoint/sky';
import { spectrumXy, cctOf } from 'whitepoint/spectral';
// exact port of the SIGGRAPH 2012 spectral sky-dome model
const state = skyModel({ elevation: 0.5, turbidity: 3, albedo: 0.1 });
const zenith = skySPD(state, 0, Math.PI / 2 - 0.5);  // theta, gamma from sun
cctOf(spectrumXy(zenith));                            // a very blue number
```

## Convert a million pixels (the batch path)

```js
import { convertBuffer } from 'whitepoint';
// interleaved [l,c,h, l,c,h, ...] -> [r,g,b, ...], route resolved once,
// zero allocation per pixel: ~46 ns/px, 1.75x the naive per-pixel pattern
convertBuffer(float32Pixels, 'oklch', 'srgb');             // in place
convertBuffer(src, 'srgb', 'display-p3', dst);             // or into dst
```

## The color of direct sunlight (Hosek-Wilkie solar disc)

```js
import { skyModel, sunSPD, skySPD } from 'whitepoint/sky';
import { cctOf, spectrumXy } from 'whitepoint/spectral';
const dusk = skyModel({ elevation: 0.05, turbidity: 3 });
cctOf(spectrumXy(sunSPD(dusk, Math.PI / 2 - 0.05)));  // a low, red sun
// total radiance toward the sun = sunRadiance(...) + skyRadiance(...)
```

## Grade a lamp (CRI + TM-30)

```js
import { cri, tm30, FL2_SPD } from 'whitepoint/spectral';
const { Ra, Ri } = cri(FL2_SPD);     // CIE 13.3: Ra 64, R9 (strong red) -84
const { Rf, Rg } = tm30(FL2_SPD);    // IES TM-30-20 / CIE 224: Rf 70, Rg 86
// works on any SPD: measured, daylightSPD(T), planckianSPD(T), lineSPD(...)
```

## Pitfalls worth knowing

- **Lab/Luv L is 0–100; OKLab L is 0–1** — both per spec; don't mix them up.
- **HDR/log spaces clamp negative linear light** (`ictcp`, `jzazbz`,
  `rec2100-*`, `acescc/t`): out-of-container colors don't round-trip, by
  design. **OKHSL is only invertible inside sRGB** (its s>0.8 mapping has a
  pole at the boundary).
- **Alpha is not a coordinate.** 3-channel everywhere; alpha-aware entry
  points (`mixAlpha`, `composite`, `serialize`'s option) are explicit.
- **Compositing on hue-polar spaces throws** — there's no defensible meaning.
- The default `mix()` hue arc is `'shorter'`; CSS's other three
  (`longer`/`increasing`/`decreasing`) are options.
