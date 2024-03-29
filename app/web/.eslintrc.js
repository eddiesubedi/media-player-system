module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      vue: 'never',
      js: 'never'
    }],
    'no-var': 'off',
    'vars-on-top': 'off',
    'block-scoped-var': 'off',
    'eqeqeq': 'off',
    'prefer-const': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
