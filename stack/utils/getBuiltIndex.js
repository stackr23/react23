import fs                   from 'fs'
import {join}               from 'path'
import getBuildFilenames    from './helper/getBuildFilenames'
import {debugMsg}           from './myLogger'


const {paths: {app: appPath}} = require('config').default

let _indexHtml
const getBuiltIndex = fileNames => {
    const {appCSS, appJS}   = fileNames.appJS
        ? fileNames
        : getBuildFilenames()

    _indexHtml              = _indexHtml || fs.readFileSync(join(appPath, 'index.html'), 'utf8')

    const indexHtml         = _indexHtml
        .replace('{APP_JS}', appJS)
        .replace('{APP_CSS}', appCSS)

    debugMsg('{bold [utils/getBuiltIndex]} indexHtml: ', indexHtml)

    return indexHtml
}

export default getBuiltIndex
