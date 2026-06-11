# whitepoint

> **A research-grade color laboratory for the web.**
> **Every color space, every illuminant — digit-identical in JS, GLSL, and WGSL.**

Every conversion is generated from one table of cited constants. The matrix that
runs in your JavaScript is the matrix that runs in your shader — and CI verifies
it to the last digit. Stop hand-porting color matrices.

**Status: pre-release.** Conversions, the illuminant lab, the codegen pipeline,
gamut mapping, and the performance pass are built and verified; packaging
(types, npm) and the extended space catalog are in progress.
See [NORTHSTAR.md](./NORTHSTAR.md) for the principles and roadmap.

## Install

```sh
npm install whitepoint
```

Plain ESM, zero dependencies, TypeScript definitions included, `sideEffects:
false` (tree-shakes to what you import). Two entry points: `whitepoint`
(conversions, illuminants, gamut) and `whitepoint/codegen` (shader emission).

## Conversions

All 14 CSS Color 4 spaces against an XYZ-D65 hub. Channels are 0–1 floats
(hue in degrees). No rounding anywhere except the explicit byte boundary.
Every function takes an optional `out` array for zero-allocation hot loops.

```js
import { convert, OKLCH, sRGB } from 'whitepoint';

convert([0.7, 0.15, 250], 'oklch', 'display-p3');  // by id
OKLCH.toXyz([0.7, 0.15, 250], out);                // tree-shakeable, zero-alloc

// spaces: srgb, srgb-linear, display-p3, a98-rgb, prophoto-rgb, rec2020,
//         oklab, oklch, lab, lch, hsl, hwb, xyz-d65, xyz-d50
```

RGB↔XYZ matrices are **derived from the cited primaries at module load** and
asserted against the spec's published values in CI — this library contains no
transcribed conversion matrix anywhere. (That policy has already paid for
itself: the widely-copied 10-digit ProPhoto and Bradford matrices disagree
with the spec's own derivation at ~1e-5; we match the derivation.)

## The illuminant lab

```js
import { adapt, illuminants, illuminantFromCCT } from 'whitepoint';

adapt(xyz, 'D65', 'A');                          // Bradford (default)
adapt(xyz, 'D65', 'F11', out, { cat: 'cat16' }); // CAT02/CAT16/von Kries/XYZ-scaling
adapt(xyz, [0.31, 0.33], customWhiteXyz);        // arbitrary white points
adapt(xyz, 'D65', illuminantFromCCT(5500));      // CIE daylight locus, 4000–25000 K
```

Full CIE 15:2004 illuminant table (A, B, C, D50–D75, E, F2/F7/F11). CAT
inverses are computed, never transcribed.

## Codegen: the same math in your shader

```js
import { glsl, wgsl, js } from 'whitepoint/codegen';

glsl('oklch', 'display-p3');
// → self-contained `vec3 wp_oklch_to_display_p3(vec3 c)` — helpers included,
//   adjacent matrices fused, constants identical to the JS engine's
wgsl('lab', 'srgb');   // same chain as WGSL
js('oklab', 'rec2020'); // standalone dependency-free JS, used for parity tests
```

Emitted JS is evaluated against the library across all 144 space pairs in CI
(agreement ≤1e-9, measured ~1e-15). GPU arithmetic is float32, so end-to-end
shader agreement is bounded by shader precision — the *constants* are
digit-identical; declare `precision highp float;` in GLSL.

## Verified precision

Round-trip bounds, measured by `npm run precision` (20,000 samples per cell,
seeded; enforced at 1e-9 in CI):

| space | srgb → space → srgb | oklch → space → oklch |
|---|---|---|
| srgb | 0.0e+0 | 1.5e-12 |
| srgb-linear | 6.1e-15 | 1.4e-12 |
| display-p3 | 3.5e-15 | 1.6e-12 |
| a98-rgb | 3.5e-15 | 1.5e-12 |
| prophoto-rgb | 8.5e-15 | 1.5e-12 |
| rec2020 | 8.8e-15 | 1.9e-12 |
| oklab | 4.5e-14 | 5.7e-14 |
| oklch | 3.7e-14 | 0.0e+0 |
| lab | 1.8e-14 | 1.6e-12 |
| lch | 1.8e-14 | 1.5e-12 |
| hsl | 2.0e-15 | 1.4e-12 |
| hwb | 1.9e-15 | 1.3e-12 |
| xyz-d65 | 5.0e-15 | 1.5e-12 |
| xyz-d50 | 1.1e-14 | 1.7e-12 |

Differential testing against [@texel/color](https://github.com/texel-org/color)
and [culori](https://culorijs.org) runs in CI with documented per-family
tolerances (see `test/differential.test.js` — including why they differ where
they do).

## Speed

State of the art, measured against the fastest maintained alternatives
([@texel/color](https://github.com/texel-org/color) and
[culori](https://culorijs.org)) on identical inputs:

| ns/op (lower is better) | **whitepoint** | @texel/color | culori |
|---|---|---|---|
| oklch → srgb | **47** | 60 | 53 |
| srgb → oklch | **58** | 76 | 94 |
| srgb → rec2020 | **57** | 70 | 82 |
| gamut map: cusp method | 118 | 113 | — |
| gamut map: CSS reference method | **992** | — | 2644 |

*Node v25, Apple Silicon, 16,384 samples/run, best of 5 after warmup —
reproduce with `npm run bench`. Conversions are verified equivalent across
libraries in `test/differential.test.js` before being compared for speed.
whitepoint numbers use the space-object API (texel is object-only); string
ids cost ~20 ns/op extra. Cusp mapping is statistical parity in speed but
not in accuracy: texel approximates the gamut cusp with fitted polynomials
plus one Halley step, whitepoint solves the boundary cubics exactly.
Measured across 3600 hues with each library's own conversions
(`node tools/cusp-accuracy.js`): whitepoint's cusp sits on the boundary to
≤ 3.3e-15 at every hue in every gamut; texel's fit is excellent typically
(median 1.5e-9) but reaches 3.4e-2 near the blue corner (hue ≈ 264°) —
larger than the 0.02 JND, in exactly the region where gamut mapping is
exercised hardest. Same speed, no asterisk.*

Every hot path is allocation-free with a caller-provided `out` array —
verified by `node --expose-gc tools/alloc-audit.js` (< 0.01 B/op on
conversions; CI-enforceable, exits nonzero on regression).

How: matrices precomposed at module load and route-fused at first use
(every conversion is at most decode → one 3×3 → encode, or the OKLab
equivalent), object-keyed route caching with a last-pair memo (no string
keys, no allocation in dispatch), and exact cubic structure exploited
wherever others fit approximations.

## Coordinate operations

```js
import { mix, mixAlpha, serialize, contrastWCAG2, deltaE2000, deltaEOK } from 'whitepoint';

mix(a, b, 0.5, 'oklch', { hue: 'longer' });   // CSS Color 4 §12, all four hue arcs
mixAlpha([1,0,0,0], [0,0,1,1], 0.5, 'srgb');  // premultiplied per §12.3 (4-channel form)
serialize([0.7, 0.15, 250], 'oklch', { alpha: 0.5 }); // 'oklch(0.7 0.15 250 / 0.5)'
contrastWCAG2(fg, bg, 'srgb');                // WCAG 2.x, spec-literal formula
deltaE2000(lab1, lab2);                       // CIEDE2000 (CIE 015 / Sharma 2005)
```

Shader-side mixing too — gradient math in any space, on the GPU:

```js
import { glslMix, wgslMix } from 'whitepoint/codegen';
glslMix('oklch', { hue: 'shorter' }); // vec3 wp_mix_oklch_shorter(vec3 a, vec3 b, float t)
```

## Compositing

Porter-Duff (all 13 operators) and the W3C blend modes, premultiplied-native:
compositing's one precision sink is un-premultiplication (error amplifies as
1/α), so the pipeline keeps colors premultiplied and divides once, at the
boundary. `overStack` evaluates the N-layer closed form in a single
accumulation — fewer roundings than pairwise folding, verified in CI.
Compositing is physically meaningful in linear-light (the default); gamma
sRGB is supported because CSS composites there; polar spaces are refused.

```js
import { premultiply, unpremultiply, composite, overStack, blend } from 'whitepoint';

composite(srcP, dstP, 'source-over', 'srgb-linear'); // premultiplied in/out
overStack([top, middle, bottom]);                    // closed-form layer stack
blend(src, dst, 'soft-light');                       // W3C blend modes, straight alpha

import { glslComposite, wgslComposite } from 'whitepoint/codegen';
glslComposite('source-atop'); // vec4 wp_composite_source_atop(vec4 src, vec4 dst)
```

## Scope rule and anti-goals

One rule decides what belongs here: **if a frozen spec defines it on
coordinates, we implement it exactly; strings are supported on the way out
only; constants still in motion wait.**

In by the rule: conversions, adaptation, gamut mapping, interpolation
(including premultiplied alpha — the one place alpha has defined coordinate
semantics), serialization, WCAG 2 contrast, deltaE. Out by the rule: CSS
string *parsing* (a grammar problem with churning specs and `none` semantics
that would poison the 3-channel zero-allocation core — parse with culori and
pass the arrays here), and APCA/WCAG 3 contrast (returns when its constants
freeze). Out by judgment: color wrapper classes, palettes, gradient objects
— those belong to applications. Alpha is not a color coordinate: the
conversion core is and stays 3-channel; alpha-aware operations are separate,
consistently 4-channel entry points.

## License

MIT
