// Gamut checking (v0). Gamut *mapping* (CSS reference method + cusp-based
// fast paths) is a planned phase — see repo tasks.

import { convert, resolve } from '../core/convert.js';

const TMP = [0, 0, 0];

/**
 * Is a color inside the gamut of a bounded RGB space?
 *
 * @param {number[]} coords - input coordinates
 * @param {object|string} space - the space `coords` is expressed in
 * @param {object|string} [gamut] - the gamut to test against (default: `space`)
 * @param {number} [epsilon] - tolerance, default 1e-6
 */
export function inGamut(coords, space, gamut = space, epsilon = 1e-6) {
  const G = resolve(gamut);
  if (!G.m || G.transferName === undefined) {
    throw new Error(`whitepoint: inGamut needs a bounded RGB gamut space (got "${G.id}")`);
  }
  const c = convert(coords, space, G, TMP);
  return c[0] >= -epsilon && c[0] <= 1 + epsilon
      && c[1] >= -epsilon && c[1] <= 1 + epsilon
      && c[2] >= -epsilon && c[2] <= 1 + epsilon;
}
