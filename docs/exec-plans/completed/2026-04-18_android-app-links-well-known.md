# Android App Links Well-Known

Status: Completed
Owner: Codex
Risk: medium

## Objective

Publish the Android `assetlinks.json` file for `kevly.app` so the production Android app can verify app links against the web domain.

## Acceptance Criteria

- [x] `public/.well-known/assetlinks.json` exists with the production Android package and signing fingerprint
- [x] The static site verification gate still passes

## Constraints

- Android only for now; do not add `apple-app-site-association`
- keep the change minimal and static-site friendly

## Plan

1. Add the Android asset links file under `public/.well-known/`
2. Run the web verification gate
3. Commit and push the web repo change

## Verification

- [x] `npm run verify`

## Notes

- The live apex domain currently redirects `kevly.app/.well-known/*` to `www.kevly.app/.well-known/*`; that redirect behavior is outside this repo and may still need a Vercel/domain fix for production app-link verification.
