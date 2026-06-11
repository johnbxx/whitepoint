// Chromatic adaptation transform (CAT) cone-response matrices, row-major.
// Each maps XYZ → a cone-like response space in which adaptation is modeled
// as a diagonal (von Kries) scaling. Inverses are computed, never transcribed.

export const cats = {
  // Lam (1985), as adopted by ICC and CSS Color 4. The industry default.
  bradford: [
     0.8951000,  0.2664000, -0.1614000,
    -0.7502000,  1.7135000,  0.0367000,
     0.0389000, -0.0685000,  1.0296000,
  ],

  // CIE 159:2004 (CIECAM02).
  cat02: [
     0.7328, 0.4296, -0.1624,
    -0.7036, 1.6975,  0.0061,
     0.0030, 0.0136,  0.9834,
  ],

  // Li et al. (2017), "Comprehensive color solutions: CAM16, CAT16, and CAM16-UCS".
  cat16: [
     0.401288, 0.650173, -0.051461,
    -0.250268, 1.204414,  0.045854,
    -0.002079, 0.048952,  0.953127,
  ],

  // Classic von Kries on Hunt–Pointer–Estevez cone fundamentals (Judd-normalized).
  // Fairchild, "Color Appearance Models", 3rd ed., Eq. 9.2.
  vonkries: [
     0.40024, 0.70760, -0.08081,
    -0.22630, 1.16532,  0.04570,
     0.00000, 0.00000,  0.91822,
  ],

  // "Wrong von Kries": scale XYZ directly. Poor quality, kept as a reference
  // method and because ICC v2 used it. Identity cone matrix.
  'xyz-scaling': [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
  ],
};
