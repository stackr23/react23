/**
 * default.js
 * gets loaded by npm module "config"
 * we load appConfig in it to have global access via require('config').default
 */
const appConfig     = require('./appConfig.js')

module.exports      = Object.assign({}, appConfig)
