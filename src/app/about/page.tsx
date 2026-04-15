import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { PageSection } from "@/components/site/page-section";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevly and the product philosophy behind a lean, disciplined marketing surface.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Kevly"
        title="A small, focused product deserves a clear, focused website."
        description="Kevly is being positioned around clarity: explain the offer fast, remove generic noise, and keep the marketing surface easy to maintain."
      />
      <div className="shell grid gap-6 lg:grid-cols-2">
        <PageSection title="What this site is optimized for">
          <p>
            The MVP website is intentionally static. That keeps the cost of change
            low and makes every page easy to reason about during the period when
            messaging and product scope are still moving.
          </p>
          <p>
            Instead of introducing a CMS or a content abstraction layer, the repo
            keeps page-specific content close to the page that owns it.
          </p>
        </PageSection>
        <PageSection title="What comes later">
          <p>
            If Kevly grows into pricing pages, changelogs, case studies, or a
            broader product surface, the current structure still holds up. New
            routes can be added directly under <code>src/app</code> with shared
            design primitives reused across them.
          </p>
          <p>
            More complex systems should be introduced only when repeated editing or
            workflow pain makes them justified.
          </p>
        </PageSection>
      </div>
    </PageShell>
  );
}
