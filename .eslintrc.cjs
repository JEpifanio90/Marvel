module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime'
  ],
  settings: {
    react: {
      'version': 'detect'
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.ts', 'vite.config.ts', 'main.tsx'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y', 'eslint-plugin-unicorn', 'import', 'eslint-plugin-no-null'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'generic'
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'no-public'
      }
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowTernary': true
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        'types': {
          'String': {
            'message': 'Use string instead',
            'fixWith': 'string'
          },
          '{}': {
            'message': 'Use record instead',
            'fixWith': 'Record<symbol|key|string, any>'
          }
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'comma-dangle': 'error',
    'max-len': [
      'error',
      {
        'code': 170
      }
    ],
    'no-duplicate-case': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': 'error',
    'no-redeclare': 'error',
    "no-null/no-null": "error",
    'no-restricted-syntax': [
      'error',
      'ForInStatement'
    ],
    'no-template-curly-in-string': 'error',
    'prefer-template': 'error',
    'unicorn/filename-case': 'off',
    'quotes': [
      'error',
      'double'
    ],
    'import/order': [
      'error',
      {
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        'pathGroups': [
          {
            'pattern': '@/**',
            'group': 'internal'
          }
        ],
        'pathGroupsExcludedImportTypes': []
      }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
};
