import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { PageSection } from "@/components/site/page-section";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for the Kevly marketing website.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="A straightforward privacy page is better than pretending the policy does not exist."
        description="This placeholder route gives the MVP a real legal surface. Replace the text below with final policy language before launch."
      />
      <div className="shell">
        <PageSection title="Current placeholder">
          <p>
            Kevly does not yet describe any production data handling in this repo.
            Before launch, this page should be updated to reflect the actual
            analytics, form handling, cookies, email collection, and third-party
            services used by the site.
          </p>
          <p>
            If the site only serves static content with a contact link, the policy
            can stay minimal. If you add waitlists, analytics, or embedded tools,
            the page should be updated immediately.
          </p>
        </PageSection>
      </div>
    </PageShell>
  );
}
