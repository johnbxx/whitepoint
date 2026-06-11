// Type definitions for whitepoint/sky — Hosek–Wilkie spectral sky dome.

import type { Spectrum } from './spectral.d.ts';

/** Band wavelengths of the model, nm (320–720 at 40 nm). */
export const SKY_WL: number[];

export interface SkyState {
  elevation: number;
  turbidity: number;
  albedo: number;
  configs: number[][];
  radiances: number[];
}

/**
 * Precompute a sky state. elevation: solar elevation above horizon in
 * radians (0–π/2); turbidity 1–10; ground albedo 0–1.
 */
export function skyModel(opts: { elevation: number; turbidity?: number; albedo?: number }): SkyState;

/**
 * Spectral sky radiance, W·m⁻²·sr⁻¹·nm⁻¹. theta: view zenith angle;
 * gamma: angular distance from the sun; wavelength in nm (320–720).
 */
export function skyRadiance(state: SkyState, theta: number, gamma: number, wavelength: number): number;

/** The sky's SPD for a view direction, ready for spectrumXy()/cctOf(). */
export function skySPD(state: SkyState, theta: number, gamma: number, opts?: { start?: number; step?: number; end?: number }): Spectrum;
