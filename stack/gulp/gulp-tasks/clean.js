'use strict'

import gulp      from 'gulp'
import del       from 'del'

import appConfig from '../../../config/appConfig'

const {globs: {clean}} = appConfig

gulp.task('clean', () => del(clean))
