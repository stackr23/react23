import fs       from 'fs'
import {join}   from 'path'

const {paths: {app: appPath, build: buildPath}} = require('config').default

const copyIndex = done => {
    let indexHtml   = fs.readFileSync(join(appPath, 'index.html'), 'utf8')
    console.log(indexHtml)

    // indexHtml    = indexHtml
    //     .replace('buildJS', '<appScriptSrc>')
    //     .replace('buildCSS', '<appStyleSrc>')

    fs.writeFile(join(buildPath, 'index.html'), indexHtml, 'utf-8')

    if (typeof done === 'function') {
        done()
    }
}

export default copyIndex
