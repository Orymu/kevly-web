# Kevly Web

Static marketing-site scaffold for `kevly.app`, built for Vercel with Next.js App Router, Tailwind CSS v4, and `shadcn/ui`.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `shadcn/ui`-compatible component structure

## Why This Shape

This repo is set up for a landing page plus a few static pages, not a bloated marketing platform.

- Route files stay thin.
- Reusable page sections live in `src/components/marketing`.
- Site-wide config stays small in `src/config/site.ts`.
- Reusable UI primitives live in `src/components/ui`.
- Static pages live as direct routes in `src/app`.

That gives you a clean path to add about, privacy, legal, waitlist, and future product pages without turning the homepage into a monolith or inventing a CMS you do not need.

## Project Structure

```text
.
├── components.json
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── home-content.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── privacy
│   │       └── page.tsx
│   ├── components
│   │   ├── marketing
│   │   ├── site
│   │   └── ui
│   ├── config
│   │   └── site.ts
│   └── lib
│       └── utils.ts
└── package.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run typecheck:

```bash
npm run typecheck
```

Run production build validation:

```bash
npm run build
```

Run the canonical local gate:

```bash
npm run verify
```

## Documentation

Harness and engineering guidance now lives in-repo:

- [AGENTS.md](/home/fikrilal/devs/work/orymu/kevly-web/AGENTS.md)
- [docs/README.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/README.md)
- [docs/engineering/project_architecture.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/project_architecture.md)
- [docs/engineering/guardrails.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/guardrails.md)
- [docs/engineering/agent_pr_loop.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/agent_pr_loop.md)
- [docs/exec-plans/README.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/exec-plans/README.md)

## shadcn/ui

This repo already includes the files `shadcn/ui` expects:

- `components.json`
- aliases for `@/*`
- `src/lib/utils.ts`
- starter UI primitives in `src/components/ui`

After dependencies are installed, you can add more components with:

```bash
npx shadcn@latest add button input textarea dialog
```

## Recommended Next Steps

1. Replace the placeholder homepage, about, and privacy copy with real Kevly copy.
2. Decide whether the primary CTA stays a contact link or becomes a waitlist flow.
3. Add any remaining static pages directly under `src/app`.
4. Add analytics only when you are ready to measure conversion.

## Deployment

This project is intended for Vercel. The default Next.js deployment flow is enough:

1. Push the repo.
2. Import it into Vercel.
3. Set the production domain to `kevly.app`.
4. Add environment variables only when you introduce forms, analytics, or backend integrations.
