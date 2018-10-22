/**
 * default.js
 * gets loades by npm module "config"
 * we load appConfig in it to have global access
 */
const appConfig   = require('./appConfig.js')

module.exports = Object.assign({}, appConfig, {
    env: process.env,
    cwd: process.cwd()
})
