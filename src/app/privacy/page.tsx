import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { PageSection } from "@/components/site/page-section";
import { PageShell } from "@/components/site/page-shell";
import {
  privacyPolicyIntro,
  privacyPolicyLastUpdated,
  privacyPolicySections,
} from "@/app/privacy/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kevly's privacy policy covering account information, receipt handling, permissions, retention, and user choices.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy matters more when money, receipts, and shared spaces are involved."
        description={privacyPolicyIntro}
      />
      <div className="shell">
        <div className="grid gap-6 pb-12 lg:pb-16">
          <PageSection title="Overview">
            <p>Last updated: {privacyPolicyLastUpdated}</p>
            <p>{privacyPolicyIntro}</p>
          </PageSection>

          {privacyPolicySections.map((section) => (
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
