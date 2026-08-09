import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { projects, site } from "@/lib/site";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero shell">
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
      </section>

      <section className="section shell">
        <h2>Selected systems</h2>
        <p className="section-lede">
          From grounded retrieval to forecasting — measured against baselines,
          documented through failures, shipped with tests.
        </p>
        <div className="project-list">
          {projects.map((project) => (
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
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
                <p className="claim" style={{ marginTop: "0.75rem" }}>
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
