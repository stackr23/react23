const config = {
  "root": true,
  "extends": ["viewar/env/react"], // "stackr23/node"],
  plugins: ['jsx'],
  "rules": {
    semi: ['error', 'never'],
    'node-unpublished': 0,
    "jsx/mark-used-vars": 1,
    'node/no-extraneous-import': 0,
    'node/no-extraneous-require': 0
  }
}

module.exports = config
