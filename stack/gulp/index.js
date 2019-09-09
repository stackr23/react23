'use strict'

import fs from 'fs'
import logger from '@stackr23/logger'
import gulp from 'gulp'

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

const exitProcessIfCI = (done) => {
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => {
      // eslint-disable-next-line no-process-exit
      process.exit()
    }, 5000)
  }
  done()
}

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel(
      // gulp.series('sass-build', 'sass:watch'), // serie will be removed later
      gulp.series('webpack', 'server:frontend')
    ),
    exitProcessIfCI
  )
)
