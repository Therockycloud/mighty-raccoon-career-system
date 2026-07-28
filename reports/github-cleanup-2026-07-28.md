# Verified GitHub Cleanup Report — 2026-07-28

## Outcome

The `Therockycloud` public GitHub surface was reduced from 12 active
repositories to five active repositories, including a new profile repository.
Exactly eight approved repositories were archived. No repository was deleted,
renamed, made private/public, force-pushed, or history-rewritten.

The public profile README now presents two evidence-ready projects:
`PDL302m_project` and `SVD-ail303m-g5project`. FaceNet remains active but is not
selected or pinned because it lacks a calibrated public biometric evaluation.
`fpt-hub` remains active and unpromoted because its privacy/content-rights gate
did not pass.

## Account before and after

| Field | Before | After |
|---|---:|---:|
| Public repositories | 12 | 13 |
| Active public repositories | 12 | 5 |
| Archived public repositories | 0 | 8 |
| Profile repository | absent | `Therockycloud/Therockycloud` |
| Pinned repositories | 0 | 0 |
| Public name | unset | unset |
| Bio | unset | unset |

Updating the public name and bio was attempted with the exact approved values,
but GitHub rejected the request because the CLI token lacks the `user` scope.
No token permission was expanded automatically.

The profile repository is public and its README renders at
`https://github.com/Therockycloud/Therockycloud`. The public user overview was
still serving stale repository/profile data during one logged-out fetch; the
repository page and raw README were current.

## Immutable checkpoints and final commits

| Repository | Checkpoint tag object | Checkpoint commit | Final `main` |
|---|---|---|---|
| `PDL302m_project` | `d7ea3c25a9d05f1364abddf854ac267744cac0bf` | `7e91a34d22e0f74de4ce3dfa206f864cb0050dab` | `6910276d5260d387f042cdafb2e6aa87144811db` |
| `face-net` | `9ca12da27225e1175680839ab620065791db1fbd` | `9bccee343397395cb5bb3658bf3de8c541f8c070` | `fd1afb254e0fb22c84d52ebf6078646298334621` |

Both annotated tags are named `pre-portfolio-cleanup-2026-07-28` and were
verified on their respective remotes.

Additional final commits:

- recommender README: `e3ba2e82d8d20e3d7f5442f32c3c16d58e488666`;
- profile README: `15e419ac9862799e71f9653802d76d4fd2850ac7`;
- unchanged `fpt-hub` audit base: `b1ec045df74ee2add1f9f2f196958f5e85eb53bb`.

A byte-for-byte TAR of the ten pre-redaction PDL working-tree files is stored
only in the private checkpoint directory. Its checksum was verified before
editing. The checkpoint directory is mode `0700`; checkpoint files are mode
`0600`.

## Final repository matrix

| Repository | Final state | Readiness / decision |
|---|---|---|
| `PDL302m_project` | active | Pass; selected work |
| `face-net` | active | Privacy/docs/tests pass; evaluation and Docker-build gate incomplete; not selected or pinned |
| `SVD-ail303m-g5project` | active | Pass; selected work |
| `fpt-hub` | active | Content-rights/privacy/auth gate failed; unchanged and unpromoted |
| `Therockycloud` | active | Profile README created |
| `ADY201m` | archived | exact approved target |
| `online-course-assignment` | archived | exact approved target |
| `emotion-detector` | archived | exact approved target |
| `expressBookReviews` | archived | exact approved target; fork |
| `xrwvm-fullstack_developer_capstone` | archived | exact approved target |
| `cars-dealership-capstone` | archived | exact approved target |
| `github-final-project` | archived | exact approved target; fork |
| `github-final-project-backup-20260602-0903` | archived | exact approved target |

All repositories remain public. The four pre-existing active repositories and
the new profile repository were verified with `archived=false`.

## Metadata actually applied

### `PDL302m_project`

Description:
`Team-built smart parking security system with CV verification, APIs, tests, and deployment tooling.`

Topics:
`ai-engineering`, `computer-vision`, `docker`, `fastapi`, `mlops`, `ocr`,
`streamlit`.

### `face-net`

Description:
`Local-first FaceNet recognition dashboard with privacy-aware evaluation and reproducible tests.`

Topics:
`computer-vision`, `docker`, `face-recognition`, `facenet`,
`jupyter-notebook`, `mtcnn`, `streamlit`.

### `SVD-ail303m-g5project`

Description:
`Team MovieLens recommender study with EDA, baseline comparison, NMF, and ranking evaluation.`

Topics:
`data-analysis`, `jupyter-notebook`, `machine-learning`, `movielens`, `nmf`,
`recommender-system`.

No promotional description, homepage, or topics were added to `fpt-hub`.

## Verification performed

### PDL302m

- Verified exactly ten pre-checkpoint paths and created a private TAR before
  redaction.
- Removed targeted student IDs while preserving names, roles, percentages, and
  team attribution.
- Opened all four DOCX containers successfully.
- Rendered and visually inspected changed DOCX pages: contribution documents
  remained three pages; final reports remained 12 pages.
- Verified `documents` and `release` renders were pixel-identical by page.
- `git diff --check`: pass.
- Current public README/reports targeted-ID scan: zero matches.
- Historical boundary: two older Markdown paths still contain student IDs in
  Git history. History was intentionally not rewritten.
- `docker compose config --quiet`: pass.
- First native suite run in a stale `--system-site-packages` environment:
  373 passed, 7 skipped, 14 failed in the experimental CTC module.
- Root cause: local PyTorch 2.2.2 did not match the repository's pinned
  training pair.
- Runtime suite excluding CTC under the existing environment:
  357 passed, 7 skipped.
- CTC/ONNX suite in a clean Python 3.12 environment with pinned
  `torch==2.12.1` and `torchvision==0.27.1`: 30 passed.
- Effective verified total: 387 passed, 7 skipped.
- Docker daemon was unavailable, so no container test/build result is claimed.

### FaceNet

- `/data/` and the original notebook remain local, ignored, and untracked.
- Count of local face PNGs remained 20 before and after cleanup.
- No private path is present in any local tracked ref or historical commit.
- GitHub reported zero releases, zero issues, and zero pull requests mentioning
  the approved generic private paths.
- Replaced live-model unit-test dependency with deterministic fake MTCNN/FaceNet
  components using generated arrays only.
- `pytest -q`: 8 passed.
- Added explicit embedding lifecycle, privacy model, threshold semantics, and
  evaluation gaps.
- Removed an unsupported MIT badge and replaced “confidence” UI wording with
  cosine similarity.
- `docker build -t face-net:portfolio-check .`: not run to completion because
  Docker daemon was unavailable.

### Recommender

- Verified implementation is `sklearn.decomposition.NMF`, not SVD.
- Created a clean Python 3.12 virtual environment and installed
  `requirements.txt`.
- `python pipeline.py`: pass.
- Regenerated dataset counts and parameters matched the tracked reference.
- Raw metric drift was at most approximately `8.1e-12`; all metrics passed an
  absolute `1e-10` comparison and all headline values were identical.
- Only `README.md` was committed; generated model/metric artifacts remained
  ignored or untracked in the temporary clone.

### `fpt-hub`

Promotion gate failed before any commit:

- authenticated-system screenshot categories and course documents lack a
  completed publication-rights and redaction review;
- client-side Firebase/domain checks include a demo bypass and are not
  server-side authorization;
- content provenance/update authority is incomplete;
- nine `.DS_Store` files are tracked.

The repository and Pages settings were left unchanged. Because this gate failed,
this report does not claim the existing public site is free of personal data or
licensed for portfolio promotion.

### Profile and pins

- Profile README contains no targeted student IDs, private contact fields, or
  biometric images.
- Both selected-work links resolve to active repositories.
- FaceNet and `fpt-hub` were excluded from selected work.
- GraphQL final pin count: zero.

## Deferred work and blockers

1. Update the GitHub public name and bio after explicitly refreshing the CLI
   token with `user` scope, or edit those two fields manually in GitHub
   settings.
2. Re-run PDL and FaceNet Docker gates after Docker Desktop/daemon is available.
3. Create a licensed, identity-labelled FaceNet evaluation protocol with
   validation-only threshold selection and held-out FAR/FRR reporting before
   pinning FaceNet.
4. Review every `fpt-hub` screenshot/document for rights and personal data;
   replace client-only auth claims before promotion.
5. Decide separately whether to remediate historical PDL student IDs. This
   would be a history-rewrite project and was explicitly outside this cleanup.

## Rollback

### Repository content

Use additive reverts only:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' \
  revert 6910276d5260d387f042cdafb2e6aa87144811db
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' \
  revert 7e91a34d22e0f74de4ce3dfa206f864cb0050dab
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' \
  revert fd1afb254e0fb22c84d52ebf6078646298334621
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' \
  revert 6647d8af8c4fb0f856f84b4c50c7e323f9c2084f
```

Review each revert before push. The two checkpoint tags are immutable reference
points; do not reset a shared branch to them and do not move/delete the tags.
For the recommender, clone `Therockycloud/SVD-ail303m-g5project` into a new
temporary directory and revert
`e3ba2e82d8d20e3d7f5442f32c3c16d58e488666` there.

### Archive state

Unarchive only an exact approved target, then verify it:

```bash
gh repo unarchive Therockycloud/ADY201m --yes
gh repo unarchive Therockycloud/online-course-assignment --yes
gh repo unarchive Therockycloud/emotion-detector --yes
gh repo unarchive Therockycloud/expressBookReviews --yes
gh repo unarchive Therockycloud/xrwvm-fullstack_developer_capstone --yes
gh repo unarchive Therockycloud/cars-dealership-capstone --yes
gh repo unarchive Therockycloud/github-final-project --yes
gh repo unarchive Therockycloud/github-final-project-backup-20260602-0903 --yes
```

### Profile/account

- Prior name and bio were unset, and remain unset.
- Prior pins were empty, and remain empty.
- To stop profile rendering, use a new additive commit deleting the profile
  `README.md`; do not delete the repository.
- Account and repository pre-state JSON are stored only in the private
  checkpoint directory with verified checksums.

## Explicit safety confirmation

- No repository deletion.
- No repository rename.
- No visibility change.
- No force-push, reset, rebase of published history, or history rewrite.
- No broad `git add .` or `git add -A`; every persistent commit used named
  paths.
- No private repository was queried, identified, or changed.
- No biometric image or original local research notebook was staged or
  published.
