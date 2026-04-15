import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("shell py-16 lg:py-24", className)}>
      <div className="max-w-3xl space-y-4">
        {eyebrow ? <p className="display-kicker">{eyebrow}</p> : null}
        <h1 className="font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
