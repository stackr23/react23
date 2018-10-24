import gulp         from 'gulp'
import gulpNodemon  from 'gulp-nodemon'

import {spawn} from 'child_process'

const {
    paths,
    isDevelopment
} = require('config').default

const closeFn = done => data => {
    console.log('production server stopped!')

    done(data)
}

const startFrontendServer = done => {
    const runner = spawn('node', [paths.server], {
        cwd: process.cwd(),
        env: process.env
    })

    runner.stdout.setEncoding('utf8')

    runner.stdout.on('data', data => console.log(data))
    runner.stderr.on('data', err => console.log('[productionServer->Error] ' + err))

    runner.on('close', closeFn(done))
    runner.on('exit', closeFn(done))

    // // kill server process on gulp exit
    process.on('exit', () => runner.kill())
    // refactor: only fires on error
    // doesn't fire on strg+c

    return runner
}

gulp.task('server:frontend', gulp.series(startFrontendServer))
