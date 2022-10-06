module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'no-alert': 0,
    'no-plusplus': 0,
    'no-continue': 0,

    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,
    'react-hooks/exhaustive-deps': 0,

    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-loop-func': 0,

    // import devDependencies
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/lib/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/atoms/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/common/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/date/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/ganttChart',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/Login/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/Modal/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/project/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/task/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/user/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/styles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './style',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
