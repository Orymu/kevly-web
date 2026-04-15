import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeatureGridProps = {
  features: Feature[];
  principles: Principle[];
};

export function FeatureGrid({ features, principles }: FeatureGridProps) {
  return (
    <section id="features" className="shell py-12 lg:py-16">
      <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="display-kicker">Foundation</p>
            <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-tight text-balance">
              A simple architecture that makes future static pages cheaper to build.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              This repo is scaffolded for a landing page first, with a direct path
              to about, privacy, legal, and other static pages without inventing a
              fake content platform around them.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div id="architecture" className="grid gap-4">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <Card key={principle.title} className="bg-card/90">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{principle.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
