module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@builder.io/mitosis/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@builder.io/mitosis'],
  rules: {
    // It is recommended to use all properties from mitosis, because they will point out some of mitosis' limitations and avoid confusion.
	  // https://github.com/BuilderIO/mitosis/tree/main/packages/eslint-plugin
    '@builder.io/mitosis/css-no-vars': 'error',
    '@builder.io/mitosis/jsx-callback-arg-name': 'error',
    '@builder.io/mitosis/jsx-callback-arrow-function': 'error',
    '@builder.io/mitosis/no-assign-props-to-state': 'error',
    '@builder.io/mitosis/no-async-methods-on-state': 'error',
    '@builder.io/mitosis/no-conditional-logic-in-component-render': 'error',
    '@builder.io/mitosis/no-state-destructuring': 'error',
    '@builder.io/mitosis/no-var-declaration-in-jsx': 'error',
    '@builder.io/mitosis/no-var-declaration-or-assignment-in-component': 'error',
    '@builder.io/mitosis/no-var-name-same-as-state-property': 'error',
    '@builder.io/mitosis/only-default-function-and-imports': 'error',
    '@builder.io/mitosis/ref-no-current': 'error',
    '@builder.io/mitosis/use-state-var-declarator': 'error',
  },
};
