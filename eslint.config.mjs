import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Allow any types in specific cases
      "@typescript-eslint/no-explicit-any": [
        "warn",
        {
          ignoreRestArgs: true,
        },
      ],

      // Don't block builds for unused vars/imports
      "@typescript-eslint/no-unused-vars": [
        "warn", // ⬅️ changed from "error" → "warn"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off", // disable base rule (to avoid conflict)
    },
  },
  {
    files: ["**/api/**/*.ts", "**/api/**/*.tsx"],
    rules: {
      // More lenient for API routes
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
