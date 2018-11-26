import express from 'express'
import frontend from './frontend'

const app = express()
const {
    ports: {portFE}
} = require('config').default

// TBD: /api
// app.use('/api', api)

app.use(frontend)

app.listen(portFE, () => {
    console.log('Server started at port %d', portFE)
})
