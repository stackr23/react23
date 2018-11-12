'use strict'

import fs           from 'fs'
import gulp         from 'gulp'
import {debugMsg}   from '../utils/myLogger'

const config        = require('config').default

// refactor: shove into ? config ?
if (typeof process.env.APP_CONFIG !== 'object') {
    process.env.APP_CONFIG = config
}

// log appConfig
debugMsg('{bold [/stack/gulp/]} appConfig: ', config)

// get task filenames
const taskFileNames = fs.readdirSync('./stack/gulp/gulp-tasks/')

// IMPORT TASK FILES
taskFileNames.forEach(fileName => {
    require('./gulp-tasks/' + fileName)
})

gulp.task('default',
    gulp.series(
        'clean', gulp.parallel(
            // gulp.series('sass-build', 'sass:watch'), // serie will be removed later
            gulp.series('webpack', 'server:frontend')
        )
    )
)
