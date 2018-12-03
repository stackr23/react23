import fs from 'fs'
import {join} from 'path'
import getBuildFilenames from './getBuildFilenames'
import logger from '@stackr23/logger'

const {
    paths: {app: appPath}
} = require('config').default

let _indexHtml
const getBuiltIndex = (fileNames) => {
    // get fileNames from args, if passed,
    // else get fileNames from readDir
    const {appCSS, appJS} =
        fileNames &&
        fileNames.appJS &&
        // prevent done-task to be destructured
        typeof fileNames !== 'function'
            ? fileNames
            : getBuildFilenames()
    // pseudo cache
    _indexHtml = _indexHtml || fs.readFileSync(join(appPath, 'index.html'), 'utf8')

    const indexHtml = _indexHtml.replace('{APP_JS}', appJS).replace('{APP_CSS}', appCSS)

    logger.debug('{bold [utils/getBuiltIndex]} indexHtml: ', indexHtml)

    return indexHtml
}

export default getBuiltIndex
