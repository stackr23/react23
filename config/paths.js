import path from 'path'

const rootDir = path.resolve(path.join(__dirname, '..'))
const paths = {
  ROOT:        rootDir,
  stack:       path.normalize(path.join(rootDir, 'stack')),
  server:      path.normalize(path.join(rootDir, 'stack', 'server')),
  // data:           path.normalize(path.join(rootDir, 'app', 'data')),
  // fixtures:       path.normalize(path.join(rootDir, 'stack', 'server', 'api', 'fixtures')),
  // api:            path.normalize(path.join(rootDir, 'stack', 'server', 'api')),
  // testServer:     path.normalize(path.join(rootDir, 'stack', 'server', 'test')),
  src:         path.normalize(path.join(rootDir, 'src')),
  app:         path.normalize(path.join(rootDir, 'src', 'app')),
  configs:     path.normalize(path.join(rootDir, 'config')),
  build:       path.normalize(path.join(rootDir, 'build')),
  // sass: path.normalize(path.join(rootDir, 'app', 'scss')),
  // tests: path.normalize(path.join(rootDir, '__tests__')),
  // coverage: path.normalize(path.join(rootDir, '__coverage__')),
  nodeModules: path.normalize(path.join(rootDir, 'node_modules')),
}

export default paths
