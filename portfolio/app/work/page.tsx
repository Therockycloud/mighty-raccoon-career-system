import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Evidence-led AI engineering case studies by Phạm Hoàng Hải.",
};

export default function WorkIndexPage() {
  return (
    <PageShell current="work">
      <section className="section shell">
        <h2>Work</h2>
        <p className="section-lede">
          Public claims are bound to sealed evidence packets or repository
          documentation. Metrics that were not measured are not shown.
        </p>
        <div className="project-list">
          {projects.map((project) => (
            <Link key={project.slug} href={project.href} className="project-row">
              <div>
                <p className="meta">{project.role}</p>
                <h3>{project.title}</h3>
                <p className="claim">{project.problem}</p>
              </div>
              <div>
                {project.claims.slice(0, 1).map((claim) => (
                  <p key={claim.text} className="claim">
                    <strong>Evidence: </strong>
                    {claim.evidence}
                  </p>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
