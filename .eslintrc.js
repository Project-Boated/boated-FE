module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@next/next/recommended', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    // import devDependencies
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    // import order settings
    'import/order': ['error', {
      groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
      pathGroups: [{
        pattern: 'react',
        group: 'builtin',
        position: 'before'
      }],
      pathGroupsExcludedImportTypes: ['react'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      'newlines-between': 'always'
    }]
  }
};