export default {
  root: true,
  parser: "@typescript-eslint/parser",
  globals: {
    NodeJS: true,
  },
  rules: {
    "import/no-unresolved": ["error", { ignore: ["@georges-tech/accounting"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.js",
          "**/test/**/*.ts",
          "**/src/**/*.test.js",
          "**/src/**/*.test.ts",
          "**/migrations/**/*.test.js",
          "scripts/**/*.js",
        ],
      },
    ],
    "import/named": "error",
    "no-restricted-globals": 0,
    "no-restricted-syntax": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0, // remove once typescript migration is done
    "@typescript-eslint/no-explicit-any": 0, // remove once typescript migration is done
    "@typescript-eslint/no-non-null-assertion": 0, // remove once typescript migration is done
    "no-unused-expressions": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/no-useless-path-segments": "error",
  },
};
