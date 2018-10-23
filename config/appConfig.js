import paths from './paths'
const yargs = require('yargs')
    .option('sass_style', {
        alias:      's',
        default:    'compressed'
    })
    .option('production')
    .argv

export default (function (config) {
    const rootRel   = process.cwd() + '/'

    config      = Object.assign({
        NODE_ENV:             process.env.NODE_ENV,
        isDevelopment:        process.env.NODE_ENV || 'development',
        isProduction:         process.env.NODE_ENV === 'production' || yargs.production,
        debug:                process.env.APP_DEBUG || true,
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
                watch:      paths.sass + '/**/*.scss',
                src:    {
                    main:   paths.sass + '/full.scss',
                    mqs:    paths.sass + '/mqs/*.scss'
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
