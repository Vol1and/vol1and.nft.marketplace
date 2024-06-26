module.exports = {
    env: {
        jest: true,
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb',
        'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'vol1and-path-plugin',
    ],
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
    rules: {
        'no-param-reassign': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension':
            [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-restricted-globals': 'off',
        'i18next/no-literal-string':
            'off',
        'max-len': ['warn', { code: 120, ignoreComments: true }],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-undef': 'off',
        'react/no-array-index-key': 'warn',
        'consistent-return': 'off',
        'vol1and-path-plugin/path-checker': ['error', { alias: '@' }],
        'vol1and-path-plugin/public-api-imports': ['error', { alias: '@' }],
        'vol1and-path-plugin/layer-imports': ['error', { alias: '@', ignoreImportPatterns: ['**/StoreProvider'] }],
    },
};
