import paths from './paths'
const yargs = require('yargs')
    .option('sass_style', {
        alias:      's',
        default:    'compressed'
    })
    .argv

export default (function (config) {
    const rootRel   = process.cwd() + '/'

    config      = Object.assign({
        NODE_ENV:             process.env.NODE_ENV,
        isDevelopment:        process.env.NODE_ENV || 'development',
        ports: {
              portFE:         7000,
              portHMR:        7070,
              portBSProxy:    7001,
              portBSUI:       3000
        },
        paths,
        globs: {
            clean:  [
                '!**/.gitkeep', 'stack/__test__/**/*', 'build/**/*'
            ],
            scss:   {
                watch:      paths.scss + '/**/*.scss',
                scss:    {
                    main:   paths.scss + '/full.scss',
                    mqs:    paths.scss + '/mqs/*.scss'
                },
                dist:   paths.dist + '/css/'
            }
        },
        sass: {
            style: yargs.sass_style
        }
    }, config) // assign process.env.APP_CONFIG to defaults

    return config
})(process.env.APP_CONFIG || {})
