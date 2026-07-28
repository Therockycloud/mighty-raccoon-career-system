# GitHub Cleanup Specification and Safety Runbook

**Goal:** Turn `Therockycloud` into a focused, honest AI-engineering internship profile while preserving recoverability, team attribution, private data, and the exact pre-cleanup state of the two approved local repositories.

**Architecture:** Execute the cleanup as a gated, reversible sequence: re-audit current state, create safe checkpoints, repair only approved public repositories on cleanup branches, update the public profile, archive the approved low-signal repositories, then set evidence-based pins. Every claim must trace to code, a report, a test, or a measured artifact; remote state is changed only after its local or API result is verified.

**Tech Stack:** Git, GitHub, GitHub CLI/API, Markdown, repository-native tests, Docker where already present, and GitHub Pages for the existing `fpt-hub` site.

---

## 1. Document status and operating rule

This is a combined behavior specification and safety runbook, not a
Cursor/Codex prompt library. Its commands define reviewed invariants and
preflights; they remain locked until the user approves both this package and the
later session implementation plan. The later plan will schedule these operations,
name the exact verification checkpoints, and stop for any drift. Codex owns the
execution of this workstream.

Audit snapshot date: **2026-07-28**, Asia/Ho_Chi_Minh.

The approved cleanup level is **safe and reversible**:

- Keep the four approved public repositories active.
- Repair the strongest repositories before presenting or pinning them.
- Archive exactly the eight approved public coursework, fork, duplicate, or backup repositories.
- Do not delete a repository.
- Do not rewrite Git history.
- Do not force-push.
- Do not change a repository between public and private.
- Do not inspect, edit, rename, archive, or identify any private repository in a public artifact.
- Keep the repository name **`PDL302m_project`** unchanged.
- Never run `git add .`, `git add -A`, or an equivalent broad staging command in either approved local checkout.
- Never publish the 20 real face images or notebook outputs from `FaceRecognition`.

The original request used the words “initial commit,” but the user subsequently approved the safe-checkpoint correction. Both local repositories already have commit history, so an “initial commit” message would be false. Use an honest checkpoint commit or tag instead.

## 2. Approved identity and positioning

| Field | Approved target |
|---|---|
| Primary public name | **Phạm Hoàng Hải** |
| Secondary brand | **Mighty Raccoon** |
| Correct brand spelling | `Raccoon`, with two `c` characters |
| Target role | AI Engineer Intern / Applied AI + MLOps |
| Primary profile language | English |
| Secondary language | A short Vietnamese introduction only |
| Professional channels | GitHub, LinkedIn, owned portfolio/blog |
| Optional technical distribution | Hugging Face only when a genuine model, dataset, or demo exists |
| Out of scope | Facebook, Instagram, X, Threads, lifestyle content, personal-photo strategy, automated social publishing |

Approved GitHub bio:

> AI Engineer Intern · Building evaluated, production-minded AI systems

The profile must not imply that Hải is already a senior engineer. “Senior-level” applies to the rigor of the planned architectures, tests, operations, and documentation—not to the applicant’s current job title.

## 3. Current GitHub account facts

The following facts were read from GitHub’s public REST/GraphQL APIs for `Therockycloud` on 2026-07-28:

| Account fact | Current value |
|---|---|
| Login | `Therockycloud` |
| Profile URL | `https://github.com/Therockycloud` |
| Display name | unset (`null`) |
| Bio | unset (`null`) |
| Company | unset (`null`) |
| Website | blank |
| Location | unset (`null`) |
| Available-for-hire flag | unset (`null`) |
| Public repositories | 12 |
| Followers | 0 |
| Following | 1 |
| Pinned repositories | 0 |
| Profile README repository | absent; `Therockycloud/Therockycloud` does not exist |
| Account created | `2024-01-27T02:09:25Z` |
| Public profile last updated | `2026-07-09T16:14:00Z` |

All 12 public repositories were unarchived at audit time. Two are forks: `expressBookReviews` and `github-final-project`. The four repositories approved to remain active currently have no topics. `PDL302m_project`, `face-net`, and `fpt-hub` have blank descriptions.

These are current-state facts, not permanent assumptions. Task 1 contains a mandatory drift check before any write.

## 4. Repository disposition matrix

Archiving is a portfolio-curation decision, not a judgment that the work has no educational value. Archived repositories remain reachable and can be unarchived.

### 4.1 Keep active

| Repository | Current evidence | Decision | Required role in the profile |
|---|---|---|---|
| `PDL302m_project` | Team DPL302m project; YOLOv8, PaddleOCR, MobileNetV3, FastAPI, Streamlit, Docker, tests, measured results; Hải’s documented contribution is about 34% | Keep, repair, then pin | Strongest current production-minded computer-vision case study |
| `face-net` | FaceNet/MTCNN local recognition app with Streamlit, Docker, and unit tests; no public benchmark strong enough for broad accuracy claims; local privacy-sensitive data exists | Keep, privacy-repair, evaluate, then pin | Privacy-aware computer-vision system and evaluation story |
| `SVD-ail303m-g5project` | Team recommender project with reproducible pipeline, baseline and NMF metrics; Hải’s stated role is EDA, visualization, and report writing | Keep active as supporting work | Honest breadth in data analysis and recommender evaluation; not a claim of model ownership |
| `fpt-hub` | GitHub Pages student resource site; HTML/CSS/JavaScript; no root README, description, topics, or enforced HTTPS at audit time | Keep active after content/security audit | Product and frontend breadth; not a core AI pin after the two new projects mature |

### 4.2 Archive

| Repository | Exact current signal | Approved reason to archive |
|---|---|---|
| `ADY201m` | “Phân tích thị trường tuyển dụng IT tại Việt Nam qua dữ liệu TopCV” | Course/team analytics work is superseded in the target narrative by the planned individual DemandCast project |
| `online-course-assignment` | “Django Online Course final project assessment feature” | Recognizable course assignment; weak differentiation for an AI profile |
| `emotion-detector` | “IBM DWP Emotion Detector Flask application” | Recognizable guided course deliverable |
| `expressBookReviews` | Fork; description `nodejsFinalModule` | Forked final-module coursework |
| `xrwvm-fullstack_developer_capstone` | “fullstack_developer_capstone Cars Dealership solution” | Duplicates the cars-dealership course/capstone story |
| `cars-dealership-capstone` | “Best Cars Dealership full-stack capstone solution” | Course capstone; redundant with `xrwvm-fullstack_developer_capstone` |
| `github-final-project` | Fork; “Introduction-to-Git-and-GitHub” | Introductory Git course artifact |
| `github-final-project-backup-20260602-0903` | Blank description; timestamped backup name | Backup repository should not compete with portfolio evidence |

These 12 existing public repositories are the complete disposition scope. The only
additional repository authorized by this specification is the new GitHub profile
repository `Therockycloud/Therockycloud`, created solely for its profile README.
No other existing or new repository is in scope.

## 5. Exact local audit and checkpoint requirements

### 5.1 `PDL302m_project`

Approved local path:

```text
/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project
```

Remote:

```text
https://github.com/Therockycloud/PDL302m_project.git
```

Audit facts:

- Current branch: `main`
- Tracking: `origin/main`
- Ahead/behind: `0/0`
- Current HEAD: `c990baf296d4b84138b27f8c727f79868e7cabaf`
- HEAD message: `chore: sync project cleanly for GitHub — docs, runtime, drop raw corpora`
- HEAD timestamp: `2026-07-22T19:54:57+07:00`
- No matching `pre-portfolio-cleanup*` tag existed at audit time.
- No `chore/portfolio-cleanup` branch existed at audit time.
- Exactly 10 tracked documentation files are modified.
- Current diff summary: 10 files changed, 48 insertions, 1 deletion, including four binary DOCX paths.
- No untracked path appeared in `git status --short`.

The exact 10 paths are:

```text
README.md
reports/documents/Bang_Dong_Gop_Du_An.docx
reports/documents/Bang_Dong_Gop_Du_An.md
reports/documents/Report_1_Proposal.md
reports/documents/Report_2_Data_Tasks.md
reports/documents/Report_3_Model_Results.md
reports/documents/Report_4_Final_Report.docx
reports/documents/Report_4_Final_Report.md
reports/release/Bang_Dong_Gop_Du_An.docx
reports/release/Report_4_Final_Report.docx
```

The current changes add repository/clone links and course/team context to the reports. They also expose the already documented group attribution and personal contribution table. The top-level README currently identifies Phạm Hoàng Hải as “Tích hợp / An ninh / UI / Kết luận” with approximately 34% contribution.

The reports include team-member names and student IDs. Read-only inspection found
student-ID-like additions in the pending Markdown changes, so this gate is not
hypothetical. Before any checkpoint push, compare the rendered working copies with
`HEAD`. Do not publish student IDs from the pending work, even when consent might be
obtainable: they are unnecessary for technical evidence. Preserve the exact
pre-redaction working files in a private byte-for-byte TAR snapshot outside every
Git repository, record and verify its SHA-256, then redact student IDs from every
public working copy. A Git bundle cannot capture an uncommitted working tree, and a
plain text patch is insufficient for the changed DOCX binaries. Regenerate any
affected DOCX files and ask the user to review the resulting textual and rendered
diff before committing. Team-member names may remain only where needed for honest
attribution and where publication rights are already established. If student IDs
already exist in published history, record that fact privately and propose a
separate privacy remediation; this cleanup does not rewrite published history.

#### `PDL302m_project` safe checkpoint procedure

- [ ] Confirm that HEAD, branch, upstream, ahead/behind counts, and the exact 10-path status still match the audit:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' remote get-url --all origin
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' remote get-url --push --all origin
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' ls-remote --exit-code origin 'refs/heads/main'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' fetch --prune origin
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' status --branch --short
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' rev-list --left-right --count origin/main...HEAD
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' rev-parse HEAD
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' tag --list 'pre-portfolio-cleanup*'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' branch --list 'chore/portfolio-cleanup'
```

Expected before execution: each URL command prints exactly one line and both lines
equal `https://github.com/Therockycloud/PDL302m_project.git`; no additional fetch
or push URL exists. `ls-remote` reports `refs/heads/main`; the refreshed state is
`main...origin/main`, `0 0`, the audited SHA, and no matching tag or cleanup
branch. If any value differs, stop the write sequence and re-audit the changed
state.

- [ ] Review textual changes and confirm the list is still exactly 10 paths:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --name-only
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff -- README.md reports/documents/Bang_Dong_Gop_Du_An.md reports/documents/Report_1_Proposal.md reports/documents/Report_2_Data_Tasks.md reports/documents/Report_3_Model_Results.md reports/documents/Report_4_Final_Report.md
```

Expected: `git diff --check` has no output; `git diff --name-only` prints only the 10 approved paths.

- [ ] Before redaction, create and verify a private byte-for-byte snapshot of the
  exact pending working files. Confirm with the user that
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints` is local,
  private, and not cloud-synced or shared before running these commands:

```bash
set -euo pipefail
umask 077
mkdir -p '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints'
chmod 700 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar.sha256'
tar -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' -cf '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar' -- \
  'README.md' \
  'reports/documents/Bang_Dong_Gop_Du_An.docx' \
  'reports/documents/Bang_Dong_Gop_Du_An.md' \
  'reports/documents/Report_1_Proposal.md' \
  'reports/documents/Report_2_Data_Tasks.md' \
  'reports/documents/Report_3_Model_Results.md' \
  'reports/documents/Report_4_Final_Report.docx' \
  'reports/documents/Report_4_Final_Report.md' \
  'reports/release/Bang_Dong_Gop_Du_An.docx' \
  'reports/release/Report_4_Final_Report.docx'
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar'
shasum -a 256 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar' > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar.sha256'
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar.sha256'
tar -tf '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar'
shasum -a 256 -c '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/PDL302m_project-pre-redaction-2026-07-28.tar.sha256'
```

Expected: the TAR lists exactly the 10 approved relative paths and the checksum
verification reports `OK`. The two `test ! -e` guards and fail-fast shell mode
make a rerun stop instead of overwriting the recovery snapshot. Never add this
private snapshot or checksum to Git, GitHub, a release, or the career-system
repository.

- [ ] Validate all four changed DOCX files as ZIP-based Office documents:

```bash
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/documents/Bang_Dong_Gop_Du_An.docx'
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/documents/Report_4_Final_Report.docx'
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/release/Bang_Dong_Gop_Du_An.docx'
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/release/Report_4_Final_Report.docx'
```

Expected: each `unzip -t` ends successfully. The audited
`Report_4_Final_Report.docx` copies have equal file sizes but different SHA-256
hashes, so byte equality is not an acceptance criterion; ZIP metadata or independent
generation can differ without changing visible content.

- [ ] Render all four changed DOCX files with the workspace document tooling and visually inspect every page before staging. Confirm that headings, tables, links, page breaks, Vietnamese text, contribution attribution, and identity redactions render correctly. Compare each release copy with its documents copy by visible content and compare each DOCX with its intended Markdown/source content. Treat an unexplained material difference or a structurally valid but visually broken document as a failed checkpoint.

- [ ] Compare the rendered working copies with the rendered `HEAD` versions. Stop before staging if a pending public copy contains any student ID or other unnecessary personal identifier.

- [ ] Stage only the 10 reviewed paths:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' add -- \
  'README.md' \
  'reports/documents/Bang_Dong_Gop_Du_An.docx' \
  'reports/documents/Bang_Dong_Gop_Du_An.md' \
  'reports/documents/Report_1_Proposal.md' \
  'reports/documents/Report_2_Data_Tasks.md' \
  'reports/documents/Report_3_Model_Results.md' \
  'reports/documents/Report_4_Final_Report.docx' \
  'reports/documents/Report_4_Final_Report.md' \
  'reports/release/Bang_Dong_Gop_Du_An.docx' \
  'reports/release/Report_4_Final_Report.docx'
```

- [ ] Inspect the staged snapshot before committing:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --cached --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --cached --stat
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --cached --name-only
```

Expected: no whitespace error; 10 staged files; no source code, model, dataset, secret, or unrelated path.

- [ ] Create an honest checkpoint commit:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' commit -m 'docs: checkpoint reports before portfolio cleanup'
```

- [ ] Push the checkpoint commit before any cleanup edit:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' push origin main
```

- [ ] Tag the pushed checkpoint and publish the tag:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' tag -a 'pre-portfolio-cleanup-2026-07-28' -m 'Checkpoint before GitHub portfolio cleanup'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' push origin 'refs/tags/pre-portfolio-cleanup-2026-07-28'
```

- [ ] Create the cleanup branch from that checkpoint:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' switch -c 'chore/portfolio-cleanup'
```

Do not move an existing tag. Do not reuse the branch name if it appears after the drift check. Stop and inspect instead.

### 5.2 `FaceRecognition` / remote `face-net`

Approved local path:

```text
/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition
```

Remote:

```text
https://github.com/Therockycloud/face-net
```

Audit facts:

- Current branch: `main`
- Tracking: `origin/main`
- Ahead/behind: `0/0`
- Current HEAD: `9bccee343397395cb5bb3658bf3de8c541f8c070`
- HEAD message: `docs: remove specific heading icons and license section from README`
- HEAD timestamp: `2026-06-15T19:16:23+07:00`
- Tracked working tree is clean.
- Untracked notebook: `Face Recognition Notebook.ipynb`, approximately 5.6 MB.
- The notebook contains 20 cells, including 13 code cells, 3 cells with saved outputs, and 29 output objects.
- Untracked directory: `data/`, approximately 768 KB.
- `data/` contains exactly 20 PNG files. These are real face images and are private.
- Neither `data/` nor `Face Recognition Notebook.ipynb` is currently tracked.
- The committed `.gitignore` does not currently exclude `data/` or this notebook.
- The README displays an MIT badge, but GitHub reports no detected license and the repository has no verified license file.
- No matching `pre-portfolio-cleanup*` tag existed at audit time.
- No `chore/portfolio-cleanup` branch existed at audit time.

#### `FaceRecognition` safe checkpoint procedure

- [ ] Confirm the tracked repository is still exactly at the audited remote state:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' remote get-url --all origin
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' remote get-url --push --all origin
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' ls-remote --exit-code origin 'refs/heads/main'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' fetch --prune origin
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' status --branch --short
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' rev-list --left-right --count origin/main...HEAD
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' rev-parse HEAD
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' ls-files -- 'data' 'Face Recognition Notebook.ipynb'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' tag --list 'pre-portfolio-cleanup*'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' branch --list 'chore/portfolio-cleanup'
```

Expected: each URL command prints exactly one line and both lines equal
`https://github.com/Therockycloud/face-net`; no additional fetch or push URL
exists. `ls-remote` reports `refs/heads/main`; the refreshed ahead/behind count is
`0 0`; the audited SHA matches; `git ls-files` produces no output; only the
notebook and `data/` are untracked; no checkpoint tag or cleanup branch exists.

- [ ] Do **not** create an empty or falsely named “initial commit.” The tracked HEAD is already present on `origin/main`, so it is the safe checkpoint.

- [ ] Tag the existing pushed HEAD and publish only the tag:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' tag -a 'pre-portfolio-cleanup-2026-07-28' -m 'Checkpoint before GitHub portfolio cleanup'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' push origin 'refs/tags/pre-portfolio-cleanup-2026-07-28'
```

- [ ] Create the cleanup branch:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' switch -c 'chore/portfolio-cleanup'
```

- [ ] Make the first cleanup change a committed privacy guard in `.gitignore`:

```gitignore
/data/
/Face Recognition Notebook.ipynb
```

This guard protects the current private artifacts. If a notebook is later worth publishing, create a separately named, sanitized notebook under `notebooks/`; remove every output, replace all real-person inputs with licensed public or synthetic examples, scan markdown and code for names and local paths, and review the rendered notebook before staging its exact path.

The current notebook and face images must remain local. They must not be copied into a public “sample” folder, embedded as base64 output, stored with Git LFS, attached to a release, uploaded to Issues, or placed in portfolio screenshots.

## 6. Repository repair specifications

### 6.1 `PDL302m_project` — keep the name unchanged

The repository name remains exactly `PDL302m_project`. Explain its meaning in the README instead of renaming it:

> DPL302m (Deep Learning) team project at FPT University: a CPU-first smart-parking verification system. My documented contribution focused on integration, security evaluation, Streamlit UI, and the final technical synthesis (~34%); see the contribution report for the full team attribution.

The README repair must:

1. Put course and team-project context above the first technical claim.
2. Identify all work as team work unless the contribution report assigns it to Hải.
3. Link the detailed contribution report and summarize Hải’s contribution as approximately 34%, never as sole ownership.
4. Explain the delivered `plate-primary` architecture: YOLOv8 plate detection, PaddleOCR as the runtime OCR engine, and MobileNetV3 vehicle color as a soft warning.
5. Distinguish deployed components from experiments that were rejected.
6. Present only metrics supported by the committed reports/artifacts:
   - YOLOv8n plate detection: approximately 0.98 mAP@0.5.
   - PaddleOCR benchmark: 81% exact match on 16 held-out crops; state the small sample size.
   - Color model: 85.3% plain and 86.3% with TTA on held-out VCoR data; state that clean VCoR imagery does not validate CCTV-domain performance.
   - Brand classifier: approximately 35%, diagnostic only, removed from the decision.
   - CTC/ONNX OCR experiment: 0% exact match and not deployed.
   - CPU steady-state latency: approximately 0.73 seconds on the parking approach-lock path and approximately 0.96 seconds on the single-image API path; retain the cold-start caveat.
7. Include one architecture diagram, exact quick-start paths, test commands, Docker instructions, limitations, dataset/artifact availability, and privacy notes.
8. Keep the Vietnamese reports accessible while making the top-level hiring narrative English-first.
9. Verify all links on GitHub after merge.
10. Avoid unsupported phrases such as “production-ready,” “state of the art,” or “real-world accuracy.”
11. Reproduce the repository’s current test state before editing. A prior local audit observed 14 failures; record the exact command, environment, failure categories, and exit code. Do not hide or relabel failures. Pinning requires either a passing documented hiring-path smoke suite or an explicit, prominently documented limitation with no false CI badge.
12. Audit the approximately 166 MB checkout for tracked model/data artifacts, licenses, provenance, and generated/internal clutter. Do not remove or republish a team artifact without evidence of ownership and a normal reviewed commit.

Required GitHub metadata:

- Description: `CPU-first smart parking verification with YOLOv8, PaddleOCR, MobileNetV3, FastAPI, Streamlit, Docker, and measured evaluation.`
- Topics: `computer-vision`, `license-plate-recognition`, `yolov8`, `paddleocr`, `fastapi`, `streamlit`, `docker`, `deep-learning`
- Homepage: leave blank until a working public demo exists.

Licensing rule: no detected license currently exists. Do not add a license to this team/course repository without confirming that every relevant owner has authority and agrees. Do not display a license badge that is not backed by a license file.

### 6.2 `face-net`

Immediate privacy and credibility repair:

1. Commit the `.gitignore` protections before any other broad work.
2. Confirm with `git check-ignore -v` that both the notebook and every file below `data/` are ignored.
3. Remove the MIT badge from README unless a valid license is deliberately approved and added by the rights holders.
4. State whether this was an individual or team/course project. Do not imply sole authorship without evidence.
5. Explain local data handling, enrollment, deletion, thresholding, unknown rejection, and the fact that embeddings are biometric data.
6. Add a clear warning that demonstration face data must be consented, local, and excluded from Git.
7. Keep accuracy claims absent until a reproducible public-data evaluation exists.
8. Run the existing isolated test suite:

```bash
cd '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition'
pytest test_face_engine.py -v
```

9. Add or document tests for path traversal, one-face validation, empty enrollment, corrupt images, cache refresh, unknown rejection, and threshold boundaries if they are not already covered.
10. Measure cold-start time, warm inference latency, and memory on a documented machine. Report distributions or multiple runs, not one favorable observation.

Evaluation upgrade required before the repository becomes a final AI pin:

- Use a licensed public face-verification dataset or a clearly documented synthetic test fixture.
- Keep identities and images out of the repository unless the dataset license explicitly permits redistribution.
- Document the split and prevent identity leakage between calibration and evaluation.
- Report ROC-AUC, TAR at one or more stated FAR points, false accept rate, false reject rate, threshold-selection procedure, and latency.
- Include demographic and deployment limitations. Do not imply surveillance suitability.
- Add a compact model card and a privacy/threat section.

Required GitHub metadata:

- Description: `Local-first FaceNet and MTCNN recognition demo with Streamlit, Docker, privacy-aware enrollment, and explicit evaluation limits.`
- Topics: `face-recognition`, `facenet`, `mtcnn`, `pytorch`, `streamlit`, `computer-vision`, `docker`, `privacy`
- Homepage: leave blank unless a privacy-safe public demo is deployed with no persistent biometric collection.

### 6.3 `SVD-ail303m-g5project`

Keep the current repository name. Repair the narrative mismatch rather than renaming:

1. State above the metrics that this is an AIL303m team minicapstone.
2. Keep the existing member attribution.
3. State Hải’s role precisely: exploratory data analysis, visualization, and report writing.
4. Do not imply that Hải authored the NMF model or the full pipeline.
5. Resolve the current metadata inconsistency: the description says “SVD improvement,” while the README states that NMF is the implemented main model.
6. Verify that `reports/pipeline_metrics.json` is regenerated by `python3 pipeline.py`.
7. Verify train/test handling and ranking evaluation for leakage and candidate-set assumptions.
8. Preserve the existing honest interpretation that gains over the global-mean baseline are moderate.
9. Add a reproducibility badge only if CI actually reruns a deterministic smoke path.

Required GitHub metadata:

- Description: `AIL303m team project: reproducible MovieLens EDA and NMF recommendations with pointwise and ranking evaluation.`
- Topics: `recommender-system`, `matrix-factorization`, `nmf`, `movielens`, `machine-learning`, `evaluation`, `jupyter-notebook`
- Homepage: leave blank unless a working demonstration is deployed.

### 6.4 `fpt-hub`

Current audit facts:

- No root README.
- Blank description, homepage, and topics.
- GitHub Pages is configured through a workflow.
- Pages reported `http://therockycloud.github.io/fpt-hub/`.
- HTTPS enforcement was `false` at audit time.
- The repository contains tracked `.DS_Store` files and a large set of FPT system screenshots and course materials.

Keep it active only after these gates:

1. Audit every tracked screenshot/document for student identifiers, account data, tokens, internal-only material, and redistribution rights.
2. Audit the Google/FPT login implementation. A client-side interface must not claim secure access control unless server-side authorization enforces it.
3. Search for credentials and private endpoints; revoke any exposed secret before making cosmetic changes.
4. Add a root README covering problem, users, architecture, contributors, local run/deployment, content provenance, privacy, security limits, and current status.
5. Remove tracked `.DS_Store` files in a normal commit and ignore them going forward.
6. Fix broken links and verify the Pages workflow from a clean checkout.
7. Enforce HTTPS if GitHub Pages supports it for the current configuration.
8. Do not promote or pin the site if the content-rights or authentication audit fails.

If the audit finds an exposed credential, student/account identifier, non-public endpoint, or material that clearly lacks public redistribution rights:

- stop cosmetic work and avoid copying the sensitive value into logs or public reports;
- leave `fpt-hub` unpinned and remove it from all launch case studies;
- report the minimum exact path/category needed for remediation;
- request explicit approval before disabling Pages or removing public files through normal commits;
- revoke any exposed credential through its owning service before treating a code edit as remediation; and
- do not use history rewriting as part of this cleanup.

Required GitHub metadata after the gates pass:

- Description: `Student-built guide hub for FPT University systems and campus resources.`
- Topics: `fpt-university`, `student-resource`, `github-pages`, `html`, `css`, `javascript`
- Homepage: `https://therockycloud.github.io/fpt-hub/`

## 7. Profile README strategy

Create the special public repository `Therockycloud/Therockycloud` only during execution of this cleanup. Its README must be restrained, evidence-first, and English-first.

Recommended initial copy:

```markdown
# Phạm Hoàng Hải — Mighty Raccoon

AI Engineer intern candidate focused on Applied AI, rigorous evaluation, and production-minded ML systems.

I build systems that connect models to usable software: reproducible experiments, APIs, tests, containers, observability, and honest failure analysis. Mình là Phạm Hoàng Hải, hiện xây dựng nền tảng để ứng tuyển các vị trí AI/ML engineering tại Việt Nam và quốc tế.

## Selected work

- **PDL302m Smart Parking Verification** — A DPL302m team project combining YOLOv8, PaddleOCR, MobileNetV3, FastAPI, Streamlit, Docker, tests, and measured CPU evaluation. My documented contribution focused on integration, security evaluation, UI, and final synthesis (~34%).
- **Face Recognition Dashboard** — A local-first FaceNet/MTCNN application being hardened around privacy, threshold calibration, and reproducible evaluation.
- **Movie Recommendation System** — An AIL303m team project with MovieLens EDA, a global-mean baseline, NMF, and pointwise/ranking metrics. My role was EDA, visualization, and report writing.
- **FPT Hub** — A student resource web project retained as product/frontend work after privacy, content-rights, and deployment review.

## Building now

- **GroundedVN** — A local-first bilingual RAG system with hybrid retrieval, reranking, citations, versioned evaluation, security tests, and operational gates.
- **DemandCast** — A leakage-safe retail sales forecasting system with backtesting, probabilistic forecasts, model registry, drift monitoring, and explicitly synthetic human-reviewed inventory scenarios.

## Working principles

- Measure before claiming.
- Separate a deployed path from an experiment.
- Make failure modes, data limits, cost, and rollback visible.
- Keep human approval around consequential AI decisions.
```

Implementation rules:

- Link each selected repository in the real README.
- Treat every “Selected work” bullet as conditional: omit a repository whose privacy, attribution, test, content-rights, or deployment gate has not passed.
- Do not create empty GroundedVN or DemandCast repositories just to make the links look complete.
- Until those repositories exist and pass their quality gates, list them as unlinked “Building now” items.
- Do not show fabricated progress percentages, visitor counters, GitHub streak widgets, trophy grids, or auto-generated skill bars.
- Do not publish a personal phone number, private email, student ID, face image, or home address.
- Add LinkedIn and the portfolio only after their exact public URLs are verified.
- Leave the GitHub website field blank until the portfolio has a working production HTTPS URL.
- Keep the current avatar unchanged unless the user separately supplies and approves a professional image or brand asset.

## 8. Profile and repository metadata plan

### 8.1 Account metadata

Set only:

- Name: `Phạm Hoàng Hải`
- Bio: `AI Engineer Intern · Building evaluated, production-minded AI systems`

Leave company, location, website, and hireable unchanged unless the user supplies or confirms exact values. Do not infer an employer, city, relocation preference, or hiring status from the filesystem or timezone.

### 8.2 Pin plan

Current pins: none.

Interim pins after both high-signal repositories pass their immediate gates:

1. `PDL302m_project`
2. `face-net`

Do not pin `face-net` before the private notebook/data guard and README privacy repair. Keep `SVD-ail303m-g5project` and `fpt-hub` active but unpinned during the interim profile.

Final target pins after the two new individual projects pass their release gates:

1. `GroundedVN`
2. `DemandCast`
3. `PDL302m_project`
4. `face-net`, only if its public-data evaluation, privacy, ownership, and
   presentation gates also pass

At that point, leave `SVD-ail303m-g5project` and `fpt-hub` active but unpinned.
Use three verified pins while `face-net` is blocked, or four after it passes;
never fill a slot merely to reach a count.

## 9. Implementation tasks

### Task 1: Run the drift and privacy preflight

**Files:**

- Read only: both approved local repositories
- Read only: the 12 approved public GitHub repositories
- Modify: none

- [ ] Re-run the account query:

```bash
gh api users/Therockycloud --jq '{login,name,bio,company,blog,location,hireable,public_repos,followers,following,created_at,updated_at,html_url}'
```

- [ ] Re-run the public repository query:

```bash
gh api users/Therockycloud/repos --paginate --jq '.[] | [.name,.archived,.fork,.visibility,.description,.language,.updated_at,.html_url] | @tsv'
```

- [ ] Re-run the pin/profile-README query:

```bash
gh api graphql -f query='query { user(login: "Therockycloud") { pinnedItems(first: 6, types: [REPOSITORY]) { totalCount nodes { ... on Repository { name url description isArchived } } } } }'
```

- [ ] Compare local statuses with Section 5.
- [ ] Stop if a new repository appears, an approved target has been renamed/archived, a branch diverges, a private artifact becomes tracked, or any matrix row no longer identifies the intended repository.

### Task 2: Checkpoint `PDL302m_project`

**Files:**

- Commit: the exact 10 paths in Section 5.1
- Create Git ref: `pre-portfolio-cleanup-2026-07-28`
- Create branch: `chore/portfolio-cleanup`

- [ ] Complete every Section 5.1 validation.
- [ ] Stage only the exact paths.
- [ ] Commit with the exact honest checkpoint message.
- [ ] Push `main`.
- [ ] Confirm remote `main` resolves to the new checkpoint SHA.
- [ ] Create and push the annotated tag.
- [ ] Create the cleanup branch.

### Task 3: Checkpoint and privacy-guard `face-net`

**Files:**

- Modify first: `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/.gitignore`
- Explicitly never stage: `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/data/`
- Explicitly never stage: `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/Face Recognition Notebook.ipynb`
- Create Git ref: `pre-portfolio-cleanup-2026-07-28`
- Create branch: `chore/portfolio-cleanup`

- [ ] Complete every Section 5.2 preflight.
- [ ] Tag the already-pushed clean HEAD without creating an empty commit.
- [ ] Push the tag.
- [ ] Create the cleanup branch.
- [ ] Add the exact ignore patterns using a reviewed file edit.
- [ ] Verify:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' check-ignore -v -- 'data' 'Face Recognition Notebook.ipynb'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' status --short
```

Expected after the ignore edit: `.gitignore` is the only change attributable to the privacy guard; the notebook and face directory do not appear as stageable untracked content.

- [ ] Stage `.gitignore` by exact path and commit it separately:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' add -- '.gitignore'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' diff --cached --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' commit -m 'chore: keep biometric demo data out of Git'
```

### Task 4: Repair the four active repositories

**Files:**

- Modify in `PDL302m_project`: `README.md` and only supporting files required to make its existing claims reproducible
- Modify in `face-net`: `.gitignore`, `README.md`, tests, and evaluation/privacy documentation
- Modify in `SVD-ail303m-g5project`: `README.md`, pipeline/test documentation, and metric artifacts only when regenerated
- Modify in `fpt-hub`: create `README.md`; modify `.gitignore`, Pages/security configuration, and files required by the privacy/content audit

- [ ] Implement Section 6 one repository at a time.
- [ ] Use one focused commit per concern.
- [ ] Stage named files only.
- [ ] Run repository-native tests before pushing.
- [ ] Open and review rendered Markdown and notebooks.
- [ ] Open the application/site for a smoke test where feasible.
- [ ] Push cleanup branches, review the complete diff, then merge through normal fast-forward or pull-request history.
- [ ] Never bypass a failing test, privacy gate, or content-rights gate just to make the profile look complete.

### Task 5: Create the profile README and update metadata

**Files:**

- Create in new public repository: `Therockycloud/Therockycloud/README.md`

- [ ] Create the profile repository only if it is still absent.
- [ ] Use the content and truthfulness rules in Section 7.
- [ ] Replace plain repository names in “Selected work” with verified GitHub links.
- [ ] Leave planned projects unlinked until their real repositories exist.
- [ ] Render the profile while logged out and check every link.
- [ ] Set the exact name and bio from Section 8.1.
- [ ] Apply the exact descriptions/topics from Section 6 only after repository repairs pass.
- [ ] Leave unsupported account fields unchanged.

### Task 6: Archive exactly eight repositories

Before archiving, print and inspect each repository’s owner, name, visibility, fork state, default branch, and archived state. Expected owner is always `Therockycloud`, visibility is always public, and archived is always `false`.

Approved commands:

```bash
gh repo archive Therockycloud/ADY201m --yes
gh repo archive Therockycloud/online-course-assignment --yes
gh repo archive Therockycloud/emotion-detector --yes
gh repo archive Therockycloud/expressBookReviews --yes
gh repo archive Therockycloud/xrwvm-fullstack_developer_capstone --yes
gh repo archive Therockycloud/cars-dealership-capstone --yes
gh repo archive Therockycloud/github-final-project --yes
gh repo archive Therockycloud/github-final-project-backup-20260602-0903 --yes
```

- [ ] Execute one archive operation at a time.
- [ ] Verify `archived: true` immediately after each operation.
- [ ] Stop on the first mismatch or error; do not continue the batch blindly.
- [ ] Confirm the four active repositories remain unarchived.
- [ ] Confirm no private repository was queried or changed.

### Task 7: Set pins

- [ ] Set interim pins only after both high-signal readiness gates in Section 8.2.
- [ ] Verify pin order in a logged-out browser.
- [ ] Do not pin archived coursework.
- [ ] Replace the interim set with the final four only after GroundedVN and DemandCast meet their own release/evaluation gates.

### Task 8: Final verification

- [ ] Run:

```bash
gh api users/Therockycloud --jq '{login,name,bio,blog,location,public_repos}'
gh api users/Therockycloud/repos --paginate --jq '.[] | [.name,.archived,.visibility,.description] | @tsv'
gh api graphql -f query='query { user(login: "Therockycloud") { pinnedItems(first: 6, types: [REPOSITORY]) { totalCount nodes { ... on Repository { name url description isArchived } } } } }'
```

- [ ] Confirm the profile README renders on `https://github.com/Therockycloud`.
- [ ] Confirm exactly eight approved public repositories are archived.
- [ ] Confirm the four approved current repositories remain active.
- [ ] Confirm descriptions and topics match this specification.
- [ ] Confirm every public claim links to supporting evidence.
- [ ] Confirm the PDL repository name is still `PDL302m_project`.
- [ ] Confirm the PDL README labels the work as a course/team project and identifies Hải’s documented personal contribution.
- [ ] Confirm the real face images and original notebook are absent from Git history, branches, releases, Issues, and pull requests.
- [ ] Confirm all profile and README links work while logged out.
- [ ] Confirm no public page contains a secret, private email, phone number, student account, or unapproved biometric image.

## 10. Safety and approval boundaries

### 10.1 Approved design decisions

- Safe cleanup level B.
- Exact keep/archive matrix in Section 4.
- Keep `PDL302m_project` under its existing name.
- Explain course, team, and personal contribution in its README.
- Use Phạm Hoàng Hải as the primary identity and Mighty Raccoon as the secondary brand.
- Create a safe checkpoint before cleanup.
- Codex owns this implementation workstream.

These decisions define the intended scope, but they do not yet authorize remote mutation. The executor may perform these actions only after the user reviews this generated specification package and approves the subsequent implementation plan. After that approval, every corresponding preflight must still pass. A changed target or materially different diff voids the relevant approval and requires a new review.

### 10.2 Requires a new explicit approval

- Deleting any repository, branch, tag, release, issue, asset, or local data.
- Force-pushing, rebasing published history, filtering history, or moving the checkpoint tag.
- Renaming `PDL302m_project` or any other repository.
- Making a public repository private or a private repository public.
- Reading, listing in the deliverable, editing, or archiving private repositories.
- Publishing the original face notebook, real face images, embeddings, names, or screenshots.
- Adding a software/content license where ownership or team consent is not already documented.
- Removing collaborator attribution or changing contribution percentages.
- Publishing personal contact information or adding a new social channel.
- Claiming a deployment, benchmark, metric, job title, language level, or ownership fact not supported by evidence.
- Archiving any repository not named in Section 4.2.

### 10.3 Forbidden even as a convenience

```text
git add .
git add -A
git push --force
git push --force-with-lease
git reset --hard
git clean -fd
git filter-repo
git filter-branch
```

No cleanup step requires any command in that list.

## 11. Rollback plan

Rollback uses additive Git history and reversible GitHub settings.

### 11.1 Repository content

- Revert an unwanted cleanup commit with `git revert <commit-sha>` on a new branch and merge normally.
- Use `pre-portfolio-cleanup-2026-07-28` as the immutable reference for the pre-cleanup tracked state.
- Do not reset a shared branch to the tag.
- Do not delete or move the tag.

### 11.2 Archived repositories

Use the matching reversible commands only for repositories that need restoration:

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

Verify each repository immediately after unarchiving.

### 11.3 Profile and metadata

- Before mutation, save the account and repository API responses from Task 1 as the rollback source of truth.
- Restore name, bio, descriptions, homepages, and topics to the recorded values through normal GitHub edits.
- Restore the previous pin set from the recorded GraphQL response; the audited initial pin set is empty.
- Revert profile README content through a normal Git revert or an additive commit
  that removes `README.md`, so GitHub stops rendering the profile content without
  deleting history.
- Because `Therockycloud/Therockycloud` did not exist at audit time and repository
  deletion is forbidden, an accepted rollback may leave it as a minimal public
  repository with no profile-rendering README. Archiving that new repository is
  reversible but still requires the explicit approval required for repositories
  outside Section 4.2.

### 11.4 Private face artifacts

The original notebook and `data/` remain local and outside Git throughout this plan. Git rollback is neither needed nor permitted for them. If local backup is desired, it must be separately approved and stored in an encrypted/private location—not a public repository, release, issue, or Git LFS object.

## 12. Definition of done

This workstream is complete only when all of the following are true:

- The public account displays `Phạm Hoàng Hải` and the approved AI Engineer Intern bio.
- The profile README exists, renders correctly, uses Mighty Raccoon only as a secondary brand, and contains no fabricated claim or broken link.
- `PDL302m_project` retains its exact name, has a safe checkpoint, and clearly explains course context, team ownership, personal contribution, architecture, metrics, limitations, and reproducibility.
- `face-net` has a safe checkpoint, ignores its real biometric data and original output-bearing notebook, contains no false license badge, and communicates evaluation/privacy limits honestly.
- `SVD-ail303m-g5project` accurately separates team results from Hải’s EDA/visualization/report contribution and no longer describes the implemented NMF system as SVD.
- `fpt-hub` has passed privacy/content-rights/authentication review before promotion, has a root README, and uses HTTPS if supported.
- Exactly the eight repositories in Section 4.2 are archived; no repository is deleted.
- No private repository is touched.
- Interim pins contain only repaired, reviewable work; final pins are changed only when GroundedVN and DemandCast have real evidence.
- Both checkpoint tags resolve to the reviewed pre-cleanup states.
- All remote changes are verified from a logged-out view.
- No history rewrite, force push, broad staging, private face publication, or unsupported metric occurs.
