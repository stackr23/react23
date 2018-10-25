'use strict'

import path         from 'path'
import fs           from 'fs'
import gulp         from 'gulp'

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

gulp.task('default',
    gulp.series(
        'clean', gulp.parallel(
            // gulp.series('sass-build', 'sass:watch'), // serie will be removed later
            gulp.series('webpack', 'server:frontend')
        )
    )
)
