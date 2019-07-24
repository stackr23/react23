const config = {
    "root": true,
    // eslint-config-stackr23
    // standard variation of standard js coding style
    // https://github.com/stackr23/eslint-config-stackr23
    "extends": ["stackr23/react"],
    "globals": {
        "document": false
    },
    "rules": {
        // change rules as you wish
        "eqeqeq": 2, // TBD - allow (!= null)
        "no-undef": 2,
        "no-unused-vars": 2,
        "semi": [2, "never"],
        "no-multiple-empty-lines": 2,
        "indent": ["error", 2]
    }
}

module.exports = config
