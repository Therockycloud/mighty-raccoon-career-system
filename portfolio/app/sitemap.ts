import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work/", "/about/"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const work = projects.map((project) => ({
    url: `${base}${project.href}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...work];
}
