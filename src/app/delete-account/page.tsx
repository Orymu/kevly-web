import type { Metadata } from "next";

import {
  deleteAccountIntro,
  deleteAccountLastUpdated,
  deleteAccountSections,
} from "@/app/delete-account/delete-account-content";
import { PageHero } from "@/components/site/page-hero";
import { PageSection } from "@/components/site/page-section";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "How to request account deletion in Kevly, what happens during the 30-day grace period, and what data may be deleted or retained.",
};

export default function DeleteAccountPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Delete Account"
        title="Account deletion should be clear before it becomes permanent."
        description={deleteAccountIntro}
      />
      <div className="shell">
        <div className="grid gap-6 pb-12 lg:pb-16">
          <PageSection title="Overview">
            <p>Last updated: {deleteAccountLastUpdated}</p>
            <p>{deleteAccountIntro}</p>
          </PageSection>

          {deleteAccountSections.map((section) => (
            <PageSection key={section.title} title={section.title}>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul className="list-disc space-y-3 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </PageSection>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
