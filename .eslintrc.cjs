module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "@next/next/no-html-link-for-pages": "off",
    "next/no-html-link-for-pages": "off",
    "react/no-html-link-for-pages": "off",
    "import/no-anonymous-default-export": "off",
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
    next: {
      rootDir: "packages/apps/hub/src",
    },
  },
};
