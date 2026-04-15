# Kevly Implementation Plan

## Objective

Stand up `kevly.app` as a Vercel-first marketing site with a disciplined, reusable structure:

- Next.js App Router for routing and metadata ownership
- `shadcn/ui` for UI primitives
- Tailwind CSS v4 tokens in `src/app/globals.css`
- Thin route files with shared layout and page composition in `src/components`

## Phase 1: Foundation

1. Scaffold a Next.js app with TypeScript, ESLint, Tailwind CSS v4, and App Router.
2. Add shadcn-compatible setup:
   - `components.json`
   - `src/lib/utils.ts`
   - UI primitives under `src/components/ui`
3. Define brand tokens for color, typography, spacing, and radii in CSS variables.

## Phase 2: Marketing Architecture

1. Keep route files minimal.
2. Keep only true site-wide data in `src/config/site.ts`.
3. Keep page-specific copy close to the page that owns it.
4. Split the homepage into focused sections:
   - header
   - hero
   - features
   - process / explanation
   - CTA
   - footer

## Phase 3: Static Pages

1. Add `about`, `privacy`, and any other static company/legal pages as direct routes.
2. Reuse shared site-shell and page-section primitives for consistency.
3. Keep legal content and company copy in the route files until editing pressure says otherwise.

## Phase 4: Conversion Surface

1. Replace placeholder copy with real positioning, proof, and objections.
2. Add a waitlist or contact flow.
3. Add Vercel Analytics and Speed Insights after the narrative is stable.

## Phase 5: Quality Gates

1. Run lint in CI.
2. Add a Playwright smoke test for homepage rendering and CTA visibility.
3. Add metadata, sitemap, robots, and OG image generation before launch.

## Proposed Directory Shape

```text
src/
  app/
    about/page.tsx
    privacy/page.tsx
    layout.tsx
    page.tsx
    globals.css
  components/
    marketing/
    site/
    ui/
  config/
    site.ts
  lib/
    utils.ts
```
