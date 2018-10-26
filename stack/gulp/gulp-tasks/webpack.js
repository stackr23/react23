import gulp                     from 'gulp'
// TBD: to nodemon or not
// import nodemon                  from 'gulp-nodemon'

import makeWebpackBuild         from '../../webpack/makeBuild'
import startWebpackDevServer    from '../../webpack/devServer/start'

import copyIndex                from './copyIndex'

const {isProduction} = require('config').default

gulp.task('webpack', gulp.series(
    isProduction
        ? makeWebpackBuild
        : startWebpackDevServer
))

gulp.task('build-static', gulp.series('webpack', copyIndex))
