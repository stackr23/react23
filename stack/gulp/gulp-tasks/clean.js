'use strict'

import gulp      from 'gulp'
import del       from 'del'

const {globs: {clean: cleanGlob}} = require('config').default

gulp.task('clean', () => del(cleanGlob))

export function clean() {
    return del(cleanGlob)
}
