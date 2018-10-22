import gulp   from 'gulp'

const args  = require('yargs')
    .usage('Usage: gulp [--env production]')
    .option('style', {
        alias:      's',
        default:    'compressed'
    })
    .option('env', {
        alias:      'e',
        default:    ''
    })
    .argv

gulp.task('user-arguments', done => {
    process.env.NODE_ENV = args.env || process.env.NODE_ENV || 'development'
    process.env._23 = Object.assign({},/* TBD: defaultOptions */ {

    })

    done()
})

export default args
