import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { projects, site } from "@/lib/site";

const thumbs: Record<string, { src: string; alt: string }> = {
  groundedvn: {
    src: "/images/groundedvn/gv-repo-surface.png",
    alt: "GroundedVN GitHub repository showing Stage 4 documentation",
  },
  demandcast: {
    src: "/images/demandcast/dc-ui-overview.png",
    alt: "DemandCast evidence dashboard overview with serving publisher",
  },
  "smart-parking": {
    src: "/images/smart-parking/sp-repo-surface.png",
    alt: "Smart Parking team repository on GitHub",
  },
};

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">AI Engineer · Vietnam / remote</p>
          <h1>{site.name}</h1>
          <p className="lede">{site.positioning}</p>
          <div className="cta-row">
            <Link className="btn" href="/work/">
              View work
            </Link>
            <a className="btn btn-ghost" href={site.github}>
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="figure" style={{ margin: 0 }}>
            <div className="figure-frame">
              <Image
                src="/images/demandcast/dc-ui-overview.png"
                alt="Live DemandCast evidence dashboard proving the forecast publisher in use"
                width={1440}
                height={900}
                priority
                sizes="(max-width: 900px) 100vw, 34rem"
              />
            </div>
            <figcaption>
              Live proof — DemandCast evidence UI after Stage 2B lockbox reject;
              publisher remains zero + empirical×0.75.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell">
        <h2>Selected systems</h2>
        <p className="section-lede">
          From grounded retrieval to forecasting — measured against baselines,
          documented through failures, shipped with tests.
        </p>
        <div className="project-list">
          {projects.map((project) => {
            const thumb = thumbs[project.slug];
            return (
              <Link key={project.slug} href={project.href} className="project-row">
                <div>
                  <p className="meta">
                    {project.status === "published" ? "Case study" : "Building"} ·{" "}
                    {project.role}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="claim">{project.problem}</p>
                </div>
                <div>
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
                  <p className="claim" style={{ marginTop: "0.75rem" }}>
                    {project.summary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
