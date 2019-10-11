require('dotenv').config()

const config = {
  "root": true,
  "extends": ["viewar/env/react"], // "stackr23/node"],
  plugins: ['jsx'],
  "rules": {
    semi: ['error', 'never'],
    'node-unpublished': 0,
    "jsx/mark-used-vars": 1,
    'import/default': 1,
    "react/jsx-filename-extension": 0
  }
}

module.exports = config
