import gulp                     from 'gulp'
// TBD: to nodemon or not
// import nodemon                  from 'gulp-nodemon'

import makeWebpackBuild         from './makeBuild'
import startWebpackDevServer    from './devServer/start'

const {isProduction} = require('config').default

const compileWebpackWrapper = (done =>
    function compileWebpack (done) {
        return isProduction
            ? makeWebpackBuild(done)
            : startWebpackDevServer(done)
    }
)()

gulp.task('webpack', gulp.series(compileWebpackWrapper))
