module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "eslint:recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/no-cycle": [0, { maxDepth: 1 }],
    indent: [1, 2],
    semi: [2, "always"],
    "linebreak-style": [0, "unix"],
    "no-shadow": [1, { builtinGlobals: true }],
    "no-use-before-define": [1, { functions: false }],
    "no-unused-expressions": [0, { allowTernary: true }],
    "max-len": [2, { code: 80 }],
  },
};
