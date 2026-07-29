# Mighty Raccoon Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy an English-first, evidence-led static portfolio for Phạm Hoàng Hải at `portfolio/`.

**Architecture:** A Next.js App Router project statically exports local MDX case studies and writing. Build-time Zod validation binds quantified public claims to immutable evidence packets, excludes drafts, emits RSS/sitemap/OG assets, and blocks private or unsupported content. Sites hosts only a saved, verified source version.

**Tech Stack:** Next.js 16.2.12, React 19.2.8, TypeScript 7.0.2, MDX, Zod 4.4.3, YAML, Vitest, Playwright, axe-core, Lighthouse CI, Sites.

---

## Operating decisions

- Source root:
  `/Users/konalyn/Documents/dev/mighty-raccoon-career-system/portfolio`.
- Source stays in the existing career-system Git repository; no new GitHub
  repository is created by this plan.
- LinkedIn, email, Hugging Face, and résumé controls are omitted because no
  verified input was supplied.
- Smart Parking is the only featured, published case study at launch.
- FaceNet is retained as a draft and must not appear in `out/`.
- GroundedVN + DemandCast publish only as an unfeatured, result-free
  “currently building” overview.
- System font packages are vendored through npm; there is no runtime font call.
- No user-supplied image is required. The initial visual system uses typography,
  diagrams, rules, and generated OG graphics.

## Repository map

```text
portfolio/
├── app/                         # static routes and route metadata
├── components/                  # layout, project, content and diagram UI
├── content/                     # public/draft MDX and evidence packets
├── content-ops/drafts/          # ignored local generation output
├── docs/contracts/              # vendored career-system contract + manifest
├── lib/                         # schemas, loaders, evidence and metadata
├── public/                      # generated OG asset and static files
├── scripts/                     # validation, OG, draft and link tooling
├── tests/                       # unit, accessibility and e2e
├── next.config.ts
├── package.json
└── .openai/hosting.json         # created/reused only by Sites
```

### Task 1: Scaffold the static application

**Files:**
- Create: `portfolio/package.json`
- Create: `portfolio/next.config.ts`
- Create: `portfolio/tsconfig.json`
- Create: `portfolio/eslint.config.mjs`
- Create: `portfolio/vitest.config.ts`
- Create: `portfolio/playwright.config.ts`
- Create: `portfolio/.gitignore`

- [ ] **Step 1: Scaffold with pinned Next.js**

Run from the career-system root:

```bash
npx create-next-app@16.2.12 portfolio \
  --typescript --eslint --app --use-npm --turbopack \
  --import-alias '@/*' --yes
```

Expected: `portfolio/package.json` declares Next 16.2.12 and React 19.2.8.

- [ ] **Step 2: Install content, font, validation and QA dependencies**

```bash
cd portfolio
npm install \
  @fontsource-variable/inter \
  @fontsource-variable/source-serif-4 \
  @fontsource-variable/ibm-plex-mono \
  gray-matter js-yaml next-mdx-remote zod
npm install -D \
  @axe-core/playwright @lhci/cli @playwright/test \
  @testing-library/jest-dom @testing-library/react @types/js-yaml \
  jsdom sharp tsx vitest
```

Expected: `package-lock.json` exists and the install exits zero.

- [ ] **Step 3: Configure static export and scripts**

Set `next.config.ts` to:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
```

Add scripts:

```json
{
  "prebuild": "npm run contracts:verify && npm run content:validate && npm run og:generate",
  "build": "next build",
  "test": "vitest run",
  "test:e2e": "playwright test",
  "content:validate": "tsx scripts/content-validate.ts",
  "contracts:verify": "tsx scripts/verify-contract.ts",
  "og:generate": "tsx scripts/generate-og.ts",
  "links:check": "tsx scripts/check-links.ts",
  "content:new": "tsx scripts/content-new.ts",
  "linkedin:draft": "tsx scripts/linkedin-draft.ts"
}
```

- [ ] **Step 4: Ignore local-only outputs**

Append exact rules:

```gitignore
/content-ops/drafts/
/playwright-report/
/test-results/
/.lighthouseci/
```

- [ ] **Step 5: Verify baseline**

```bash
npm run lint
npm run build
```

Expected: both exit zero and `out/index.html` exists.

- [ ] **Step 6: Commit**

```bash
git add -- portfolio
git commit -m "chore: scaffold static portfolio"
```

### Task 2: Vendor the evidence contract and define schemas

**Files:**
- Create: `portfolio/docs/contracts/career-system/EVIDENCE_PACKET_SPEC.md`
- Create: `portfolio/docs/contracts/career-system/manifest.json`
- Create: `portfolio/lib/content/schema.ts`
- Create: `portfolio/lib/evidence/schema.ts`
- Create: `portfolio/tests/unit/schema.test.ts`
- Create: `portfolio/scripts/verify-contract.ts`

- [ ] **Step 1: Copy the approved contract**

Copy
`shared/EVIDENCE_PACKET_SPEC.md` byte-for-byte into the portfolio contract
directory. Record this SHA-256 in `manifest.json`:

```json
{
  "schemaVersion": 1,
  "source": "../shared/EVIDENCE_PACKET_SPEC.md",
  "sha256": "bf0b3782d1bf676c44df28d03e9a0a11ecc9c9311eaf423d513fcded8348b83c"
}
```

The manifest source is provenance text only; runtime verification hashes the
vendored file and never resolves the external local path.

- [ ] **Step 2: Write failing schema tests**

Test that:

```ts
expect(() => parseWorkFrontmatter(validWork)).not.toThrow();
expect(() => parseWorkFrontmatter({ ...validWork, unknown: true })).toThrow();
expect(() => parseWorkFrontmatter({ ...validWork, featured: true, repositoryUrl: undefined })).toThrow();
expect(() => parseArticleFrontmatter({ ...validArticle, status: "draft" })).not.toThrow();
expect(() => parseClaims({ schemaVersion: 1, claims: [{ ...claim, status: "rejected" }] })).not.toThrow();
```

- [ ] **Step 3: Run the tests and observe failure**

```bash
npx vitest run tests/unit/schema.test.ts
```

Expected: fail because schema modules do not exist.

- [ ] **Step 4: Implement strict Zod schemas**

`WorkFrontmatter` implements Section 8 exactly and uses
`.superRefine()` for:

- featured → HTTPS repository + evidence packet;
- building without evidence → unfeatured, no metrics, no completed/deployed wording;
- active/archived published → evidence packet required.

`ArticleFrontmatter`, `EvidencePacket`, and `ClaimLedger` reject unknown keys,
non-HTTPS external URLs, invalid dates, duplicate claim IDs, and mutable refs
such as `HEAD`, `main`, or `master`.

- [ ] **Step 5: Implement contract verification**

`verify-contract.ts` computes SHA-256 for the vendored file, loads the manifest,
and exits non-zero unless the recorded and actual hashes equal the approved
hash above.

- [ ] **Step 6: Verify and commit**

```bash
npm run contracts:verify
npx vitest run tests/unit/schema.test.ts
git add -- portfolio/docs/contracts portfolio/lib/content/schema.ts \
  portfolio/lib/evidence/schema.ts portfolio/tests/unit/schema.test.ts \
  portfolio/scripts/verify-contract.ts
git commit -m "feat: enforce portfolio content contracts"
```

### Task 3: Implement loaders, discovery, claims and draft exclusion

**Files:**
- Create: `portfolio/lib/content/discovery.ts`
- Create: `portfolio/lib/content/load.ts`
- Create: `portfolio/lib/evidence/load.ts`
- Create: `portfolio/lib/evidence/quantitative-lint.ts`
- Create: `portfolio/components/content/evidence-claim.tsx`
- Create: `portfolio/components/content/mdx-components.tsx`
- Create: `portfolio/tests/unit/content.test.ts`
- Create: `portfolio/tests/unit/evidence.test.tsx`

- [ ] **Step 1: Write failing loader tests**

Fixtures prove:

- duplicate slugs fail;
- drafts are omitted from public discovery;
- featured projects sort by `featuredOrder`;
- unknown/rejected/cross-packet claim IDs fail;
- planned claims render an “In progress” label;
- quantitative prose such as `86.3%` outside `EvidenceClaim` fails.

- [ ] **Step 2: Run tests and observe failure**

```bash
npx vitest run tests/unit/content.test.ts tests/unit/evidence.test.tsx
```

- [ ] **Step 3: Implement discovery and parsing**

Use `gray-matter`, `fs`, and `path`. `getPublishedWork()` and
`getPublishedArticles()` return validated metadata plus MDX body; they never
return drafts. Resolve every relative file below `portfolio/` and reject
symlinks or traversal.

- [ ] **Step 4: Implement evidence binding**

`EvidenceClaim` accepts only:

```ts
type EvidenceClaimProps = { claimId: string };
```

The loader binds a per-document claim map. The component renders canonical
claim wording, verification state, source artifact, and verification date.
There is no children prop.

- [ ] **Step 5: Implement quantitative lint**

Strip fenced/inline code and frontmatter, then fail on percentages, latency,
currency, metric comparison, or quantified ownership patterns outside
`<EvidenceClaim claimId="..." />`. Building overviews without packets cannot
use the component.

- [ ] **Step 6: Verify and commit**

```bash
npx vitest run tests/unit/content.test.ts tests/unit/evidence.test.tsx
git add -- portfolio/lib portfolio/components/content portfolio/tests/unit
git commit -m "feat: bind public prose to evidence claims"
```

### Task 4: Build the editorial design system and application shell

**Files:**
- Replace: `portfolio/app/globals.css`
- Replace: `portfolio/app/layout.tsx`
- Create: `portfolio/components/layout/site-header.tsx`
- Create: `portfolio/components/layout/site-footer.tsx`
- Create: `portfolio/components/layout/skip-link.tsx`
- Create: `portfolio/components/project/status-label.tsx`
- Create: `portfolio/components/diagrams/system-diagram.tsx`
- Create: `portfolio/tests/accessibility/shell.spec.ts`

- [ ] **Step 1: Define tokens**

Use:

```css
:root {
  --paper: #f3efe6;
  --paper-raised: #fbf8f1;
  --graphite: #1d2329;
  --muted: #5d6670;
  --rule: #c9c1b3;
  --cobalt: #174ea6;
  --cobalt-dark: #103b7d;
  --rust: #9a4426;
  --success: #24613b;
  --warning: #7a5310;
  --error: #8f2f2f;
  --display: "Source Serif 4 Variable", Georgia, serif;
  --sans: "Inter Variable", system-ui, sans-serif;
  --mono: "IBM Plex Mono Variable", ui-monospace, monospace;
}
```

Import font packages in `layout.tsx`, set a 12-column desktop grid, 70-character
reading measure, 44-pixel minimum interactive targets, visible 3-pixel focus,
and single-column 320-pixel layout.

- [ ] **Step 2: Implement semantic shell**

The layout contains skip link, `header`, `nav`, `main`, and `footer`.
Navigation contains Work, Writing, About. Résumé is absent. GitHub links to
`https://github.com/Therockycloud`; LinkedIn/email are absent.

Add restrictive static meta CSP:

```text
default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';
script-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none';
base-uri 'self'; form-action 'none'; frame-ancestors 'none'
```

- [ ] **Step 3: Implement diagrams with text alternatives**

`SystemDiagram` renders CSS/SVG only for reviewed static data and requires
`ariaLabel` plus a visible ordered text alternative.

- [ ] **Step 4: Add accessibility smoke**

Playwright + axe verifies landmarks, unique `h1`, skip link, no serious/critical
violations, visible keyboard focus, and 320-pixel no-horizontal-page overflow.

- [ ] **Step 5: Verify and commit**

```bash
npm run lint
npm run test
npx playwright test tests/accessibility/shell.spec.ts
git add -- portfolio/app portfolio/components portfolio/tests/accessibility
git commit -m "feat: add editorial portfolio shell"
```

### Task 5: Create the Smart Parking evidence packet

**Files:**
- Create: `portfolio/content/evidence/smart-parking/claims.yaml`
- Create: `portfolio/content/evidence/smart-parking/packet.yaml`
- Create: `portfolio/content/evidence/smart-parking/metrics/run-manifest.yaml`
- Create: `portfolio/content/evidence/smart-parking/notes/review.md`
- Create: `portfolio/tests/unit/smart-parking-packet.test.ts`

- [ ] **Step 1: Create canonical claims**

All sources use repository `Therockycloud/PDL302m_project` and immutable ref
`6910276d5260d387f042cdafb2e6aa87144811db`.

Required claim IDs and canonical wording:

```yaml
- id: smart-parking.contribution
  claim: "My documented contribution focused on system integration, security evaluation, UI, and final synthesis (approximately 34%); the complete system is team work."
  sourcePath: reports/documents/Bang_Dong_Gop_Du_An.md
- id: smart-parking.ocr
  claim: "PaddleOCR reached 81.2% exact match and 0.031 mean CER on 16 hand-labelled real CCTV plate crops."
  sourcePath: docs/benchmarks/ocr_benchmark.md
- id: smart-parking.color
  claim: "The deployed MobileNetV3-Small colour model reached 85.3% plain and 86.3% TTA accuracy on the held-out VCoR test split; CCTV domain shift remains unmeasured."
  sourcePath: docs/benchmarks/color_benchmark.md
- id: smart-parking.failure
  claim: "The experimental MobileNetV3-Small CTC-to-ONNX OCR path did not meet its replacement gate and was not deployed."
  sourcePath: reports/documents/Report_4_Final_Report.md
```

Every record has `status: verified`, `verifiedAt: 2026-07-28`, and notes
describing scope/limitations.

- [ ] **Step 2: Hash and packetize**

Compute SHA-256 for `claims.yaml` and `run-manifest.yaml`; record both in
`packet.yaml`. The run manifest records the source commit, benchmark paths,
cleanup verification date, no private inputs, and the exact reproduction or
inspection command from each source artifact.

- [ ] **Step 3: Test integrity**

The test recomputes packet artifact hashes, checks every source URL returns a
path under the immutable GitHub ref, and verifies no student ID, local absolute
path, email, or biometric filename occurs.

- [ ] **Step 4: Commit**

```bash
npx vitest run tests/unit/smart-parking-packet.test.ts
git add -- portfolio/content/evidence/smart-parking \
  portfolio/tests/unit/smart-parking-packet.test.ts
git commit -m "content: add verified smart parking evidence"
```

### Task 6: Author work and writing content

**Files:**
- Create: `portfolio/content/work/smart-parking.mdx`
- Create: `portfolio/content/work/currently-building.mdx`
- Create: `portfolio/content/work/face-net.mdx`
- Create: `portfolio/content/writing/evidence-before-claims.mdx`
- Create: `portfolio/tests/unit/public-content.test.ts`

- [ ] **Step 1: Write the Smart Parking case study**

Use the complete contract sections: Problem, My contribution, Architecture,
Evaluation, Failure analysis, Operations, Inspect. All quantified text uses the
four claim IDs above. Inspect links target immutable source paths where
possible and the current repository README for navigation.

- [ ] **Step 2: Write the building overview**

Set:

```yaml
status: building
publicationStatus: published
featured: false
repositoryUrl:
evidencePacket:
```

Discuss only intended questions for GroundedVN and DemandCast: grounded
retrieval/evaluation and leakage-safe forecasting/backtesting. Use no results,
dates, deployment claims, or capability-complete language.

- [ ] **Step 3: Write the FaceNet draft**

Set `publicationStatus: draft`, `featured: false`. Record that public
calibrated FAR/FRR evaluation and Docker verification are blockers. Do not use
or copy biometric images.

- [ ] **Step 4: Write the first article**

`evidence-before-claims.mdx` binds the Smart Parking packet and explains why the
deployed PaddleOCR path is separated from the rejected CTC experiment. It uses
`smart-parking.ocr` and `smart-parking.failure`.

- [ ] **Step 5: Verify exclusion and commit**

```bash
npx vitest run tests/unit/public-content.test.ts
npm run content:validate
git add -- portfolio/content/work portfolio/content/writing \
  portfolio/tests/unit/public-content.test.ts
git commit -m "content: publish evidence-led launch stories"
```

### Task 7: Implement required routes and SEO

**Files:**
- Replace: `portfolio/app/page.tsx`
- Create: `portfolio/app/work/page.tsx`
- Create: `portfolio/app/work/[slug]/page.tsx`
- Create: `portfolio/app/writing/page.tsx`
- Create: `portfolio/app/writing/[slug]/page.tsx`
- Create: `portfolio/app/about/page.tsx`
- Create: `portfolio/app/rss.xml/route.ts`
- Create: `portfolio/app/sitemap.ts`
- Create: `portfolio/app/not-found.tsx`
- Create: `portfolio/components/project/project-card.tsx`
- Create: `portfolio/components/content/article-card.tsx`
- Create: `portfolio/lib/metadata/structured-data.ts`
- Create: `portfolio/tests/e2e/navigation.spec.ts`

- [ ] **Step 1: Implement homepage order**

Identity → positioning → selected work → evidence principles → latest writing
→ about/contact summary → footer. Primary action links to `/work/`; no résumé
button renders.

- [ ] **Step 2: Implement static work/writing routes**

Dynamic pages export `generateStaticParams()` from published discovery only and
`dynamicParams = false`. Draft slugs return not-found and never produce HTML.

- [ ] **Step 3: Implement RSS, sitemap and 404**

RSS includes published writing only. Sitemap includes public static routes,
published work, and published articles. `not-found.tsx` exports as
`out/404.html`.

- [ ] **Step 4: Add accurate JSON-LD**

Homepage includes `Person` and `WebSite`; article pages include `Article`; case
studies include `CreativeWork`. Omit email, LinkedIn, employer, image, and
unsupported credentials.

- [ ] **Step 5: Verify routes and commit**

```bash
npm run build
npx playwright test tests/e2e/navigation.spec.ts
test -f out/index.html
test -f out/work/smart-parking/index.html
test -f out/writing/evidence-before-claims/index.html
test -f out/rss.xml
test -f out/sitemap.xml
test -f out/404.html
test ! -e out/work/face-net
git add -- portfolio/app portfolio/components portfolio/lib/metadata \
  portfolio/tests/e2e/navigation.spec.ts
git commit -m "feat: add static portfolio routes"
```

### Task 8: Add content operations

**Files:**
- Create: `portfolio/scripts/content-new.ts`
- Create: `portfolio/scripts/linkedin-draft.ts`
- Create: `portfolio/scripts/content-validate.ts`
- Create: `portfolio/tests/unit/content-ops.test.ts`

- [ ] **Step 1: Implement draft creation**

`content:new --kind article --slug <slug>` writes only to
`content-ops/drafts/<slug>/outline.md`, `questions.md`, and `claims.yaml`.
Reject invalid slugs and existing targets.

- [ ] **Step 2: Implement LinkedIn drafting**

`linkedin:draft --source <published-article-slug>` loads canonical article
metadata/claims and writes `content-ops/drafts/<slug>/linkedin.md` with:

- a `DRAFT — HUMAN REVIEW REQUIRED` header;
- source URL placeholder;
- canonical claims only;
- missing-evidence questions;
- no posting or scheduling code.

- [ ] **Step 3: Implement full validation**

`content-validate.ts` verifies contracts, schemas, duplicate slugs, draft
exclusion, evidence hashes, quantitative lint, URL policy, forbidden strings,
and absence of absolute paths.

- [ ] **Step 4: Test and commit**

```bash
npx vitest run tests/unit/content-ops.test.ts
npm run content:validate
git add -- portfolio/scripts portfolio/tests/unit/content-ops.test.ts
git commit -m "feat: add review-gated content operations"
```

### Task 9: Generate social preview and enforce output safety

**Files:**
- Create: `portfolio/scripts/generate-og.ts`
- Create: `portfolio/scripts/check-links.ts`
- Create: `portfolio/scripts/scan-output.ts`
- Create: `portfolio/public/og-default.png`
- Create: `portfolio/tests/unit/output-safety.test.ts`

- [ ] **Step 1: Generate OG PNG**

Use `sharp` to render a 1200×630 warm-paper graphic containing legal name,
secondary mark, positioning statement, cobalt rule, and no portrait.

- [ ] **Step 2: Implement static link checker**

Parse `out/**/*.html`; verify internal targets exist, fragments resolve to an
ID, and external URLs are HTTPS. Network-check the small approved external set
with timeout/retry and report failures without printing response bodies.

- [ ] **Step 3: Implement forbidden-output scan**

Fail on draft paths, local absolute paths, student-ID patterns, private
biometric generic names, secret patterns, email addresses, and source hashes
from private checkpoint records.

- [ ] **Step 4: Verify and commit**

```bash
npm run build
npm run links:check
npx tsx scripts/scan-output.ts
npx vitest run tests/unit/output-safety.test.ts
git add -- portfolio/scripts portfolio/public/og-default.png \
  portfolio/tests/unit/output-safety.test.ts
git commit -m "feat: gate portfolio release output"
```

### Task 10: Complete browser, accessibility and performance QA

**Files:**
- Create: `portfolio/tests/e2e/mobile.spec.ts`
- Create: `portfolio/tests/accessibility/pages.spec.ts`
- Create: `portfolio/lighthouserc.json`
- Create: `portfolio/docs/qa/2026-07-29-launch.md`

- [ ] **Step 1: Install Playwright browser**

```bash
npx playwright install chromium
```

- [ ] **Step 2: Run automated QA**

```bash
npm run build
npx serve out -l 4173
npx playwright test
npx lhci autorun --config=lighthouserc.json
```

Expected on `/`, `/work/smart-parking/`, and
`/writing/evidence-before-claims/`:

- Performance ≥ 90;
- Accessibility ≥ 95;
- Best Practices ≥ 95;
- SEO ≥ 95;
- no serious/critical axe violation.

- [ ] **Step 3: Manual viewport and keyboard QA**

Inspect 320, 768, 1024, and 1440 CSS-pixel widths in Chromium, Safari, and
Firefox when available. Record actual browser coverage, keyboard path,
reduced-motion behavior, and any unavailable browser rather than claiming it.

- [ ] **Step 4: Commit**

```bash
git add -- portfolio/tests portfolio/lighthouserc.json portfolio/docs/qa
git commit -m "test: verify portfolio release quality"
```

### Task 11: Prepare Sites source and deploy a saved version

**Files:**
- Read/reuse when present: `portfolio/.openai/hosting.json`
- Modify only through Sites: Sites project/version/deployment state
- Create: `portfolio/docs/releases/2026-07-29-initial.md`

- [ ] **Step 1: Read Sites skills and hosting state**

Read `sites-building` then `sites-hosting`. If `.openai/hosting.json` exists,
reuse its opaque `project_id`; never create a second site for the same source.

- [ ] **Step 2: Run the release gate**

```bash
git status --short
npm ci
npm run lint
npm run test
npm run build
npm run links:check
npx tsx scripts/scan-output.ts
npx playwright test
```

Expected: all zero and the source tree clean after committing the release note.

- [ ] **Step 3: Commit exact source state**

```bash
git add -- portfolio/.openai/hosting.json portfolio/docs/releases/2026-07-29-initial.md
git commit -m "docs: record initial portfolio release"
git rev-parse HEAD
```

Record the exact commit SHA in the release note.

- [ ] **Step 4: Create/reuse Sites project, push source, save version**

Use the Sites lifecycle exactly:

1. create the site only if no project ID exists;
2. prepare and push the exact committed source state;
3. save a version whose `commit_sha` equals the pushed state;
4. deploy only that saved version.

- [ ] **Step 5: Verify production**

Inspect deployment until terminal success. Verify homepage, one case study, one
article, RSS, sitemap, 404, desktop, and 320-pixel mobile. Record the production
URL and version ID in the release note through a new additive commit if needed.

### Task 12: Final verification and handoff

**Files:**
- Modify: `04_PORTFOLIO_IMPLEMENTATION_SPEC.md`
- Create: `reports/portfolio-release-2026-07-29.md`

- [ ] **Step 1: Re-run release assertions**

Assert clean Git state, all required output routes, no drafts/private strings,
evidence hashes, test counts, Lighthouse budgets, and production reachability.

- [ ] **Step 2: Record observed facts**

The report includes:

- source commit and Sites version/deployment IDs;
- production URL;
- published/draft project matrix;
- test/build/link/accessibility/performance results;
- omitted LinkedIn/email/résumé controls;
- known limitations and rollback version.

- [ ] **Step 3: Mark spec status**

Change only the status line to `implemented — verified` when every release gate
passes. Otherwise use `implemented — blocked` and name the failing gate.

- [ ] **Step 4: Commit**

```bash
git add -- 04_PORTFOLIO_IMPLEMENTATION_SPEC.md \
  docs/superpowers/plans/2026-07-29-portfolio.md \
  reports/portfolio-release-2026-07-29.md
git diff --cached --check
git commit -m "docs: record verified portfolio release"
```

## Plan self-review

- Spec coverage: routes, content contracts, evidence ledger, current projects,
  draft exclusion, content operations, accessibility, performance, SEO,
  security, Sites release and rollback map to Tasks 1–12.
- Scope: one integrated static product. LinkedIn publishing, personal social
  media, a CMS, custom domain, and unverified contact/résumé data remain out.
- Placeholder scan: no implementation step depends on an unspecified target,
  credential, metric, profile URL, or project result.
- Type consistency: `publicationStatus`, `status`, `evidencePacket`,
  `EvidenceClaim`, packet paths, routes, and test commands use the same names
  throughout.
