#!/usr/bin/env python3
"""Generates test/fixtures/sprague-oracle.json from python colour-science,
whose SpragueInterpolator implements the same CIE 167:2005 / Sprague (1880)
quintic that whitepoint's resample() does. The fixture lets `npm test`
verify resample() against the reference without requiring Python at test
time — and catches any transcription error in the hand-cited coefficients.

Usage:  python3 -m pip install colour-science && python3 tools/build-sprague-oracle.py
"""

import json
from pathlib import Path

import colour
from colour.algebra import SpragueInterpolator

cases = []

# CIE FL2 at 5 nm (the same CIE 015 table whitepoint ships) -> 1 nm.
fl2 = colour.SDS_ILLUMINANTS["FL2"]
wl = fl2.wavelengths
assert wl[0] == 380 and wl[1] - wl[0] == 5
f = SpragueInterpolator(wl, fl2.values)
target = [380 + i for i in range(int(wl[-1]) - 380 + 1)]
cases.append({
    "name": "FL2 5nm -> 1nm",
    "input": {"start": 380, "step": 5, "values": [round(float(v), 6) for v in fl2.values]},
    "target": {"start": 380, "step": 1},
    "expected": [round(float(f(x)), 8) for x in target],
})

# A deliberately non-polynomial series on a coarse grid, exercising the
# boundary polynomials hard (steep ends).
import math
xs = [400 + 20 * i for i in range(12)]
ys = [round(math.sin(i * 1.1) * math.exp(-i / 7.0) + 0.5, 6) for i in range(12)]
f2 = SpragueInterpolator(xs, ys)
t2 = [400 + 4 * i for i in range(int((xs[-1] - 400) / 4) + 1)]
cases.append({
    "name": "synthetic 20-unit grid -> 4-unit grid",
    "input": {"start": 400, "step": 20, "values": ys},
    "target": {"start": 400, "step": 4},
    "expected": [round(float(f2(x)), 10) for x in t2],
})

out = Path(__file__).parent.parent / "test" / "fixtures" / "sprague-oracle.json"
out.write_text(json.dumps({
    "source": f"colour-science {colour.__version__} SpragueInterpolator (CIE 167:2005)",
    "cases": cases,
}, indent=1))
print(f"wrote {out} ({len(cases)} cases)")
