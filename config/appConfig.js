import paths from './paths'

const yargs = require('yargs')
    .option('cssStyle', {
        alias:      's',
        default:    'stylus'
    })
    .option('production', {
        alias:      'p',
        default:    false
    })
    .option('debug', {
        alias:      'd',
        default:    process.env.NODE_ENV !== 'production'
    })
    .option('verbose', {
        alias:      'v',
        default:    false
    })
    .argv

export default (function (APP_CONFIG) {
    const NODE_ENV          = process.env.NODE_ENV === 'production' || yargs.production === true
        ? 'production' : 'development'

    const isProduction      = NODE_ENV === 'production'

    const config    = {
        NODE_ENV:           NODE_ENV,
        isDevelopment:      !isProduction,
        isProduction:       isProduction,
        debug:              process.env.APP_DEBUG || yargs.debug || !isProduction || false,
        ports: {
            portFE:       7000,
            portHMR:      7070,
            portBSProxy:  7001,
            portBSUI:     3000
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
                dist:   paths.build + '/'
            }
        },
        cssStyle:   yargs.cssStyle
    }

    return Object.assign(config, APP_CONFIG)
})(process.env.APP_CONFIG || {})
