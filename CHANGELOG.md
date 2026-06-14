# Changelog

All notable changes. The project follows semver; until 1.0, minor versions
may adjust APIs (taken so far, both pre-npm: `dischargeSPD` → `emissionSPD`
in 0.12.0, `sodiumSPD` → `lowPressureSodiumSPD` in 0.13.0 — see below).

## 0.14.4 — 2026-06-13

Performance — two hot-path wins, both behavior-identical (193 tests and the
differential oracle suite unchanged; zero new allocation):

- **String-id conversions** resolve through a two-slot move-to-front memo in
  `resolve()`, so passing `'oklch'`/`'srgb'` is nearly as fast as pre-resolved
  space objects — the string path went from slowest-or-tied to faster than
  culori and @texel/color on every measured pair (e.g. srgb→oklch 90→69 ns).
- **Cusp gamut mapping** skips the two identity round-trips when the input is
  already OKLCH (the common case), 125→89 ns/op — faster than @texel's fitted
  cusp (~117 ns) while staying the *exact*, derived cusp, not a polynomial fit.

## 0.14.3 — 2026-06-13

Docs only. Rewrote NORTHSTAR.md for an outside reader: dropped the internal
"Target / 110%" pillar framing, the "purity is an instrument" in-joke, and the
struck-through "no parsing, ever" amendment (that history lives here in the
changelog, not the manifesto). The design principles and scope rule are
unchanged in substance — only the insider shorthand is gone. No code changes.

## 0.14.2 — 2026-06-13

Docs correctness. Audited the "Honest comparison" table against the *current*
competitor releases (culori 4.0.2, colorjs.io 0.6.1, @texel/color 1.1.11) by
inspecting their shipped source, and fixed two stale cells: whitepoint's own
CSS-parsing row (it has parsed CSS Color 4 since 0.8 but still read "no, by
design"), and **colorjs.io's CAM16/HCT** (it ships both as color spaces —
was marked "no"; the kind of error a competitor's maintainer would catch).
@texel/color's parsing softened to "partial (hex)" since it does `hexToRGB`.
The README "scope rule" section's parsing anti-goal amended to match NORTHSTAR
(which already recorded the v0.8 reversal). No code changes.

## 0.14.1 — 2026-06-13

Docs only. The README now showcases the emission API (`emissionColor` /
`emissionSPD`) and the completed illuminant catalog (full F-series, HP, LED) —
closing the loop with the neon-alley hero at the top of the page. No code
changes; published so the npm landing page reflects the 0.12–0.14 work.

## 0.14.0 — 2026-06-13

The standard-illuminant catalog, finished.

- **Full CIE F-series** `FL1_SPD`–`FL12_SPD` (was the priority subset
  FL2/7/11) and the **CIE 15:2018 LED series** `LED_B1_SPD`–`LED_B5_SPD`
  (phosphor blue-pump, 2700–6500 K), `LED_BH1_SPD` (hybrid),
  `LED_RGB1_SPD` (RGB-mixed), `LED_V1_SPD`/`LED_V2_SPD` (violet-pump) — all
  via the same colour-science pipeline, each integrating to its published
  chromaticity to < 1e-3 (`test/illuminants.test.js`). LED is now the most
  common artificial light we'd have been conspicuously missing.
- With this, every *standardized* everyday light source is covered:
  daylight/sky (Hosek–Wilkie + `daylightSPD`), incandescent/thermal
  (`planckianSPD`, illuminant A), fluorescent (FL1–12), LED (B/BH/RGB/V),
  discharge & sodium (`emissionSPD`, HP1–5, low-pressure sodium), lasers
  (`lineSPD`). Not standardized, so deliberately out of scope: molecular
  band emission (flames, fireworks) and chemi/bioluminescence — these need
  measured or computed band spectra, not a CIE table. (There is no standard
  xenon-arc illuminant either; xenon *lines* are in `emissionSPD`.)

## 0.13.0 — 2026-06-13

The illuminant catalog, completed and disambiguated.

- **CIE high-pressure discharge illuminants `HP1_SPD`–`HP5_SPD`** in
  `whitepoint/spectral` (CIE 015, 5 nm, via the existing colour-science
  pipeline). HP1/HP2 are the standardized high-pressure *sodium* lamps —
  the actual CIE sodium illuminant — and HP3–HP5 are metal halide. Each
  integrates to its CIE 15 Table T.3 chromaticity to < 1e-3 (provenance
  loop closed in `test/illuminants.test.js`).
- **`sodiumSPD` → `lowPressureSodiumSPD`.** The old name read like the
  element *and* like a CIE standard; it's neither — it's the modeled,
  near-monochromatic low-pressure (SOX) lamp, which the CIE never
  standardized. The docstring now says so and points to HP1/HP2. (Not
  published to npm under either name, so no external break.)
- The `.d.ts` now declares the fluorescent constants it had been missing
  (`FL2/FL7/FL11_SPD`) alongside the new HP series; the chromaticity
  `illuminants` table documents that it holds adaptation whites (the
  CIE-priority F-subset), with lamp-only SPDs living in the spectral entry.

## 0.12.0 — 2026-06-13

The spectral layer gets a front door — the "web developer's toolkit" line
made literal.

- **`emissionColor(emitter, { to, gamut, kT })`** in `whitepoint/spectral`:
  a named atomic emitter (or your own transition data) straight to a
  render-ready, gamut-safe color in one call — the spectrum → 1 nm-observer
  XYZ → your space → display-cusp pipeline that everyone was assembling by
  hand, with the two silent traps (wrong CMF, no normalization) closed by
  construction. `emissionColor('neon')` → vivid sRGB-safe red-orange;
  `{ gamut: 'display-p3' }` returns the same hue with the chroma a wide
  screen actually shows. Saturated emitters land on the cusp; pale ones
  (argon's lavender) keep their real, lower chroma.
- **`dischargeSPD` → `emissionSPD`**, now overloaded to take a *name*
  (`emissionSPD('neon')`) or raw transitions, with a helpful throw on an
  unknown emitter. Renamed because the model is atomic line emission, gas
  tube or flame metal — not specifically a discharge. Neither name was ever
  published to npm, so no external break. `lineSPD`, `EMISSION_LINES`, and
  the rest of the layer are unchanged and still exported.

## 0.11.0 — 2026-06-12

The last provenance item before 1.0.

- **`resample()` in `whitepoint/spectral`**: Sprague (1880) quintic
  interpolation as CIE 167:2005 recommends for equal-interval spectral
  data. Exact at source nodes; interior segments reproduce quartics to
  rounding and track the analytic Planckian to ~4×10⁻⁹ relative; the CIE
  boundary polynomials at each end are honest-labeled approximations
  (~4×10⁻⁴ on the Planckian — prefer sources that extend past the range
  you need). Verified three ways in `test/resample.test.js`: algebraic
  invariants, the colour-science `SpragueInterpolator` oracle (fixture
  via committed `tools/build-sprague-oracle.py`), and Planck's law as
  analytic ground truth. Notable: the method does *not* reproduce
  quintics (the derivative stencils are 4th-order) — the docs say so
  instead of rounding up.

## 0.10.0 — 2026-06-12

The showpiece.

- **`dischargeSPD()` + `EMISSION_LINES` in `whitepoint/spectral`**: gas
  discharge spectra derived from atomic physics. `EMISSION_LINES` carries
  NIST ASD transitions (observed air wavelength, g·A, upper-level energy)
  for H, He, Ne, Na, Ar, Kr, Xe, Hg — fetched by a committed pipeline
  (`tools/build-gas-lines.js`), never typed, and deliberately ignoring
  ASD's qualitative intensity column. `dischargeSPD` models optically-thin
  Boltzmann emission: line power ∝ (g_k·A_ki/λ)·exp(−E_k/kT). Neon lands
  red-orange at x ≈ 0.67 with 640.2 nm strongest — as real sign tubes do —
  with every gas pinned to its known color region in `test/lines.test.js`,
  robustly across the glow-discharge kT range. `lineSPD` remains the open
  mechanism; `sodiumSPD` remains the canonical lamp model.
- **The neon alley** (`docs/neon.html`): the 1.0 hero demo. A rain-wet
  alley at night where every light is derived — neon/argon/mercury/helium
  signs from `dischargeSPD`, the streetlight from `sodiumSPD`, stained
  glass from 2700 K Planck × Beer–Lambert `attenuate`, surfaces from
  `reflectanceOf` pair-integrated per light at load time. One toggle flips
  the identical scene between the naive sRGB pipeline (hand-picked hex,
  gamma-space mixing, channel clipping) and the whitepoint pipeline
  (XYZ lighting, emitted OKLCH glow, exact-cusp gamut mapping, display-p3
  output with live sRGB fallback). Gas picker per sign, kill-the-neon
  sodium collapse, sRGB preview, and a deterministic `?selftest` mode that
  pixel-checks the page's own claims. Three.js (pinned, bundled) drives
  the geometry; its color management is bypassed entirely — every material
  is a shader material and the output pass is library-emitted GLSL.

## 0.9.0 — 2026-06-12

The front doors.

- **The converter playground** (`docs/convert.html`): any CSS color in,
  all 42 spaces out with copyable serializations, gamut badges,
  exact-cusp-mapped previews, nearest named color, WCAG contrast, CVD
  swatches, and a CCT line when the color plausibly is a light.
- **The guide** (`docs/guide.html`): the narrative walk from
  `parseTo('#ff8800', 'oklch')` to emitted shaders — mental model,
  which-space-when, wide-gamut workflow, codegen, the spectral layer,
  performance tiers, and why to trust the numbers. Every example runs
  live against the library in the page, so the documentation cannot lie
  about its outputs.
- Site nav unified across all seven pages; README leads with the guide.

## 0.8.0 — 2026-06-12

The string boundary opens — by decision, not drift.

- **`parse(str)` and `parseTo(str, to)` in the core entry**: the frozen
  CSS Color 4 `<color>` grammar — hex, the 148 named colors (generated
  from the W3C spec source), every Level 4 functional form in modern and
  legacy syntax, `color()` with predefined + CSS HDR draft ids. Normalized
  to library conventions; `none` → NaN under the numerical policy; null on
  unparseable input (a bad string is data, not an error); never throws.
  `parse ∘ serialize` round-trips in CI across every serializable space.
  Level 5 relative color syntax and calc() wait, like every unfrozen spec.
- The "no CSS parsing, ever" anti-goal is formally amended in NORTHSTAR:
  purity is an instrument, not an identity. The conversion core still
  never sees a string — the boundary is a fenced module that tree-shakes
  away if unused.

## 0.7.0 — 2026-06-12

Pre-1.0 hardening.

- **Numerical policy, defined and enforced**: conversions never throw and
  never hang — garbage (NaN/±Infinity/extreme magnitudes) flows through
  every space, the gamut mapper, and the solvers; in-domain inputs always
  produce finite outputs. New fuzz suite (`test/garbage.test.js`); one
  unbounded bisection in the CSS gamut mapper fixed (could spin on
  C = +Infinity).
- **Generated API reference** (`docs/api.html`): extracted from source
  JSDoc at build time, exports enumerated by importing the entry points so
  the page cannot drift; undocumented exports fail loudly (count: zero).
- `npm run docs` rebuilds recipes + API reference + site bundle.
- CHANGELOG backfilled.

## 0.6.0 — 2026-06-12

- `convertBuffer(src, from, to, dst?)` — the image-pipeline batch path:
  route resolved once, zero-alloc loop, ~46 ns/px for oklch→srgb (1.75×
  the idiomatic fresh-array-per-pixel pattern).
- `whitepoint/sky` gains the solar disc: `sunRadiance` (limb-darkened
  direct radiance, exact port incl. the piecewise-cubic elevation splines)
  and `sunSPD`. Reference oracle extended with solar probes.
- Bun CI job. Finding: production JSC (Bun) runs conversions at 50 ns/op —
  ahead of both reference libraries; the earlier Playwright-WebKit 10×
  reading is confirmed as a JIT-less harness artifact.

## 0.5.0 — 2026-06-12

- CIE 13.3-1995 **CRI** (`cri`: Ra, R1–R14) and IES **TM-30-20 /
  CIE 224:2017** (`tm30`: Rf, Rg) from any SPD. CIECAM02 forward +
  CAM02-UCS exported (`cam02ViewingConditions`, `xyzToCam02Ucs`), pinned
  to the CIE 159:2004 worked example. F-series reproduces published
  values (F2: Ra 64, Rf 70, Rg 86) with no fitting.
- Light lab: live lamp report card.

## 0.4.0 — 2026-06-11

- The light lab (`docs/light.html`): six physics demos from one relight
  engine — sodium-lamp Mona Lisa, Beer–Lambert underwater, CIE 191
  mesopic nightfall (Pluto noon stays photopic), Kubelka–Munk watercolor
  with weather, the Hosek–Wilkie sky dome, parameterized alien sunlight.
- `WATER_ABSORPTION` (Pope & Fry 1997) + `attenuate`; `V_PRIME_1951`,
  `photopicLuminance`/`scotopicLuminance`, CIE 191:2010 `mesopic`;
  `lineSPD` + `sodiumSPD`; **`whitepoint/sky`** — exact Hosek–Wilkie port,
  digit-identical to the authors' compiled reference (1920-point fixture).

## 0.3.0 — 2026-06-11

- 1 nm CMFs (`whitepoint/spectral-1nm`), F-series SPDs (FL2/FL7/FL11),
  CAM16 shader emission (srgb↔cam16-ucs, hct→srgb) with viewing
  conditions folded at emission. JSC investigation documented.

## 0.2.0 — 2026-06-11

- Kubelka–Munk pigment mixing: `reflectanceOf` (Jakob–Hanika,
  Newton-solved per color), `kmMixReflectance`, `pigmentMix` —
  blue + yellow makes green, like paint.

## 0.1.0 — 2026-06-11

- `simulateCVD` (Brettel 1997, anchors derived from the CMFs) and `cctOf`
  (CCT + Duv against the exact Planckian locus; McCamy refused).

## 0.0.1 — 2026-06-11

- Initial release: 42 spaces, illuminant lab (5 CATs, CCT daylight),
  exact-cusp gamut mapping, JS/GLSL/WGSL codegen from single-sourced
  constants, compositing, spectral colorimetry (CMFs, Planck, daylight
  synthesis), SOTA conversion speed, oracle-verified test suite.
