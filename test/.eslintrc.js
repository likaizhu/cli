module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'error',
    'comma-dangle': [1, 'always-multiline'],
    'no-dupe-keys': 2,
    semi: ['error', 'never'],
    'no-extra-semi': 'error',
    'array-bracket-spacing': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
      },
    ],
    'space-infix-ops': 2,
    'no-empty-function': 'error',
    "eqeqeq": ['error', 'allow-null'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': [1, 'always'],
    'no-shadow': 0,
    'no-use-before-define': 'error',
    'init-declarations': 'error',
    'no-const-assign': 'error',
    'no-var': 'error',
    'require-yield': 0,
    "space-before-function-paren": [2, "always"],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
  },
}