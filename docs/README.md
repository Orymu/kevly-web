# Docs Index

This directory is the repository-local system of record for agent-operable engineering guidance.

Use it to keep important context in the repo instead of in chat, memory, or ad hoc review comments.

## Structure

- `engineering/`
  - durable engineering rules and workflow guidance
- `exec-plans/`
  - plans for non-trivial changes

## Start Here

- Architecture: `engineering/project_architecture.md`
- Guardrails: `engineering/guardrails.md`
- Agent PR loop: `engineering/agent_pr_loop.md`
- Runtime evidence: `engineering/web_runtime_harness.md`
- Execution plans: `exec-plans/README.md`

## Rules

- Keep docs short and specific.
- Prefer updating an existing doc over creating near-duplicate guidance.
- If the same agent or review failure repeats, promote it into docs and then into mechanical enforcement when justified.
