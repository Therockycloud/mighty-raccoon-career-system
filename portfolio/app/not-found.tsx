import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section shell prose">
        <h1>Page not found</h1>
        <p>That route is not part of the published portfolio.</p>
        <p>
          <Link href="/">Return home</Link>
        </p>
      </section>
    </PageShell>
  );
}
