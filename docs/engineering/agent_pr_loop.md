# Agent PR Loop

This document defines the default delivery loop for agent-authored changes in `kevly-web`.

## 1. Task Intake

- Write a clear task statement.
- If the work is non-trivial, create a plan in `docs/exec-plans/active/`.
- Classify risk before implementation:
  - `low`: docs, copy, small refactors, local styling, static content tweaks
  - `medium`: navigation, route structure, metadata, shared components, user-visible layout changes
  - `high`: auth, payments, production infra, security-sensitive behavior, anything beyond the current static-site scope

## 2. Implement

- Keep changes small and reversible.
- Respect architecture boundaries from `AGENTS.md` and `project_architecture.md`.
- Do not mix cleanup or speculative refactors into the requested change.

## 3. Preflight

Before claiming completion, run the relevant checks:

```bash
npm run verify
```

## 4. Self-Review

Confirm:
- acceptance criteria are fully met
- route/component/config boundaries still make sense
- no repeated known anti-pattern was reintroduced
- the diff is easy to review

## 5. Evidence Expectations

- `low`: code checks are usually enough
- `medium`: code checks plus targeted runtime evidence once the web runtime harness lands
- `high`: code checks, runtime evidence, and human review required

## 6. Merge Discipline

- `low`: passing checks may be enough
- `medium`: review recommended
- `high`: human review required

This repo should stay stricter than the high-throughput OpenAI internal model.

## 7. Harness Upgrade Rule

If the same bug, review comment, or agent mistake appears 2+ times, do not leave it as a social rule.

Promote it into:
- docs
- linting
- guardrail scripts
- scaffolding

That is how agent quality compounds instead of drifting.
