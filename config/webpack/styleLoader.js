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
import ExtractTextPlugin        from 'extract-text-webpack-plugin'
<<<<<<< HEAD

import {errorMsg}               from '../../stack/utils/myChalk.js'
=======
import {errorMsg}               from '../../stack/utils/myLogger'
>>>>>>> development

const {isDevelopment, cssStyle} = require('config').default

const styleLoaders              = {}
const preLoaders                = [
    {loader: 'style-loader',   options: {sourceMap: true}},
    {loader: 'css-loader',     options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {sourceMap: true}}
]

<<<<<<< HEAD

=======
>>>>>>> development
//    _____________  ____    __  _______
//   / ___/_  __/\ \/ / /   / / / / ___/
//   \__ \ / /    \  / /   / / / /\__ \
//  ___/ // /     / / /___/ /_/ /___/ /
// /____//_/     /_/_____/\____//____/
const stylusLoader = {
    loader: 'stylus-loader',
    options: {
        sourceMap:  true,
        compress:   isDevelopment,
<<<<<<< HEAD
        use:        [
            // doubleu23Stylus({
            //     envVars:    {
            //         // refactor: build object on top and
            //         // find a way to re-use it in webpack.DefinePlugin
            //         NODE_ENV:       process.env.NODE_ENV,
            //         BUILD_STATIC:   process.env.BUILD_STATIC,
            //         DEBUG:          process.env.DEBUG
            //     },
            //     mediaQueries:       {
            //         'custom':       'only screen and (min-width: 1300px)'
            //     },
            //     envPrefix:          '$ENV__'
            // })
        ]
=======
        use:        [/* nib() */] // activate nib or doubleu23-stylus
>>>>>>> development
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

//     ________  ____    __       ____  _________________   ____________________  _   __
//    / ____/ / / / /   / /      / __ \/ ____/ ____/  _/ | / /  _/_  __/  _/ __ \/ | / /
//   / /_  / / / / /   / /      / / / / __/ / /_   / //  |/ // /  / /  / // / / /  |/ /
//  / __/ / /_/ / /___/ /___   / /_/ / /___/ __/ _/ // /|  // /  / / _/ // /_/ / /|  /
// /_/    \____/_____/_____/  /_____/_____/_/   /___/_/ |_/___/ /_/ /___/\____/_/ |_/

const customStyleLoader     = styleLoaders[cssStyle]
    || errorMsg(`
styleLoaders[${cssStyle}] not defined yet.
Go to /config/webpack/styleLoaders.js and add it.
`)

export default customStyleLoader
