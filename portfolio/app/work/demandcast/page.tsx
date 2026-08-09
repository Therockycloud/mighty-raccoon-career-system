import type { Metadata } from "next";
import { Figure } from "@/components/content/Figure";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "DemandCast",
  description:
    "SKU sales forecasting with leakage-safe lockbox evaluation and an honest publisher reject.",
};

export default function DemandCastPage() {
  return (
    <PageShell current="work">
      <article className="section shell prose wide">
        <p className="meta">Case study · Solo · Forecasting / ML judgment</p>
        <h1>DemandCast</h1>
        <p>
          A reproducible 28-day SKU sales forecast system on UCI Online Retail II.
          The résumé-relevant outcome is not “LightGBM won” — it is that a
          preregistered lockbox <em>rejected</em> a better-WAPE model for bias and
          coverage failures.
        </p>

        <Figure
          priority
          src="/images/demandcast/dc-ui-overview.png"
          alt="DemandCast evidence dashboard showing forecast id and Stage 1 publisher"
          caption="Live evidence UI — serving publisher zero+empirical×0.75 after Stage 2B reject."
        />

        <div className="evidence-box">
          <strong>Sealed evidence</strong>
          Stage 2B lockbox consumed once · publisher retained{" "}
          <code>zero + empirical×0.75</code> · ADR 0005 ·{" "}
          <a href="https://github.com/Therockycloud/DemandCast">
            github.com/Therockycloud/DemandCast
          </a>
        </div>

        <h2>Problem → constraints</h2>
        <p>
          Invoice units are a demand proxy, not latent demand under stockouts.
          Customer/invoice identifiers never enter the modeling table, API, or UI.
          Inventory logic is an explicitly synthetic sandbox.
        </p>

        <Figure
          src="/images/demandcast/dc-arch-flow.png"
          alt="DemandCast architecture flow from UCI dataset through evidence gate to batch API"
          caption="Architecture plate — sealed pipeline labels only; no KPI overlays."
        />

        <h2>Decisions</h2>
        <ul>
          <li>Six development folds; two reserved lockbox folds — no peeking.</li>
          <li>Stage 2A may authorize lockbox; Stage 2B may not retry.</li>
          <li>Promotion requires WAPE, pinball, bias, coverage, and fit-budget gates.</li>
          <li>Keep infrastructure local until measured triggers fire.</li>
        </ul>

        <h2>Lockbox outcome</h2>
        <div className="metric-grid">
          <div className="metric-item">
            <div className="value">0.867</div>
            <div className="label">Candidate WAPE (vs zero 1.0)</div>
          </div>
          <div className="metric-item">
            <div className="value">67%</div>
            <div className="label">Abs bias share — gate fail (≤10%)</div>
          </div>
          <div className="metric-item">
            <div className="value">90.3%</div>
            <div className="label">P10–P90 coverage — gate fail (70–90%)</div>
          </div>
          <div className="metric-item">
            <div className="value">6/6</div>
            <div className="label">LightGBM fits used (cap ≤6)</div>
          </div>
        </div>

        <Figure
          src="/images/demandcast/dc-ui-evaluation.png"
          alt="DemandCast evaluation view with lockbox_consumed true and publisher fields"
          caption="Evaluation surface — lockbox_consumed=true; Stage 1 champion retained."
        />

        <p className="link-row">
          <a href="https://github.com/Therockycloud/DemandCast">Repository</a>
          <a href="/images/demandcast/dc-api-docs.png">API docs capture</a>
        </p>

        <h2>Limitations</h2>
        <p>
          Static UCI has no authoritative day-close watermark. Inventory impact
          metrics are simulation-only. Re-opening the lockbox requires a new
          development protocol and authorizing manifest.
        </p>
      </article>
    </PageShell>
  );
}
