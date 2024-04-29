import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  prettierRecommended,
  {
    ignores: [
      '.git/',
      'node_modules/',
      'dist/',
      'themes/',
      'public/',
      'resources/',
    ],
  },
  {
    name: 'repo/all',
    rules: {
      camelcase: 0,
      'no-underscore-dangle': 0,
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: 'next',
        },
      ],
    },
  },
  {
    name: 'repo/browser',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    files: ['static/**/*.js', 'layout/**/*.html'],
  },
  {
    name: 'repo/node',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    files: ['src/**/*.js'],
  },
];
