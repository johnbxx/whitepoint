// CSS Color 4 input parsing — the front door.
//
// Colors arrive in the world as strings: design tokens, custom properties,
// API payloads. This module turns the frozen CSS Color 4 <color> grammar
// into registry coordinates, normalized to library conventions (0–1
// channels, hue in degrees, CIE L 0–100). It lives behind a clean seam:
// nothing in the conversion core knows strings exist.
//
// Scope is the Level 4 grammar exactly: hex, the 148 named colors,
// rgb()/hsl()/hwb()/lab()/lch()/oklab()/oklch() in modern and legacy
// forms, and color() for the predefined spaces (plus the CSS Color HDR
// draft ids that serialize() emits, so parse∘serialize round-trips).
// Level 5 relative color syntax and calc() are out — still-moving specs
// wait, as always. Unparseable input returns null (a bad string is data,
// not API misuse); `none` components become NaN and flow safely under the
// library's garbage policy.

import { convert } from '../core/convert.js';
import { NAMED_COLORS } from './named.js';

export { NAMED_COLORS };

const HUE_UNITS = { deg: 1, grad: 360 / 400, rad: 180 / Math.PI, turn: 360 };
const NUM_RE = /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;

// <number> | <percentage> | none → value. Percentages map [0,100]% to
// [0, pctRef]; plain numbers scale by numScale (e.g. 1/255 for rgb()).
function numOrPct(tok, pctRef, numScale = 1) {
  if (tok === 'none') return NaN;
  if (tok.endsWith('%')) {
    const v = tok.slice(0, -1);
    if (!NUM_RE.test(v)) return undefined;
    return (parseFloat(v) / 100) * pctRef;
  }
  if (!NUM_RE.test(tok)) return undefined;
  return parseFloat(tok) * numScale;
}

// <hue>: number (degrees) or angle with unit
function hue(tok) {
  if (tok === 'none') return NaN;
  const m = tok.match(/^([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(deg|grad|rad|turn)?$/i);
  if (!m) return undefined;
  return parseFloat(m[1]) * (m[2] ? HUE_UNITS[m[2].toLowerCase()] : 1);
}

function alpha(tok) {
  if (tok === undefined) return 1;
  const v = numOrPct(tok, 1);
  if (v === undefined) return undefined;
  return Number.isNaN(v) ? NaN : Math.min(1, Math.max(0, v));
}

const clamp0 = (v) => (v < 0 ? 0 : v);

function hexChannel(s) {
  return parseInt(s, 16) / 255;
}

function parseHex(str) {
  const h = str.slice(1);
  if (!/^[0-9a-f]+$/i.test(h)) return null;
  if (h.length === 3 || h.length === 4) {
    const c = [...h].map((d) => hexChannel(d + d));
    return { space: 'srgb', coords: c.slice(0, 3), alpha: h.length === 4 ? c[3] : 1 };
  }
  if (h.length === 6 || h.length === 8) {
    const c = [];
    for (let i = 0; i < h.length; i += 2) c.push(hexChannel(h.slice(i, i + 2)));
    return { space: 'srgb', coords: c.slice(0, 3), alpha: h.length === 8 ? c[3] : 1 };
  }
  return null;
}

// color(<id> …) ids → registry spaces; values are <number> | <percentage>
// with 100% = 1 (CSS Color 4 §10.1, HDR draft likewise)
const COLOR_FN_SPACES = {
  'srgb': 'srgb',
  'srgb-linear': 'srgb-linear',
  'display-p3': 'display-p3',
  'a98-rgb': 'a98-rgb',
  'prophoto-rgb': 'prophoto-rgb',
  'rec2020': 'rec2020',
  'xyz': 'xyz-d65',
  'xyz-d65': 'xyz-d65',
  'xyz-d50': 'xyz-d50',
  'ictcp': 'ictcp',
  'jzazbz': 'jzazbz',
  'rec2100-pq': 'rec2100-pq',
  'rec2100-hlg': 'rec2100-hlg',
};

// per-function channel readers: token → normalized library coordinate.
// Percentage reference ranges are the spec's (lab a/b ±125, lch C 150,
// oklab a/b ±0.4, oklch C 0.4).
const FUNCTIONS = {
  rgb: { space: 'srgb', ch: [(t) => numOrPct(t, 1, 1 / 255), (t) => numOrPct(t, 1, 1 / 255), (t) => numOrPct(t, 1, 1 / 255)] },
  hsl: { space: 'hsl', ch: [hue, (t) => clamp0(numOrPct(t, 1, 1 / 100)), (t) => clamp0(numOrPct(t, 1, 1 / 100))] },
  hwb: { space: 'hwb', ch: [hue, (t) => numOrPct(t, 1, 1 / 100), (t) => numOrPct(t, 1, 1 / 100)] },
  lab: { space: 'lab', ch: [(t) => clamp0(numOrPct(t, 100)), (t) => numOrPct(t, 125), (t) => numOrPct(t, 125)] },
  lch: { space: 'lch', ch: [(t) => clamp0(numOrPct(t, 100)), (t) => clamp0(numOrPct(t, 150)), hue] },
  oklab: { space: 'oklab', ch: [(t) => clamp0(numOrPct(t, 1)), (t) => numOrPct(t, 0.4), (t) => numOrPct(t, 0.4)] },
  oklch: { space: 'oklch', ch: [(t) => clamp0(numOrPct(t, 1)), (t) => clamp0(numOrPct(t, 0.4)), hue] },
};
FUNCTIONS.rgba = FUNCTIONS.rgb;
FUNCTIONS.hsla = FUNCTIONS.hsl;

/**
 * Parse a CSS Color 4 <color> string to registry coordinates.
 * Returns `{ space, coords, alpha }` normalized to library conventions,
 * or **null** if the string doesn't parse — a bad string is data, not an
 * error. `none` components come back as NaN (they flow safely; see the
 * numerical policy). Accepts hex, the 148 named colors + `transparent`,
 * all Level 4 functional forms (modern and legacy comma syntax), and
 * `color()` with the predefined + CSS HDR draft space ids. Relative color
 * syntax (Level 5) and calc() are out of scope.
 *
 * @param {string} str
 * @returns {{space: string, coords: number[], alpha: number} | null}
 */
export function parse(str) {
  if (typeof str !== 'string') return null;
  const s = str.trim().toLowerCase();
  if (s === '') return null;

  if (s[0] === '#') return parseHex(s);

  if (s === 'transparent') return { space: 'srgb', coords: [0, 0, 0], alpha: 0 };
  const named = NAMED_COLORS[s];
  if (named) return parseHex(named);

  const m = s.match(/^([a-z][a-z0-9-]*)\(\s*(.*?)\s*\)$/s);
  if (!m) return null;
  const [, fn, bodyRaw] = m;

  // unify separators: legacy commas become spaces; '/' splits off alpha
  const parts = bodyRaw.replace(/,/g, ' ').split('/');
  if (parts.length > 2) return null;
  let toks = parts[0].trim().split(/\s+/).filter(Boolean);
  let alphaTok = parts.length === 2 ? parts[1].trim() : undefined;
  if (alphaTok !== undefined && (alphaTok === '' || /\s/.test(alphaTok))) return null;

  if (fn === 'color') {
    const space = COLOR_FN_SPACES[toks[0]];
    if (!space) return null;
    toks = toks.slice(1);
    if (toks.length === 4 && alphaTok === undefined) { alphaTok = toks.pop(); } // legacy-style tolerance
    if (toks.length !== 3) return null;
    const coords = toks.map((t) => numOrPct(t, 1));
    const a = alpha(alphaTok);
    if (coords.some((v) => v === undefined) || a === undefined) return null;
    return { space, coords, alpha: a };
  }

  const def = FUNCTIONS[fn];
  if (!def) return null;
  if (toks.length === 4 && alphaTok === undefined) { alphaTok = toks.pop(); } // rgba(r, g, b, a)
  if (toks.length !== 3) return null;
  const coords = toks.map((t, i) => def.ch[i](t));
  const a = alpha(alphaTok);
  if (coords.some((v) => v === undefined) || a === undefined) return null;
  return { space: def.space, coords, alpha: a };
}

/**
 * Parse a CSS color string straight to coordinates in `to` — the
 * one-liner: `parseTo('#ff8800', 'oklch')`. Alpha is dropped (use parse()
 * when you need it). Returns null if the string doesn't parse.
 *
 * @param {string} str
 * @param {object|string} to - destination space (object or id)
 * @param {number[]} [out]
 */
export function parseTo(str, to, out = [0, 0, 0]) {
  const p = parse(str);
  if (p === null) return null;
  return convert(p.coords, p.space, to, out);
}
