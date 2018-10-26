import gulp                     from 'gulp'
// TBD: to nodemon or not
// import nodemon                  from 'gulp-nodemon'

import makeWebpackBuild         from './makeBuild'
import startWebpackDevServer    from './devServer/start'

import buildStaticSeries        from '../gulp/gulp-tasks/build-static'

const {isProduction} = require('config').default

const compileWebpack = (done =>
    function compileWebpackWrapper (done) {
        return isProduction
            ? makeWebpackBuild(done)
            : startWebpackDevServer(done)
    }
)()

gulp.task('build', gulp.series(compileWebpack))

gulp.task('build-static', buildStaticSeries)
