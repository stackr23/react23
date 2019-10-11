// utils
import ip from 'ip'
import path from 'path'
// WEBPACK related
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// STYLE related
import autoprefixer from 'autoprefixer'
import cssMqPacker from 'css-mqpacker'

import resolveConfig from '../webpack.config.resolve'
import urlLoaders from './webpack/urlLoaders'
import styleLoader, { styleobjectsLoader } from './webpack/styleLoader'

const config = require('config').default

let {
  // isDebug,
  isProduction,
  isDevelopment,
  NODE_ENV,
  verbose,
  paths,
  ports: { portHMR },
} = config

const serverIp = ip.address()

export default (_isDevelopment) => {
  isDevelopment = _isDevelopment != null ? _isDevelopment : isDevelopment
  isProduction = !isDevelopment

  const webpackConfig = {
    mode:    isDevelopment ? 'development' : 'production',
    target:  'web',
    cache:   !isDevelopment,
    devtool: process.env.CONTINUOUS_INTEGRATION
      ? 'inline-source-map'
      : !isProduction
        // 'eval-source-map' for dev - if you have performance troubles
        ? 'inline-source-map'
        : 'cheap-source-map',
    entry: {
      app: isDevelopment
        ? [
          `webpack-hot-middleware/client?path=http://${serverIp}:${portHMR}/__webpack_hmr`,
          path.join(paths.src, 'index.js'),
        ]
        : [ path.join(paths.src, 'index.js') ],
    },
    output: isDevelopment
      ? {
        path:              paths.build,
        filename:          'app.js',
        sourceMapFilename: 'app.js.map',
        chunkFilename:     'app-[chunkhash].js',
        publicPath:        `http://${serverIp}:${portHMR}/build/`,
      }
      : {
        path:              paths.build,
        filename:          'app-[hash].js',
        sourceMapFilename: 'app-[hash].js.map',
        chunkFilename:     'app-[chunkhash].js',
      },
    stats:  verbose ? 'normal' : isProduction ? 'errors-only' : 'minimal',
    module: {
      rules: [
        ...urlLoaders,
        styleLoader,
        styleobjectsLoader,
        // BABEL LOADER
        {
          loader:  'babel-loader',
          test:    /\.js$/,
          exclude: /(node_modules|bower_components|styles)/,
          options: {
            minified:       isProduction,
            retainLines:    true,
            sourceMap:      true,
            babelrc:        true,
            cacheDirectory: path.join(paths.build, 'cache', 'babel-loader'),
          },
        },
      ],
    },
    // TBD: refactor externals
    // externals: {
    //     'jsdom':    'window',
    //     // 'cheerio':  'window',
    //     'react/addons': true,
    //     'react/lib/ExecutionEnvironment': true,
    //     'react/lib/ReactContext': true,
    //     'fs': {}
    // },
    optimization: {
      splitChunks: {
        // chunks: 'all',
        cacheGroups: {
          // async: {
          //     name: 'async',
          //     chunks: 'async',
          //     enforce: true
          //     // minChunks: 2,
          //     // maxInitialRequests: 5, // The default limit is too small to showcase the effect
          //     // minSize: 0 // This is example is too small to create commons chunks
          // },
          // react: {
          //     chunks: chunk => {
          //         return ['react', 'react-dom'].includes(chunk.name)
          //     },
          //     test: /[\\/]node_modules[\\/]/,
          //     name: 'vendors',
          //     enforce: true
          // }
          commons: {
            chunks: 'all',
            test:   /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name:   'vendor',
          },
        },
      },
      minimize: isProduction,
    },
    plugins: (() => {
      const plugins = [
        new webpack.LoaderOptionsPlugin({
          minimize:  false,
          debug:     isDevelopment,
          hotPort:   portHMR,
          sourceMap: true,
          postcss:   () => [
            autoprefixer({
              browsers: [ 'last 2 versions', 'Safari > 6', 'iOS >= 7', 'ie >= 8' ],
            }),
            cssMqPacker(),
          ],
        }),
        new webpack.DefinePlugin({
          global: {
            IS_BROWSER: true,
            CONFIG:     JSON.stringify(config),
          },
          'process.env': {
            NODE_ENV:         JSON.stringify(NODE_ENV),
            APP_CONFIG:       JSON.stringify(config),
            GH_PAGES:         JSON.stringify(process.env.GH_PAGES),
            APP_BUILD_STATIC: JSON.stringify(process.env.APP_BUILD_STATIC),
          },
        }),
      ]
      if (!isProduction) {
        plugins.push(
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
        )
      }
      else {
        plugins.push(
          // new webpack.LoaderOptionsPlugin({minimize: true}),
          new ExtractTextPlugin({
            filename:  'app-[hash].css',
            allChunks: true,
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

        if (!process.env.CONTINUOUS_INTEGRATION) {
          // enable scope hoisting
          // https://medium.com/webpack/brief-introduction-to-scope-hoisting-in-webpack-8435084c171f
          plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
        }
      }

      // handled by config.devtool + config.output.sourceMapFilename
      //
      // plugins.push(new webpack.SourceMapDevToolPlugin({
      //     // filename: 'app.js.SourceMapDevToolPlugin.map'
      //     filename: isDevelopment
      //         ? 'app.js.map'
      //         : 'app-[chunk].js.map'
      // }))

      return plugins
    })(),
    performance: {
      hints: !isProduction ? 'warning' : false,
    },
    resolve: resolveConfig.resolve || resolveConfig || {
      extensions: [ '.js', '.jsx', '.json', '*' ],
      modules:    [ 'src', paths.nodeModules ],
    },
  }

  // Webpack Dev Server - Header Settings
  //
  // not needed here, because we handle the dev-server per 'webpack-dev-middleware'
  // and set the headers in /stack/weboack/devServer/start.js
  //
  // for compatibility, we keep this code in config too
  if (isDevelopment) {
    const devServer = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    }
    webpackConfig.devServer = devServer
  }

  return webpackConfig
}
