import fs                   from 'fs'
import {join}               from 'path'

import getBuiltIndex        from '../../utils/getBuiltIndex'


const {paths: {build: buildPath}} = require('config').default

const copyIndex = done => {
    const indexHtml   = getBuiltIndex()

    fs.writeFile(join(buildPath, 'index.html'), indexHtml, 'utf-8')

    return indexHtml
}

export default copyIndex
