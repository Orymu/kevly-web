import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function PageSection({ title, children, className }: PageSectionProps) {
  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-border/70 bg-background/75 p-6 backdrop-blur-sm sm:p-8",
        className
      )}
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
