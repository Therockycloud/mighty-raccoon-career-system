# AI Engineering Career Roadmap

## 1. Outcome

Within approximately 20 weeks at 10–15 hours per week, produce:

- A clean and honest GitHub profile.
- A deployed English-first React portfolio.
- Two new personal AI projects with recruiter-verifiable evidence.
- Two repaired existing AI repositories.
- A sustainable GitHub–LinkedIn–portfolio writing loop.
- An application package aligned to AI Engineer, Applied AI, ML Engineer, and adjacent AI Product internships.

This is an outcome roadmap, not a promise that every senior stretch feature will ship. Stage promotion depends on evidence and available time.

## 2. Weekly allocation

Recommended 12-hour week:

| Stream | Hours | Purpose |
|---|---:|---|
| Current project milestone | 7 | Implementation, tests, evaluation |
| AI/ML fundamentals | 2 | Model reasoning, statistics, system concepts |
| Interview foundations | 1.5 | Python, SQL, data structures, API reasoning |
| Evidence and writing | 1 | README, ADR, report, LinkedIn/article draft |
| Review and planning | 0.5 | Diff review, project state, next gate |

When only 10 hours are available, reduce writing and review volume before reducing tests or evaluation.

Do not divide the seven project hours between GroundedVN and DemandCast in the same week.

## 3. Twenty-week sequence

### Week 0 — specification review

Outputs:

- Approve or revise all files in this repository.
- Confirm LinkedIn URL and résumé availability.
- Confirm GitHub write targets and archive list.
- Create the implementation plan for Codex-delivered work.

Gate:

- No GitHub or deployment mutation before approval.

### Weeks 1–2 — GitHub cleanup

Codex-delivered:

- Verify local remotes and branches.
- Create safe pre-cleanup checkpoints.
- Preserve PDL documentation changes through explicit staging.
- Keep FaceRecognition biometric data local.
- Repair high-priority README/metadata issues.
- Archive the approved eight repositories.
- Create the GitHub profile README and set intentional pins.
- Verify the public profile from a logged-out view.

Evidence:

- Before/after repository inventory.
- Commit/tag SHAs.
- Archive state log.
- Public profile screenshot.
- Verification report.

### Weeks 3–5 — portfolio foundation and launch

Codex-delivered:

- Build the Editorial Systems design.
- Publish Smart Parking and FaceNet only after each case passes its evidence,
  ownership, privacy, and presentation gates. If FaceNet is blocked, keep that
  case draft and record the launch blocker rather than inventing a second
  verified case.
- Add the writing system and evidence validation.
- Add honest “currently building” descriptions for the two new projects.
- Complete accessibility, performance, link, and responsive QA.
- Deploy through Sites.

Evidence:

- Production URL.
- Saved deployment version.
- Test/build logs.
- Accessibility and performance results.
- Evidence packets for published claims.

### Week 6 — GroundedVN contract

- Lock problem, users, corpus policy, budget, and non-goals.
- Build the project-authored bilingual evaluation pack specification.
- Run the lexical retrieval baseline; do not add generation yet.
- Record dataset and model licensing.

Gate:

- The baseline reruns from a clean environment.
- No invented Vietnamese public benchmark.

### Weeks 7–8 — GroundedVN MVP

- Deterministic ingestion.
- Local dense and hybrid retrieval with versioned metadata.
- Evidence-only CLI and FastAPI search.
- Unit and integration tests.

Gate:

- The selected retrieval configuration beats or honestly defers to the declared baseline under the preregistered gate.
- Every retrieval branch enforces the workspace boundary.

### Weeks 9–10 — GroundedVN portfolio stage

- Hybrid retrieval.
- Reranking benchmark.
- 100+ bilingual/adversarial cases.
- Local provider-neutral generation, exact citations, and calibrated abstention.
- API demo and portfolio evidence view; no separate polished frontend is required.
- Failure analysis and report.

Gate:

- The chosen pipeline passes development gates, then the exact frozen test run is separately approved.

### Weeks 11–12 — GroundedVN operable release

- PostgreSQL migration path, bounded PDF ingestion, and single-workspace authentication.
- Tracing, redacted logs, metrics, and evaluation regression.
- Rate/cost controls.
- Prompt-injection test suite.
- Load testing, runbook exercise, and public release preparation.
- Public release and portfolio case-study update.

Durable background ingestion, multi-workspace RBAC, Qdrant alias activation,
durable asynchronous deletion, backup/restore, and advanced recovery drills enter
Stage 4 only after explicit approval and a measured reliability, concurrency,
governance, or capacity trigger. The synchronous metadata-pointer switch and
synchronous verified deletion remain required before Stage 4.

### Week 13 — DemandCast contract

- Download and checksum UCI Online Retail II.
- Lock cleaning rules, daily SKU grain, forecast horizon, backtest protocol, and synthetic decision assumptions.
- Build deterministic ingestion, cleaning, contracts, and the daily SKU table.
- Produce the data-quality report and pass the Stage 0 gate before modeling.
- Begin baseline work only if the Stage 0 gate passes early.

Gate:

- The data pipeline is deterministic.
- Contract and data-quality tests pass.

### Weeks 14–15 — DemandCast MVP

- Finish the leakage-safe seasonal, rolling, Croston, and SBA baselines.
- Freeze the rolling-origin development/lockbox protocol.
- Build the Parquet/DuckDB feature pipeline.
- Run the bounded LightGBM quantile benchmark only after the baseline gate.
- Reproducible CLI report.

Gate:

- Leakage tests pass.
- The candidate is compared fairly with all required baselines.

### Weeks 16–17 — DemandCast portfolio stage

- Quantile forecasts.
- Error slices, interval diagnostics, and the preregistered development-only
  interval scaling; no post-hoc LightGBM calibration.
- MLflow lineage.
- FastAPI read service and React/TypeScript dashboard.
- Explicitly synthetic inventory-decision simulation.

Gate:

- Forecast promotion follows the preregistered numeric gate; otherwise the baseline remains champion.
- The synthetic decision sandbox passes deterministic formula, labeling, audit, and replay-metric tests; synthetic cost differences are not treated as business impact.

### Weeks 18–19 — DemandCast operable release

- Scheduled batch.
- Data-quality gates.
- Backfill, retry, and idempotency.
- Accuracy monitoring after actuals arrive.
- Champion/challenger and rollback proof.
- Public release and case-study update.

### Week 20 — application package

- Replace all “currently building” content with verified releases where earned.
- Pin GroundedVN, DemandCast, and PDL302m_project after their evidence gates pass.
- Pin `face-net` only if the public-data evaluation, privacy audit, ownership check,
  and presentation gates in the cleanup runbook have passed; otherwise leave it
  active but unpinned and record the blocker.
- Finalize English résumé.
- Create a shortlist of roles and companies.
- Prepare project walkthroughs and failure-analysis stories.
- Run mock technical interviews.

## 4. Professional publishing rhythm

### GitHub

Publish on meaningful milestones only:

- baseline report;
- MVP release;
- portfolio/operable release;
- important postmortem or benchmark revision.

### LinkedIn

Maximum one substantial technical post per week:

- one problem or lesson;
- one verified result or failure;
- one link to evidence;
- no engagement bait or inflated seniority claims.

### Portfolio

Publish one or two deep articles per month when evidence supports them:

- evaluation design;
- failed experiment;
- architecture decision;
- security/reliability lesson;
- reproducibility walkthrough.

## 5. Fundamentals track

Maintain alongside projects:

### Python and software engineering

- packaging and dependency management;
- typing and Pydantic;
- testing and fixtures;
- profiling;
- concurrency and background jobs;
- API and error design.

### Data and ML

- leakage and split design;
- baseline selection;
- calibration and uncertainty;
- bias/variance;
- data quality;
- drift and monitoring;
- experiment design.

### SQL and data systems

- joins and windows;
- aggregation;
- indexes and query plans;
- transactional boundaries;
- batch idempotency.

### Computer science

- common data structures;
- algorithmic complexity;
- networking and HTTP;
- processes, threads, and queues;
- caching and consistency.

### Communication

- English technical writing is the priority.
- Vietnamese summaries support local recruiters.
- Japanese or Mandarin study may begin as a separate personal goal, but it must not displace English, core projects, or interview preparation before applications.

## 6. Application gates

Begin selective applications after:

- GitHub cleanup is complete.
- The portfolio is live.
- At least one new project has passed the portfolio-stage gate.
- Existing case studies accurately attribute team versus personal work.

Begin broad applications after:

- GroundedVN has an operable release.
- DemandCast has at least passed its portfolio-stage gate.
- The résumé and project walkthroughs are tested.

Do not wait for every senior stretch feature.

## 7. Success measures

Evidence measures:

- At least three verified target pins (`GroundedVN`, `DemandCast`, and
  `PDL302m_project`), with a fourth `face-net` pin only when its evaluation,
  privacy, ownership, and presentation gates pass.
- Two new personal projects with reproducible baselines and evaluation.
- At least three complete case studies.
- CI and documented reproduction commands on featured repositories.
- A live portfolio with no broken links or fabricated claims.

Application measures:

- Targeted applications, not raw volume.
- Interview conversion tracked by role family.
- Recruiter questions mapped back to missing evidence or unclear wording.
- Portfolio improvements driven by observed confusion, not vanity metrics.

Do not optimize for:

- contribution-square streaks;
- follower counts;
- badge quantity;
- number of repositories;
- number of tools listed.

## 8. Monthly review

At the end of each four-week block:

1. Review project-state evidence.
2. Re-run the public portfolio link check.
3. Verify pinned repositories and contribution wording.
4. Review application/interview feedback.
5. Remove or defer features without a hiring or learning payoff.
6. Select one measurable improvement for the next block.
