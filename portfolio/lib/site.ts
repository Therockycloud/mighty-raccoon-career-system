export type ProjectStatus = "published" | "building";

export type Project = {
  slug: string;
  title: string;
  role: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  href: string;
  repo?: string;
  tags: string[];
  claims: { text: string; evidence: string }[];
};

export const site = {
  name: "Phạm Hoàng Hải",
  brandSecondary: "Mighty Raccoon",
  title: "Phạm Hoàng Hải — AI Engineer",
  description:
    "I build evaluated, production-minded AI systems — grounded retrieval, forecasting, and CV — measured against baselines and shipped with tests.",
  positioning: "I build evaluated, production-minded AI systems.",
  github: "https://github.com/Therockycloud",
  email: null as string | null,
};

export const projects: Project[] = [
  {
    slug: "groundedvn",
    title: "GroundedVN",
    role: "Solo — Applied AI / RAG systems",
    status: "published",
    summary:
      "Local-first Vietnamese/English grounded Q&A with hybrid retrieval, structural citations, abstention, and Stage 4 operations.",
    problem:
      "Answer only from an authorized workspace; prefer abstention over fluent hallucination.",
    href: "/work/groundedvn/",
    repo: "https://github.com/Therockycloud/GroundedVN",
    tags: ["RAG", "Hybrid retrieval", "Citations", "RBAC", "Ops"],
    claims: [
      {
        text: "Stage 4 sealed for JOBS, ALIASES, RBAC, DELETION, RECOVERY, OPERATIONS.",
        evidence: "docs/gates/stage-4-reviewed.yaml · 128 tests passed",
      },
      {
        text: "Every retrieval branch enforces the workspace boundary.",
        evidence: "SECURITY.md · threat-model · injection suite",
      },
    ],
  },
  {
    slug: "demandcast",
    title: "DemandCast",
    role: "Solo — Forecasting / MLOps judgment",
    status: "published",
    summary:
      "28-day SKU sales forecasting with leakage-safe lockbox evaluation. LightGBM beat WAPE on the lockbox and still failed promotion on bias/coverage.",
    problem:
      "Turn messy invoice sales into a trustworthy probabilistic forecast without pretending portfolio demos have production scale.",
    href: "/work/demandcast/",
    repo: "https://github.com/Therockycloud/DemandCast",
    tags: ["Forecasting", "LightGBM", "Lockbox", "Governance"],
    claims: [
      {
        text: "Stage 2B lockbox consumed once (6 fits); publisher remains zero + empirical×0.75.",
        evidence: "evidence/demandcast-stage-2b · ADR 0005",
      },
      {
        text: "Lockbox WAPE 0.867 vs zero 1.0, but abs bias ≈67% and coverage 90.3% failed gates.",
        evidence: "reports/evaluation/stage2b_lockbox.json",
      },
    ],
  },
  {
    slug: "smart-parking",
    title: "Smart Parking Security",
    role: "Team project · CV + APIs",
    status: "published",
    summary:
      "Team-built parking security system with CV verification, APIs, tests, and deployment tooling.",
    problem:
      "Verify vehicle access with reproducible CV checks and service boundaries — without claiming solo ownership of team work.",
    href: "/work/smart-parking/",
    repo: "https://github.com/Therockycloud/PDL302m_project",
    tags: ["Computer vision", "APIs", "Team"],
    claims: [
      {
        text: "Public repository presents tests and deployment tooling for the parking security system.",
        evidence: "Therockycloud/PDL302m_project README",
      },
    ],
  },
];
