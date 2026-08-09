import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function SiteHeader({ current }: { current?: string }) {
  const items = [
    { href: "/work/", label: "Work", id: "work" },
    { href: "/about/", label: "About", id: "about" },
    { href: site.github, label: "GitHub", id: "github", external: true },
  ];

  return (
    <header className="site-header">
      <div className="shell inner">
        <Link className="brand" href="/">
          {site.name}
          <span>{site.brandSecondary} · AI Engineer</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {items.map((item) =>
            item.external ? (
              <a key={item.id} href={item.href} rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                aria-current={current === item.id ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <p>
          {site.name} · Evidence-bound claims only · Source of truth on{" "}
          <a href={site.github}>GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  current,
}: {
  children: ReactNode;
  current?: string;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader current={current} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
