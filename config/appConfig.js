import paths        from './paths'

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
        default:    false
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

    const config    = Object.assign({
        NODE_ENV:           NODE_ENV,
        isProduction:       isProduction,
        isDevelopment:      !isProduction,
        isDebug:            process.env.APP_DEBUG || yargs.debug,
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
                dist:       paths.build + '/'
            }
        },
        cssStyle:           yargs.cssStyle
    }, APP_CONFIG)


    return config
})(process.env.APP_CONFIG || {})
