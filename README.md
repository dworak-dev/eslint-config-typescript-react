# dworac ESLint Typescript Configuration

ESLint is a popular tool that helps maintain consistent code quality across a project. The template you provided comes with a pre-configured ESLint setup that has support for TypeScript, the AirBnB preset, Prettier, and JSDoc. Let's take a closer look at each of these components and the configuration for the template.

## Usage

To use the ESLint configuration, you must first install the required dependencies:

```bash
yarn add -D @dworac/eslint-config-typescript
```

Then, add the following to your `.eslintrc.js` file:

```json
{
  extends: [
    '@dworac/eslint-config-typescript',
  ],
}
```

### TypeScript Support
The @typescript-eslint package provides linting rules specifically tailored for TypeScript. This is important because regular ESLint does not understand TypeScript syntax. The @typescript-eslint/parser package allows ESLint to parse TypeScript code, and the @typescript-eslint/eslint-plugin package provides TypeScript-specific linting rules.

```javascript
parser: '@typescript-eslint/parser',
plugins: ['@typescript-eslint'],
```

### AirBnB Preset
The AirBnB preset provides a comprehensive set of ESLint rules based on the AirBnB JavaScript style guide. These rules are designed to improve the readability, maintainability, and overall quality of your code. The airbnb-base preset provides the core AirBnB rules, while airbnb-typescript/base extends these rules with additional TypeScript-specific rules.

```javascript
extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
],
```

### Prettier
Prettier is a code formatter that can automatically format your code to adhere to a consistent style. The eslint-config-prettier package disables any ESLint rules that conflict with Prettier, and the eslint-plugin-prettier package integrates Prettier into ESLint so that you can run Prettier automatically using an ESLint command.

```javascript
extends: [
    // ...
    'plugin:prettier/recommended',
],
rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
},
```

### JSDoc
JSDoc is a tool for documenting JavaScript code. The eslint-plugin-jsdoc package provides linting rules that enforce JSDoc comments in your code. This can help improve code readability and maintainability by making it easier for other developers to understand what your code does.

```javascript
extends: [
    // ...
    'plugin:jsdoc/recommended',
],
plugins: ['jsdoc'],
rules: {
    'jsdoc/require-file-overview': 1,
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
```
