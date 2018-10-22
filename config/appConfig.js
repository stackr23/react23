const yargs = require('yargs')
    .option('sass_style', {
        alias:      's',
        default:    'compressed'
    })
    .argv

export default (function (config) {
    const rootRel   = process.cwd() + '/'

    const paths = {
        src:    rootRel + 'app/src/',
        dist:   rootRel + 'build/'
    }

    config      = Object.assign({
        paths,
        globs: {
            clean:  [
                '!**/.gitkeep', 'stack/__test__/**/*', 'build/**/*'
            ],
            scss:   {
                watch:      paths.src + '**/*.scss',
                src:    {
                    main:   paths.src + 'full.scss',
                    mqs:    paths.src + 'mqs/*.scss'
                },
                dist:   paths.dist + 'css/'
            }
        },
        sass: {
            style: yargs.sass_style
        }
    }, config) // assign process.env.APP_CONFIG to defaults

    return config
})(process.env.APP_CONFIG || {})
