// A minimal single-stroke "neon" letterform set, hand-bent like tube glass:
// each glyph is strokes of [x,y] points (baseline 0, x-height 1, caps 1.4,
// ascender 1.5, descender −0.5), corners rounded into arcs the way a tube
// bender would, then swept as TubeGeometry along a Catmull-Rom through the
// densified points. No font assets; tubes read as neon better than glyphs.

import * as THREE from 'three';

function circle(cx, cy, r, n = 24, a0 = 0, a1 = Math.PI * 2) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + (a1 - a0) * (i / n);
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}

const ARC = (cx, cy, r, d0, d1, n = 10) =>
  circle(cx, cy, r, n, (d0 * Math.PI) / 180, (d1 * Math.PI) / 180);

// ---- glyph table ----
// { w: advance width, strokes: [ [ [x,y], ... ], ... ], closed?: per-stroke }
export const GLYPHS = {
  w: { w: 0.84, strokes: [[[0, 1], [0.22, 0], [0.42, 0.75], [0.62, 0], [0.84, 1]]] },
  h: { w: 0.6, strokes: [[[0, 1.5], [0, 0]], [[0, 0.55], ...ARC(0.3, 0.55, 0.3, 180, 0), [0.6, 0]]] },
  i: { w: 0.06, strokes: [[[0, 1], [0, 0]], circle(0, 1.28, 0.045, 10)], closed: [false, true] },
  t: { w: 0.6, strokes: [[[0.3, 1.45], [0.3, 0.2], ...ARC(0.5, 0.2, 0.2, 180, 270)], [[0, 1], [0.6, 1]]] },
  e: { w: 0.9, strokes: [[[0.07, 0.55], [0.83, 0.55], ...ARC(0.45, 0.5, 0.45, 7, 320, 26)]] },
  p: { w: 0.85, strokes: [[[0, 1], [0, -0.5]], [[0, 0.78], ...ARC(0.38, 0.5, 0.45, 128, -128), [0, 0.22]]] },
  o: { w: 0.9, strokes: [circle(0.45, 0.5, 0.45)], closed: [true] },
  n: { w: 0.56, strokes: [[[0, 1], [0, 0]], [[0, 0.58], ...ARC(0.28, 0.58, 0.28, 180, 0), [0.56, 0]]] },
  B: { w: 0.85, strokes: [[[0, 1.4], [0, 0]], [[0, 1.4], [0.45, 1.4], ...ARC(0.45, 1.05, 0.35, 90, -90), [0, 0.7], [0.5, 0.7], ...ARC(0.5, 0.35, 0.35, 90, -90), [0, 0]]] },
  A: { w: 0.9, strokes: [[[0, 0], [0.45, 1.4], [0.9, 0]], [[0.2, 0.5], [0.7, 0.5]]] },
  R: { w: 0.8, strokes: [[[0, 1.4], [0, 0]], [[0, 1.4], [0.4, 1.4], ...ARC(0.4, 1.05, 0.35, 90, -90), [0, 0.7]], [[0.3, 0.7], [0.75, 0]]] },
  O: { w: 0.95, strokes: [ellipse(0.475, 0.7, 0.42, 0.7)], closed: [true] },
  P: { w: 0.8, strokes: [[[0, 1.4], [0, 0]], [[0, 1.4], [0.4, 1.4], ...ARC(0.4, 1.05, 0.35, 90, -90), [0, 0.7]]] },
  E: { w: 0.75, strokes: [[[0.72, 1.4], [0, 1.4], [0, 0], [0.72, 0]], [[0, 0.7], [0.58, 0.7]]] },
  N: { w: 0.8, strokes: [[[0, 0], [0, 1.4], [0.75, 0], [0.75, 1.4]]] },
  L: { w: 0.72, strokes: [[[0, 1.4], [0, 0], [0.68, 0]]] },
  I: { w: 0.06, strokes: [[[0, 1.4], [0, 0]]] },
  V: { w: 0.9, strokes: [[[0, 1.4], [0.45, 0], [0.9, 1.4]]] },
};

function ellipse(cx, cy, rx, ry, n = 28) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (Math.PI * 2 * i) / n;
    pts.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]);
  }
  return pts;
}

/** The martini glass — the wordless dive-bar staple. */
export const COCKTAIL = {
  w: 1.5,
  strokes: [
    [[-0.7, 1.55], [0, 0.7], [0.7, 1.55]], // bowl
    [[0, 0.66], [0, 0.08]], // stem
    [[-0.34, 0.04], [0.34, 0.04]], // base
    circle(0.16, 1.22, 0.1, 14), // olive
    [[0.16, 1.34], [0.4, 1.66]], // pick
  ],
  closed: [false, false, false, true, false],
};

/** Round interior corners of a polyline with small arcs (tube-bender style). */
function densify(points, r = 0.05) {
  if (points.length < 3) return points;
  const out = [points[0]];
  for (let i = 1; i < points.length - 1; i++) {
    const [ax, ay] = points[i - 1];
    const [bx, by] = points[i];
    const [cx, cy] = points[i + 1];
    const v1 = [ax - bx, ay - by];
    const v2 = [cx - bx, cy - by];
    const l1 = Math.hypot(...v1);
    const l2 = Math.hypot(...v2);
    const rr = Math.min(r, l1 * 0.4, l2 * 0.4);
    if (rr < 1e-4) { out.push(points[i]); continue; }
    const p1 = [bx + (v1[0] / l1) * rr, by + (v1[1] / l1) * rr];
    const p2 = [bx + (v2[0] / l2) * rr, by + (v2[1] / l2) * rr];
    // Quadratic-bezier the corner with a few samples.
    for (let t = 0; t <= 1; t += 0.25) {
      const u = 1 - t;
      out.push([
        u * u * p1[0] + 2 * u * t * bx + t * t * p2[0],
        u * u * p1[1] + 2 * u * t * by + t * t * p2[1],
      ]);
    }
  }
  out.push(points[points.length - 1]);
  return out;
}

/** Sweep one stroke as a neon tube in the XY plane (z = 0). */
export function strokeTube(points, { radius = 0.035, closed = false } = {}) {
  // Drop consecutive (near-)duplicates: a zero-length segment gives the
  // tube sweep NaN tangents and the whole letter vanishes.
  const clean = points.filter(([x, y], i) =>
    i === 0 || Math.hypot(x - points[i - 1][0], y - points[i - 1][1]) > 1e-4);
  const dense = closed ? clean : densify(clean);
  const v3 = dense.map(([x, y]) => new THREE.Vector3(x, y, 0));
  if (closed) v3.pop(); // closed curves re-join themselves
  const curve = new THREE.CatmullRomCurve3(v3, closed, 'catmullrom', closed ? 0.5 : 0);
  const segs = Math.max(12, v3.length * 4);
  return new THREE.TubeGeometry(curve, segs, radius, 8, closed);
}

/**
 * Lay out a string (or explicit glyph objects) as merged tube geometries.
 * Returns { geometries, width } in em units; caller scales/positions.
 */
export function textTubes(text, { radius = 0.035, spacing = 0.32 } = {}) {
  const geometries = [];
  let x = 0;
  const glyphs = typeof text === 'string' ? [...text].map((ch) => GLYPHS[ch]) : text;
  for (const g of glyphs) {
    if (!g) { x += 0.5; continue; } // space
    g.strokes.forEach((stroke, i) => {
      const geo = strokeTube(stroke.map(([px, py]) => [px + x, py]), {
        radius,
        closed: g.closed?.[i] ?? false,
      });
      geometries.push(geo);
    });
    x += g.w + spacing;
  }
  return { geometries, width: Math.max(0, x - spacing) };
}
