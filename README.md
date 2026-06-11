# whitepoint

> **A research-grade color laboratory for the web.**
> **Every color space, every illuminant — digit-identical in JS, GLSL, and WGSL.**

[![npm](https://img.shields.io/npm/v/whitepoint)](https://www.npmjs.com/package/whitepoint)
[![CI](https://github.com/johnbxx/whitepoint/actions/workflows/ci.yml/badge.svg)](https://github.com/johnbxx/whitepoint/actions/workflows/ci.yml)
&nbsp;[**live demos**](https://johnbxx.github.io/whitepoint/)
· [**measured accuracy**](https://johnbxx.github.io/whitepoint/accuracy.html)
· [**recipes**](https://johnbxx.github.io/whitepoint/recipes.html)
· [north star](./NORTHSTAR.md)

Every conversion is generated from one table of cited constants. The matrix that
runs in your JavaScript is the matrix that runs in your shader — and CI verifies
it to the last digit. Stop hand-porting color matrices.

## What can you do here that you can't anywhere else?

- **Pull your color math into a shader** — conversions, OKLCH gradient mixing,
  gamut mapping, Porter-Duff, and blend modes emitted as GLSL/WGSL from the
  same constants the JS runs, parity-tested in CI
- **Re-light a color** — chromatic adaptation between arbitrary white points
  with five CATs, the full CIE illuminant table, and CCT-derived daylight
- **Compute color from spectra** — measured reflectance under any light, the
  true Planckian locus from Planck's law, both standard observers
- **Run a full appearance model** — CAM16 with configurable viewing
  conditions, CAM16-UCS, and Material's HCT
- **Stand on exact gamut geometry** — the cusp and boundary are solved
  (3×10⁻¹⁵), not polynomial-fitted (~3×10⁻² near blue elsewhere)
- **Cite your pipeline** — measured precision tables, named oracles, sourced
  constants; the verification suite is a feature, not a chore

The interactive demos in [`docs/`](./docs/index.html) run every claim live,
using the library itself.

## Install

```sh
npm install whitepoint
```

Plain ESM, zero dependencies, TypeScript definitions included, `sideEffects:
false` (tree-shakes to what you import). Two entry points: `whitepoint`
(conversions, illuminants, gamut) and `whitepoint/codegen` (shader emission).

## Conversions

**42 color spaces** against an XYZ-D65 hub. Channels are 0–1 floats
(hue in degrees). No rounding anywhere except the explicit byte boundary.
Every function takes an optional `out` array for zero-allocation hot loops.

```js
import { convert, OKLCH, sRGB } from 'whitepoint';

convert([0.7, 0.15, 250], 'oklch', 'display-p3');  // by id
OKLCH.toXyz([0.7, 0.15, 250], out);                // tree-shakeable, zero-alloc
```

| family | spaces |
|---|---|
| CSS Color 4 (complete) | srgb, srgb-linear, display-p3, a98-rgb, prophoto-rgb, rec2020, oklab, oklch, lab, lch, hsl, hwb, xyz-d65, xyz-d50 |
| HDR (CSS Color HDR / BT.2100) | rec2100-pq, rec2100-hlg, ictcp, jzazbz, jzczhz |
| Film & broadcast | aces2065-1, acescg, acescc, acescct, bt709, dci-p3, ycbcr-601-full, ycbcr-709-limited (+ `makeYCbCr()` — no bare 'ycbcr', by design) |
| Perceptual & picking | okhsl, okhsv, hsluv, hpluv, luv, lchuv, din99o, din99o-lch |
| Appearance models | cam16, cam16-ucs, hct — full CAM16 with configurable viewing conditions; in no other JS library |
| Classic & special | hsv, hsi, hunter-lab, xyb |

Plus device-model boundary utilities (naive CMYK; ANSI-16/256 with
perceptual quantization) — deliberately functions rather than registry
spaces, since the registry is trichromatic and invertible. Color difference:
`deltaEOK`, `deltaE2000`, `deltaECAM16`.

The weird ones are first-class citizens: ACES carries its ~D60 white through
the same chromatic-adaptation machinery as everything else, OKHSL sits on the
*exact* sRGB gamut boundary rather than the reference implementation's
polynomial fit, and every space joins `mix`, `toGamut`, and `serialize`
(where CSS defines a form) on arrival.

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

## Spectral: colorimetry from first principles

```js
import {
  reflectanceToXyz, emissionToXyz, spectrumXy,
  planckianXy, daylightSPD, illuminantASPD, CMF_1964_10,
} from 'whitepoint/spectral';

reflectanceToXyz(measuredSpectrum, { illuminant: illuminantASPD() });
// → hub XYZ of a real object under tungsten — feed it straight to convert()
planckianXy(3200);              // the TRUE blackbody locus, from Planck's law
daylightSPD(6504);              // CIE daylight synthesis (S0/S1/S2 basis)
spectrumXy(spd, { cmf: CMF_1964_10 }); // 10° observer, for the researchers
```

The CIE 1931 2° and 1964 10° color matching functions, the D65 SPD, and the
daylight basis functions ship as data generated by a committed pipeline from
the CVRL/CIE sources (`tools/build-spectral-data.js` — no spectral value in
this library was ever typed by hand). The validation closes the project's
oldest loop: integrating Planck's law at 2856 K against the CMFs reproduces
CIE illuminant A's tabulated chromaticity to 3e-4, and the D65 SPD integrates
back to its own table entry. Metamerism, reflectance-under-any-light, and
the unfitted Planckian locus — the workflows that previously required
Python — run in the browser. The F-series fluorescent SPDs ship too (their
integration reproduces the F2/F7/F11 table chromaticities — another loop
closed), and the CIE-normative **1 nm CMFs** are an opt-in import
(`whitepoint/spectral-1nm`) for spiky line spectra, tightening the
Planck→illuminant-A anchor to 1.5e-4.

## Codegen: the same math in your shader

```js
import { glsl, wgsl, js } from 'whitepoint/codegen';

glsl('oklch', 'display-p3');
// → self-contained `vec3 wp_oklch_to_display_p3(vec3 c)` — helpers included,
//   adjacent matrices fused, constants identical to the JS engine's
wgsl('lab', 'srgb');   // same chain as WGSL
js('oklab', 'rec2020'); // standalone dependency-free JS, used for parity tests
```

Emitted JS is evaluated against the library across all 529 emittable space
pairs in CI (agreement ≤1e-9, measured ~1e-15), plus hand-templated emitters
for the solver-based spaces (okhsl, okhsv, hsluv, hpluv — exact cusp and
boundary solvers in the shader) and per-pixel mixing, gamut mapping, and
compositing.

Appearance modeling runs in shaders too: `glsl('srgb', 'cam16-ucs')`,
`glsl('cam16-ucs', 'srgb')`, and `glsl('hct', 'srgb')` (the HCT inverse
carries its 48-step bisection — a palette/picker shader, not a per-frame
one) with all viewing-condition constants folded at emission.

And the claim is closed on real hardware: a CI job **compiles and executes
all 544 emitted GLSL programs on an actual GPU** (headless Chromium;
SwiftShader on runners) and verifies the outputs against the float64 library
within float32 arithmetic bounds, and compile-validates every WGSL emission
against the WebGPU compiler where available (`node tools/gpu-parity.js`). GPU arithmetic is float32, so end-to-end
shader agreement is bounded by shader precision — the *constants* are
digit-identical; declare `precision highp float;` in GLSL.

## Verified precision

Round-trip bounds across the full catalog, measured by `npm run precision`
(seeded, regenerated in CI; enforced at 1e-9 in tests):

| space | srgb → space → srgb | oklch → space → oklch |
|---|---|---|
| srgb | 0.0e+0 | 1.2e-13 |
| srgb-linear | 6.0e-15 | 6.2e-14 |
| display-p3 | 4.0e-15 | 5.3e-14 |
| a98-rgb | 3.9e-15 | 5.5e-14 |
| prophoto-rgb | 8.2e-15 | 6.9e-14 |
| rec2020 | 1.1e-14 | 5.3e-14 |
| oklab | 4.4e-14 | 8.5e-15 |
| oklch | 4.0e-14 | 0.0e+0 |
| lab | 1.3e-14 | 5.7e-14 |
| lch | 1.2e-14 | 1.5e-13 |
| hsl | 2.0e-15 | 6.5e-14 |
| hwb | 1.8e-15 | 7.4e-14 |
| xyz-d65 | 4.1e-15 | 6.2e-14 |
| xyz-d50 | 1.2e-14 | 5.3e-14 |
| ictcp† | 7.2e-12 | 7.6e-12 |
| jzazbz† | 4.3e-12 | 7.5e-12 |
| jzczhz† | 4.5e-12 | 9.3e-12 |
| luv | 2.9e-14 | 9.9e-14 |
| lchuv | 2.1e-14 | 2.9e-13 |
| hsv | 2.0e-15 | 1.7e-13 |
| hsi | 1.3e-15 | 7.4e-14 |
| okhsl†‡ | 4.2e-14 | 1.0e-13 |
| okhsv‡ | 3.3e-14 | 1.1e-13 |
| bt709 | 6.0e-15 | 2.2e-13 |
| dci-p3 | 4.2e-15 | 6.2e-14 |
| aces2065-1 | 9.8e-15 | 1.3e-13 |
| acescg | 5.9e-15 | 5.7e-14 |
| acescc† | 1.3e-14 | 6.7e-14 |
| acescct† | 1.5e-14 | 7.0e-14 |
| rec2100-pq† | 9.9e-13 | 1.6e-12 |
| rec2100-hlg† | 4.7e-15 | 5.7e-14 |
| din99o | 2.6e-14 | 8.5e-13 |
| din99o-lch | 1.8e-14 | 4.9e-13 |
| cam16 | 4.8e-14 | 1.3e-13 |
| cam16-ucs | 5.5e-14 | 2.0e-13 |
| hct‡ | 1.5e-13 | 5.7e-12 |
| hsluv | 2.0e-14 | 1.4e-13 |
| hpluv | 2.3e-14 | 6.9e-14 |
| hunter-lab | 9.0e-15 | 5.9e-14 |
| xyb | 7.5e-14 | 1.1e-13 |
| ycbcr-601-full | 8.3e-15 | 1.0e-13 |
| ycbcr-709-limited | 7.9e-15 | 2.6e-13 |

_10000 samples per cell, mulberry32 seed 0x57A71C, Node v25.8.2. Hue
error weighted by chroma. † defined or clamped within a container gamut
(signal-domain clamping, or OKHSL's sRGB-bounded mapping); out-of-domain
colors don't round-trip by design, so sampling is in-domain.
‡ iterative inverse (solver tolerance, not closed-form ulps)._

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

Across browser engines (`node tools/browser-bench.js`, object API):

| ns/op | Chromium (V8) | Firefox (SpiderMonkey) | WebKit (JSC) |
|---|---|---|---|
| oklch → srgb | 44 | 57 | 618 |
| srgb → oklch | 66 | 88 | 740 |
| srgb → rec2020 | 60 | 80 | 584 |

V8 and SpiderMonkey agree with the Node numbers. JavaScriptCore measures
~10× slower — investigated: dispatch is exonerated (bypassing convert()
saves <2%), and even hand-inlined raw arithmetic with no library code runs
8× slower in Playwright's WebKit build, which appears not to reach JSC's
top JIT tier. Real Safari likely performs substantially better; the library
will not be contorted for a test-harness artifact.

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

## Working with coding agents

The package ships an agent skill — conventions, the API map, and the pitfalls
that produce wrong colors — so Claude Code (and compatible agents) can work
with whitepoint precisely:

```sh
npx whitepoint-skill          # install into this project's .claude/skills/
npx whitepoint-skill --user   # or for all your projects
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
