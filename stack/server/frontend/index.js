import device from 'express-device'
import express from 'express'
import cors from 'cors'

// import favicon from 'serve-favicon'
import render from './render'

const app = express()

app.get('/test/testTimeout', (req, res) => {
  setTimeout(() => {
    res.send('timeout response after 5000ms')
  }, 10000)
})

app.use(cors())

// app.use(favicon('assets/img/favicon.ico'))

// serve static assets. We can cache them as they include hashes.
// express.static is relative to your node process (gulp runs in project root)
app.use('/assets', express.static('app/assets', { maxAge: '200d' }))
// app.use('/assets/fonts', express.static('app/assets/fonts', {maxAge: '200d'}))

// TBD: CSS and production server
app.use('/build', express.static('build', { maxAge: '200d' }))

// // Intl.
// app.use('/node_modules/intl/dist', express.static('node_modules/intl/dist'))
// app.use('/node_modules/intl/locale-data', express.static('node_modules/intl/locale-data'))

app.use(device.capture())
//

// implement your own routes here
//
// app.use('/myRoute', (req, res, next) => {
//     res.send('HALLO!')
// })

app.get('*', render)

app.on('mount', () => {
  console.log('App is available at %s', app.mountpath)
})

export default app
