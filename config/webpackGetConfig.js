'use strict'
// utils
import path                 from 'path'
import ip                   from 'ip'
// WEBPACK related
import webpack              from 'webpack'
import ExtractTextPlugin    from 'extract-text-webpack-plugin'
import urlLoaders           from './webpack/urlLoaders'
// STYLE related
import autoprefixer         from 'autoprefixer'
import cssMqPacker          from 'css-mqpacker'
import styleLoader          from './webpack/styleLoader'

const config            = require('config').default

let {
    isDebug, isProduction, isDevelopment, NODE_ENV, verbose,
    paths, ports: {portHMR}
} = config

const serverIp = ip.address()

export default _isDevelopment => {
    isDevelopment = _isDevelopment != null
        ? _isDevelopment
        : isDevelopment

    const webpackConfig = {
        mode:       NODE_ENV || isDevelopment ? 'development' : 'production',
        target:     'web',
        cache:      !isDevelopment,
        devtool:    process.env.CONTINUOUS_INTEGRATION
            ? 'inline-source-map'
            : 'cheap-module-source-map',
        entry: {
            app: isDevelopment
                ? [
                    `webpack-hot-middleware/client?path=http://${serverIp}:${portHMR}/__webpack_hmr`,
                    path.join(paths.src, 'index.js')
                ]
                : [path.join(paths.src, 'index.js')]
        },
        output: isDevelopment ? {
            path:               paths.build,
            filename:           '[name].js',
            sourceMapFilename:  '[name].js.map',
            chunkFilename:      '[name]-[chunkhash].js',
            publicPath:         `http://${serverIp}:${portHMR}/build/`
        } : {
            path: paths.build,
            filename: 'app.js', // '[name]-[hash].js'
            // production env needs sourcemaps just in edge cases
            // ??? sourceMapFilename: '[name]-[hash].map.js',
            chunkFilename: '[name]-[chunkhash].js'
        },
        stats: verbose ? 'verbose' : isDebug ? 'normal' : isProduction ? 'errors-only' : 'minimal',
        module: {
            rules: [
                ...urlLoaders,
                styleLoader,
                // BABEL LOADER
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude:  /(node_modules|bower_components|styles)/,
                    options: {
                        retainLines: true,
                        sourceMap: true,
                        babelrc: true,
                        cacheDirectory: false,
                        // presets and plugins defined in .babelrc
                        // enable env config if needed
                        env: {production: {}}
                    }
                }
            ]
        },
        externals: {
            'jsdom':    'window',
            'cheerio':  'window',
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
            'fs': {}
        },
        plugins: (() => {
            const plugins = [
                new webpack.LoaderOptionsPlugin({
                    minimize:   !isDevelopment,
                    debug:      isDevelopment,
                    hotPort:    portHMR,
                    sourceMap:  true,
                    postcss:    () => [
                        autoprefixer({browsers: [
                            'last 2 versions', 'Safari > 6', 'iOS >= 7', 'ie >= 8'
                        ]}),
                        cssMqPacker()
                    ]
                })
                // new webpack.DefinePlugin({
                //     'process.env': {
                //         NODE_ENV:       JSON.stringify(NODE_ENV),
                //         APP_CONFIG:     JSON.stringify(config),
                //         // BUILD_STATIC:   JSON.stringify(process.env.BUILD_STATIC === 'true'),
                //         // DEBUG:          JSON.stringify(process.env.DEBUG === 'true'),
                //         IS_BROWSER:     true
                //     }
                // })
                // new webpack.ProvidePlugin({
                //     'Promise': 'bluebird'
                // }) // not needed in babel7 ???
            ]
            if (isDevelopment) {
                plugins.push(
                    new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoEmitOnErrorsPlugin()
                )
            } else {
                if (!process.env.CONTINUOUS_INTEGRATION) {
                    // enable scope hoisting
                    // https://medium.com/webpack/brief-introduction-to-scope-hoisting-in-webpack-8435084c171f
                    plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
                }

                plugins.push(
                    // new webpack.LoaderOptionsPlugin({minimize: true}),
                    new ExtractTextPlugin({
                        filename:   'app.css'
                    })
                    // new webpack.optimize.OccurrenceOrderPlugin(),
                    // new webpack.optimize.UglifyJsPlugin({
                    //     sourceMap: true,
                    //     compress: {
                    //         screw_ie8:  true, // eslint-disable-line camelcase
                    //         warnings:   false // Because uglify reports irrelevant warnings.
                    //     }
                    // })
                )
            }

            // handled by config.devtool + config.output.sourceMapFilename
            //
            // plugins.push(new webpack.SourceMapDevToolPlugin({
            //     // filename: '[name].js.SourceMapDevToolPlugin.map'
            //     filename: isDevelopment
            //         ? '[name].js.map'
            //         : '[name]-[chunk].js.map'
            // }))

            return plugins
        })(),
        performance: {
            hints: (!isProduction || isDebug) ? 'warning' : false
        },
        resolve: {
            extensions:         ['.js', '.babel', '.styl'],
            modules:            [paths.nodeModules]
        }
    }

    // Webpack Dev Server - Header Settings
    //
    // not needed here, because we handle the dev-server per 'webpack-dev-middleware'
    // and set the headers in /stack/weboack/devServer/start.js
    //
    // for compatibility, we keep this code in config too
    if (isDevelopment) {
        const devServer = {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
        webpackConfig.devServer = devServer
    }

    return webpackConfig
}
