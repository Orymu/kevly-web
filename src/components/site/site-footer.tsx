import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="shell border-t border-border/70 py-8">
      <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>Built as a lean marketing surface on Next.js, shadcn/ui, and Vercel.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href={siteConfig.contactHref} className="hover:text-foreground">
            Contact
          </Link>
          <Link href={siteConfig.url} className="hover:text-foreground">
            kevly.app
          </Link>
        </div>
      </div>
    </footer>
  );
}
