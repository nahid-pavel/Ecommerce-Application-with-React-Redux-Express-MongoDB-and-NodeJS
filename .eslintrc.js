module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        'react', 'import', 'react-hooks'
    ],
    "rules": {
        'react/react-in-jsx-scope': 'off',
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
        'react/prop-types': 'off',
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        // 'react/no-unescaped-entities': 0,
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    }
};
