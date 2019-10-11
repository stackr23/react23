import gulpSass from 'gulp-sass'
// import runSequence  from 'run-sequence'
// import gulpRename   from 'gulp-rename'
import logger from '@stackr23/logger'

import gulp from 'gulp'

const {
  globs: {
    scss: { src, dist, watch },
  },
} = require('config').default

const sassBuild = (src, dist) =>
  gulp
    .src(src)
    .pipe(
      gulpSass({
        outputStyle:    'compressed',
        sourceMapEmbed: 'embed',
        // sourceMapRoot:  './web'
      }).on('error', (e) => gulpSass.logError(logger.error(e)))
    )
    // .pipe(gulpRename('test.css'))
    .pipe(gulp.dest(dist))

gulp.task('sass:build-mqs', () => sassBuild(src.mqs, dist.mqs || dist))

gulp.task('sass:build-main', () => sassBuild(src.main, dist.main || dist))

gulp.task('sass:watch', () => gulp.watch(watch, gulp.series('sass-build')))

gulp.task('sass-build', gulp.series('sass:build-main'))
