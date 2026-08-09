import type { Metadata } from "next";
import { Figure } from "@/components/content/Figure";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Smart Parking Security",
  description:
    "Team-built smart parking security system with CV verification, APIs, and tests.",
};

export default function SmartParkingPage() {
  return (
    <PageShell current="work">
      <article className="section shell prose">
        <p className="meta">Case study · Team project · CV + APIs</p>
        <h1>Smart Parking Security</h1>
        <p>
          A team-built parking security system with computer-vision verification,
          service APIs, tests, and deployment tooling. Team work is never described
          as solo work; inspect the repository for ownership detail.
        </p>

        <Figure
          priority
          src="/images/smart-parking/sp-repo-surface.png"
          alt="GitHub repository page for the Smart Parking team project"
          caption="Team repository surface — attribution stays collaborative, not solo."
        />

        <div className="evidence-box">
          <strong>Source</strong>
          <a href="https://github.com/Therockycloud/PDL302m_project">
            github.com/Therockycloud/PDL302m_project
          </a>
        </div>

        <h2>What this demonstrates</h2>
        <ul>
          <li>End-to-end CV + API project structure suitable for course/capstone delivery.</li>
          <li>Tests and deployment tooling as part of the public artifact.</li>
          <li>Honest attribution boundaries for collaborative work.</li>
        </ul>

        <h2>Limitations</h2>
        <p>
          Quantified production KPIs are not claimed here beyond what the
          repository itself documents. FaceNet remains a separate, privacy-gated
          project and is not featured on this site.
        </p>
      </article>
    </PageShell>
  );
}
