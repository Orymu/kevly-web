#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const failures = [];

function walk(dir, predicate = () => true) {
  const results = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...walk(fullPath, predicate));
      continue;
    }

    if (predicate(fullPath)) {
      results.push(fullPath);
    }
  }

  return results;
}

function rel(filePath) {
  return path.relative(repoRoot, filePath).replaceAll(path.sep, "/");
}

function read(filePath) {
  return readFileSync(filePath, "utf8");
}

function fail(message) {
  failures.push(message);
}

function checkSharedSiteFragmentLinks() {
  const siteFiles = walk(path.join(repoRoot, "src/components/site"), (filePath) =>
    filePath.endsWith(".tsx")
  );

  for (const filePath of siteFiles) {
    const content = read(filePath);

    if (/href=\{?\s*["']#/.test(content)) {
      fail(
        `${rel(filePath)} uses a bare section fragment. Shared site navigation must use route-safe links like "/#section".`
      );
    }
  }
}

function checkRouteMetadata() {
  const exemptRoutes = new Set(["src/app/page.tsx"]);
  const routeFiles = walk(path.join(repoRoot, "src/app"), (filePath) =>
    filePath.endsWith("/page.tsx") || filePath.endsWith("\\page.tsx")
  );

  for (const filePath of routeFiles) {
    const relativePath = rel(filePath);

    if (exemptRoutes.has(relativePath)) {
      continue;
    }

    const content = read(filePath);
    const hasMetadata =
      /export\s+const\s+metadata\s*:/.test(content) ||
      /export\s+(async\s+)?function\s+generateMetadata\s*\(/.test(content);

    if (!hasMetadata) {
      fail(
        `${relativePath} does not export metadata. Static routes should export metadata unless explicitly exempted in the guardrail script.`
      );
    }
  }
}

function checkProductionUrls() {
  const approvedFiles = new Set(["src/config/site.ts"]);
  const sourceFiles = walk(path.join(repoRoot, "src"), (filePath) =>
    filePath.endsWith(".ts") || filePath.endsWith(".tsx")
  );

  for (const filePath of sourceFiles) {
    const relativePath = rel(filePath);

    if (approvedFiles.has(relativePath)) {
      continue;
    }

    const content = read(filePath);

    if (content.includes("https://kevly.app")) {
      fail(
        `${relativePath} hardcodes the production URL. Move production URLs into approved config files.`
      );
    }
  }
}

function checkSiteConfigExports() {
  const siteConfigPath = path.join(repoRoot, "src/config/site.ts");

  if (!statSync(siteConfigPath).isFile()) {
    fail("src/config/site.ts is missing.");
    return;
  }

  const content = read(siteConfigPath);
  const exportedValues = [...content.matchAll(/export\s+const\s+([A-Za-z0-9_]+)/g)].map(
    (match) => match[1]
  );
  const disallowedExports = exportedValues.filter((name) => name !== "siteConfig");

  if (disallowedExports.length > 0) {
    fail(
      `src/config/site.ts exports additional values (${disallowedExports.join(", ")}). Keep page-local content out of site config.`
    );
  }
}

checkSharedSiteFragmentLinks();
checkRouteMetadata();
checkProductionUrls();
checkSiteConfigExports();

if (failures.length > 0) {
  console.error("Guardrail check failed:\n");

  for (const failure of failures) {
    console.error(`- ${failure}`);
  }

  process.exit(1);
}

console.log("Guardrail checks passed.");
