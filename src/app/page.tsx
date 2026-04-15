import { CtaSection } from "@/components/marketing/cta-section";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { HeroSection } from "@/components/marketing/hero-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { PageShell } from "@/components/site/page-shell";
import {
  homeFeatures,
  homePrinciples,
  homeProcessSteps,
} from "@/app/home-content";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <FeatureGrid features={homeFeatures} principles={homePrinciples} />
      <ProcessSection steps={homeProcessSteps} />
      <CtaSection />
    </PageShell>
  );
}
