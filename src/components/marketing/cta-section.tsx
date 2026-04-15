import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="shell py-12 lg:py-16">
      <div className="overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground shadow-[0_28px_80px_-28px_rgba(35,48,92,0.7)] sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-primary-foreground/70">
              Next step
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              Use this scaffold as the default shape for the first real Kevly launch page.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-primary-foreground/78 sm:text-lg">
              The current homepage is intentionally thin on product specifics. The
              architecture is ready for real content, proof, waitlist capture, and
              future pages without rewriting the stack.
            </p>
          </div>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-full rounded-full lg:w-auto"
          >
            <Link href={siteConfig.contactHref}>
              Contact Kevly
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
