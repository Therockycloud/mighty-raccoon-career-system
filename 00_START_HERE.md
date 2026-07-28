# Start Here

## Purpose

This repository turns the current `Therockycloud` GitHub account into a focused, evidence-led AI engineering profile.

Primary identity: **Phạm Hoàng Hải**
Secondary technical brand: **Mighty Raccoon**
Target roles: **AI Engineer, Applied AI Engineer, ML Engineer, and adjacent AI Product roles**
Target markets: **Vietnam and international/remote**
Primary public language: **English**
Available time: **10–15 hours per week**
Infrastructure preference: **local/free first; paid API budget only when justified, capped near 300,000 VND/month**

## Responsibility split

Codex implements:

1. GitHub cleanup.
2. React portfolio and professional content workflow.

Cursor or Codex follows standalone blueprints for:

1. GroundedVN.
2. DemandCast.

The personal-social system—Facebook, Instagram, X/Threads, TikTok, YouTube, personal photos, lifestyle, and non-IT content—is a separate future project and is out of scope.

## Document map

| File | Owner | Purpose |
|---|---|---|
| `01_GITHUB_CLEANUP_IMPLEMENTATION_SPEC.md` | Codex | Safe checkpoint, repair, archive, profile, pins |
| `02_GROUNDEDVN_CURSOR_CODEX_BLUEPRINT.md` | User + Cursor/Codex | Applied AI/RAG project from baseline to senior stage |
| `03_DEMANDCAST_CURSOR_CODEX_BLUEPRINT.md` | User + Cursor/Codex | Forecasting/MLOps project from baseline to senior stage |
| `04_PORTFOLIO_IMPLEMENTATION_SPEC.md` | Codex | Editorial React portfolio and reviewed content workflow |
| `05_CAREER_ROADMAP.md` | User | Sequencing, weekly allocation, release and application gates |
| `shared/EVIDENCE_PACKET_SPEC.md` | All | Source of truth for public technical claims |
| `shared/PROJECT_STATE_TEMPLATE.md` | AI projects | Stage and milestone control |
| `shared/DECISION_LOG_TEMPLATE.md` | All | Architecture decisions and reversal triggers |
| `shared/GATE_RECEIPT_TEMPLATE.yaml` | AI projects | Machine-verifiable stage approval and immutable source/evidence handoff |
| `shared/GATE_RECEIPT_SCHEMA.json` | AI projects | JSON Schema for pending/approved receipt shape and hash-chain fields |

## Required reading order

1. Read the design summary in `docs/superpowers/specs/2026-07-28-mighty-raccoon-career-system-design.md`.
2. Review `01_GITHUB_CLEANUP_IMPLEMENTATION_SPEC.md`.
3. Review `04_PORTFOLIO_IMPLEMENTATION_SPEC.md`.
4. Choose one AI project; do not execute GroundedVN and DemandCast simultaneously.
5. Copy `shared/PROJECT_STATE_TEMPLATE.md` into the selected project.
6. Use `shared/GATE_RECEIPT_TEMPLATE.yaml` after each clean, immutable stage verification.
7. Execute one milestone prompt at a time.

## Global safety rules

- Never use a blind `git add .` on the supplied local repositories.
- Never publish real face images or other biometric data.
- Never delete a GitHub repository under the approved cleanup level.
- Never rewrite public Git history in this program.
- Never display an unverified metric.
- Never describe team work as solo work.
- Never publish content without Hải’s review.
- Never add paid infrastructure without an evidence-backed need and explicit approval.
- Never promote an AI project to the next architecture stage without the required gate evidence.

## Professional surface model

Core:

- GitHub: source of truth for code and evidence.
- LinkedIn: professional reach and short insights.
- Portfolio/blog: owned case studies and canonical technical articles.

Optional:

- Hugging Face for maintained models, datasets, or Spaces.
- RSS generated from the portfolio.

Not part of the professional automation:

- Facebook.
- Instagram.
- X/Threads.
- TikTok/YouTube.
- Personal or lifestyle accounts.

## What “senior-level” means here

Senior-level does not mean adding Kubernetes or microservices by default. It means:

- measurable reliability targets;
- explicit data and API contracts;
- security and privacy boundaries;
- capacity and cost assumptions;
- observable behavior;
- reproducible evaluation;
- failure-mode testing;
- runbooks and rollback;
- architecture decisions with reversal triggers.

Complexity is added only after a measured trigger.

## Current status

Design: approved in conversation
Written specification: awaiting user review
Implementation plan: not started
GitHub writes: not started
Portfolio implementation: not started
