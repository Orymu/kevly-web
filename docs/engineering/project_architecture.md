# Project Architecture

## Objective

Keep `kevly-web` easy to reason about for both humans and agents.

This repo is a static marketing site with a small number of pages. The architecture should reflect that reality instead of pretending to be a content platform.

## Design Principles

- Keep routes thin and compositional.
- Keep boundaries explicit.
- Keep page-local content close to the route that owns it.
- Keep site-wide config small.
- Prefer legibility over cleverness.

Agent legibility is a repo-level design goal:
- stable names
- obvious ownership
- predictable import directions
- repo-local documentation for important rules

## Directory Roles

```text
src/
  app/          route ownership, metadata, page composition
  components/
    marketing/  landing-page and campaign sections
    site/       shared shell, navigation, page scaffolding
    ui/         reusable primitives
  config/       site-wide constants only
  lib/          small shared helpers
```

## Boundary Policy

### `src/app/**`

- Owns routes and route metadata.
- May import from `components`, `config`, and `lib`.
- Should stay thin.

### `src/components/site/**`

- Owns shared site shell concerns such as header, footer, and static page scaffolding.
- Must not import from `src/app/**`.

### `src/components/marketing/**`

- Owns homepage and marketing-section composition pieces.
- Must not import from `src/app/**`.

### `src/components/ui/**`

- Owns reusable presentation primitives.
- Must not depend on route files or page-specific sections.

### `src/config/**`

- Owns true site-wide constants.
- Must not import UI or routes.
- Must not become the default place for page-specific copy.

## Content Ownership

- Site-wide metadata and nav config belong in `src/config/site.ts`.
- Route-local content belongs beside the route that owns it.
- Static pages such as `about` and `privacy` should be direct route files under `src/app/**`.

## What Not To Add Prematurely

- CMS integration
- MDX content layer
- generic page-builder abstractions
- unnecessary data fetching layers
- complex design-system governance

If the repo grows enough to justify those, document the change first and make it explicit.
