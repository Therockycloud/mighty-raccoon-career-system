# Portfolio and Professional Content System — Implementation Specification

Status: design approved
Implementation owner: Codex
Primary identity: Phạm Hoàng Hải
Secondary brand: Mighty Raccoon
Primary language: English
Supporting language: Vietnamese for selected summaries
Initial deployment target: Sites production hosting

## 1. Outcome

Build a fast, accessible React portfolio that helps a recruiter answer four questions in under five minutes:

1. What AI engineering role is Hải targeting?
2. Which projects show personally attributable technical ability?
3. What measurable evidence supports each claim?
4. How can the recruiter inspect the code, demo, report, résumé, or contact channel?

The portfolio is a guided evidence index. GitHub remains the source of truth for code, tests, releases, metrics, and technical history.

## 2. Audience and positioning

Primary audiences:

- AI Engineer, Applied AI, ML Engineer, and AI Product Engineer internship reviewers.
- Engineering managers who want reproducibility, system boundaries, failure analysis, and operational thinking.
- International and Vietnamese recruiters.

Positioning statement:

> I build evaluated, production-minded AI systems.

Supporting statement:

> From grounded retrieval to forecasting and computer vision—measured against baselines, documented through failures, and shipped with tests.

Identity rules:

- Display `Phạm Hoàng Hải` as the primary public identity.
- Use `Mighty Raccoon` as a restrained secondary mark, never as a replacement for the legal name.
- Keep the GitHub username `Therockycloud`; changing the username is outside this project.
- Do not use a cartoon raccoon, 3D mascot, novelty terminal persona, or visual treatment that weakens résumé/profile matching.

## 3. Goals

- Present at least one verified existing-project case study plus one clearly
  labeled building overview at launch:
  - `PDL302m_project` / Smart Parking Security System, after its evidence,
    ownership, privacy, and presentation gates pass.
  - `face-net` / local FaceNet recognition dashboard only after its public-data
    evaluation, evidence, ownership, privacy, and presentation gates pass;
    otherwise keep it as a production-excluded draft and show the blocker.
  - One honest “currently building” overview that groups GroundedVN and DemandCast without invented results.
- Replace the “currently building” overview with full GroundedVN and DemandCast case studies only after verified releases exist.
- Publish long technical articles as local MDX content.
- Generate evidence-bound LinkedIn drafts, with mandatory human review and manual/native scheduling.
- Generate RSS, sitemap, metadata, and social preview images at build time.
- Meet explicit accessibility, performance, and content-integrity gates.

## 4. Non-goals

Version 1 does not include:

- A runtime CMS, database, authentication system, comments, likes, or user accounts.
- Facebook, Instagram, X, Threads, TikTok, YouTube, or personal-life content.
- Automatic LinkedIn posting.
- An autonomous content agent.
- Unreviewed AI-written technical claims.
- Heavy WebGL, particle backgrounds, 3D scenes, autoplay media, or decorative animation.
- GitHub statistics cards, badge walls, skill progress bars, or a long icon cloud.
- A custom domain. The initial release uses the Sites production URL.
- Fabricated project metrics, launch dates, employers, testimonials, or contribution claims.

## 5. Information architecture

Required routes:

| Route | Purpose |
|---|---|
| `/` | Positioning, selected work, verified evidence, latest writing, résumé/contact |
| `/work` | All case studies and project status |
| `/work/[slug]` | Full evidence-led case study |
| `/writing` | Technical articles and devlogs |
| `/writing/[slug]` | Canonical long-form article |
| `/about` | Background, working principles, current learning focus |
| `/resume.pdf` | Current English résumé, only when supplied and verified |
| `/rss.xml` | Generated technical-writing feed |
| `/sitemap.xml` | Generated indexable routes |
| Any missing route | Helpful custom not-found experience rendered through `not-found.tsx` and exported as `404.html` |

Navigation:

- Work
- Writing
- About
- Résumé, conditionally rendered only when the file exists

External destinations:

- GitHub: required.
- LinkedIn: required before production launch if the user supplies and verifies the URL.
- Hugging Face: optional; shown only when at least one maintained model, dataset, or Space exists.
- Email: omitted unless the user explicitly approves a public contact address.

No button or icon may point to a placeholder, private page, dead deployment, or unverified profile.

## 6. Homepage composition

Order:

1. Identity and role label.
2. Positioning statement.
3. Two primary actions: selected work and résumé, with résumé hidden when absent.
4. Selected work grid.
5. Evidence principles: baseline, evaluation, deployment, operations.
6. Latest technical writing.
7. About/contact summary.
8. Footer with source and update information.

Selected work at initial launch:

### Smart Parking Security System

- Label: Computer Vision / team project.
- Show Hải’s documented responsibilities, not the whole team’s work as solo work.
- Link README, contribution table, demo media when safe, and current repository.
- Show metrics only after the GitHub cleanup verification confirms their source artifacts.

### Local FaceNet Recognition

- Label: Computer Vision application; individual/team ownership must be verified before launch.
- Show contribution or commit evidence only after authorship and repository history are re-verified during implementation.
- Do not present cosine similarity as calibrated confidence.
- Do not show or ship real registered-face images.

### GroundedVN + DemandCast

- Label: Currently building.
- Explain the intended engineering questions and link the public repositories only after they exist.
- Do not show forecast accuracy, retrieval quality, deployment status, or launch dates before evidence exists.

Final target order after both new projects have verified releases:

1. GroundedVN.
2. DemandCast.
3. Smart Parking.
4. Local FaceNet Recognition.

## 7. Case-study contract

Every full case study must contain:

1. **Problem**
   - User and decision.
   - Constraints.
   - Success metrics.
   - Explicit non-goals.
2. **My contribution**
   - Solo or team context.
   - Personally attributable responsibilities.
   - Links to contribution evidence when available.
3. **Architecture**
   - System/context diagram.
   - Components and interfaces.
   - Important alternatives considered.
   - Architecture Decision Records where available.
4. **Evaluation**
   - Dataset/source provenance.
   - Baseline.
   - Metrics and slices.
   - Reproduction command.
5. **Failure analysis**
   - What failed.
   - Why it failed.
   - What was not deployed.
   - Remaining limitations.
6. **Operations**
   - Tests and CI.
   - Deployment/runtime.
   - Monitoring, SLO, rollback, or recovery evidence where appropriate.
7. **Inspect**
   - Code.
   - Live demo, if maintained.
   - Technical report.
   - Release or metric artifact.

If a section lacks evidence, omit the claim or describe it explicitly as planned work.

## 8. Content model

Case-study frontmatter:

```yaml
title: string
slug: string
summary: string
status: active | building | archived
publicationStatus: draft | published
projectType: solo | team
role: string
startedAt: YYYY-MM
updatedAt: YYYY-MM-DD
tags: string[]
repositoryUrl: optional-https-url
demoUrl: optional-https-url
reportUrl: optional-https-url
featured: boolean
featuredOrder: integer
evidencePacket: optional-relative-path
planningSources: optional-public-blueprint-refs[]
```

Article frontmatter:

```yaml
title: string
slug: string
summary: string
publishedAt: YYYY-MM-DD
updatedAt: optional-YYYY-MM-DD
status: draft | published
tags: string[]
relatedProjects: string[]
canonicalUrl: optional-https-url
evidencePacket: relative-path
```

Validation rules:

- A case study with `publicationStatus: draft` and an article with `status: draft`
  are both excluded from content discovery and the production build.
- External URLs must use HTTPS except localhost development links.
- A `featured` project must have a valid repository URL and evidence packet.
- `repositoryUrl` may be omitted only when `status: building`; building entries
  remain unfeatured and must use explicit planned/in-progress wording.
- A published `active` or `archived` case study requires an evidence packet.
- A result-free published `building` overview may omit an evidence packet only
  when it is unfeatured, displays no metrics, makes no claim of completed
  capability/deployment, and contains only intent, engineering questions, and
  explicit planned/in-progress language. `planningSources` may link public,
  immutable blueprint refs once they exist; it must never expose a local path.
- Every displayed metric or evidence-bound technical claim must resolve through
  the claim-ID contract in Section 9.
- Unknown frontmatter keys fail CI.
- Duplicate slugs fail CI.

## 9. Evidence packet and claim ledger

Every public project or article with technical claims points to an evidence
packet conforming to the byte-verified vendored snapshot at
`docs/contracts/career-system/EVIDENCE_PACKET_SPEC.md`. Portfolio bootstrap
copies this file from the career-system repository, records its source SHA-256
in `docs/contracts/career-system/manifest.json`, and fails validation when the
copy or manifest drifts.

Minimum claim record:

```yaml
id: claim-stable-id
claim: human-readable statement
status: verified | planned | rejected
source:
  repository: owner/name
  ref: commit-or-release
  path: path/to/artifact
  command: optional-reproduction-command
verifiedAt: YYYY-MM-DD
notes: string
```

Rendering behavior:

- `verified` claims may appear publicly.
- `planned` claims may appear only with explicit “planned” or “in progress” wording.
- `rejected` claims never render.
- Missing or invalid claim references fail the content build.

MDX claim-ID contract:

```mdx
<EvidenceClaim claimId="retrieval.dev.macro-ndcg-at-10" />
```

- `EvidenceClaim` accepts exactly one `claimId` and no authored child text. It
  renders the canonical wording and status from `claims.yaml`, preventing prose
  from silently strengthening the evidence.
- The content loader binds the component to the file’s declared
  `evidencePacket`; cross-packet lookup is forbidden.
- The build fails for an unknown, duplicate, or `rejected` claim ID; a `planned`
  claim receives a visible planned/in-progress label.
- Metrics, percentages, latency/cost values, benchmark comparisons, and quantified
  ownership claims in public MDX must use this component. The MDX lint pass flags
  common quantitative patterns outside code blocks and approved metadata, and
  human review covers claims that static analysis cannot classify.
- A result-free `building` overview without an evidence packet cannot use
  `EvidenceClaim`.

## 10. Professional content workflow

The professional system covers GitHub, LinkedIn, and the portfolio only.

Flow:

1. A project milestone produces an evidence packet:
   - release/ref;
   - metrics artifact;
   - architecture or ADR;
   - screenshots or diagram;
   - failure/limitation notes.
2. A local content command generates:
   - a canonical MDX outline;
   - a LinkedIn draft;
   - a claim ledger;
   - questions for missing evidence.
3. Hải reviews the wording and evidence.
4. The canonical article is committed through a reviewable change.
5. The approved source state is saved and deployed through the Sites workflow.
6. LinkedIn is posted manually or through LinkedIn’s native scheduler.
7. The GitHub release links back to the canonical article when useful.

Publication cadence:

- GitHub: at meaningful project milestones.
- LinkedIn: no more than one substantial technical post per week.
- Portfolio: one or two deep articles per month when evidence exists.

Personal social media remains a separate future project. There is no automated bridge. Hải may manually share a major professional milestone to a personal account.

## 11. Technical architecture

Framework:

- React through Next.js App Router.
- TypeScript.
- Static export with `output: "export"`.
- Local MDX.
- Build-time content discovery and validation.
- No runtime server functions in version 1.

Rationale:

- Static HTML per route improves resilience, portability, and initial loading.
- Local MDX keeps articles versioned with code.
- The site can deploy to any static host and fits the Sites production workflow.
- A database and CMS would add operational cost without solving a current need.

Official references:

- [React TypeScript guide](https://react.dev/learn/typescript)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)

Required repository shape:

```text
portfolio/
├── app/
│   ├── page.tsx
│   ├── work/
│   ├── writing/
│   ├── about/
│   ├── rss.xml/
│   ├── sitemap.ts
│   └── not-found.tsx
├── components/
│   ├── layout/
│   ├── content/
│   ├── diagrams/
│   └── project/
├── content/
│   ├── work/
│   ├── writing/
│   ├── evidence/
│   └── social/published/linkedin/
├── content-ops/
│   └── drafts/                 # ignored; never deployed
├── docs/
│   └── contracts/
│       └── career-system/
│           ├── EVIDENCE_PACKET_SPEC.md
│           └── manifest.json
├── lib/
│   ├── content/
│   ├── evidence/
│   ├── metadata/
│   └── validation/
├── public/
│   ├── images/
│   ├── diagrams/
│   └── resume.pdf              # optional, verified input
├── scripts/
│   ├── content-new.ts
│   ├── content-validate.ts
│   ├── linkedin-draft.ts
│   └── check-links.ts
├── tests/
│   ├── unit/
│   ├── accessibility/
│   └── e2e/
├── .openai/
│   └── hosting.json            # created/reused by the Sites workflow
└── package.json
```

## 12. Visual system: Editorial Systems

Personality:

- Quiet confidence.
- Technical editorial rather than startup landing page.
- Warm, human reading surface with precise system labels.

Color direction:

- Warm paper background.
- Graphite foreground.
- Cobalt for primary interactive/evidence signals.
- Restrained rust for secondary categories.
- Accessible semantic success, warning, and error colors.

Typography direction:

- Serif display face for major statements and case-study titles.
- Neutral sans-serif for body and UI.
- Monospace for labels, metrics, commands, and artifact references.
- Fonts must be self-hostable or used with a verified open license.

Layout:

- Strong grid and visible rules.
- Generous reading measure.
- Project cards emphasize problem and evidence, not screenshots alone.
- Diagrams and metrics receive more emphasis than decoration.

Motion:

- Small opacity/position transitions only.
- No scroll hijacking.
- Respect `prefers-reduced-motion`.
- All information remains available with animation disabled.

## 13. Responsive behavior

- Mobile-first.
- Navigation remains keyboard operable and readable at 320 CSS pixels.
- Tables receive a semantic compact representation or horizontal scroll with an accessible label.
- Diagrams provide text alternatives.
- Code blocks scroll without expanding the viewport.
- Project cards become a single-column reading sequence.

## 14. Accessibility requirements

Required:

- WCAG 2.2 AA target.
- Correct landmarks and heading order.
- Skip link.
- Visible focus.
- Full keyboard navigation.
- Minimum contrast compliant with AA.
- Meaningful alternative text.
- No color-only status encoding.
- Reduced-motion support.
- Form-free initial release, avoiding unnecessary personal-data collection.

Automated checks support but do not replace manual keyboard and screen-reader-oriented review.

## 15. Performance and SEO gates

Performance budgets:

- Static pages render without client JavaScript unless interaction requires it.
- No third-party analytics or social widgets in the initial release.
- No autoplay video.
- Optimized, explicitly sized images.
- Largest visual assets have mobile variants.
- Production Lighthouse targets: Performance ≥ 90; Accessibility ≥ 95; Best Practices ≥ 95; SEO ≥ 95 on representative pages.
- Core project/article pages must remain readable if JavaScript fails.

SEO:

- Unique title and description per route.
- Canonical URL after deployment.
- Open Graph and social preview image.
- Structured data for `Person`, `WebSite`, `Article`, and `CreativeWork` where accurate.
- Sitemap and RSS.
- Archived projects use accurate status language; no SEO doorway pages.

## 16. Testing strategy

Unit tests:

- Frontmatter and evidence schemas.
- Project/article sorting.
- Draft exclusion.
- Claim rendering.
- URL normalization.
- RSS generation.

Integration/build tests:

- Static export completes.
- Every generated route exists.
- No broken internal links.
- No duplicate slugs.
- No draft content in `out/`.
- No raw content-operation drafts in `out/`.
- No unsupported dynamic Next.js feature.

End-to-end tests:

- Homepage primary navigation.
- Case-study navigation.
- Writing index/article.
- Resume control hidden or functional.
- An arbitrary missing URL renders the custom not-found experience locally and on Sites.
- Mobile navigation.
- Keyboard-only path through primary content.

Manual QA:

- Chrome, Safari, and Firefox current stable releases.
- 320, 768, 1024, and 1440 CSS-pixel widths.
- Keyboard and reduced-motion mode.
- Dark-mode is not required in version 1.

## 17. Security and privacy

- No API keys or social tokens in the client or repository.
- No automated LinkedIn API integration in version 1.
- No personal biometric images.
- No unpublished résumé/contact data without approval.
- Sanitize or disallow arbitrary raw HTML in content.
- Pin dependencies through the lockfile and run dependency review.
- Add a restrictive Content Security Policy when compatible with static hosting.
- External links opened in new tabs use safe relationship attributes.
- Draft-generation tooling runs locally and cannot publish.
- Scan the production output for forbidden private filenames and hashes, local absolute paths, student/account identifiers, secrets, and biometric source paths before release.

## 18. Deployment, release, and rollback

Deployment:

- Use Sites for the production deployment.
- Read and reuse `.openai/hosting.json` if present.
- Push the exact source state before creating a saved version.
- Deploy only a saved version.
- Initial public URL is the Sites production URL.

Release gate:

- Clean Git status.
- Full test/build suite passes.
- Static export inspected.
- Content and evidence validation passes.
- Accessibility and performance checks pass.
- External links reviewed.
- No fake or placeholder claims.
- User approves the public identity, résumé, LinkedIn URL, and case-study wording.

Rollback:

- Preserve the previous saved Sites version.
- If the new deployment fails verification, restore the last verified version.
- Content corrections use a new commit/version; do not mutate the historical release artifact.

## 19. Implementation phases

### Phase 0 — content and identity contract

- Confirm approved LinkedIn URL.
- Confirm whether a public email is allowed.
- Confirm and validate English résumé; otherwise hide résumé controls.
- Verify GitHub cleanup results and evidence links.
- Vendor and hash the career-system Evidence Packet contract.

### Phase 1 — shell and design system

- Create static Next.js/TypeScript project.
- Implement Editorial Systems tokens, layout, navigation, and component primitives.
- Establish schema validation and tests.

### Phase 2 — current case studies

- Build the Smart Parking evidence packet and audit the FaceNet publication
  gates; build/publish the FaceNet packet only when all gates pass.
- Write honest team/solo contribution sections.
- Add diagrams and inspected links.

### Phase 3 — writing and content operations

- Add MDX article system, RSS, sitemap, metadata, draft generator, and claim ledger.
- Keep LinkedIn publishing manual.

### Phase 4 — quality and deployment

- Complete accessibility/performance/browser QA.
- Package and deploy through Sites.
- Verify production.

### Phase 5 — new-project integration

- Replace “currently building” content only after GroundedVN/DemandCast evidence gates pass.
- Add Hugging Face only after a maintained public artifact exists.

## 20. Definition of done

The initial portfolio is done when:

- Required routes build and deploy successfully.
- Smart Parking contains verified contribution and technical evidence.
- FaceNet is published only if its public-data evaluation, contribution,
  privacy, ownership, and presentation gates pass; otherwise it remains a
  production-excluded draft with the blocker recorded.
- No draft case study or draft article appears in the production output.
- GroundedVN and DemandCast contain no unverified results.
- GitHub, LinkedIn, résumé, and demo links are valid or omitted.
- Static build, tests, link checks, accessibility scan, and performance checks pass.
- Content workflow produces a local draft and prevents unreviewed publication.
- Production deployment is inspected on desktop and mobile.
- A previous version can be restored.

## 21. Explicit implementation authority

Codex is authorized, after the written specification and implementation plan are approved, to:

- Create the portfolio source.
- Add tests and content tooling.
- Build and deploy through Sites.
- Make scoped repository changes needed for this portfolio.

Codex is not authorized by this specification to:

- Publish to LinkedIn.
- Make personal-social accounts or posts.
- Buy a domain or paid service.
- Publish a personal email or résumé not approved by the user.
- Invent project evidence.
