# Execution Plans

Use execution plans for non-trivial work.

This repo does not need plans for every small content tweak or tiny UI edit. It does need them for multi-step changes, structural refactors, or work where acceptance criteria are easy to lose halfway through implementation.

## When A Plan Is Required

- multi-file architecture changes
- boundary refactors
- major page rewrites
- guardrail or workflow changes
- work that is likely to span multiple commits or review rounds

## Directory Layout

- `active/`
  - plans currently in progress
- `completed/`
  - finished plans worth keeping as repo history
- `_template.md`
  - starting point for new plans

## Rules

- keep plans short
- record assumptions and checkpoints
- prefer phased, reversible steps
- move completed plans out of `active/`
