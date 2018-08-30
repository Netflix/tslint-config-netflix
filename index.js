module.exports = {
    rules: {
        'align': [true, 'parameters', 'statements'],
        'arrow-return-shorthand': true,
        'curly': true,
        'max-line-length': [true, 120],
        'new-parens': true,
        'no-arg': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-duplicate-imports': true,
        'no-internal-module': true,
        'no-inferrable-types': true,
        'no-multi-spaces': true,
        'no-parameter-reassignment': true,
        'no-string-literal': true,
        'no-trailing-whitespace': true,
        'no-var-keyword': true,
        'no-unnecessary-initializer': true,
        'ordered-imports': [
            true,
            {
              "grouped-imports": true,
              "import-sources-order": "any",
              "named-imports-order": "any"
            }
          ],
        'prefer-const': true,
        'prefer-readonly': true,
        'quotemark': [true, 'single', 'jsx-double'],
        'trailing-comma': [true, {'multiline': 'always', 'singleline': 'never'}],
        'triple-equals': [true, 'allow-null-check'],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-module',
            'check-operator',
            'check-separator',
            'check-type',
            'check-typecast',
            'check-type-operator',
            'check-rest-spread'
        ]
    }
}
