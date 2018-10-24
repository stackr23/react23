import paths from './paths'

const yargs = require('yargs')
    .option('sass_style', {
        alias:      's',
        default:    'compressed'
    })
    .option('production', {
        alias:      'p',
        default:    false
    })
    .option('debug', {
        alias:      'd',
        default:    process.env.NODE_ENV !== 'production' ? true : false
    })
    .option('verbose', {
        alias:      'v',
        default:    false
    })
    .argv

export default (function (APP_CONFIG) {
    const rootRel   = process.cwd() + '/'

    const NODE_ENV          = process.env.NODE_ENV === 'production' || yargs.production === true
        ? 'production' : 'development'

    const isProduction      = NODE_ENV === 'production'
    const isDevelopment     = NODE_ENV !== 'production'

    const config    = {
        NODE_ENV:           NODE_ENV,
        isDevelopment:      NODE_ENV || 'development',
        isProduction:       NODE_ENV === 'production',
        debug:              process.env.APP_DEBUG || yargs.debug || isDevelopment || false,
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
        sass: {
            style: yargs.sass_style
        }
    }

    return Object.assign(config, APP_CONFIG)
})(process.env.APP_CONFIG || {})
