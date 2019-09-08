'use strict'

import fs from 'fs'
import gulp from 'gulp'
import logger from '@stackr23/logger'

const config = require('config').default

// refactor: shove into ? config ?
if (typeof process.env.APP_CONFIG !== 'object') {
  process.env.APP_CONFIG = config
}

// log appConfig
logger.debug('{bold [/stack/gulp/]} appConfig: ', config)

// get task filenames
const taskFileNames = fs.readdirSync('./stack/gulp/gulp-tasks/')

// IMPORT TASK FILES
taskFileNames.forEach((fileName) => {
  require('./gulp-tasks/' + fileName)
})

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel(
      // gulp.series('sass-build', 'sass:watch'), // serie will be removed later
      gulp.series('webpack', 'server:frontend')
    )
  )
)
