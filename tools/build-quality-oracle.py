#!/usr/bin/env python3
"""Generates test/fixtures/quality-oracle.json from python colour-science,
the reference implementation of CIE 13.3 CRI and CIE 224:2017 / TM-30.
The fixture lets `npm test` verify whitepoint's quality metrics against
colour-science without requiring Python at test time.

Usage:  python3 -m pip install colour-science && python3 tools/build-quality-oracle.py
(use `python3 -m pip`, not bare `pip` — they can resolve to different
interpreters, and the module must land in the one that runs the script)
"""

import json
from pathlib import Path

import colour

SPDS = {
    "FL2": colour.SDS_ILLUMINANTS["FL2"],
    "FL7": colour.SDS_ILLUMINANTS["FL7"],
    "FL11": colour.SDS_ILLUMINANTS["FL11"],
    "A": colour.SDS_ILLUMINANTS["A"],
    "D65": colour.SDS_ILLUMINANTS["D65"],
}

rows = []
for name, sd in SPDS.items():
    ra = colour.colour_rendering_index(sd)
    spec = colour.colour_fidelity_index(sd, additional_data=True, method="ANSI/IES TM-30-18")
    rows.append({
        "name": name,
        "Ra": round(float(ra), 3),
        "Rf": round(float(spec.R_f), 3),
        "Rg": round(float(spec.R_g), 3),
    })
    print(f"{name:6} Ra {ra:7.2f}  Rf {spec.R_f:6.2f}  Rg {spec.R_g:6.2f}")

out = Path(__file__).parent.parent / "test" / "fixtures" / "quality-oracle.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps({
    "source": f"colour-science {colour.__version__}",
    "generator": "tools/build-quality-oracle.py",
    "rows": rows,
}))
print(f"oracle fixture: {len(rows)} lamps -> {out}")
