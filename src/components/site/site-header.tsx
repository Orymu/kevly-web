import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="shell sticky top-0 z-20 pt-6">
      <div className="flex items-center justify-between rounded-full border border-border/70 bg-background/75 px-4 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            K
          </div>
          <div>
            <p className="font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              marketing system
            </p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link href={siteConfig.contactHref}>Contact</Link>
        </Button>
      </div>
    </header>
  );
}
