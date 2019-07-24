import fs from 'fs'
import {join} from 'path'
// import getBuildFilenames from './getBuildFilenames'
// import logger from '@stackr23/logger'

const {
  paths: {app: appPath}
} = require('config').default

let _indexHtml // pseudo cache


// appCSSPath is only needed in production
/**
 * @function @name getBuiltIndex
 * @param paths {object} - {appJSPath, appCSSPath = ''}
 */
const getBuiltIndex = ({appJSPath, appCSSPath = ''}) => {
  _indexHtml = _indexHtml || fs.readFileSync(join(appPath, 'index.html'), 'utf8')

  return _indexHtml.replace('{APP_JS}', appJSPath).replace('{APP_CSS}', appCSSPath)
}

export default getBuiltIndex
