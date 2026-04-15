#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const tasks = [
  ["lint", ["run", "lint"]],
  ["typecheck", ["run", "typecheck"]],
  ["guardrails", ["run", "lint:guardrails"]],
  ["build", ["run", "build"]],
];

for (const [label, args] of tasks) {
  console.log(`\n[verify] running ${label}`);

  const result = spawnSync(npmCommand, args, {
    stdio: "inherit",
    cwd: process.cwd(),
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("\n[verify] all checks passed");
