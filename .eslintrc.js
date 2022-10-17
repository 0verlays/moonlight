module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  ignorePatterns: [
    "node_modules",
    "coverage/**/*",
    "dist/**/*",
    "types/**/*",
    "/**/*.js",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    jsx: true,
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    "no-console": 1,
    "no-unused-vars": 1,
    "no-undef": 1,
    "prettier/prettier": 1,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
