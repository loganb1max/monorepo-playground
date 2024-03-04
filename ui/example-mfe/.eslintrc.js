const { join } = require("node:path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: join(__dirname, "./tsconfig.lint.json"),
  },
};
