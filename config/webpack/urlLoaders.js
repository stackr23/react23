//               ____                    __
//   __  _______/ / /   ____  ____ _____/ /__  __________
//  / / / / ___/ / /   / __ \/ __ `/ __  / _ \/ ___/ ___/
// / /_/ / /  / / /___/ /_/ / /_/ / /_/ /  __/ /  (__  )
// \__,_/_/  /_/_____/\____/\__,_/\__,_/\___/_/  /____/
//
// different limits for different fileTypes
// refactor: rethink if necessary#
//
export default [
    {
        loader: 'url-loader',
        test: /\.(gif|jpg|png|svg)(\?.*)?$/,
        exclude:  /\.(styl|dir)$/,
        options: {limit: 10000}
    }, {
        loader: 'url-loader',
        test: /favicon\.ico$/,
        exclude:  /\.(styl|dir)$/,
        options: {limit: 1}
    }, {
        loader: 'url-loader',
        test: /\.(ttf|eot|woff|woff2)(\?.*)?$/,
        exclude:  /\.(styl|dir)$/,
        options: {limit: 100000}
    }
]
