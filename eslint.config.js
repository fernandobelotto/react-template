import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import testingLibrary from "eslint-plugin-testing-library";
import jsxAlly from "eslint-plugin-jsx-a11y";
import * as parser from "@typescript-eslint/parser";
import tailwind from "eslint-plugin-tailwindcss";
import vitest from "@vitest/eslint-plugin";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["dist", "**/*.config.ts"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: "./tsconfig.app.json",
      },
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxAlly,
      "testing-library": testingLibrary,
      unicorn: unicorn,
      sonarjs: sonarjs,
      security: security,
      import: importPlugin,
      tailwindcss: tailwind,
      "@eslint/js": js,
      vitest: vitest,
    },
    rules: {
      ...tseslint.configs.strict.rules,
      ...tseslint.configs.stylistic.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxAlly.configs.recommended.rules,
      ...testingLibrary.configs["flat/react"].rules,
      ...unicorn.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...security.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...tailwind.configs.recommended.rules,
      ...js.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unicorn/prefer-query-selector": "off",
      "unicorn/filename-case": "off",
      "react-hooks/rules-of-hooks": "error",
      "max-params": ["error", 1],
      "no-empty-function": "error",
    },
  },
];
