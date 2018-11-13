//    __  __                  _____      __  __  _
//   / / / /_______  _____   / ___/___  / /_/ /_(_)___  ____ ______
//  / / / / ___/ _ \/ ___/   \__ \/ _ \/ __/ __/ / __ \/ __ `/ ___/
// / /_/ (__  )  __/ /      ___/ /  __/ /_/ /_/ / / / / /_/ (__  )
// \____/____/\___/_/      /____/\___/\__/\__/_/_/ /_/\__, /____/
//                                                   /____/
//
// change settings accoriding to your local environment

const staticLocalhostRoot     = '/tools/react23/build'

//     ____                  __ ___  _____
//    / __ \___  ____ ______/ /|__ \|__  /
//   / /_/ / _ \/ __ `/ ___/ __/_/ / /_ <
//  / _, _/  __/ /_/ / /__/ /_/ __/___/ /
// /_/ |_|\___/\__,_/\___/\__/____/____/
//

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

const paths     = require('./paths').default

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
        browserRoot:        process.env.GH_PAGES ? '/react23/'
        // TBD: refactor: for BUILD_STATIC
        // BUILD_STATIC set AFTER load of config -> shove into App.js?
            : staticLocalhostRoot || '/',
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
        cssStyle:   yargs.cssStyle
    }, APP_CONFIG)

    return config
})(process.env.APP_CONFIG || {})
