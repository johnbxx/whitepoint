---
name: whitepoint
description: Use when working with colors via the whitepoint library — converting between its 42 color spaces (CSS, HDR, film/ACES, CAM16/HCT, OKHSL, spectral), gamut mapping, mixing, chromatic adaptation/illuminants, compositing, or emitting GLSL/WGSL color code. Covers API conventions, the space registry, and pitfalls that cause wrong colors.
---

# whitepoint

A research-grade color library. Plain arrays in, plain arrays out — there is
no Color class, no string parsing, no fluent chaining.

## The one mental model

```js
import { convert } from 'whitepoint';
convert(coords, fromSpace, toSpace, out?)  // out is optional, for hot loops
```

- `coords` is `[c0, c1, c2]`. Spaces are **string ids** (`'oklch'`) or
  imported **space objects** (`OKLCH` — faster in hot loops, tree-shakeable).
- **Channels are 0–1 floats** (sRGB is NOT 0–255). **Hue is degrees.**
  Exceptions, per the underlying specs: CIE `lab`/`lch`/`luv` L is **0–100**,
  `hsluv`/`hpluv` S and L are **0–100**, `hct` tone is 0–100.
- Bytes/hex only at the explicit boundary: `fromHex`, `toHex`, `toBytes`,
  `fromBytes`.
- Unknown space ids throw an error listing every valid id — read it.

## Space registry (42)

CSS: `srgb srgb-linear display-p3 a98-rgb prophoto-rgb rec2020 oklab oklch
lab lch hsl hwb xyz-d65 xyz-d50` · HDR: `rec2100-pq rec2100-hlg ictcp jzazbz
jzczhz` · Film: `aces2065-1 acescg acescc acescct bt709 dci-p3
ycbcr-601-full ycbcr-709-limited` · Perceptual: `okhsl okhsv hsluv hpluv luv
lchuv din99o din99o-lch` · Appearance: `cam16 cam16-ucs hct` · Classic:
`hsv hsi hunter-lab xyb`

## The API map

| Job | Call |
|---|---|
| Convert | `convert(c, from, to, out?)` |
| Mix (CSS §12, 4 hue arcs) | `mix(a, b, t, space, {hue?}, out?)`; alpha: `mixAlpha` (4-ch) |
| Fit into a gamut | `toGamut(c, space, {gamut:'srgb', method:'css'\|'cusp'\|'clip'}, out?)` |
| Check gamut | `inGamut(c, space, gamut?)` |
| Re-light / adapt | `adapt(xyz, from, to, out?, {cat?})` — names (`'D65'`,`'A'`,`'F2'`), `[x,y]`, or XYZ; `illuminantFromCCT(K)` |
| CSS string OUT | `serialize(c, space, {alpha?})` — input parsing: use culori, pass arrays here |
| Contrast | `contrastWCAG2(a, b, space?)` |
| Difference | `deltaEOK(oklabA, oklabB)`, `deltaE2000(labA, labB)`, `deltaECAM16(a, b, space?)` |
| Composite | `premultiply/unpremultiply/composite/overStack/blend` (4-ch; polar spaces throw) |
| Shaders | `import { glsl, wgsl, js, glslMix, glslGamutMap, glslComposite, glslBlend } from 'whitepoint/codegen'` |
| Spectra | `import { reflectanceToXyz, planckianXy, daylightSPD } from 'whitepoint/spectral'` |
| CVD / CCT | `simulateCVD(c, space, {type, severity?})`, `cctOf(xy) → {cct, duv}` (both in `whitepoint/spectral`) |
| Paint mixing | `pigmentMix(a, b, t, space?)` (`whitepoint/spectral`) — Kubelka–Munk; t = pigment concentration, NOT perceptual position |
| Photometry | `photopicLuminance(spd)`, `scotopicLuminance(spd)`, `mesopic(Lp, Ls) → {m, luminance}` (CIE 191) — all `whitepoint/spectral` |
| Underwater / media | `attenuate(spd, WATER_ABSORPTION, meters)` — Beer–Lambert, Pope & Fry water data |
| Lamps & lines | `lowPressureSodiumSPD()`, `lineSPD([[nm, power], …])`, `FL2_SPD/FL7_SPD/FL11_SPD`; use `whitepoint/spectral-1nm` CMFs for line spectra |
| Sky | `skyModel({elevation, turbidity, albedo})` + `skyRadiance/skySPD` (`whitepoint/sky`) — Hosek–Wilkie spectral dome, W·m⁻²·sr⁻¹·nm⁻¹ |
| YCbCr | `makeYCbCr({matrix:'601'\|'709'\|'2020', range:'full'\|'limited'})` — both REQUIRED; no bare `'ycbcr'` exists |

## Pitfalls (these cause wrong colors)

1. **Scale mixups**: OKLab L is 0–1; CIE Lab L is 0–100. sRGB is 0–1 floats.
2. **Hot loops**: pass space OBJECTS + a reused `out` array → ~47 ns, zero
   allocation. Strings cost ~20 ns extra. Never allocate per pixel.
3. **HDR/log spaces clamp negative linear light** (`ictcp jzazbz jzczhz
   rec2100-* acescc acescct`): out-of-container colors don't round-trip, by
   design. **OKHSL is only invertible inside sRGB.**
4. **Alpha is not a coordinate.** Everything is 3-channel; alpha-aware entry
   points (`mixAlpha`, compositing, `serialize` option) are explicit and
   4-channel.
5. Display colors after math in big spaces: run `toGamut(..., {gamut:'srgb'})`
   before `toHex`, or you'll silently clip.
6. Shader emits are display-direction for solver spaces: `glsl('okhsl','srgb')`
   works; the reverse does not.
7. CAM16/HCT default to Material's viewing conditions; for others use
   `cam16ViewingConditions({white, adaptingLuminance, surround, ...})` with
   `xyzToCam16`/`cam16ToXyz` (XYZ scaled to Y=100 there).

## Verifying your work

The repo ships its own verification: `npm test` (105 tests incl. differential
oracles vs culori/colorjs/texel/Material), `npm run precision` (round-trip
bounds table), `npm run bench`, `npm run alloc`. When colors look wrong,
suspect a scale mixup (#1) or a missing gamut map (#5) before suspecting the
library — its error bounds are published and CI-enforced.

More worked examples: RECIPES.md in the package root
(`node_modules/whitepoint/RECIPES.md`) or
https://github.com/somejohnbforya/whitepoint/blob/main/RECIPES.md
