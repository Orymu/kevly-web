import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const appImportPatterns = [
  "@/app/*",
  "../app/*",
  "../../app/*",
  "../../../app/*",
];

const marketingImportPatterns = [
  "@/components/marketing/*",
  "../marketing/*",
  "../../marketing/*",
  "../../../marketing/*",
];

const siteImportPatterns = [
  "@/components/site/*",
  "../site/*",
  "../../site/*",
  "../../../site/*",
];

const componentImportPatterns = [
  "@/components/*",
  "../components/*",
  "../../components/*",
  "../../../components/*",
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: appImportPatterns,
              message: "UI primitives must not import from route files.",
            },
            {
              group: marketingImportPatterns,
              message: "UI primitives must not depend on marketing sections.",
            },
            {
              group: siteImportPatterns,
              message: "UI primitives must not depend on site shell components.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/components/marketing/**/*.{ts,tsx}", "src/components/site/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: appImportPatterns,
              message: "Components must not import from route files. Compose them from src/app instead.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/config/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: appImportPatterns,
              message: "Config modules must not import from route files.",
            },
            {
              group: componentImportPatterns,
              message: "Config modules must not import from components.",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
