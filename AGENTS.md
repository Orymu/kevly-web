# Repository Guidelines

## Scope And Philosophy

- This repo is a static marketing website for `kevly.app`.
- Optimize for clarity, correctness, and low maintenance cost.
- Prefer small, reversible changes.
- Do not introduce CMS, MDX, dynamic content systems, or backend complexity unless explicitly requested.
- Keep the architecture boring and legible. Agents should not invent flexibility the repo does not need.

## Current Architecture

- Routes live under `src/app/**`.
- Shared site chrome and page scaffolding live under `src/components/site/**`.
- Marketing sections live under `src/components/marketing/**`.
- Reusable UI primitives live under `src/components/ui/**`.
- Site-wide constants live under `src/config/**`.
- Helpers live under `src/lib/**`.

## Boundary Rules

- `src/app/**` may compose from `components`, `config`, and `lib`.
- `src/components/ui/**` must stay primitive-only:
  - do not import from `src/app/**`
  - do not import from `src/components/marketing/**`
  - do not import from `src/components/site/**`
- `src/components/marketing/**` and `src/components/site/**` must not import from `src/app/**`.
- `src/config/**` must not import from routes or components.
- `src/config/site.ts` is for true site-wide configuration only, not page-local copy dumps.

## Implementation Rules

- Keep route files thin.
- Keep page-specific content near the route that owns it.
- Reuse existing primitives before adding new ones.
- Do not mix speculative refactors into requested work.
- If a rule has been repeated twice in review, promote it into docs, scripts, or linting instead of relying on memory.

## Verification

Use native project commands:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run lint:guardrails`
- `npm run verify`

For non-trivial changes, use `npm run verify` before claiming completion.

## Delivery Loop

- For non-trivial work, write an execution plan first under `docs/exec-plans/active/`.
- Keep changes focused and easy to review.
- For user-visible UI or navigation changes, be ready to provide runtime evidence once the web runtime harness is added.

## Documentation Map

Start here:
- `docs/README.md`

High-signal docs:
- Architecture: `docs/engineering/project_architecture.md`
- Guardrails: `docs/engineering/guardrails.md`
- Agent PR loop: `docs/engineering/agent_pr_loop.md`
- Execution plans: `docs/exec-plans/README.md`

Keep this file small. Put detail in `docs/**`.
