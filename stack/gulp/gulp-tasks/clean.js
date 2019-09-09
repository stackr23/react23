import del from 'del'

import gulp from 'gulp'

const {
  globs: { clean: cleanGlob }
} = require('config').default

gulp.task('clean', () => del(cleanGlob))
