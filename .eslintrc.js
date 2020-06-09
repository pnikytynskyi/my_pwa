const rules = {
  'no-console': 'off',
  indent: ['error', 2],
  quotes: ['error', 'single'],
  'quote-props': ['error', 'as-needed', { keywords: true }],
  'comma-dangle': ['error', 'always-multiline'],
  'space-in-parens': ['error', 'never'],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never'],
  'computed-property-spacing': ['error', 'never'],
  // NOTE: This is some dependency issue workaround
  'jsx-a11y/href-no-hash': [0]
};
rules['no-debugger'] = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  'extends': [
    'prettier',
    'react-app',
  ],
  plugins: [
    'prettier',
    'react',
    'jest',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: [
        'src/**/*.test.js',
      ],
      env: {
        'jest/globals': true,
      },
      globals: {
        page: true,
      },
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jest-import': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
