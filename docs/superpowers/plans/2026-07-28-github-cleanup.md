# GitHub Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn `Therockycloud` into a focused, honest AI-engineering internship profile while preserving recoverability, attribution, private biometric data, and normal Git history.

**Architecture:** Execute a serial, fail-closed cleanup. Capture rollback evidence first, create immutable checkpoints for the two supplied local repositories, repair each active repository on its own branch, create the profile only from verified claims, archive exactly the approved eight repositories one at a time, and set pins only when their readiness gates pass. A failed privacy, ownership, test, or content-rights gate blocks promotion without blocking safe independent work.

**Tech Stack:** Git 2.x, GitHub CLI 2.94+, GitHub REST/GraphQL APIs, Markdown, repository-native Python/JavaScript checks, Docker only where already supported, and local document rendering for DOCX review.

---

## Operating boundaries

- Normative specification:
  `/Users/konalyn/Documents/dev/mighty-raccoon-career-system/01_GITHUB_CLEANUP_IMPLEMENTATION_SPEC.md`.
- GitHub owner: `Therockycloud`.
- Keep active:
  `PDL302m_project`, `face-net`, `SVD-ail303m-g5project`, and `fpt-hub`.
- Archive exactly:
  `ADY201m`, `online-course-assignment`, `emotion-detector`,
  `expressBookReviews`, `xrwvm-fullstack_developer_capstone`,
  `cars-dealership-capstone`, `github-final-project`, and
  `github-final-project-backup-20260602-0903`.
- Create only one new repository: public profile repository
  `Therockycloud/Therockycloud`.
- Do not query, identify, edit, or mutate private repositories.
- Never run broad staging, history rewriting, force push, destructive reset,
  repository deletion, visibility changes, or repository renames.
- Never stage or publish
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/data/` or
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/Face Recognition Notebook.ipynb`.
- Leave `PDL302m_project` under its existing name.
- Stop on the first state mismatch instead of adapting a write command to an
  unexpected target.

## File and repository map

### Career-system control repository

- Modify:
  `/Users/konalyn/Documents/dev/mighty-raccoon-career-system/docs/superpowers/plans/2026-07-28-github-cleanup.md`
  only to mark executed checkboxes and record immutable result IDs.
- Create after execution:
  `/Users/konalyn/Documents/dev/mighty-raccoon-career-system/reports/github-cleanup-2026-07-28.md`.

### Supplied local repositories

- `PDL302m_project`:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project`.
- `face-net` working copy:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition`.

### Execution-only clones

Create a fresh temporary parent with `mktemp -d` and clone these repositories
below it:

- `SVD-ail303m-g5project`
- `fpt-hub`
- `Therockycloud` only after the profile repository is created

Record the resolved temporary path in the private execution log. Do not place
temporary clones inside either supplied repository or the career-system
repository.

### Private rollback directory

Use exactly:

```text
/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28
```

This directory does not exist in the audited starting state; execution creates
it beneath the existing local DPL302m parent. Before creation, verify the parent
resolves to the local APFS data volume and is not a symlink. Apply directory
mode `0700` and file mode `0600`. Never stage, upload, release, or quote private
file contents from this directory.

---

### Task 1: Freeze the live target set and rollback state

**Files:**

- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/account-before.json`
- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/repos-before.json`
- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/pins-before.json`
- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/checksums.sha256`
- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt`
- Modify public repositories: none

- [ ] **Step 1: Verify GitHub CLI identity**

Run:

```bash
gh --version
gh auth status
```

Expected: GitHub CLI is available, the active account is exactly
`Therockycloud`, Git uses HTTPS, and the token has repository write access.
Never print the token.

- [ ] **Step 2: Verify the local rollback parent**

Run:

```bash
test -d '/Users/konalyn/Documents/FPT Materials/DPL302m'
test ! -L '/Users/konalyn/Documents/FPT Materials/DPL302m'
realpath '/Users/konalyn/Documents/FPT Materials/DPL302m'
df -h '/Users/konalyn/Documents/FPT Materials/DPL302m'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints'
```

Expected: the parent resolves to
`/System/Volumes/Data/Users/konalyn/Documents/FPT Materials/DPL302m`, the
filesystem is the local APFS data volume, and `private-checkpoints` is absent.
An existing or symlinked target stops execution for inspection.

- [ ] **Step 3: Create the private rollback directory**

Run:

```bash
set -euo pipefail
umask 077
mkdir -p '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28'
chmod 700 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/account-before.json'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/repos-before.json'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/pins-before.json'
```

Expected: the directory exists with mode `0700`; existing rollback files cause
the task to stop rather than overwrite evidence.

- [ ] **Step 4: Save exact public account, repository, and pin state**

Run:

```bash
gh api users/Therockycloud > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/account-before.json'
gh api users/Therockycloud/repos --paginate > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/repos-before.json'
gh api graphql -f query='query { user(login: "Therockycloud") { pinnedItems(first: 6, types: [REPOSITORY]) { totalCount nodes { ... on Repository { name url description isArchived } } } } }' > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/pins-before.json'
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/'*.json
shasum -a 256 \
  '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/account-before.json' \
  '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/repos-before.json' \
  '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/pins-before.json' \
  > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/checksums.sha256'
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/checksums.sha256'
shasum -a 256 -c '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/checksums.sha256'
```

Expected: all three checksum checks report `OK`.

- [ ] **Step 5: Assert the public disposition matrix**

Run:

```bash
gh api users/Therockycloud/repos --paginate --jq '.[] | [.name,.archived,.fork,.visibility] | @tsv'
gh api graphql -f query='query { user(login: "Therockycloud") { pinnedItems(first: 6, types: [REPOSITORY]) { totalCount nodes { ... on Repository { name url description isArchived } } } } }'
```

Expected:

- exactly 12 public repositories;
- exactly the 12 names in the operating boundaries;
- all 12 have `archived=false`;
- `expressBookReviews` and `github-final-project` alone have `fork=true`;
- zero pinned repositories;
- `Therockycloud/Therockycloud` is absent.

Stop if any assertion differs.

- [ ] **Step 6: Commit nothing**

Expected: Task 1 performs no GitHub mutation and no Git commit.

- [ ] **Step 7: Create and record the temporary clone parent**

Run:

```bash
set -euo pipefail
cleanup_tmp="$(mktemp -d)"
chmod 700 "$cleanup_tmp"
printf '%s\n' "$cleanup_tmp" > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt'
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt'
test -d "$(cat '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt')"
```

Expected: the recorded path names a new mode-`0700` temporary directory.

---

### Task 2: Create the private PDL working-tree snapshot

**Files:**

- Read:
  the exact ten modified PDL paths listed below
- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar`
- Create privately:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar.sha256`
- Modify Git/GitHub: none

- [ ] **Step 1: Fetch and assert the exact PDL state**

Run:

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

Expected:

- the single fetch and push URL is
  `https://github.com/Therockycloud/PDL302m_project.git`;
- `HEAD` is `c990baf296d4b84138b27f8c727f79868e7cabaf`;
- ahead/behind is `0 0`;
- branch is `main`;
- no matching checkpoint tag or cleanup branch exists;
- status contains exactly the ten modified paths in Step 2.

- [ ] **Step 2: Assert the exact ten-path diff**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --name-only
```

Expected paths:

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

Expected: `diff --check` has no output and no path outside the list appears.

- [ ] **Step 3: Create the byte-for-byte private TAR**

Run:

```bash
set -euo pipefail
umask 077
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar'
test ! -e '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar.sha256'
tar -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' \
  -cf '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar' -- \
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
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar'
shasum -a 256 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar' \
  > '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar.sha256'
chmod 600 '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar.sha256'
tar -tf '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar'
shasum -a 256 -c '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/PDL302m_project-pre-redaction.tar.sha256'
```

Expected: the TAR lists exactly ten paths and the checksum reports `OK`.

- [ ] **Step 4: Validate the four DOCX ZIP containers**

Run:

```bash
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/documents/Bang_Dong_Gop_Du_An.docx'
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/documents/Report_4_Final_Report.docx'
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/release/Bang_Dong_Gop_Du_An.docx'
unzip -t '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/release/Report_4_Final_Report.docx'
```

Expected: all four commands exit `0`.

---

### Task 3: Redact and checkpoint PDL documentation

**Files:**

- Modify only when redaction is needed:
  the ten PDL paths in Task 2
- Commit:
  the same exact ten paths
- Create:
  annotated tag `pre-portfolio-cleanup-2026-07-28`
- Create:
  branch `chore/portfolio-cleanup`

- [ ] **Step 1: Inspect current Markdown and DOCX text for student IDs**

Search Markdown for student-ID-like values without printing full identifiers:

```bash
rg -n --pcre2 '(?<![0-9])[A-Z]{0,3}[0-9]{6,10}(?![0-9])' \
  '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/README.md' \
  '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/reports/documents/'*.md
```

Extract DOCX text through the approved document tooling into a private
temporary directory and report only file name, page/location, and redaction
count. Do not echo full student IDs into commentary or public logs.

Expected: every unnecessary student ID is identified before editing.

- [ ] **Step 2: Redact identifiers while preserving attribution**

Keep team-member names only where needed for honest ownership attribution.
Remove student IDs from Markdown and regenerate affected DOCX files from their
reviewed source or by exact document editing. Do not change contribution
percentages, names, measured results, or project ownership.

Expected: the technical meaning and team contribution table remain intact.

- [ ] **Step 3: Render and inspect every changed DOCX**

Render the four DOCX files with the workspace document tooling. Inspect every
page for headings, tables, links, Vietnamese text, page breaks, attribution,
and identifier removal. Compare each release copy with the corresponding
documents copy by visible content.

Expected: no visible student ID, broken table, missing attribution, or
unexplained content divergence.

- [ ] **Step 4: Run the final privacy and diff checks**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --name-only
```

Repeat the identifier scan against Markdown and extracted DOCX text.

Expected: exactly ten changed paths and zero unnecessary student IDs in the
working copies.

- [ ] **Step 5: Stage exactly ten reviewed paths**

Use the exact named `git add --` command in Section 5.1 of the normative
specification.

Expected:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --cached --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --cached --name-only
```

prints no whitespace error and exactly the ten approved paths.

- [ ] **Step 6: Create and push the honest checkpoint**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' commit -m 'docs: checkpoint reports before portfolio cleanup'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' push origin main
```

Verify:

```bash
test "$(git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' rev-parse HEAD)" = \
  "$(git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' ls-remote origin refs/heads/main | cut -f1)"
```

Expected: the local and remote `main` SHAs are identical.

- [ ] **Step 7: Tag the checkpoint and create the cleanup branch**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' tag -a 'pre-portfolio-cleanup-2026-07-28' -m 'Checkpoint before GitHub portfolio cleanup'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' push origin 'refs/tags/pre-portfolio-cleanup-2026-07-28'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' switch -c 'chore/portfolio-cleanup'
```

Expected: the remote tag and cleanup branch base both resolve to the pushed
checkpoint.

---

### Task 4: Checkpoint and privacy-guard FaceNet

**Files:**

- Modify:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/.gitignore`
- Never stage:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/data/`
- Never stage:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/Face Recognition Notebook.ipynb`
- Create:
  annotated tag `pre-portfolio-cleanup-2026-07-28`
- Create:
  branch `chore/portfolio-cleanup`

- [ ] **Step 1: Fetch and assert the exact FaceNet state**

Run:

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
find '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/data' -type f -name '*.png' | wc -l
```

Expected:

- the single fetch and push target is `https://github.com/Therockycloud/face-net`;
- `HEAD` is `9bccee343397395cb5bb3658bf3de8c541f8c070`;
- ahead/behind is `0 0`;
- `data/` and `Face Recognition Notebook.ipynb` are untracked and absent from
  `git ls-files`;
- `data/` contains exactly 20 PNG files;
- no checkpoint tag or cleanup branch exists.

- [ ] **Step 2: Tag the already-pushed clean tracked state**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' tag -a 'pre-portfolio-cleanup-2026-07-28' -m 'Checkpoint before GitHub portfolio cleanup'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' push origin 'refs/tags/pre-portfolio-cleanup-2026-07-28'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' switch -c 'chore/portfolio-cleanup'
```

Expected: no empty commit is created.

- [ ] **Step 3: Add exact privacy ignore rules**

Append only these rules when equivalent rules are absent:

```gitignore
# Local biometric samples and output-bearing research notebook
/data/
/Face Recognition Notebook.ipynb
```

Do not ignore every notebook globally.

- [ ] **Step 4: Verify ignored private artifacts**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' check-ignore -v -- 'data' 'Face Recognition Notebook.ipynb'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' status --short
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' ls-files -- 'data' 'Face Recognition Notebook.ipynb'
```

Expected: both private paths match `.gitignore`, `.gitignore` is the only
working-tree change, and `ls-files` prints nothing.

- [ ] **Step 5: Commit only `.gitignore`**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' add -- '.gitignore'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' diff --cached --check
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' diff --cached --name-only
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' commit -m 'chore: keep biometric demo data out of Git'
```

Expected: `.gitignore` is the sole committed path.

---

### Task 5: Repair PDL presentation and verify existing evidence

**Files:**

- Modify:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/README.md`
- Modify supporting evidence only if an existing README link or reproduction
  command is objectively broken
- Commit on:
  `chore/portfolio-cleanup`

- [ ] **Step 1: Audit the checkpoint README**

Verify it contains:

- DPL302m/FPT University course context;
- explicit team-project label;
- Phạm Hoàng Hải's documented role and approximately 34% contribution;
- architecture and component boundaries;
- supported benchmark numbers with artifact links;
- limitations and privacy notes;
- local/Docker reproduction commands;
- no student IDs or false solo ownership.

- [ ] **Step 2: Add only missing presentation sections**

Keep the repository name unchanged. Use this opening when the equivalent
meaning is absent:

```markdown
# PDL302m Smart Parking Security System

> DPL302m course team project at FPT University. The repository name is retained
> for course traceability. Phạm Hoàng Hải's documented contribution focused on
> system integration, security evaluation, UI, and final synthesis
> (approximately 34%); the complete system is team work.
```

Every benchmark claim must link to an existing artifact under
`docs/benchmarks/`.

- [ ] **Step 3: Run repository-native checks**

Inspect the repository's documented commands first. At minimum run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' diff --check
docker compose -f '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project/docker-compose.yml' config
```

Run the documented test command from a clean dependency environment when it is
available. Record every command and exit status; do not invent a test pass.

- [ ] **Step 4: Commit and push the cleanup branch**

Stage only named modified paths. Use:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' commit -m 'docs: clarify project ownership and evidence'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' push -u origin chore/portfolio-cleanup
```

If no presentation change is needed, do not create an empty commit; record that
the checkpoint already satisfies the gate.

- [ ] **Step 5: Review and merge through normal history**

Inspect the complete branch diff against `main`. Merge through a normal
fast-forward or reviewed PR; never rebase or force-push published history.
Verify remote `main` contains the cleanup commit before updating metadata.

- [ ] **Step 6: Apply verified GitHub metadata**

Run:

```bash
gh repo edit Therockycloud/PDL302m_project \
  --description 'Team-built smart parking security system with CV verification, APIs, tests, and deployment tooling.' \
  --add-topic computer-vision \
  --add-topic fastapi \
  --add-topic streamlit \
  --add-topic docker \
  --add-topic ocr \
  --add-topic mlops \
  --add-topic ai-engineering
```

Verify the exact description and complete topic set through the REST API.

---

### Task 6: Repair FaceNet documentation without publishing private data

**Files:**

- Modify:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/README.md`
- Modify when needed:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/test_face_engine.py`
- Create when evidence can be generated from synthetic/public inputs:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/docs/evaluation.md`
- Create:
  `/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition/docs/privacy.md`
- Never stage:
  `data/` or `Face Recognition Notebook.ipynb`

- [ ] **Step 1: Audit ownership, README claims, and license presentation**

Inspect Git history, README, imports, tests, and repository metadata. Remove the
MIT badge and any claim of a repository license unless a verified license file
and ownership basis already exist. Do not add a new license without separate
approval.

- [ ] **Step 2: Write a privacy-first README**

The README must state:

- local-first FaceNet/MTCNN application;
- source and lifecycle of embeddings;
- threshold and distance are not calibrated confidence;
- real enrollment images remain local and are excluded from Git;
- current public evaluation limits;
- exact local/Docker run and test commands;
- ownership/contribution only when Git history supports it.

- [ ] **Step 3: Add deterministic safe tests**

Tests may use generated arrays, mocks, or appropriately licensed public fixture
inputs. They must not copy, transform, hash into Git, or otherwise derive from
the 20 private face images.

Run:

```bash
cd '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition'
python -m pytest -q
docker build -t face-net:portfolio-check .
git status --short
git ls-files -- 'data' 'Face Recognition Notebook.ipynb'
```

Expected: tests and build outcomes are recorded; private paths remain untracked
and ignored.

- [ ] **Step 4: Decide the FaceNet readiness gate honestly**

Pass only when:

- ownership is supported;
- no private biometric artifact is tracked or copied;
- public/synthetic evaluation is reproducible;
- README has no false accuracy/confidence or license claim;
- tests pass.

If the evaluation is incomplete, keep the repository active but mark it
unready for profile selection and pinning.

- [ ] **Step 5: Commit and push the branch**

Stage only the named reviewed files and use focused commits:

```bash
git commit -m 'docs: document FaceNet privacy and evaluation limits'
git push -u origin chore/portfolio-cleanup
```

Merge through normal history only after reviewing the complete diff.

- [ ] **Step 6: Apply metadata only after documentation repair**

Run:

```bash
gh repo edit Therockycloud/face-net \
  --description 'Local-first FaceNet recognition dashboard with privacy-aware evaluation and reproducible tests.' \
  --add-topic face-recognition \
  --add-topic facenet \
  --add-topic mtcnn \
  --add-topic streamlit \
  --add-topic docker \
  --add-topic computer-vision \
  --add-topic jupyter-notebook
```

Leave the homepage blank. Verify description and topics through the REST API.

---

### Task 7: Repair the recommender repository in a fresh clone

**Files:**

- Clone:
  `https://github.com/Therockycloud/SVD-ail303m-g5project.git`
- Modify:
  `README.md`
- Modify only if required for documented reproduction:
  `pipeline.md`, `.github/workflows/python-app.yml`, or `requirements.txt`
- Never rename the repository during this workstream

- [ ] **Step 1: Clone and branch**

Run:

```bash
cleanup_tmp="$(cat '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt')"
git clone 'https://github.com/Therockycloud/SVD-ail303m-g5project.git' "$cleanup_tmp/SVD-ail303m-g5project"
git -C "$cleanup_tmp/SVD-ail303m-g5project" switch -c chore/portfolio-cleanup
```

Expected: clean branch from remote `main`.

- [ ] **Step 2: Verify the implementation name**

Inspect `pipeline.py`, notebook names, and `notebooks/pipeline_metrics.json`.
The implemented factorization is NMF; the README must not describe the model as
SVD merely because the repository name contains `SVD`.

- [ ] **Step 3: Repair the README**

State explicitly:

- AIL303m/FPT University team project;
- the repository name is retained for course traceability;
- implemented model is NMF collaborative filtering;
- Phạm Hoàng Hải's documented role is EDA, visualization, and report writing;
- team metrics are not claimed as individual model ownership;
- dataset is MovieLens and retains its own terms;
- exact pipeline and test/reproduction commands;
- limitations of pointwise and ranking metrics.

- [ ] **Step 4: Reproduce the pipeline**

Run the repository-documented environment setup and:

```bash
cleanup_tmp="$(cat '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt')"
cd "$cleanup_tmp/SVD-ail303m-g5project"
python -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python pipeline.py
```

Compare regenerated metrics with
`notebooks/pipeline_metrics.json`. Do not edit metric artifacts unless the
exact command reproducibly regenerates them and the reason is documented.

- [ ] **Step 5: Commit, push, review, and merge**

Stage only named files. Commit:

```bash
git commit -m 'docs: clarify NMF implementation and team contribution'
git push -u origin chore/portfolio-cleanup
```

Merge through normal history after review.

- [ ] **Step 6: Apply verified metadata**

Run:

```bash
gh repo edit Therockycloud/SVD-ail303m-g5project \
  --description 'Team MovieLens recommender study with EDA, baseline comparison, NMF, and ranking evaluation.' \
  --add-topic recommender-system \
  --add-topic movielens \
  --add-topic nmf \
  --add-topic data-analysis \
  --add-topic machine-learning \
  --add-topic jupyter-notebook
```

Verify the exact description and topics.

---

### Task 8: Audit and conditionally repair `fpt-hub`

**Files:**

- Clone:
  `https://github.com/Therockycloud/fpt-hub.git`
- Create only after content/security review:
  `README.md`
- Modify only after review:
  `.gitignore`, `.github/workflows/pages.yml`, `site/js/auth.js`, and broken-link
  sources
- Remove through normal Git only after the exact files are confirmed:
  tracked `.DS_Store` files

- [ ] **Step 1: Clone and create the audit branch**

Run:

```bash
cleanup_tmp="$(cat '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt')"
git clone 'https://github.com/Therockycloud/fpt-hub.git' "$cleanup_tmp/fpt-hub"
git -C "$cleanup_tmp/fpt-hub" switch -c chore/portfolio-cleanup
```

- [ ] **Step 2: Inventory sensitive and licensed content**

Inspect every tracked image/document category, login screenshot, account
identifier, endpoint, and course-material source. Record only path/category and
decision; do not reproduce credentials or account data in public notes.

Search:

```bash
cleanup_tmp="$(cat '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt')"
rg -n --hidden --glob '!*.png' --glob '!*.jpg' --glob '!*.pdf' --glob '!*.pptx' --glob '!*.doc*' \
  '(password|passwd|secret|token|api[_-]?key|client[_-]?secret|Authorization|@fpt\\.edu\\.vn|student.?id)' \
  "$cleanup_tmp/fpt-hub"
```

Inspect `site/js/auth.js` separately. Client-side checks must not be described
as secure authorization.

- [ ] **Step 3: Decide the content-rights and privacy gate**

Pass only when every promoted screenshot/document has an established
publication basis and no student/account identifier or secret is exposed.

If the gate fails:

- keep `fpt-hub` active but unpinned;
- do not add promotional metadata;
- do not disable Pages or remove public files without new user approval;
- report the minimum affected path categories privately;
- continue independent cleanup tasks.

- [ ] **Step 4: Apply safe repository hygiene only when the gate permits**

Add:

```gitignore
.DS_Store
**/.DS_Store
```

Remove tracked `.DS_Store` files by exact path with `git rm -- <paths>`.
Create a root README that states users, architecture, contributors, local run,
Pages deployment, content provenance, privacy limits, and the fact that
client-side login UI is not server-side access control.

- [ ] **Step 5: Verify the static site**

Run the existing Pages build path, a local static server smoke test, and an
internal-link checker. Verify the Pages workflow does not expose secrets.

- [ ] **Step 6: Commit and push safe changes**

Stage exact paths only. Use focused commits:

```bash
git commit -m 'chore: remove tracked macOS metadata'
git commit -m 'docs: document FPT Hub provenance and security limits'
git push -u origin chore/portfolio-cleanup
```

Skip an empty concern commit. Merge only reviewed changes.

- [ ] **Step 7: Apply metadata only if every promotion gate passes**

Run:

```bash
gh repo edit Therockycloud/fpt-hub \
  --description 'Student-built guide hub for FPT University systems and campus resources.' \
  --homepage 'https://therockycloud.github.io/fpt-hub/' \
  --add-topic fpt-university \
  --add-topic student-resource \
  --add-topic github-pages \
  --add-topic html \
  --add-topic css \
  --add-topic javascript
```

Enable HTTPS only if the Pages API reports support and the production site
works over HTTPS. Do not weaken a failing gate to obtain this metadata.

---

### Task 9: Create the profile repository from verified claims

**Files:**

- Create public repository:
  `Therockycloud/Therockycloud`
- Create:
  `README.md`

- [ ] **Step 1: Reconfirm absence and create the profile repository**

Run:

```bash
gh api repos/Therockycloud/Therockycloud
```

Expected before creation: HTTP 404. Any existing repository stops this step for
re-audit.

Create:

```bash
gh repo create Therockycloud/Therockycloud --public --description 'GitHub profile for Phạm Hoàng Hải'
```

Verify owner, name, visibility, and default branch before cloning.

- [ ] **Step 2: Build README from readiness results**

Always include:

```markdown
# Phạm Hoàng Hải — Mighty Raccoon

AI Engineer intern candidate focused on Applied AI, rigorous evaluation, and production-minded ML systems.

I build systems that connect models to usable software: reproducible experiments, APIs, tests, containers, observability, and honest failure analysis. Mình là Phạm Hoàng Hải, hiện xây dựng nền tảng để ứng tuyển các vị trí AI/ML engineering tại Việt Nam và quốc tế.

## Selected work

- **[PDL302m Smart Parking Verification](https://github.com/Therockycloud/PDL302m_project)** — A DPL302m team project combining YOLOv8, PaddleOCR, MobileNetV3, FastAPI, Streamlit, Docker, tests, and measured CPU evaluation. My documented contribution focused on integration, security evaluation, UI, and final synthesis (approximately 34%).

## Building now

- **GroundedVN** — A local-first bilingual RAG system planned around hybrid retrieval, reranking, citations, versioned evaluation, security tests, and operational gates.
- **DemandCast** — A leakage-safe retail sales forecasting system planned around backtesting, probabilistic forecasts, model lineage, monitoring, and explicitly synthetic human-reviewed inventory scenarios.

## Working principles

- Measure before claiming.
- Separate a deployed path from an experiment.
- Make failure modes, data limits, cost, and rollback visible.
- Keep human approval around consequential AI decisions.
```

Append a FaceNet selected-work bullet only if Task 6 passed:

```markdown
- **[Face Recognition Dashboard](https://github.com/Therockycloud/face-net)** — A local-first FaceNet/MTCNN application hardened around privacy, threshold interpretation, and reproducible public/synthetic evaluation.
```

Append the recommender bullet only if Task 7 passed:

```markdown
- **[Movie Recommendation System](https://github.com/Therockycloud/SVD-ail303m-g5project)** — An AIL303m team project with MovieLens EDA, a global-mean baseline, NMF, and pointwise/ranking metrics. My documented role was EDA, visualization, and report writing.
```

Append the FPT Hub bullet only if Task 8 passed:

```markdown
- **[FPT Hub](https://github.com/Therockycloud/fpt-hub)** — A student resource web project retained as product/frontend work after privacy, content-rights, and deployment review.
```

- [ ] **Step 3: Commit and push the profile README**

Clone the repository into the temporary parent, create `README.md`, then run:

```bash
cleanup_tmp="$(cat '/Users/konalyn/Documents/FPT Materials/DPL302m/private-checkpoints/github-cleanup-2026-07-28/cleanup-temp-path.txt')"
git clone 'https://github.com/Therockycloud/Therockycloud.git' "$cleanup_tmp/Therockycloud"
cd "$cleanup_tmp/Therockycloud"
git switch -c main
git add -- README.md
git diff --cached --check
git commit -m 'docs: add evidence-led GitHub profile'
git push origin main
```

Expected: the sole content file is the reviewed README.

- [ ] **Step 4: Update only approved account fields**

Run:

```bash
gh api --method PATCH user \
  -f name='Phạm Hoàng Hải' \
  -f bio='AI Engineer Intern · Building evaluated, production-minded AI systems'
```

Do not change company, location, website, hireable, or avatar.

- [ ] **Step 5: Verify the public profile**

Check `https://github.com/Therockycloud` in a logged-out browser. Verify exact
name/bio, README rendering, link destinations, mobile width, and absence of
student IDs, private contact data, biometric images, or unsupported claims.

---

### Task 10: Archive exactly eight approved repositories

**Files:**

- GitHub repository setting `archived` for the exact eight approved public
  repositories
- Local files: none

- [ ] **Step 1: Resolve every target before mutation**

Run:

```bash
gh api repos/Therockycloud/ADY201m --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/online-course-assignment --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/emotion-detector --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/expressBookReviews --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/xrwvm-fullstack_developer_capstone --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/cars-dealership-capstone --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/github-final-project --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
gh api repos/Therockycloud/github-final-project-backup-20260602-0903 --jq '{owner:.owner.login,name,visibility,fork,default_branch,archived}'
```

Expected: owner `Therockycloud`, visibility `public`, and `archived=false`.
Stop before mutating any target with a mismatched field.

- [ ] **Step 2: Archive and verify one repository at a time**

Run one pair at a time and stop on the first failure:

```bash
gh repo archive Therockycloud/ADY201m --yes
gh api repos/Therockycloud/ADY201m --jq '{name,archived,visibility}'

gh repo archive Therockycloud/online-course-assignment --yes
gh api repos/Therockycloud/online-course-assignment --jq '{name,archived,visibility}'

gh repo archive Therockycloud/emotion-detector --yes
gh api repos/Therockycloud/emotion-detector --jq '{name,archived,visibility}'

gh repo archive Therockycloud/expressBookReviews --yes
gh api repos/Therockycloud/expressBookReviews --jq '{name,archived,visibility}'

gh repo archive Therockycloud/xrwvm-fullstack_developer_capstone --yes
gh api repos/Therockycloud/xrwvm-fullstack_developer_capstone --jq '{name,archived,visibility}'

gh repo archive Therockycloud/cars-dealership-capstone --yes
gh api repos/Therockycloud/cars-dealership-capstone --jq '{name,archived,visibility}'

gh repo archive Therockycloud/github-final-project --yes
gh api repos/Therockycloud/github-final-project --jq '{name,archived,visibility}'

gh repo archive Therockycloud/github-final-project-backup-20260602-0903 --yes
gh api repos/Therockycloud/github-final-project-backup-20260602-0903 --jq '{name,archived,visibility}'
```

Expected immediately after each command: the exact name, `archived=true`, and
`visibility=public`. Stop the sequence on the first failure.

- [ ] **Step 3: Verify active repositories remain active**

Run:

```bash
for repo in PDL302m_project face-net SVD-ail303m-g5project fpt-hub; do
  gh api "repos/Therockycloud/$repo" --jq '[.name,.archived,.visibility] | @tsv'
done
```

Expected: all four print `false` and `public`.

---

### Task 11: Set only eligible interim pins

**Files:**

- GitHub pinned-items setting only

- [ ] **Step 1: Evaluate readiness**

Eligible interim set requires both:

- PDL Task 5 passed;
- FaceNet Task 6 passed, including reproducible public/synthetic evaluation.

If either fails, keep zero pins and record the blocker. Do not substitute the
recommender or FPT Hub to fill a slot.

- [ ] **Step 2: Pin the exact two repositories when eligible**

Use the GitHub pinned-item mutation supported by the authenticated account or
the logged-in GitHub profile UI:

1. `PDL302m_project`
2. `face-net`

Do not pin archived repositories.

- [ ] **Step 3: Verify pin order logged out**

Query GraphQL and inspect the public profile. Expected order is exactly PDL
then FaceNet. If no pins were eligible, expected count remains zero.

---

### Task 12: Produce the final verification report

**Files:**

- Create:
  `/Users/konalyn/Documents/dev/mighty-raccoon-career-system/reports/github-cleanup-2026-07-28.md`
- Modify:
  `/Users/konalyn/Documents/dev/mighty-raccoon-career-system/docs/superpowers/plans/2026-07-28-github-cleanup.md`

- [ ] **Step 1: Re-query final public state**

Run:

```bash
gh api users/Therockycloud --jq '{login,name,bio,blog,location,public_repos}'
gh api users/Therockycloud/repos --paginate --jq '.[] | [.name,.archived,.visibility,.description] | @tsv'
gh api graphql -f query='query { user(login: "Therockycloud") { pinnedItems(first: 6, types: [REPOSITORY]) { totalCount nodes { ... on Repository { name url description isArchived } } } } }'
```

- [ ] **Step 2: Verify checkpoint refs**

Run:

```bash
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/PDL302m_project' ls-remote origin 'refs/tags/pre-portfolio-cleanup-2026-07-28'
git -C '/Users/konalyn/Documents/FPT Materials/DPL302m/FaceRecognition' ls-remote origin 'refs/tags/pre-portfolio-cleanup-2026-07-28'
```

Expected: both tags resolve to their reviewed checkpoint SHAs.

- [ ] **Step 3: Verify privacy and history boundaries**

Confirm:

- PDL public working content has no unnecessary student IDs;
- FaceNet `data/` and the original notebook are absent from all tracked refs,
  releases, issues, and pull requests;
- no public page has a private email, phone, student account, secret, or
  biometric image;
- no private repository was queried or changed.

- [ ] **Step 4: Write the report with observed facts only**

The report must contain:

- before/after account summary;
- exact checkpoint commit/tag SHAs;
- active/archive matrix;
- descriptions/topics actually applied;
- tests/builds actually run and their exit results;
- readiness and pin decision for each active repository;
- blockers and deferred work;
- rollback commands;
- explicit confirmation of no deletion, rename, visibility change,
  force-push, history rewrite, or broad staging.

Do not include private identifiers, raw scan matches, tokens, or biometric
paths beyond the already approved generic names.

- [ ] **Step 5: Validate and commit the career-system report**

Run:

```bash
git -C '/Users/konalyn/Documents/dev/mighty-raccoon-career-system' add -- \
  'docs/superpowers/plans/2026-07-28-github-cleanup.md' \
  'reports/github-cleanup-2026-07-28.md'
git -C '/Users/konalyn/Documents/dev/mighty-raccoon-career-system' diff --cached --check
git -C '/Users/konalyn/Documents/dev/mighty-raccoon-career-system' commit -m 'docs: record verified GitHub cleanup'
```

No career-system push is required unless the user separately supplies and
approves a remote.

---

## Rollback procedure

### Repository content

- Revert cleanup commits through new additive commits.
- Use each `pre-portfolio-cleanup-2026-07-28` tag as the immutable tracked-state
  reference.
- Never reset a shared branch to a tag and never move/delete the tag.

### Archive state

For an approved archived target that must be restored, run only its exact
matching pair:

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
Immediately verify the restored target with its exact
`gh api repos/Therockycloud/...` query listed for that same target in Task 10.

### Account/profile state

- Restore name, bio, and metadata from `account-before.json`.
- Restore the prior pin set from `pins-before.json`; the audited set is empty.
- Remove profile rendering through an additive commit deleting `README.md`.
- Do not delete the new profile repository. Archiving it requires separate
  approval because it is not one of the eight approved archive targets.

## Plan self-review

- Spec coverage: all normative Tasks 1–8, checkpoint rules, active repository
  gates, profile/metadata, exact archive set, conditional pins, verification,
  and rollback are mapped to Tasks 1–12.
- Placeholder scan: every destructive target and every persistent path is
  written explicitly; no deferred marker or unspecified implementation step
  remains.
- Type/state consistency: checkpoint tag, cleanup branch, archive targets,
  account fields, readiness rules, report paths, and private rollback paths are
  identical across creation, verification, and rollback steps.
