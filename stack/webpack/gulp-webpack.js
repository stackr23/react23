import gulp                     from 'gulp'
import nodemon                  from 'gulp-nodemon'

import makeWebpackBuild         from './makeBuild'
import startWebpackDevServer    from './devServer/start'

const {isProduction} = require('config').default

const compileWebpack = (() => {
    if (isProduction) {
        console.log('compileWebpack in production not set yet!')
        return makeWebpackBuild
    }
    else {
        return startWebpackDevServer
    }
})()

gulp.task('webpack', gulp.series(compileWebpack))
