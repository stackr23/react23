import fs from 'fs'
import { join } from 'path'

import getBuiltIndex from '../../utils/getBuiltIndex'

const {
  paths: { build: buildPath }
} = require('config').default

const copyIndex = (done) => {
  let indexHtml = getBuiltIndex()

  fs.writeFile(
    join(buildPath, 'index.html'),
    '<!DOCTYPE html>\n' + indexHtml,
    'utf-8',
    function (err) {
      if (err) throw err

      if (typeof done === 'function') {
        done()
      }
    }
  )
}

export default copyIndex
