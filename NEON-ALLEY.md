# Neon Alley — the showpiece brief

*Handoff doc for the v0.10 build session. Read this, then build. Concept was
locked with John on 2026-06-12; strategic framing is his: the demo must answer
"why did we build this in the first place — what does it do better than
anything?" and make the case that whitepoint is **an indispensable part of any
web developer's toolkit for best-in-class color effects.***

## The thesis, in one interaction

A rain-wet alley at night, full of neon. One toggle: **"naive RGB pipeline"
vs "whitepoint pipeline"** — same scene, same geometry, same lights. The
naive side is what every web demo does today: hand-picked sRGB colors,
channel-clipped output, gamma-space glow. The whitepoint side derives every
light from physics and renders through our emitted shaders. The viewer
flips the switch and *sees* the argument. Everything else in the demo
exists to make that toggle devastating.

What whitepoint uniquely enables here (no other JS library has the
combination): **light colors derived from spectra** (not picked), **the
same color math digit-identical on CPU and GPU** (codegen, parity-tested
in CI), **exact-cusp gamut mapping in-shader** (saturated neon survives
instead of clipping to hue-shifted mush), and **wide-gamut P3 output**
(neon reds that literally cannot be shown in sRGB).

## The opening text writes itself

> There is no standard illuminant for neon. The CIE standardizes light
> that falls on things; a neon sign is a thing you look at. So nobody
> ever froze one — and nobody needed to: the spectrum of a glowing gas
> is atomic physics, tabulated by NIST to more decimals than any
> standard. Every light in this alley is derived, not designed.

## The cast (lights, all derived)

| source | physics | machinery |
|---|---|---|
| neon signs (red-orange) | Ne I emission lines: 585.2, 588.2, 594.5, 603.0, 607.4, 614.3, 621.7, 626.6, 633.4, 640.2, 650.7, 659.9, 692.9, 703.2 nm | `lineSPD` (shipped) |
| "neon" blues/violets | Ar I + Hg I lines | `lineSPD` |
| pink/yellow signs | He I lines | `lineSPD` |
| sodium streetlight at the alley mouth | Na D doublet | `sodiumSPD` (shipped) |
| stained-glass window (bar/chapel) | spectral transmission through colorant spectra (cobalt blue, gold-ruby, copper green) | `attenuate` (shipped) + plausible transmittances, honest-labeled |
| surfaces: brick, asphalt (wet/dry), painted door | reflectance spectra | `reflectanceOf` (shipped) |

**Proposed library addition (decide at session start):** `gasDischargeSPD('neon' | 'argon' | 'mercury' | 'helium' | 'krypton' | 'xenon')` in
`whitepoint/spectral`, with line wavelengths + relative intensities from the
NIST Atomic Spectra Database via a committed pipeline
(`tools/build-gas-lines.js` → `src/spectral/data-gas.js`). Honesty note for
the docs: NIST relative intensities are qualitative (heterogeneous sources);
line *positions* dominate the chromaticity, and we validate by checking the
rendered neon lands in the known red-orange region (x ≈ 0.67) and Ar/Hg in
the blue. This is real package value — "no standard exists, so we derive
from atomic physics" is the brand in one feature.

## The pipeline (technical design)

**Not** real-time spectral path tracing — be honest about this in the demo
text. The trick that makes it tractable and *exact for diffuse surfaces*:

1. **At load (CPU, JS):** for each (light, material) pair, integrate
   SPD × reflectance × CMFs → XYZ. With ~8 lights and ~10 materials that's
   ~80 integrals, microseconds each. This is the physically-correct diffuse
   response, precomputed.
2. **Per frame (GPU):** conventional spatial falloff/attenuation over the
   precomputed pair colors, working in a perceptual space; glow/bloom
   gradients via `glslMix('oklch')` (no muddy gamma-RGB middles); final
   output through emitted `glslGamutMap` (exact cusp, hue-preserving) →
   display transform. The emitted code is the same constants as the JS —
   that's the headline.
3. **Output:** P3 canvas (`drawingBufferColorSpace = 'display-p3'`) where
   supported, with a display-gamut indicator ("your display shows the
   wide-gamut reds — 'sRGB preview' to see what others lose"). Fallback
   path IS the cusp mapper, demonstrated live.

**Naive toggle path:** same geometry; lights get their "design tool" sRGB
hex equivalents, mixing in gamma RGB, output clamped per channel. The deltas
that will be visible: neon saturation (clip shifts hue toward orange/pink;
cusp holds it), glow gradients (muddy vs luminous), stained glass (tint-
multiply vs spectral transmission), sodium ("everything amber" only happens
spectrally).

## Scene & aesthetic

Stylized, not photoreal — flat/low-poly alley (two walls, ground plane,
sky strip), signs as **tube geometry along curves** (no font assets; tubes
read as neon better than glyphs — and one sign should say *whitepoint*).
Fixed camera with a slow parallax drift. Optional thin fog quads for beam
glow. Bloom: cheap separable blur, two passes (we know this terrain from
the ColorPlay GPU smoothing work).

## Interactions (in priority order)

1. **The pipeline toggle** — the thesis. Big, obvious, top of page.
2. **Gas picker per sign** — click a sign, choose the gas, color changes
   *because physics*. (Each gas labeled with its real lines.)
3. **"Kill the neon"** — sodium-only street: the whole scene collapses to
   amber monochrome (ties to the light lab's sodium demo).
4. **sRGB preview toggle** — for P3 displays, show what sRGB users see.
5. (Optional, cut first) rain toggle: wet vs dry asphalt reflectance.

## Tech decisions (recommendations; confirm at session start)

- **Three.js** as a devDependency, bundled via esbuild like everything else
  (pin the version; no CDN). It buys geometry/scene/composition speed.
  Risk: Three's built-in color management fights custom output transforms —
  mitigation: render to an FBO and do the final pass with a raw fullscreen
  shader (ours), bypassing Three's output encoding entirely. If Three
  fights harder than expected, fall back to raw WebGL2 (we have the
  harness experience from gpu-parity); the scene is simple enough.
- **Page:** `docs/neon.html`, nav entry "neon alley". Bundle: either reuse
  `whitepoint.js` + separate three bundle, or one page-specific bundle.
- **Perf target:** 60 fps on an ordinary laptop; the scene is emissive
  quads + small textures; the expensive part (spectral integration) is
  load-time only.

## Verification (house rules apply to demos)

- Gas line data via committed pipeline from NIST ASD (cited, never typed).
- Pixel-read checks in preview: neon sign chromaticity lands red-orange
  (x ≈ 0.65–0.70); Hg/Ar sign in blue; sodium-only mode reads b≈0 amber
  everywhere; toggle produces measurably different pixels; cusp-mapped vs
  clipped pixels differ in hue on the saturated signs.
- The emitted shaders are already GPU-parity-tested in CI — the demo
  *reuses* verified code, it doesn't introduce new conversion math.
- Remember the platform gotchas already learned: `img.decode()` hangs on
  hidden pages (use load events); preview screenshots black out on hidden
  tabs (canvas `toDataURL` → file → Read is ground truth); WebGL needs
  `EXT_color_buffer_float` enabled before RGBA16F FBOs.

## Scope guardrails

- One fixed camera. No walking, no game loop beyond the drift + flicker.
- No new conversion math in the demo — everything routes through shipped,
  verified library code. If the demo needs something new (gas SPDs), it
  lands in the library first, with tests, like K-M did for watercolor.
- Neon flicker/buzz: tasteful, subtle, deterministic (no Math.random in
  anything that needs reproducible pixel checks).
- Cut order if scope presses: rain → fog beams → gas picker → never the
  toggle.

## Open questions for John at session start

1. Green-light `gasDischargeSPD()` as a library feature (recommended), or
   keep gas spectra demo-local?
2. Three.js vs raw WebGL2 — comfort with adding three as a devDep?
3. Sign text/content: "whitepoint" + what else? (Any words you want
   glowing in the alley?)
4. Should the page double as the 1.0 announcement hero (link from README
   top), or stay one of the demos?

## Current project state (context for the fresh session)

v0.9.0 pushed: 170/170 tests, 0 skipped, all oracles live (incl. compiled
Hosek C and python colour-science). Site: guide, converter, light lab,
accuracy, recipes, generated API reference. Parser in core (Level 4).
Remaining before 1.0 besides this demo: Sprague `resample()` (CIE 167,
provenance item), final freeze + announce. npm publish runs ahead of the
repo: check `npm view whitepoint version` vs CHANGELOG at session start.
