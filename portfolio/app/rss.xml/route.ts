import { projects, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const items = projects
    .map(
      (project) => `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${base}${project.href}</link>
      <guid>${base}${project.href}</guid>
      <description>${escapeXml(project.summary)}</description>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${base}/</link>
    <description>${escapeXml(site.description)}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
