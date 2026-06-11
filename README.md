# whitepoint

> **A research-grade color laboratory for the web.**
> **Every color space, every illuminant — digit-identical in JS, GLSL, and WGSL.**

Every conversion is generated from one table of cited constants. The matrix that
runs in your JavaScript is the matrix that runs in your shader — and CI verifies
it to the last digit. Stop hand-porting color matrices.

**Status: early.** Conversions, the illuminant lab, and the codegen pipeline are
built and verified; gamut mapping and the SOTA benchmark pass are in progress.
See [NORTHSTAR.md](./NORTHSTAR.md) for the principles and roadmap.

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

## Anti-goals

No color wrapper class. No CSS string parsing. No alpha. No palettes or
gradients — those belong to applications. Plain arrays in, plain arrays out.

## License

MIT
