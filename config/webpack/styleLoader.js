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
//
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import {errorMsg} from '../../stack/utils/myLogger'

import stylus23 from 'stylus23'

const {isDevelopment, NODE_ENV, cssStyle} = require('config').default

const styleLoaders = {}
const preLoaders = [
    {loader: 'style-loader', options: {sourceMap: true}},
    {loader: 'css-loader', options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {sourceMap: true, options: {}}}
]

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
                    // THEME:
                },
                envPrefix: '$ENV__'
            })
        ]
    }
}

styleLoaders.stylus = {
    test: /\.(styl|less)$/,
    use: isDevelopment
        ? [...preLoaders, stylusLoader]
        : ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'postcss-loader', stylusLoader]
          })
}

//    ________________       ____  ____      _________________________
//   / ____/ ___/ ___/      / __ \/ __ )    / / ____/ ____/_  __/ ___/
//  / /    \__ \\__ \______/ / / / __  |_  / / __/ / /     / /  \__ \
// / /___ ___/ /__/ /_____/ /_/ / /_/ / /_/ / /___/ /___  / /  ___/ /
// \____//____/____/      \____/_____/\____/_____/\____/ /_/  /____/

styleLoaders.cssObjects = {
    test: /\.(csso)$/,
    use: ['@stackr23/styleobjects-loader', 'stylus-loader']
}

//     ________  ____    __       ____  _________________   ____________________  _   __
//    / ____/ / / / /   / /      / __ \/ ____/ ____/  _/ | / /  _/_  __/  _/ __ \/ | / /
//   / /_  / / / / /   / /      / / / / __/ / /_   / //  |/ // /  / /  / // / / /  |/ /
//  / __/ / /_/ / /___/ /___   / /_/ / /___/ __/ _/ // /|  // /  / / _/ // /_/ / /|  /
// /_/    \____/_____/_____/  /_____/_____/_/   /___/_/ |_/___/ /_/ /___/\____/_/ |_/

const customStyleLoader =
    styleLoaders[cssStyle] ||
    errorMsg(`
styleLoaders[${cssStyle}] not defined yet.
Go to /config/webpack/styleLoaders.js and add it.
`)

export const cssObjectsLoader = styleLoaders.cssObjects
export default customStyleLoader
