import PluginError      from 'plugin-error'
import webpack          from 'webpack'
import webpackGetConfig from '../../config/webpackGetConfig.js'

export default function makeBuild(callback) {
    // (false) = force production!
    const config = webpackGetConfig(false)

    webpack(config, (fatalError, stats) => {
        const jsonStats = stats.toJson()

        // We can save jsonStats to be analyzed with
        // http://webpack.github.io/analyse or
        // https://github.com/robertknight/webpack-bundle-size-analyzer.
        // import fs from 'fs'
        // fs.writeFileSync('./bundle-stats.json', JSON.stringify(jsonStats))

        const buildError = fatalError || jsonStats.errors[0] || jsonStats.warnings[0]

        if (buildError) {
            throw new PluginError('webpack', buildError)
        }

        console.log('[webpack]', stats.toString({
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }))

        if (typeof callback === 'function') {
            callback()
        }
    })
}
