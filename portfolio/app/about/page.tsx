import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Phạm Hoàng Hải — AI Engineer targeting applied AI and ML roles.",
};

export default function AboutPage() {
  return (
    <PageShell current="about">
      <article className="section shell prose">
        <h1>About</h1>
        <p>
          I am <strong>{site.name}</strong>, an AI engineer focused on systems that
          can be evaluated, operated, and honestly limited. Secondary technical
          brand: {site.brandSecondary}.
        </p>
        <p>
          Target roles: AI Engineer, Applied AI Engineer, ML Engineer, and adjacent
          AI Product roles — Vietnam and international/remote.
        </p>
        <h2>How I work</h2>
        <ul>
          <li>Contracts and baselines before model complexity.</li>
          <li>Reserved evaluation splits that cannot be reopened casually.</li>
          <li>Security and privacy boundaries written down before demos.</li>
          <li>Public claims only from sealed evidence packets.</li>
        </ul>
        <h2>Contact</h2>
        <p>
          Code and evidence live on{" "}
          <a href={site.github}>GitHub/@Therockycloud</a>. LinkedIn and résumé
          links are added only after verified inputs are available.
        </p>
      </article>
    </PageShell>
  );
}
