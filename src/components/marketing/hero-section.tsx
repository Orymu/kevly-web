import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const outcomeList = [
  "Sharper headline and positioning decisions",
  "Reusable sections for launch, waitlist, and pricing pages",
  "A codebase that scales without turning into CMS theater",
];

export function HeroSection() {
  return (
    <section className="shell grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
      <div className="space-y-8">
        <Badge>Vercel-first marketing stack</Badge>
        <div className="space-y-5">
          <p className="display-kicker">Clarity before growth hacks</p>
          <h1 className="max-w-3xl font-display text-5xl leading-none tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Build a landing page system that can survive the product getting real.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Kevly is positioned as a disciplined marketing surface: clear offer,
            reusable sections, and a stack that stays fast on Vercel without
            overbuilding on day one.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={siteConfig.contactHref}>
              Contact Kevly
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#architecture">See the architecture</Link>
          </Button>
        </div>

        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {outcomeList.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl bg-background/55 p-4 backdrop-blur-sm">
              <CheckCircle2 className="mt-0.5 size-4 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Card className="overflow-hidden border-primary/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.92),rgba(244,239,228,0.86))]">
        <CardContent className="p-0">
          <div className="border-b border-border/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Launch Narrative</p>
                <p className="text-sm text-muted-foreground">
                  The default homepage should explain the offer in under 15 seconds.
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Sparkles className="size-5" />
              </div>
            </div>
          </div>
          <div className="grid gap-4 p-6">
            <div className="rounded-[1.25rem] bg-primary px-5 py-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70">
                Value proposition
              </p>
              <p className="mt-3 text-xl font-semibold tracking-tight">
                Turn scattered product thinking into a convincing landing page system.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.25rem] border border-border/70 bg-background/80 p-5">
                <p className="text-sm font-medium text-foreground">Why this architecture</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Thin routes, composable sections, and shadcn primitives keep the
                  marketing layer readable while the product is still moving.
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-border/70 bg-background/80 p-5">
                <p className="text-sm font-medium text-foreground">What gets added later</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Waitlist forms, analytics, and more static pages only when the
                  MVP needs them.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
