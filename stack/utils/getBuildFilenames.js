import fs from 'fs'
import logger from '@stackr23/logger'

const { isProduction, paths } = require('config').default

const getBuildFilenames = () => {
  const APP_JS_PATTERN = /^app-\w+\.js$/
  const APP_CSS_PATTERN = /^app-\w+\.css$/
  // TBD: use app-hash from webpack-instance, for dev?
  const DEVELOPMENT_FILES = {
    appCSS: 'app.css', appJS: 'app.js'
  }

  if (!isProduction) {
    return DEVELOPMENT_FILES
  }

  try {
    const buildDirFiles = fs.readdirSync(paths.build)

    return {
      appJS: buildDirFiles.find((filename) => APP_JS_PATTERN.test(filename)),
      appCSS: buildDirFiles.find((filename) => APP_CSS_PATTERN.test(filename))
    }
  } catch (err) {
    logger.debug('{bold [gulp-tasks/copyIndex]} getStaticAssetFilenames.catch]}', err)
  }

  return DEVELOPMENT_FILES
}

let buildFilenamesCached
const getBuildFilenamesCached = () => {
  if (buildFilenamesCached != null) {
    return buildFilenamesCached
  }

  return getBuildFilenames()
}

export default getBuildFilenamesCached
