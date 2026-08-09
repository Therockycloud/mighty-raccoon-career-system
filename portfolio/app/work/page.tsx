import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Evidence-led AI engineering case studies by Phạm Hoàng Hải.",
};

const thumbs: Record<string, { src: string; alt: string }> = {
  groundedvn: {
    src: "/images/groundedvn/gv-verify-data.png",
    alt: "GroundedVN verify-data CLI output showing pilot suite passed",
  },
  demandcast: {
    src: "/images/demandcast/dc-ui-overview.png",
    alt: "DemandCast evidence dashboard overview",
  },
  "smart-parking": {
    src: "/images/smart-parking/sp-repo-surface.png",
    alt: "Smart Parking team repository on GitHub",
  },
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
          {projects.map((project) => {
            const thumb = thumbs[project.slug];
            return (
              <Link key={project.slug} href={project.href} className="project-row">
                <div className="project-copy">
                  <p className="meta">{project.role}</p>
                  <h3>{project.title}</h3>
                  <p className="claim">{project.problem}</p>
                  {project.claims.slice(0, 1).map((claim) => (
                    <p
                      key={claim.text}
                      className="claim"
                      style={{ marginTop: "0.75rem" }}
                    >
                      <strong>Evidence: </strong>
                      {claim.evidence}
                    </p>
                  ))}
                </div>
                <div className="project-media">
                  {thumb && (
                    <div className="thumb">
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        width={720}
                        height={450}
                        sizes="(max-width: 900px) 100vw, 28rem"
                      />
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
