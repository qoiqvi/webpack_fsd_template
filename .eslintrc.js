module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
        "parser": '@typescript-eslint/parser'
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": 0
    },
    "globals": {
        _IS_DEV_: true
    }
}
