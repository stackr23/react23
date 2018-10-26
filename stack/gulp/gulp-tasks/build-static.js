import fs       from 'fs'
import {join}   from 'path'
import gulp     from 'gulp'


const {paths: {app: appPath, build: buildPath}} = require('config').default

const copyIndex = () => {
    let indexHtml   = fs.readFileSync(join(appPath, 'index.html'), 'utf8')
    console.log(indexHtml)

    indexHtml = indexHtml
        .replace('buildJS', '<appScriptSrc>')
        .replace('buildCSS', '<appStyleSrc>')

    fs.writeFile(join(buildPath, 'index.html'), indexHtml, 'utf-8')
}
export {copyIndex}

const buildStaticSeries = () => gulp.series('webpack', copyIndex)
export default buildStaticSeries
