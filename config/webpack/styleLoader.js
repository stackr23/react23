//          __        __     __                    __
//    _____/ /___  __/ /__  / /   ____  ____ _____/ /__  __________
//   / ___/ __/ / / / / _ \/ /   / __ \/ __ `/ __  / _ \/ ___/ ___/
//  (__  ) /_/ /_/ / /  __/ /___/ /_/ / /_/ / /_/ /  __/ /  (__  )
// /____/\__/\__, /_/\___/_____/\____/\__,_/\__,_/\___/_/  /____/
//          /____/
//
// for full styleLoader concatination look at the bottom of the file.
// for custom preprocessors and loaderOptions,
// change the config of your cssStyle or add your own
//
// cssStyle can be set via --cssStyle
// for changing default, go to /config/appConfig.js (yarg definitions)

/**
 * Stylus23 - https://github.com/stackr23/stylus23/
 * deprecated: will be moved to '@stackr23/stylus'
 *
 * features:
 *     - +MQ mixin
 *     - helpers like clearfix() and after/before()
 *
 * MQ breakpoints can be set via JS options
 *     or in stylus files, before @import 'stylus23' via:
 *     $stylus_mq_{name}   = 'only screen and (max-width: 320px)'
 *     (see /app/style/setup.styl)
 */
import stylus23 from 'stylus23'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import logger from '@stackr23/logger'

const {isDevelopment, NODE_ENV, cssStyle} = require('config').default

const styleLoaders = {}
const preLoadersProd = [
    {loader: 'css-loader' },
    {loader: 'postcss-loader', options: {sourceMap: true, options: {}}}
]
const preLoadersDev = [{loader: 'style-loader', options: {sourceMap: true}}, ...preLoadersProd]

//    _____________  ____    __  _______
//   / ___/_  __/\ \/ / /   / / / / ___/
//   \__ \ / /    \  / /   / / / /\__ \
//  ___/ // /     / / /___/ /_/ /___/ /
// /____//_/     /_/_____/\____//____/

const stylusLoader = {
    loader: 'stylus-loader',
    options: {
        stylus: {
            preferPathResolver: 'webpack'
        },
        sourceMap: true,
        compress: !isDevelopment,
        use: [
            stylus23({
                envVars: {
                    NODE_ENV: NODE_ENV
                    // TBD: inject muiTheme
                    // depends on https://github.com/stackr23/stylus23/issues/3
                },
                envPrefix: '$ENV__'
            })
        ]
    }
}

styleLoaders.stylus = {
    test: /\.(styl|less)$/,
    use: isDevelopment
        ? [...preLoadersDev, stylusLoader]
        : ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [...preLoadersProd, stylusLoader]
          })
}

//    _____________  ____    ______   ____  ____      _________________________
//   / ___/_  __/\ \/ / /   / ____/  / __ \/ __ )    / / ____/ ____/_  __/ ___/
//   \__ \ / /    \  / /   / __/    / / / / __  |_  / / __/ / /     / /  \__ \
//  ___/ // /     / / /___/ /___   / /_/ / /_/ / /_/ / /___/ /___  / /  ___/ /
// /____//_/     /_/_____/_____/   \____/_____/\____/_____/\____/ /_/  /____/

styleLoaders.styleobjects = {
    test: /\.(csso)$/,
    use: ['@stackr23/styleobjects-loader', 'stylus-loader']
}

//     ________  ____    __       ____  _________________   ____________________  _   __
//    / ____/ / / / /   / /      / __ \/ ____/ ____/  _/ | / /  _/_  __/  _/ __ \/ | / /
//   / /_  / / / / /   / /      / / / / __/ / /_   / //  |/ // /  / /  / // / / /  |/ /
//  / __/ / /_/ / /___/ /___   / /_/ / /___/ __/ _/ // /|  // /  / / _/ // /_/ / /|  /
// /_/    \____/_____/_____/  /_____/_____/_/   /___/_/ |_/___/ /_/ /___/\____/_/ |_/

const chosenPreprocessorLoader =
    styleLoaders[cssStyle] ||
    logger.error(`
styleLoaders[${cssStyle}] not defined yet.
Go to /config/webpack/styleLoaders.js and add it.
`)

export const styleobjectsLoader = styleLoaders.styleobjects
export default chosenPreprocessorLoader
