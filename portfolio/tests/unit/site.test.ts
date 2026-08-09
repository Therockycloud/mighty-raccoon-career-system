import { describe, expect, it } from "vitest";
import { projects, site } from "../../lib/site";

describe("portfolio claims", () => {
  it("keeps primary identity and positioning", () => {
    expect(site.name).toBe("Phạm Hoàng Hải");
    expect(site.positioning.length).toBeGreaterThan(20);
  });

  it("binds every claim to evidence text", () => {
    for (const project of projects) {
      expect(project.claims.length).toBeGreaterThan(0);
      for (const claim of project.claims) {
        expect(claim.evidence.trim().length).toBeGreaterThan(5);
      }
    }
  });

  it("does not feature FaceNet on the public index", () => {
    expect(projects.some((p) => p.slug.includes("face"))).toBe(false);
  });
});
