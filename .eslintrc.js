'use strict';
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'airbnb',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'linebreak-style': ["error", "windows"],
    'import/prefer-default-export': ['off'],
    'react/prop-types': ['off'],
    'react/destructuring-assignment': ['off'],
    'default-param-last': ['off'],
    quotes: ['error', 'single'],
  },
};
