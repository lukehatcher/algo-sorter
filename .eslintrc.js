module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
  },
};
