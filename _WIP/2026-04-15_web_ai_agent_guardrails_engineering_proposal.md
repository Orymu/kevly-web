# Engineering Proposal: Strict AI-Agent Guardrails For `kevly-web`

Date: 2026-04-15
Status: Draft proposal
Scope: repository harness, documentation, verification, and boundary enforcement for AI-assisted development

## 1. References

Primary external reference:
- OpenAI, "Harness engineering: leveraging Codex in an agent-first world" (February 11, 2026)
  - https://openai.com/index/harness-engineering/

Relevant internal reference repo:
- `/home/fikrilal/devs/work/orymu/kevly-mobile`

Specific mobile reference points:
- `AGENTS.md`
- `docs/engineering/guardrails.md`
- `docs/engineering/agent_pr_loop.md`
- `docs/engineering/architecture_linting.md`
- `docs/engineering/mobile_runtime_harness.md`
- `_WIP/2026-03-07_openai_harness_workflow_adoption_proposal.md`

## 2. Decision Summary

We should add strict agent guardrails to `kevly-web`, but in a web-appropriate form.

Adopt:
- short `AGENTS.md` as operating contract and index
- repository-local docs as the system of record
- mechanical enforcement over prose-only guidance
- explicit plans for non-trivial work
- a canonical verification gate
- lightweight runtime evidence for UI changes
- failure -> harness-upgrade feedback loops
- agent legibility as a repo-level design goal

Do not copy blindly:
- OpenAI's minimal blocking merge philosophy
- mobile-specific runtime harness complexity
- large documentation trees before the repo earns them
- rules that are stricter than the codebase warrants

Recommended stance for this repo:
- `agent-friendly`
- `human-governed`
- `mechanically enforced`
- `small-repo pragmatic`

## 3. Why This Proposal Exists

The OpenAI article gets the important part right: the leverage comes from the harness, not from telling the model to "be careful."

The article's strongest ideas for this repo are:
- keep `AGENTS.md` small and use it as a map, not an encyclopedia
- move important knowledge into versioned repo-local docs
- enforce invariants mechanically
- optimize for agent legibility
- promote repeated review pain into tooling or docs

The web repo is currently too early-stage to need the full mobile harness, but it is also exactly the right time to install the guardrails that will keep future agent output from drifting.

If we wait until there are many pages, experiments, and contributors, the retrofit cost will be higher.

## 4. Current State Assessment

## 4.1 Current Strengths

The repo already has a good foundation:
- narrow scope: static marketing site, not a CMS platform
- clean route shape under `src/app`
- reusable sections under `src/components/marketing`
- reusable site shell pieces under `src/components/site`
- UI primitives under `src/components/ui`
- small site-wide config in `src/config/site.ts`
- passing `lint` and `build`

That foundation is already more legible than many early-stage web repos.

## 4.2 Current Gaps

What is missing today:
- no repository-local `AGENTS.md`
- no docs index or engineering docs
- no explicit execution-plan workflow
- no canonical `verify` command
- no structural linting beyond standard ESLint
- no route/component boundary enforcement
- no runtime evidence workflow for UI changes
- no PR/evidence discipline documented in-repo
- no recurring cleanup rule for agent-generated drift

## 4.3 Risk If We Do Nothing

Without guardrails, the likely failure mode is not catastrophic complexity. It is slower, more annoying drift:
- page-local content gets pushed into random global config files
- `src/app` and `src/components` start importing each other in both directions
- nav/footer bugs like fragment-only links reappear
- styling and content patterns become inconsistent
- agents cargo-cult existing patterns, including the bad ones
- review comments repeat because no invariant gets promoted into the harness

## 5. Proposal

## 5.1 Adopt A Four-Layer Harness Model

### Layer 1: Operating contract

Add a short `AGENTS.md` at repo root.

Purpose:
- define non-negotiable repo rules
- index deeper docs
- keep context entry small and stable

It should be around 80-140 lines, not a giant manual.

### Layer 2: Repo-local system of record

Add a small `docs/` tree with only the sections this repo can actually maintain.

Recommended initial shape:

```text
docs/
  README.md
  engineering/
    project_architecture.md
    guardrails.md
    agent_pr_loop.md
    web_runtime_harness.md
  exec-plans/
    README.md
    _template.md
    active/
    completed/
```

This should mirror the good parts of `kevly-mobile`, but much smaller.

### Layer 3: Mechanical gates

Add one canonical gate:

```bash
npm run verify
```

It should become the meaning of "this PR is healthy."

Recommended pipeline:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run lint:guardrails`
- later: `npm run test:e2e:smoke`

This repo should not make humans remember multiple ad hoc commands for completion.

### Layer 4: Runtime evidence

For UI or navigation-affecting work, add a lightweight browser harness using Playwright.

This is the web analogue of the mobile runtime harness:
- deterministic smoke runs
- screenshots when relevant
- machine-checkable navigation evidence

Do not overbuild this on day one.

For this repo, runtime evidence should mean:
- the app boots
- the core static routes render
- main navigation links work
- no obvious runtime errors

## 5.2 Add Strict Boundary Guardrails

The OpenAI article is correct here: agents benefit from strict boundaries and predictable structure.

For `kevly-web`, the boundaries do not need to be deep. They do need to be explicit.

Recommended boundary rules:

1. `src/app/**` is the route/composition boundary
- may import from `src/components/**`, `src/config/**`, `src/lib/**`

2. `src/components/ui/**` is primitive-only
- must not import from `src/app/**`
- must not import from `src/components/marketing/**`
- must not import from `src/components/site/**`
- may import from `src/lib/**`

3. `src/components/marketing/**`
- must not import from `src/app/**`
- may import from `src/components/ui/**`, `src/config/**`, `src/lib/**`

4. `src/components/site/**`
- must not import from `src/app/**`
- may import from `src/components/ui/**`, `src/config/**`, `src/lib/**`

5. `src/config/**`
- must not import from components or routes
- only holds site-wide constants and shared configuration
- must not become a dumping ground for page-local copy

6. Route-local structured content
- should live beside the route that owns it, or in a route-local module such as `src/app/home-content.ts`
- should not be pushed into `src/config/site.ts` unless it is truly site-wide

These rules are strict enough to prevent drift and small enough to explain.

## 5.3 Make Guardrails Mechanical, Not Advisory

The mobile repo gets this mostly right. `kevly-web` should do the same with web-native tooling.

Recommended enforcement:

### ESLint boundary rules

Use `no-restricted-imports` or a small custom ESLint rule set to enforce:
- app/component boundary rules
- primitive/component import rules
- config cannot import UI

### Structural guardrail script

Add:

```text
scripts/check-guardrails.mjs
```

Use it for checks that are simpler as repository scans than ESLint rules.

Candidate checks:
- shared navigation components must use route-safe section links (`/#section`), not bare `#section`
- every route file under `src/app/**/page.tsx` must export `metadata` unless intentionally exempt
- no hardcoded production URLs outside approved config files
- no raw color literals in `.tsx` files
- no page-local marketing copy added to `src/config/site.ts`

That last one does not need to be perfect AST analysis on day one. Even a narrow regex/path-based guardrail is better than repeated human reminders.

### Canonical verification script

Add:

```text
scripts/verify.mjs
```

and wire:

```json
"scripts": {
  "typecheck": "tsc --noEmit",
  "lint:guardrails": "node scripts/check-guardrails.mjs",
  "verify": "node scripts/verify.mjs"
}
```

This should be the equivalent of mobile's `tool/verify.dart`.

## 5.4 Add A Web Runtime Harness

The mobile repo uses a runtime harness because "code compiles" does not prove UX behavior.

The same principle applies to the web repo, but the implementation should be lighter.

Recommended initial harness:
- Playwright
- one smoke spec covering:
  - `/`
  - `/about`
  - `/privacy`
  - primary nav links
  - page title / key heading presence

Add:

```text
docs/engineering/web_runtime_harness.md
```

This doc should define:
- when runtime evidence is required
- the baseline smoke command
- where screenshots/videos/artifacts are written
- what to attach to PRs for medium/high-risk UI changes

Recommended first commands:
- `npm run test:e2e:smoke`
- `npm run evidence:web`

Do not attempt a complex observability stack yet. This is a static marketing site. That would be cargo culting the OpenAI article instead of learning from it.

## 5.5 Add An Explicit Agent PR Loop

Reuse the mobile pattern, adapted for web.

Add:
- `docs/engineering/agent_pr_loop.md`

It should define:

1. task intake
- clear acceptance criteria
- risk classification
- plan required for non-trivial work

2. implementation expectations
- small, reversible changes
- no speculative refactors
- improve legibility when touching confusing boundaries

3. preflight
- `npm run verify`

4. self-review
- acceptance criteria met
- boundary rules respected
- no repeated review smell left unaddressed

5. runtime evidence
- required for medium/high-risk UI/navigation/layout changes

6. merge discipline
- `low`: passing checks usually sufficient
- `medium`: passing checks + review recommended
- `high`: human review required

This is where we should intentionally diverge from OpenAI's merge philosophy.
Their low-blocking gate model is optimized for their throughput and risk tolerance. This repo should stay stricter.

## 5.6 Add A Failure -> Harness Upgrade Rule

This is one of the highest-value ideas from both OpenAI and the mobile repo.

Make it explicit:

If the same agent failure, review comment, or bug class appears 2+ times, promote it into one of:
- lint rule
- verify script
- scaffold/template update
- engineering doc update
- source-local `README.md`

This should be stated in:
- `AGENTS.md`
- `docs/engineering/agent_pr_loop.md`
- `docs/engineering/guardrails.md`

Without this rule, agent quality does not compound. It just oscillates.

## 6. What We Should Reuse From `kevly-mobile`

Reuse the pattern:
- small `AGENTS.md`
- docs as system of record
- explicit guardrails doc
- explicit PR loop doc
- canonical verify command
- runtime evidence policy
- architecture linting as a first-class concept

Do not reuse the mobile-specific weight:
- custom lint plugin complexity
- mobile emulator tooling
- Firebase/runtime-device preflight logic
- large domain-doc trees before this repo needs them

The right transfer is shape, not scale.

## 7. Proposed Files To Add

## Phase 1: Immediate

1. `AGENTS.md`
2. `docs/README.md`
3. `docs/engineering/project_architecture.md`
4. `docs/engineering/guardrails.md`
5. `docs/engineering/agent_pr_loop.md`
6. `docs/exec-plans/README.md`
7. `docs/exec-plans/_template.md`
8. `scripts/verify.mjs`
9. `scripts/check-guardrails.mjs`

## Phase 2: Runtime Evidence

1. `docs/engineering/web_runtime_harness.md`
2. Playwright setup
3. smoke test for core static routes
4. artifact output directory for screenshots or traces

## Phase 3: Delivery Hygiene

1. `.github/pull_request_template.md`
2. CI job running `npm run verify`
3. CI job running web smoke tests when added

## 8. Proposed Guardrail Rules For This Repo

These are the concrete rules I would enforce first.

### Rule set A: Boundary rules

- `ui` cannot import `marketing`, `site`, or `app`
- `marketing` cannot import `app`
- `site` cannot import `app`
- `config` cannot import `components` or `app`

### Rule set B: Content ownership rules

- `src/config/site.ts` is only for site-wide constants
- route-local copy stays with the route
- static legal/company pages are direct route files, not pseudo-CMS content blobs

### Rule set C: Navigation rules

- shared site nav/footer may not use bare `#fragment` links
- internal routes use `next/link`
- external links must declare intent clearly and should be centralized if reused

### Rule set D: Metadata rules

- each static route exports metadata
- global metadata stays in `src/app/layout.tsx`

### Rule set E: Token/style rules

- no raw color literals in `.tsx`
- brand tokens live in `src/app/globals.css`
- arbitrary style logic should not leak into config files

### Rule set F: Delivery rules

- non-trivial work needs a plan
- completion claims require `npm run verify`
- medium/high-risk UI work needs runtime evidence

## 9. What Not To Enforce Yet

Avoid overfitting guardrails to a repo this small.

Do not add yet:
- giant docs taxonomy
- quality score dashboards
- doc cross-link linters
- file-size enforcement
- video capture pipelines
- complex visual regression baselines
- custom AST plugins unless ESLint and simple scripts are insufficient

The goal is strict guardrails, not theatrical complexity.

## 10. Implementation Plan

### Phase 1: Establish the operating contract

Do first.

1. Add `AGENTS.md`
2. Add minimal docs tree and index
3. Document architecture, guardrails, PR loop, and execution-plan workflow

Expected outcome:
- the agent has a stable map of the repo
- important rules move into the repo instead of living in chat

### Phase 2: Add mechanical enforcement

1. Add `typecheck` and `verify` scripts
2. Add `check-guardrails.mjs`
3. Add ESLint import restrictions
4. Wire all of it into CI

Expected outcome:
- repeated structural mistakes fail fast
- review cost drops

### Phase 3: Add runtime proof

1. Add Playwright
2. Add smoke coverage for `/`, `/about`, `/privacy`
3. Document runtime evidence expectations

Expected outcome:
- agents can prove basic user-visible behavior instead of only proving static correctness

### Phase 4: Start compounding

1. Track repeated review pain
2. Promote recurring failures into lint/check/doc updates
3. Periodically remove stale docs and weak patterns

Expected outcome:
- the harness gets stronger with use instead of noisier

## 11. Success Criteria

This proposal is successful if:
- agent-authored changes become easier to review
- route/component boundaries stay clean as the site grows
- page-local content does not drift into global config again
- completion claims always come with a stable verify command
- UI-impacting changes can be proven with browser evidence
- repeated review comments decline because rules are promoted into the harness

## 12. Final Recommendation

Approve this direction, but implement it in two waves:

Wave 1:
- `AGENTS.md`
- docs skeleton
- `verify` script
- guardrail script
- ESLint boundary rules

Wave 2:
- Playwright runtime harness
- PR template
- CI parity

This is the right tradeoff for `kevly-web`.

It takes the important lesson from OpenAI's harness article and the useful patterns already proven in `kevly-mobile`, while staying proportional to a small static marketing-site codebase.
