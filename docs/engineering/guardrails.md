# Guardrails

This repo should be easy for agents to change without silently degrading structure.

The rule is simple: repeated mistakes should become mechanical checks, not tribal knowledge.

## Current Guardrails

Current enforced gates:
- `npm run lint`
- `npm run build`

Current structural rules:
- route files stay under `src/app/**`
- shared UI primitives stay under `src/components/ui/**`
- site-wide config stays under `src/config/**`

## Planned Guardrails

These are the next guardrails to implement mechanically:

1. Canonical verification command
- `npm run verify`
- should run lint, typecheck, build, and guardrail checks

2. Structural guardrail script
- `scripts/check-guardrails.mjs`
- should fail on repeated repo-shape mistakes

3. Import boundary enforcement
- use ESLint restrictions or a small custom rule layer
- enforce app/component/config boundaries

4. Runtime evidence workflow
- lightweight web harness using Playwright
- required for medium/high-risk UI or navigation changes

## Candidate Mechanical Checks

- no bare `#section` links from shared navigation components
- route files export metadata unless intentionally exempt
- no raw production URLs outside approved config files
- no page-local marketing copy pushed into `src/config/site.ts`
- no route-to-component reverse imports

## Failure -> Harness Upgrade Rule

If the same class of issue appears 2+ times, promote it into one of:
- lint rule
- guardrail script
- scaffold/template update
- engineering doc update
- source-local README

Do not keep paying the same review cost manually.
