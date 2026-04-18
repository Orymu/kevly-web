# Privacy Policy Page

Status: Completed
Owner: Codex
Risk: medium

## Objective

Replace the placeholder `/privacy` route with a real public-facing privacy policy page based on the current Kevly product behavior and the approved draft policy text.

## Acceptance Criteria

- [x] `/privacy` no longer contains placeholder copy.
- [x] The page presents the approved policy text in a readable static-page layout.
- [x] Policy content stays route-local instead of being pushed into global config.
- [x] The page includes a visible last-updated date and contact information.
- [x] Local verification passes.

## Constraints

- Keep the layout calm and highly readable rather than marketing-heavy.
- Do not introduce Markdown rendering or a CMS for this page.
- Avoid internal implementation wording on the public page.
- Keep route files thin and move policy content into the route-local slice.

## Plan

1. Create a route-local content module for the privacy policy structure.
2. Replace the placeholder `/privacy` route with a real policy page composed from shared site page primitives.
3. Run verification and smoke coverage to confirm the route remains healthy.

## Verification

- [x] `npm run verify`
- [x] `npm run test:e2e:smoke`

## Notes

- The current draft source is `_WIP/privacy-policy-draft.md`.
