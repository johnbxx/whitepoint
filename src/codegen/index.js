// whitepoint/codegen — the same conversions, emitted as JS, GLSL, or WGSL.
//
//   import { glsl, wgsl, js } from 'whitepoint/codegen';
//   glsl('oklch', 'display-p3')
//   → a self-contained `vec3 wp_oklch_to_display_p3(vec3 c)` with exactly the
//     constants the JS engine uses, helpers included, adjacent matrices fused.

import { codegenSpaces } from './ops.js';
import { fuseOps, emitFunction } from './emit.js';

function chainFor(from, to) {
  const F = codegenSpaces[from];
  const T = codegenSpaces[to];
  if (!F) throw new Error(`codegen: unsupported space "${from}" (have: ${Object.keys(codegenSpaces).join(', ')})`);
  if (!T) throw new Error(`codegen: unsupported space "${to}"`);
  return fuseOps([...F.toXyzOps, ...T.fromXyzOps]);
}

function fnName(from, to) {
  return `wp_${from}_to_${to}`.replace(/-/g, '_');
}

/** GLSL ES 3.00 source for a from→to conversion (declare `precision highp float;`). */
export function glsl(from, to, { name = fnName(from, to) } = {}) {
  return emitFunction(chainFor(from, to), name, 'glsl');
}

/** WGSL source for a from→to conversion. */
export function wgsl(from, to, { name = fnName(from, to) } = {}) {
  return emitFunction(chainFor(from, to), name, 'wgsl');
}

/** JavaScript source for a standalone, dependency-free from→to function. */
export function js(from, to, { name = fnName(from, to) } = {}) {
  return emitFunction(chainFor(from, to), name, 'js');
}

/** Space ids available to the codegen pipeline. */
export function supported() {
  return Object.keys(codegenSpaces);
}
