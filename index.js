/**
 * @file .eslintrc.js
 * @author dworac <mail@dworac.com>
 *
 * This eslint config is based on the Airbnb style guide. It includes support for typescript, prettier, jest and jsdoc.
 */
module.exports = {
    extends: [
        // Basic ESLint rules with typescript
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // AirBnB style guide
        'airbnb',
        'airbnb-typescript',
        // Prettier
        'plugin:prettier/recommended',
        // JSDoc
        'plugin:jsdoc/recommended',
        // React
        "plugin:react/recommended",
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jsdoc', 'react-refresh'],
    root: true,
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'jsdoc/require-file-overview': 1,
        'import/no-absolute-path': 0,
        'react-refresh/only-export-components': 'warn',
    },
    settings: {
        jsdoc: {
            structuredTags: {
                swagger: {
                    name: 'swagger',
                },
                openapi: {
                    name: 'swagger',
                },
            },
        },
    },
};
