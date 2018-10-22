'use strict'

import path         from 'path'
import fs           from 'fs'
import gulp         from 'gulp'
// import gulpTaskListing from 'gulp-task-list'
import config from 'config'

// GET TASK FILES
const taskFiles = fs.readdirSync('./stack/gulp/gulp-tasks/')
    .filter(name =>
    //  filter files per file-extension
    //  prevent accidental inclusion of possible dot files, fixtures, etc.
        /(\.(js|coffee)$)/i.test(path.extname(name))
    )

// IMPORT TASK FILES
taskFiles.forEach(taskFile => {
    require('./gulp-tasks/' + taskFile)
})


gulp.task('test:config', done => {
    console.dir(config)
})

gulp.task('default', done => {
    gulp.series()
    const gulpSequence = [
        'user-arguments', // required
        'clean',
        'sass-build',
        'sass:watch'
    ]

    if (userArgs.style !== 'compact') {
    // gulpSequence.push('sass:uglify')
    }

    gulp.series(
        'clean',
        gulp.parallel(
            ...gulpSequence
        )
    )

    done()
})

