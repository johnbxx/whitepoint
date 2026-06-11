// Type definitions for whitepoint/codegen — emit the same conversions, from
// the same constants, as JS, GLSL ES 3.00, or WGSL source.

export interface EmitOptions {
  /** Function name in the emitted source (default: wp_<from>_to_<to>). */
  name?: string;
}

/** GLSL ES 3.00 source for a from→to conversion (declare `precision highp float;`). */
export function glsl(from: string, to: string, opts?: EmitOptions): string;

/** WGSL source for a from→to conversion. */
export function wgsl(from: string, to: string, opts?: EmitOptions): string;

/** Standalone dependency-free JavaScript source for a from→to conversion. */
export function js(from: string, to: string, opts?: EmitOptions): string;

/** Space ids available to the codegen pipeline. */
export function supported(): string[];

/** GLSL gamut mapper: OKLCH in, gamut-mapped RGB (in `gamut` coords) out. */
export function glslGamutMap(gamut: string, opts?: EmitOptions): string;

/** WGSL gamut mapper. */
export function wgslGamutMap(gamut: string, opts?: EmitOptions): string;

/** Standalone JS gamut mapper (parity-tested against the library in CI). */
export function jsGamutMap(gamut: string, opts?: EmitOptions): string;
