// GPU parity: execute every emitted GLSL conversion on an actual GPU
// (headless Chromium / WebGL2) and compare against the float64 library;
// compile-validate every WGSL emission against the WebGPU compiler when
// available. This closes the codegen pillar's runtime claim: the constants
// were always digit-identical — this verifies the emitted code also runs
// and agrees within float32 arithmetic bounds.
//
// Usage: node tools/gpu-parity.js   (exit 1 on any failure)

import { chromium } from 'playwright';
import {
  glsl, wgsl, supported, specialPairs,
  glslGamutMap, wgslGamutMap, glslMix, wgslMix,
  glslComposite, wgslComposite, glslBlend, wgslBlend,
} from '../src/codegen/index.js';
import { convert, mix, toGamut, porterDuffOperators, blendModes } from '../src/index.js';

const N = 64;

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(0x69b0);
const srgbSamples = Array.from({ length: N }, () => [0.02 + rand() * 0.96, 0.02 + rand() * 0.96, 0.02 + rand() * 0.96]);

// float32 tolerance by destination family: pow-chains and iterative solvers
// lose more mantissa than matrix work.
const FAMILY_TOL = (id) => {
  if (['okhsl', 'okhsv', 'hsluv', 'hpluv'].includes(id)) return 4e-3; // in-shader solvers
  if (/^(rec2100|ictcp|jzazbz|jzczhz|acescc|acescct)/.test(id)) return 2e-3; // PQ/log chains
  if (/^(lab|lch|luv|lchuv|din99o|hunter)/.test(id)) return 2e-2; // L spans 0–100 (abs tol on big units)
  return 5e-4;
};

const SPACES = supported().filter((s) => s !== 'xyz');

const work = [];
for (const from of SPACES) {
  for (const to of SPACES) {
    if (from === to) continue;
    const name = `wp_${from}_to_${to}`.replace(/-/g, '_');
    const inputs = srgbSamples.map((c) => convert(c, 'srgb', from));
    const expected = inputs.map((c) => convert(c, from, to));
    work.push({ kind: 'conv', label: `${from}→${to}`, src: glsl(from, to), name, inputs, expected, tol: FAMILY_TOL(to), hue: ['oklch', 'lch', 'lchuv', 'jzczhz', 'din99o-lch', 'hsl', 'hwb', 'hsv', 'hsi', 'cam16', 'hct'].includes(to) });
  }
}
for (const [from, to] of specialPairs()) {
  const name = `wp_${from}_to_${to}`.replace(/-/g, '_');
  const inputs = srgbSamples.map((c) => convert(c, 'srgb', from));
  const expected = inputs.map((c) => convert(c, from, to));
  work.push({ kind: 'conv', label: `${from}→${to} (solver)`, src: glsl(from, to), name, inputs, expected, tol: FAMILY_TOL(from), hue: false });
}
// gamut mapper + mixer, numerically
{
  const name = 'wp_gamut_map_oklch_to_srgb';
  const inputs = srgbSamples.map((c, i) => [0.1 + (i / N) * 0.8, 0.05 + rand() * 0.3, rand() * 360]);
  const expected = inputs.map((c) => convert(toGamut(c, 'oklch', { gamut: 'srgb', method: 'css' }), 'oklch', 'srgb'));
  // emitted mapper is boundary-bisection; library css differs by ≤2×JND —
  // compare against the emitted JS algorithm instead for strictness:
  const { jsGamutMap } = await import('../src/codegen/index.js');
  const fn = new Function(`${jsGamutMap('srgb')}\nreturn ${name};`)();
  const expectedJs = inputs.map((c) => [...fn(c)]);
  work.push({ kind: 'conv', label: 'gamutMap srgb', src: glslGamutMap('srgb'), name, inputs, expected: expectedJs, tol: 4e-3, hue: false });
}
{
  const name = 'wp_mix_oklch_shorter';
  const a = convert([0.2, 0.5, 0.9], 'srgb', 'oklch');
  const b = convert([0.9, 0.6, 0.1], 'srgb', 'oklch');
  const inputs = Array.from({ length: N }, (_, i) => [i / (N - 1), 0, 0]);
  const expected = inputs.map(([t]) => mix(a, b, t, 'oklch'));
  work.push({
    kind: 'mix', label: 'mix oklch shorter', src: glslMix('oklch'), name, inputs, expected, tol: 1e-3, hue: true,
    a, b,
  });
}

// WGSL sources to compile-validate
const wgslSources = [];
for (const from of SPACES) for (const to of SPACES) if (from !== to) wgslSources.push([`${from}→${to}`, wgsl(from, to)]);
for (const [f, t] of specialPairs()) wgslSources.push([`${f}→${t}`, wgsl(f, t)]);
wgslSources.push(['gamutMap', wgslGamutMap('srgb')], ['mix', wgslMix('oklch')]);
for (const op of porterDuffOperators) wgslSources.push([`composite ${op}`, wgslComposite(op)]);
for (const m of blendModes) wgslSources.push([`blend ${m}`, wgslBlend(m)]);

// GLSL compile-only set (composite/blend operate on vec4 — separate harness
// not worth full numeric here; compilation catches the realistic risks)
const glslCompileOnly = [];
for (const op of porterDuffOperators) glslCompileOnly.push([`composite ${op}`, glslComposite(op), `wp_composite_${op}`.replace(/-/g, '_'), 'vec4']);
for (const m of blendModes) glslCompileOnly.push([`blend ${m}`, glslBlend(m), `wp_blend_${m}`.replace(/-/g, '_'), 'vec4']);

const browser = await chromium.launch({ args: process.env.CI ? ['--enable-unsafe-webgpu', '--use-angle=swiftshader', '--use-webgpu-adapter=swiftshader'] : ['--enable-unsafe-webgpu'] });
const page = await browser.newPage();
await page.goto('about:blank');

await page.evaluate(({ N }) => {
  const canvas = document.createElement('canvas');
  canvas.width = N; canvas.height = 1;
  const gl = canvas.getContext('webgl2', { antialias: false });
  if (!gl) throw new Error('no webgl2');
  if (!gl.getExtension('EXT_color_buffer_float')) throw new Error('no float render targets');
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, `#version 300 es\nvoid main(){ vec2 p[3] = vec2[3](vec2(-1.,-1.),vec2(3.,-1.),vec2(-1.,3.)); gl_Position = vec4(p[gl_VertexID],0.,1.); }`);
  gl.compileShader(vs);
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA32F, N, 1);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.viewport(0, 0, N, 1);
  window.__gl = { gl, vs, N };
  window.__runFrag = (body) => {
    const { gl, vs, N } = window.__gl;
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, body);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      return { error: gl.getShaderInfoLog(fs) };
    }
    const prog = gl.createProgram();
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return { error: gl.getProgramInfoLog(prog) };
    gl.useProgram(prog);
    window.__prog = prog;
    return { ok: true };
  };
  window.__exec = (flatInputs) => {
    const { gl, N } = window.__gl;
    const loc = gl.getUniformLocation(window.__prog, 'I');
    if (loc) gl.uniform3fv(loc, new Float32Array(flatInputs));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    const out = new Float32Array(N * 4);
    gl.readPixels(0, 0, N, 1, gl.RGBA, gl.FLOAT, out);
    return Array.from(out);
  };
}, { N });

let failures = 0;
let compiled = 0;
let worstReport = [];

for (const w of work) {
  let frag;
  if (w.kind === 'mix') {
    frag = `#version 300 es\nprecision highp float;\n${w.src}\nuniform vec3 I[${N}];\nout vec4 O;\nvoid main(){ int i = int(gl_FragCoord.x); O = vec4(${w.name}(vec3(${w.a.join(',')}), vec3(${w.b.join(',')}), I[i].x), 1.0); }`;
  } else {
    frag = `#version 300 es\nprecision highp float;\n${w.src}\nuniform vec3 I[${N}];\nout vec4 O;\nvoid main(){ int i = int(gl_FragCoord.x); O = vec4(${w.name}(I[i]), 1.0); }`;
  }
  const c = await page.evaluate((f) => window.__runFrag(f), frag);
  if (c.error) {
    console.error(`✖ COMPILE ${w.label}: ${c.error.split('\n')[0]}`);
    failures++;
    continue;
  }
  compiled++;
  const flat = w.inputs.flatMap((v) => [v[0], v[1], v[2]]);
  const out = await page.evaluate((fi) => window.__exec(fi), flat);
  let worst = 0;
  for (let i = 0; i < N; i++) {
    for (let ch = 0; ch < 3; ch++) {
      let d = Math.abs(out[i * 4 + ch] - w.expected[i][ch]);
      if (w.hue && ch === 2 && d > 180) d = Math.abs(360 - d); // wrap (most polar spaces store hue in ch 2)
      if (w.hue && ch === 2) d *= Math.max(Math.abs(w.expected[i][1]), 0.01); // chroma-weight hue
      const rel = d / (1 + Math.abs(w.expected[i][ch]));
      worst = Math.max(worst, rel);
    }
  }
  worstReport.push([w.label, worst, w.tol]);
  if (worst > w.tol) {
    console.error(`✖ PARITY ${w.label}: worst rel ${worst.toExponential(2)} > tol ${w.tol}`);
    failures++;
  }
}

for (const [label, src, name, vec] of glslCompileOnly) {
  const frag = `#version 300 es\nprecision highp float;\n${src}\nout vec4 O;\nvoid main(){ O = ${name}(vec4(0.5,0.4,0.3,0.8), vec4(0.2,0.6,0.7,0.9)); }`;
  const c = await page.evaluate((f) => window.__runFrag(f), frag);
  if (c.error) { console.error(`✖ COMPILE ${label}: ${c.error.split('\n')[0]}`); failures++; }
  else compiled++;
}

worstReport.sort((a, b) => b[1] - a[1]);
console.log(`GLSL: ${compiled} programs compiled on GPU; worst parity gaps:`);
for (const [label, worst, tol] of worstReport.slice(0, 5)) {
  console.log(`  ${label.padEnd(28)} ${worst.toExponential(2)} (tol ${tol})`);
}

// ---- WGSL compile-validation via WebGPU ----
const wgslResult = await page.evaluate(async (sources) => {
  if (!navigator.gpu) return { skipped: true };
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) return { skipped: true };
  const device = await adapter.requestDevice();
  const errs = [];
  for (const [label, code] of sources) {
    const mod = device.createShaderModule({ code });
    const info = await mod.getCompilationInfo();
    const errors = info.messages.filter((m) => m.type === 'error');
    if (errors.length) errs.push(`${label}: ${errors[0].message}`);
  }
  return { skipped: false, total: sources.length, errs };
}, wgslSources);

if (wgslResult.skipped) {
  console.log('WGSL: WebGPU unavailable in this environment — compile validation skipped');
} else {
  console.log(`WGSL: ${wgslResult.total} modules compile-validated by the WebGPU compiler`);
  for (const e of wgslResult.errs) { console.error(`✖ WGSL ${e}`); failures++; }
}

await browser.close();
if (failures) {
  console.error(`\n${failures} GPU parity failures`);
  process.exit(1);
}
console.log('\n✔ GPU parity clean');
