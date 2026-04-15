# Repository Guidelines

## Scope And Philosophy

- This repo is a static marketing website for `kevly.app`.
- Optimize for clarity, correctness, and low maintenance cost.
- Prefer small, reversible changes.
- Do not introduce CMS, MDX, dynamic content systems, or backend complexity unless explicitly requested.
- Keep the architecture boring and legible. Agents should not invent flexibility the repo does not need.

## First-Run Workflow

Before making non-trivial changes:

1. Read `docs/README.md`.
2. Read `docs/engineering/project_architecture.md`, `docs/engineering/guardrails.md`, and `docs/engineering/agent_pr_loop.md`.
3. Classify the task risk using the rules below.
4. If the task is non-trivial, create an execution plan under `docs/exec-plans/active/`.
5. Implement with focused, reversible changes.
6. Run the required verification gates before claiming completion.

Non-trivial work includes:
- route additions or rewiring
- shared component changes
- layout or navigation changes
- new UI primitives or new section patterns
- any change spanning multiple files

Use `docs/engineering/web_runtime_harness.md` whenever runtime evidence is required.

## Risk Classification

- `low`: docs, copy-only edits, isolated content tweaks, small styling changes with no navigation or layout impact
- `medium`: navigation, route structure, metadata, shared component edits, user-visible layout changes, homepage section changes
- `high`: auth, billing, security-sensitive behavior, production infra, or any work beyond the current static-site scope

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
- `npm run test:e2e:smoke` for runtime proof on UI/navigation work

Canonical rule:
- `npm run verify` is the default local health gate for any non-trivial change.
- `npm run test:e2e:smoke` is additionally required for `medium` or `high` risk UI, navigation, shared layout, or route work.

## Delivery Loop

- For non-trivial work, write an execution plan first under `docs/exec-plans/active/`.
- Keep changes focused and easy to review.
- For medium/high-risk UI or navigation changes, use the web runtime harness.
- If the same class of mistake appears 2+ times, upgrade the harness with docs, linting, scripts, or scaffold changes.

## Documentation Map

Read first for non-trivial work:
- `docs/README.md`

High-signal docs:
- Architecture: `docs/engineering/project_architecture.md`
- Guardrails: `docs/engineering/guardrails.md`
- Agent PR loop: `docs/engineering/agent_pr_loop.md`
- Runtime evidence: `docs/engineering/web_runtime_harness.md`
- Execution plans: `docs/exec-plans/README.md`

Keep this file small. Put detail in `docs/**`.
