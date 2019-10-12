import fs from 'fs'
import { join } from 'path'
// import getBuildFilenames from './getBuildFilenames'
// import logger from '@stackr23/logger'

const {
  paths,
} = require('config').default

let _indexHtml // pseudo cache


// appCSSPath is only needed in production
/**
 * @function @name getBuiltIndex
 * @param paths {object} - {appJSPath, appCSSPath = ''}
 */
const getBuiltIndex = (files) => {
  const { appJSPath, appVendorPath, appCSSPath } = files || {}
  _indexHtml = _indexHtml || fs.readFileSync(join(paths.src, 'index.html'), 'utf8')

  return _indexHtml
    .replace('{APP_VENDOR}', appVendorPath)
    .replace('{APP_JS}', appJSPath)
    .replace('{APP_CSS}', appCSSPath)
}

export default getBuiltIndex
