import express         from 'express'
import frontend        from './frontend'
// import api             from './api'
// import errorHandler from './lib/errorHandler';

const {ports: {portFE}} = require('config').default
const app               = express()

// app.use('/api', api)

// TBD: refactor and use errorHandler
// app.use(errorHandler);
app.use(frontend)

app.listen(portFE, () => {
    console.log('Server started at port %d', portFE)
})
