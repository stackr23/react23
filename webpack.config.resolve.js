const { paths } = require('config').default

module.exports = {
  root: 'app',
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '*' ],
    modules: [ 'src', 'app', paths.nodeModules ]
  }
}
