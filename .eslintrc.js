const config = {
  "root": true,
  "extends": ["viewar/env/react"],
  plugins: ['jsx'],
  "rules": {
    semi: ['error', 'never'],
    'node-unpublished': 0,
    "jsx/mark-used-vars": 1,
    'node/no-missing-import': 0
  }
}

module.exports = config
