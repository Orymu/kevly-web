# Google Play Button: Match Figma Badge

Status: In Progress
Owner: agent
Risk: medium

## Objective

Update the hero Google Play button to match the Figma design
(node `1919-4293`, the official "Get it on Google Play" badge, 135x40)
instead of the current hand-rolled custom button.

## Acceptance Criteria

- [ ] Hero button renders the official Google Play badge matching Figma.
- [ ] Reuses the existing `public/landing/app-store.svg` asset (no new packages).
- [ ] Accessible label preserved ("Get it on Google Play").
- [ ] Hover affordance preserved; responsive sizing preserved.
- [ ] `npm run verify` passes.

## Constraints

- Static-site scope only; no new dependencies.
- Keep changes focused to the hero button + its CSS.
- No real Play Store URL supplied yet; keep `href="#"` placeholder.

## Plan

1. Replace `GooglePlayButton` markup in `landing-page.tsx` with the badge image.
2. Update `.google-play-*` CSS to size/style the badge; drop now-unused text rules.
3. Update responsive overrides to scale the badge.
4. Run `npm run verify` and `npm run test:e2e:smoke`.

## Verification

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run verify`
- [ ] `npm run test:e2e:smoke`

## Notes

- Figma node is the standard Google Play badge; repo already had a byte-identical
  unused SVG at `public/landing/app-store.svg`, so we reuse it.
