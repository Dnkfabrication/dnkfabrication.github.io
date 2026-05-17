// DNK Fabrication — The Collection
// To add a new piece: copy one object, fill in the fields, set featured: true on the newest piece (and false on the previous one).
// Images: use a relative path like "images/art/piece-name.jpg" once you add photos.

const ART_PIECES = [
  {
    id: "steel-rose-gate-2024",
    title: "Iron Rose Gate",
    artist: "Dylan Hinesly & Audrey Valadez",
    year: 2024,
    materials: "3/16\" mild steel, hand-forged, matte black powder coat",
    dimensions: '7\'h × 5\'w',
    price: 4800,
    status: "available", // "available" | "sold" | "inquiry"
    featured: true,
    image: "", // replace with image path when ready
    story: "Designed as a one-of-a-kind entryway piece for a private residence. Every petal was hand-cut and shaped individually before being welded into the main arch. The thorned vine pattern along the frame took nearly 60 hours of bench work. No two will ever be identical.",
    commissionNote: "Available as a commission in any size or finish."
  },
  {
    id: "longhorn-panel-2024",
    title: "Longhorn Wall Panel",
    artist: "Dylan Hinesly",
    year: 2024,
    materials: "1/8\" steel plate, CNC plasma cut, raw steel patina with clear coat",
    dimensions: '48\" × 36\"',
    price: 1800,
    status: "sold",
    featured: false,
    image: "",
    story: "A statement piece for a ranch entryway. The skull profile was hand-drawn, digitized, and cut from a single sheet of steel. The natural rust patina was accelerated and sealed, giving it a warm, aged look that changes subtly with the light.",
    commissionNote: "Commission available in custom sizes and finishes."
  },
  {
    id: "cross-wall-art-2024",
    title: "Cathedral Cross",
    artist: "Dylan Hinesly & Audrey Valadez",
    year: 2024,
    materials: "1/4\" steel, hand-welded, hammered texture, raw patina",
    dimensions: '60\" × 24\"',
    price: 2400,
    status: "available",
    featured: false,
    image: "",
    story: "Built for a home chapel. The hammered surface texture was achieved by hand — no two marks the same. The raw steel was treated and sealed to preserve the organic, forge-finished look while protecting against corrosion.",
    commissionNote: "Custom sizes and cross styles available on commission."
  }
];
