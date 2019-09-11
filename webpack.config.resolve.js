const { paths } = require('config').default

module.exports = {
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '*' ],
    modules:    [ '.', 'src', paths.nodeModules ],
  },
}
