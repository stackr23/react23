import Promise        from 'bluebird'
import {TimeoutError} from './Exceptions.js'

const timeout = (ms = 5000, promise) =>
    (new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new TimeoutError(
                'Die Verbindung zum Server wurder leider unterbrochen'
            +   ' (timeout after ' + (ms / 1000) + 's)'
            ))
        }, ms)

        promise
            // TBD catch
            // .catch() // other errors
            // Promise resolved before timeout - keep going...
            .then(resolve, reject)
    }))

export default timeout
