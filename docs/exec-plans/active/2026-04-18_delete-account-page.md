# Delete Account Page

Status: Completed
Owner: Codex
Risk: medium

## Objective

Add a public `/delete-account` page that explains Kevly's account deletion flow for users and app-store compliance, based on the current mobile product behavior.

## Acceptance Criteria

- [x] A public static route exists at `/delete-account`.
- [x] The page explains how to request deletion in the app.
- [x] The page explains the 30-day grace period and cancellation behavior.
- [x] The page explains what is deleted and what may remain for shared-space integrity.
- [x] Local verification passes, including runtime smoke coverage for the new route.

## Constraints

- Keep the page clear and compliance-oriented rather than marketing-heavy.
- Use public-facing language only.
- Keep content route-local.
- Do not invent account-deletion behavior that does not exist in mobile/product flows.

## Plan

1. Create route-local content for the public delete-account instructions.
2. Add the `/delete-account` page using the existing site page primitives.
3. Extend smoke coverage to include the new route and rerun verification.

## Verification

- [x] `npm run verify`
- [x] `npm run test:e2e:smoke`

## Notes

- Source behavior is based on the current mobile Security and Privacy account-deletion flow.
