import type { Metadata } from "next";
import { Figure } from "@/components/content/Figure";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "GroundedVN",
  description:
    "Local-first Vietnamese/English grounded Q&A with hybrid retrieval, citations, abstention, and Stage 4 operations.",
};

export default function GroundedVNPage() {
  return (
    <PageShell current="work">
      <article className="section shell prose">
        <p className="meta">Case study · Solo · Applied AI / RAG</p>
        <h1>GroundedVN</h1>
        <p>
          A local-first grounded Q&A system for Vietnamese and English corpora.
          The product promise is narrow: retrieve and answer only from an
          authorized workspace, cite structural evidence, and abstain when support
          is weak.
        </p>

        <Figure
          priority
          src="/images/groundedvn/gv-verify-data.png"
          alt="Terminal output of groundedvn verify-data showing pilot suite passed with checksums"
          caption="Live CLI proof — verify-data on groundedvn-bilingual-v1-pilot (12 docs / 36 cases, passed)."
        />

        <Figure
          src="/images/groundedvn/gv-repo-surface.png"
          alt="GroundedVN GitHub repository page showing Stage 4 README and project layout"
          caption="Public repository after Stage 4 README seal — source of truth for claims."
        />

        <div className="evidence-box">
          <strong>Sealed evidence</strong>
          Stage 4 reviewed gate · JOBS / ALIASES / RBAC / DELETION / RECOVERY /
          OPERATIONS · full suite 128 passed ·{" "}
          <a href="https://github.com/Therockycloud/GroundedVN">
            github.com/Therockycloud/GroundedVN
          </a>
        </div>

        <h2>Problem → constraints</h2>
        <p>
          Chat demos fail recruiters when they cannot show workspace isolation,
          citation integrity, or failure modes. GroundedVN prioritizes those
          contracts over a polished consumer UI.
        </p>

        <Figure
          src="/images/groundedvn/gv-arch-flow.png"
          alt="GroundedVN architecture from workspace docs through hybrid retrieval to Stage 4 ops"
          caption="Architecture plate — abstention and structural citations before ops."
        />

        <h2>Decisions</h2>
        <ul>
          <li>Hybrid retrieval (lexical / dense / RRF) with optional rerank.</li>
          <li>Server-built structural citations — not model-authored free text IDs.</li>
          <li>Calibrated abstention before generation.</li>
          <li>Stage 4 ops extensions only after measured triggers and ADRs.</li>
        </ul>

        <h2>Evaluation &amp; product</h2>
        <div className="metric-grid">
          <div className="metric-item">
            <div className="value">S4</div>
            <div className="label">Sealed architecture stage</div>
          </div>
          <div className="metric-item">
            <div className="value">128</div>
            <div className="label">Tests passed at Stage 4 review</div>
          </div>
          <div className="metric-item">
            <div className="value">6</div>
            <div className="label">Named Stage 4 extension IDs</div>
          </div>
        </div>

        <h2>Limitations</h2>
        <p>
          This is a portfolio-grade local-first system, not a multi-tenant SaaS
          uptime claim. Further complexity requires a new ADR; Stage 4 is complete
          for the named extension set only. Live CLI search screenshot is deferred
          until a sealed local index replay is captured without inventing UI.
        </p>
      </article>
    </PageShell>
  );
}
