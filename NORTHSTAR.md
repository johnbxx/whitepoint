# North Star

> **A research-grade color laboratory for the web.**
> **Every color space, every illuminant — digit-identical in JS, GLSL, and WGSL.**

What this library is for, and the rules it holds itself to. Every conversion is
generated from one table of cited constants — the matrix that runs in your
JavaScript is the matrix that runs in your shader, verified in CI to the last
digit. That one idea drives everything below.

## What it commits to

- **Coverage.** Every CSS Color 4 space plus OKHSL/OKHSV; the CIE illuminants and
  arbitrary white points; chromatic adaptation across multiple transforms
  (Bradford, CAT02, CAT16, von Kries); illuminants from correlated color
  temperature; gamut *checking* and gamut *mapping*; and a spectral layer (color
  matching functions, Planck's law, daylight, emission).
- **Verified precision.** Conversions are tested against derivational invariants,
  spec fixtures, and the other major libraries as oracles (culori, colorjs.io,
  @texel/color). Round-trip error bounds are CI-enforced and published — measured,
  never implied.
- **Portability.** The core imports cleanly in Node, SSR, and workers, and one
  pipeline emits JS, GLSL, and WGSL from the same constants — with CPU/GPU parity
  checked in CI, so a color is identical on both.
- **Speed.** Zero-allocation paths and precomposed routes, with benchmarks that
  are public and reproducible (`npm run bench`).

## Principles

1. **Derive, don't transcribe.** RGB↔XYZ matrices are computed at module load
   from cited primaries and white points, then checked against published values
   in CI. A hardcoded matrix is a transcription error waiting to happen.
2. **One source of truth.** Constants live in one table; the JS functions, GLSL
   strings, and WGSL strings are all views of it.
3. **Precision is a contract.** No rounding inside conversions — bytes exist only
   at the explicit `toBytes`/`fromBytes` boundary. Error bounds are measured,
   published, and enforced.
4. **The math is honest about itself.** Hue is undefined at zero chroma; the CSS
   white points differ from the CIE 15 values in the fifth digit; gamut mapping
   is lossy. The library documents these rather than papering over them.

## Scope

One rule decides what belongs here: **if a frozen spec defines it on
coordinates, implement it exactly; parse strings only at a fenced boundary;
anything still in motion waits.**

Out of scope, on purpose:

- **No color wrapper class** — plain arrays in, plain arrays out.
- **Strings only at the edge.** Parsing covers the frozen CSS Color 4 grammar
  behind a fenced module the conversion core never sees; CSS Level 5
  relative-color syntax and calc() wait until the spec freezes.
- **Alpha is not a color coordinate** — the conversion core stays 3-channel;
  alpha-aware operations (premultiplied mixing, serialization) are separate,
  4-channel entry points.
- **No palettes, harmonies, color naming, or gradient objects** — those belong
  to applications. (Spec-defined interpolation itself is in scope.)
- **No unfrozen perceptual models** — APCA returns when WCAG 3 freezes.
