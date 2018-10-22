'use strict'

import gulp      from 'gulp'
import del       from 'del'

const {globs: {clean}} = require('config').default

gulp.task('clean', () => del(clean))
