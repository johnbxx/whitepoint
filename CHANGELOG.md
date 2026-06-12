# Changelog

All notable changes. The project follows semver; until 1.0, minor versions
may adjust APIs (none have needed to yet — the API audit before 0.7.0 found
no renames worth their churn).

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
