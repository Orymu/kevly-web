import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-16 pt-6 lg:pb-24">{children}</main>
      <SiteFooter />
    </>
  );
}
