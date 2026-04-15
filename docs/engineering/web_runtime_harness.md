# Web Runtime Harness

This document defines the lightweight runtime-evidence workflow for `kevly-web`.

The purpose is simple: code compiling is not the same as user-visible behavior being proven.

## Objectives

1. Prove the core static routes render.
2. Catch obvious navigation regressions.
3. Produce machine-checkable evidence for agent-authored UI work.

## Current Scope

The current harness is intentionally small.

It covers:
- `/`
- `/about`
- `/privacy`
- primary navigation between those routes and the homepage section links

It does not attempt:
- full visual regression
- multi-browser parity
- video-heavy artifact generation on every run

## Commands

Baseline runtime smoke:

```bash
npm run test:e2e:smoke
```

Alias for evidence collection:

```bash
npm run evidence:web
```

## What The Smoke Lane Does

1. Builds the Next.js app.
2. Starts the built app locally with `next start`.
3. Runs a Playwright smoke suite against the local server.
4. Writes artifacts under `_artifacts/playwright/`.

## Artifact Paths

- HTML report:
  - `_artifacts/playwright/report/`
- test output:
  - `_artifacts/playwright/test-results/`

## When Runtime Evidence Is Required

- medium-risk UI changes
- navigation changes
- shared layout or shell changes
- route additions or route rewiring

For low-risk docs or copy-only changes, code checks are usually enough.

## PR Evidence Expectations

When runtime evidence is relevant, include:
- command executed
- routes covered
- whether the smoke suite passed
- artifact path when screenshots, traces, or the HTML report are useful

## Failure -> Harness Upgrade Rule

If the same class of UI or navigation bug escapes this harness twice, upgrade the harness instead of relying on repeated reviewer vigilance.

Examples:
- add another smoke assertion
- add route coverage
- add a stricter artifact policy
- add a structural lint if the failure is static
