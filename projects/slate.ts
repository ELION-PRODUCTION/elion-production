export type ProjectEntry = {
  slug: string;
  title: string;
  year: string;
  type: string;
  status: string;
  logline: string;
  technologyRole: string;
};

export const developmentSlate: ProjectEntry[] = [
  {
    slug: "infinity",
    title: "∞",
    year: "2026",
    type: "Feature Film",
    status: "Concept Development",
    logline:
      "A metaphysical science drama exploring quantum temporality, causality, and the structure of time.",
    technologyRole:
      "Quantum research framing, computational visual modeling, and temporal simulation concepts."
  },
  {
    slug: "axiom",
    title: "AXIOM",
    year: "2026",
    type: "Concept Film",
    status: "Development",
    logline:
      "A systems-driven concept film about engineered performance, temporal asymmetry, and controlled visual precision.",
    technologyRole:
      "AI pre-visualization, computational image development, and compositing workflow design."
  },
  {
    slug: "atomic-knight",
    title: "THE ATOMIC KNIGHT",
    year: "2025",
    type: "Documentary",
    status: "Concept",
    logline:
      "A documentary on the engineering, politics, and ethics surrounding the Chernobyl sarcophagus.",
    technologyRole:
      "Archival research framing, scientific communication, and infrastructure-history interpretation."
  }
];
