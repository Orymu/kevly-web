import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="shell py-12 lg:py-16">
      <div className="rounded-[2rem] border border-border/70 bg-background/75 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
        <div className="max-w-2xl space-y-3">
          <p className="display-kicker">Implementation path</p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-balance">
            Start with a few explicit static routes, then add complexity only when
            repetition makes it necessary.
          </h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            For an MVP with a landing page, about page, privacy policy, and a few
            more static pages, the right bias is straightforward route files plus
            shared UI. Not a CMS, not MDX, and not a site builder abstraction.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-dashed bg-card/70">
              <CardHeader>
                <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
