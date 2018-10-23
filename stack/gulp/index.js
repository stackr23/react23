'use strict'

import path         from 'path'
import fs           from 'fs'
import gulp         from 'gulp'

import clean        from './gulp-tasks/clean'

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

// gulp.task('default', done => {
//     const gulpSequence = [
//         'clean',
//         'sass-build',
//         'sass:watch'
//     ]

//     // if (userArgs.style !== 'compact') {
//     // gulpSequence.push('sass:uglify')
//     // }

//     return gulp.series(
//         'clean',
//         () => {

//             done()
//         }
//     )
// })

gulp.task('default',
    gulp.series(
        'clean', gulp.parallel(
            gulp.series('sass-build', 'sass:watch'), // serie will be removed later
            gulp.series('webpack', 'server:frontend')
        )
    )
)
