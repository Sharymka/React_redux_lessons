module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.test.jsx'] }],
    // 'linebreak-style': ["error", "windows"],
    'import/prefer-default-export': ['off'],
    'react/prop-types': ['off'],
    'react/destructuring-assignment': ['off'],
    'default-param-last': ['off'],
    quotes: ['error', 'single'],
  },
};
