# Delivery handoff — 2026-08-09

## Goal

Self-execute the career AI projects to professional / senior-AI-engineer completeness under GOAL_DELIVERY.

## Status: done

### Done

| Artifact | Result |
|---|---|
| GroundedVN | Stage 4 sealed; senior README; https://github.com/Therockycloud/GroundedVN @ `4bcdb58` |
| DemandCast | Stage 2B lockbox consumed; LightGBM rejected; Stage 1 publisher retained; https://github.com/Therockycloud/DemandCast @ `8e802fc` |
| Portfolio | Live on Vercel only (GitHub Pages disabled) |
| Career system | https://github.com/Therockycloud/mighty-raccoon-career-system |

### Live URL

https://portfolio-might-raccoon.vercel.app/

### DemandCast lockbox (honest)

- Candidate WAPE **0.867** vs zero **1.0**
- Abs bias ≈ **67.3%** (fail ≤10%)
- Coverage ≈ **90.3%** (fail 70–90%)
- Recommendation: `keep_stage1_baselines` (ADR 0005)

### Notes

- GitHub Pages removed; Vercel is the single public host (Pages lacked `basePath` and served unstyled HTML).
- Pin GroundedVN + DemandCast in GitHub UI if desired (pin API unavailable).
- LinkedIn/résumé links omitted until verified inputs exist.
