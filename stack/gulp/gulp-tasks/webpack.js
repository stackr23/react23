import gulp from 'gulp'
// TBD: to nodemon or not
// import nodemon                  from 'gulp-nodemon'

import makeWebpackBuild from '../../webpack/makeBuild'
import startWebpackDevServer from '../../webpack/devServer/start'
import copyIndex from './copyIndex'

const { isProduction } = require('config').default

gulp.task(
  'webpack',
  gulp.series(isProduction ? makeWebpackBuild : startWebpackDevServer, () => {
    if (process.env.NODE_ENV === 'test') {
      setTimeout(() => {
        // eslint-disable-next-line no-process-exit
        process.exit(1)
      }, 5000)
    }
  })
)

gulp.task(
  'build-static',
  (() => {
    process.env.APP_BUILD_STATIC = true

    return gulp.series('clean', makeWebpackBuild, copyIndex)
  })()
)
