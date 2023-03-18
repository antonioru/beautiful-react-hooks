module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 140
      }
    ],
    semi: [
      2,
      'never'
    ],
    '@typescript-eslint/semi': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off'
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '*.spec.js',
        '*.test.jsx',
        '*.spec.jsx'
      ],
      globals: {
        expect: 'readonly',
        should: 'readonly',
        sinon: 'readonly'
      },
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}
