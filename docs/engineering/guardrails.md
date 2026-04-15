# Guardrails

This repo should be easy for agents to change without silently degrading structure.

The rule is simple: repeated mistakes should become mechanical checks, not tribal knowledge.

## Current Guardrails

Current enforced gates:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run lint:guardrails`
- `npm run verify`
- `npm run test:e2e:smoke` for browser smoke coverage
- CI parity for `verify` and Playwright smoke on pull requests and `main`

Current structural rules:
- route files stay under `src/app/**`
- shared UI primitives stay under `src/components/ui/**`
- site-wide config stays under `src/config/**`
- import boundaries are enforced in ESLint for `app`, `components`, and `config`
- structural repo-shape checks run through `scripts/check-guardrails.mjs`

## Canonical Gate

Use:

```bash
npm run verify
```

This should be the default meaning of "the change is healthy locally."

Current pipeline:
- `npm run lint`
- `npm run typecheck`
- `npm run lint:guardrails`
- `npm run build`

## Implemented Mechanical Checks

Current guardrail script checks:
- shared site components may not use bare `#section` links
- route files under `src/app/**/page.tsx` must export metadata unless explicitly exempt
- `https://kevly.app` may only appear in approved config files
- `src/config/site.ts` may only export `siteConfig`

## Runtime Evidence

Use:

```bash
npm run test:e2e:smoke
```

or:

```bash
npm run evidence:web
```

Artifacts are written under `_artifacts/playwright/`.

For the runtime workflow and evidence expectations, see `web_runtime_harness.md`.

## CI Parity

Current repository automation:
- `.github/workflows/verify.yml` runs `npm run verify`
- `.github/workflows/playwright-smoke.yml` runs `npm run test:e2e:smoke`
- Playwright artifacts are uploaded from `_artifacts/playwright/`

## Planned Next Guardrails

These are the next guardrails to add after the current phase:

1. Stronger browser/runtime coverage
- add richer route assertions or broader browser coverage when the repo earns it

## Candidate Mechanical Checks

- no raw color literals in `.tsx` files
- stronger route-to-component reverse import detection
- more precise page-local content ownership checks for config modules

## Failure -> Harness Upgrade Rule

If the same class of issue appears 2+ times, promote it into one of:
- lint rule
- guardrail script
- scaffold/template update
- engineering doc update
- source-local README

Do not keep paying the same review cost manually.
