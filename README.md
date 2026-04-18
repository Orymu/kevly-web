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

Run browser smoke checks:

```bash
npm run test:e2e:smoke
```

Collect browser evidence artifacts:

```bash
npm run evidence:web
```

CI automation:
- `.github/workflows/verify.yml`
- `.github/workflows/playwright-smoke.yml`

## Documentation

Harness and engineering guidance now lives in-repo:

- [AGENTS.md](/home/fikrilal/devs/work/orymu/kevly-web/AGENTS.md)
- [docs/README.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/README.md)
- [docs/engineering/project_architecture.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/project_architecture.md)
- [docs/engineering/guardrails.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/guardrails.md)
- [docs/engineering/agent_pr_loop.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/agent_pr_loop.md)
- [docs/engineering/web_runtime_harness.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/engineering/web_runtime_harness.md)
- [docs/exec-plans/README.md](/home/fikrilal/devs/work/orymu/kevly-web/docs/exec-plans/README.md)
