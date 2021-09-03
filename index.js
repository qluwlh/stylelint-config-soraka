module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': true,
    'function-url-quotes': 'always',
    'value-list-max-empty-lines': null,
    'declaration-block-no-duplicate-properties': null,
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-class-no-unknown': null,
    'block-no-empty': null,
    'function-calc-no-invalid': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'declaration-colon-newline-after': null,
    'selector-type-no-unknown': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
