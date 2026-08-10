# Portfolio UI QA receipt — 2026-08-10

| Field | Value |
|---|---|
| Verdict | **PASS** |
| Model | `claude-opus-5-thinking-high` |
| Fallback used | no |
| Live | https://portfolio-might-raccoon.vercel.app/ (Vercel only; Pages disabled) |
| SHA | `638223b` |
| Loop | `portfolio_ui_qa` stopped (green gate) |

## Gate checklist

- Brand-first home (name / lede / CTAs as first composition; evidence below fold)
- Curated proof figures from existing assets only (no new GenerateImage batch)
- Smart Parking primary thumb = clean README excerpt plate (`sp-readme-surface.png`); team attribution honest
- DemandCast case: overview → arch → evaluation
- GroundedVN case: verify-data → arch
- IMAGE_MANIFEST primary set remains green (no regenerated fakes)

## must_fix

_(empty)_

## should_fix (non-blocking; not reopened)

- Mobile Smart Parking SOURCE callout: URL flush to right edge at 390px
- Mobile architecture plates: node labels hard to read at 390px
- DemandCast product UI remains warm/teal inside cool-paper frame (framed, acceptable)

## Screenshots reviewed

`portfolio/artifacts/qa-shots/desktop/{home,work,demandcast,groundedvn,smart-parking}.png`  
`portfolio/artifacts/qa-shots/mobile/{home,work,demandcast,groundedvn,smart-parking}.png`
