const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:jsx-control-statements/recommended',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-control-statements',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-undef':[
      2,
      { "allowGlobals": true },
    ],
    'react/forbid-prop-types': 'off',
    'react/button-has-type': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve('webpack/base.config.babel.js'),
      },
      'babel-module': {},
    },
  },
};
