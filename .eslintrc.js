module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },

  env: {
    es6: true,
    node: true,
    mocha: true
  },

  extends: [
    "standard"
  ],

  plugins: [
    "@typescript-eslint"
  ],

  globals: {
    expect: true,
    sinon: true
  },

  rules: {
    "space-before-function-paren": ["error", "never"],
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }]
  }
}
