# Portfolio Visual & UI Redesign — 2026-08-10

## Design read

Reading this as: **AI engineer evidence portfolio for recruiters**, with an **editorial / quiet-technical** language, leaning toward **Editorial Systems** (serif display + sans body + mono labels) — not SaaS landing, not dark-tech neon, not AI-purple.

**Dials:** `DESIGN_VARIANCE: 5` · `MOTION_INTENSITY: 3` · `VISUAL_DENSITY: 3`

## Research takeaway (professional AI portfolios, 2026)

Hiring teams treat the site as a **verification system**, not a design gallery:

1. Lead each case with **outcome + proof image** (real UI or diagram), then decisions/evals.
2. Prefer **annotated screenshots / short walkthrough** over decorative hero art.
3. Architecture diagram + decision memo + evaluation record beat stock imagery.
4. Never invent metrics inside images; captions must match sealed evidence packets.

Sources informing this plan: AI/TLDR portfolio guide, Provn “judgment over polish”, GenAI engineer portfolio structure (demo → architecture → decisions → metrics → limitations).

## Diagnosis of current site

| Issue | Finding |
|---|---|
| UI/UX | Text-only; no visual hierarchy beyond rules; first viewport has no product proof |
| Imagery | `public/` empty — zero evidence of systems running |
| Aesthetic | Cool paper + cobalt is OK directionally, but feels unfinished without media |
| Case studies | Strong sealed metrics in copy; weak “I can see it work” signal |
| Motion | Almost none (acceptable for dials); need 2–3 intentional micro-motions after media lands |

## Asset strategy (strict)

### Tier A — Real proof (required, non-negotiable)

Captured from running local systems. These are the only images allowed to imply “the product works.”

| ID | Subject | Source | Placement | Caption must include |
|---|---|---|---|---|
| `dc-ui-overview` | DemandCast evidence dashboard overview | Playwright @ `apps/web` + `serve-api` | DemandCast case + work index | Publisher identity `zero+empirical×0.75` |
| `dc-ui-evaluation` | Evaluation panel showing Stage 2B reject | same | DemandCast case | `promote_champion=false` / bias gate |
| `dc-api-docs` | FastAPI `/docs` or `/v1/evaluations/current` JSON excerpt | curl/API screenshot | DemandCast case | endpoint path |
| `gv-cli-search` | GroundedVN CLI search/answer terminal capture | local CLI | GroundedVN case | workspace-bound note |
| `gv-api-health` | GroundedVN health/search response | FastAPI if up | GroundedVN case | loopback-only if applicable |
| `sp-repo-surface` | Smart Parking README or CI badge strip | public GitHub page shot | Smart Parking case | team attribution |

### Tier B — Editorial diagrams (generated or drawn)

Flat, print-like diagrams. No fake dashboards. No neon. Must match architecture text.

| ID | Content | Style rules |
|---|---|---|
| `dc-arch-flow` | UCI → clean → backtest → gate → batch → API | Cobalt ink on cool paper; labeled boxes; no 3D |
| `gv-arch-flow` | Ingest → hybrid index → abstention → citations → ops | Same system language as DemandCast |
| `og-home` | Social preview: name + positioning line | Brand-first; no fake metrics |

### Tier C — Atmosphere (optional, last)

Only if Tier A+B pass QA. Soft abstract paper texture / desk-not-product. **Never** look like a product screenshot.

## Image generation prompts (batch — do NOT run until Tier A captured)

### Prompt pack rules

- Aspect: case figures `16:9`; OG `1.91:1` ≈ `1200×630`; mobile crop-safe center.
- Palette locked: paper `#EEF1F4`, ink `#1A2330`, cobalt `#1F4FD6`, rule `#C5CED9`.
- Forbidden: purple gradients, glassmorphism stacks, stock smiling humans, raccoon mascots, biometric faces, fake KPI boards with invented numbers.
- Output filenames under `portfolio/public/images/{project}/`.

### `dc-arch-flow` — prompt

```text
Editorial technical architecture diagram on cool gray-blue paper background (#EEF1F4).
Horizontal left-to-right flow with thin graphite rules and cobalt (#1F4FD6) accents.
Labeled boxes in English only: "UCI Online Retail II" → "Immutable raw + checksum" →
"Daily SKU grid" → "Rolling-origin backtests" → "Evidence gate" → "Batch + API".
Serif-neutral labels, monospace for IDs, generous whitespace, Swiss-editorial print feel.
No 3D, no glow, no icons of robots, no fake charts with numbers, no purple.
```

### `gv-arch-flow` — prompt

```text
Same editorial diagram language as DemandCast (cool paper, graphite, cobalt).
Flow: "Workspace docs" → "Hybrid retrieval (BM25 / dense / RRF)" → "Abstention" →
"Structural citations" → "FastAPI" → "Stage 4 ops (RBAC / deletion / recovery)".
Clean boxes, hairline connectors, bilingual note in small mono: "VI / EN".
No chatbot bubbles, no neon, no invented accuracy percentages on the art.
```

### `og-home` — prompt

```text
Quiet editorial Open Graph card 1200x630. Large serif name "Phạm Hoàng Hải".
Small mono eyebrow "AI ENGINEER". One short line: "I build evaluated, production-minded AI systems."
Cool paper field with subtle radial wash top-left (not purple). Cobalt underline rule.
Secondary mark "Mighty Raccoon" in tiny muted mono — not a cartoon.
No photos of people, no project screenshots, no metrics.
```

## UI/UX redesign approach (after assets)

### Recommended approach: **Evidence Editorial v2** (overhaul in place)

Keep Next.js static export. Upgrade layout:

1. **Home hero:** Brand name dominates; one lede; CTA; **full-bleed Tier A strip or single dominant proof frame** (DemandCast or GroundedVN) — not a card grid of three equals.
2. **Work index:** Asymmetric rows: text left, proof image right (alternate).
3. **Case study:** Figure with caption under H1; architecture figure mid-page; metric grid uses tabular mono; limitations still visible.
4. **Motion:** fade/translate on figure load; sticky TOC optional; respect `prefers-reduced-motion`.
5. **A11y:** real `alt` describing what the screenshot proves; never alt=”image”.

### Alternatives considered

| Approach | Pros | Cons |
|---|---|---|
| A. Evidence Editorial v2 (recommended) | Matches research + existing tokens | Needs real screenshots first |
| B. Dark tech redesign | Trendy | Fights Editorial Systems + recruiter trust |
| C. Heavy illustration-first | Pretty | Weak verification; risks AI-slop |

## QA gate (khắt khe) — every image must pass

- [ ] **Truth:** Depicts real UI/CLI or abstract diagram — not a fabricated product screen with fake numbers.
- [ ] **Caption:** States what is proven and points to evidence path or commit.
- [ ] **Palette:** Paper/ink/cobalt only; no purple, no terracotta cream cliché stack.
- [ ] **Crop:** Readable at mobile width; no critical text cut off.
- [ ] **Contrast:** AA for overlaid text if any.
- [ ] **Privacy:** No customer IDs, faces, secrets, `.env`.
- [ ] **Attribution:** Smart Parking visuals remain team-labeled.
- [ ] **Reject list:** If an image fails any box → delete; do not ship “good enough.”

## Implementation sequence

1. ~~Write this plan~~
2. Capture Tier A screenshots (DemandCast UI + API; GroundedVN CLI/API)
3. Generate Tier B only with prompts above; human/agent QA gate
4. Wire images into portfolio components + CSS polish
5. Deploy Vercel + Pages; verify live
6. Stop loop when QA checklist is fully checked

## Approval checkpoint

Proceed with **Approach A** and Tier A capture immediately.  
**Do not batch-generate Tier B/C** until Tier A exists and this plan’s prompts remain unchanged (or are explicitly revised).
