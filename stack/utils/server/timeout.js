import {TimeoutError} from '../Exceptions/'

const timeout = (ms = 5000, promise) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        new TimeoutError(
          'Die Verbindung zum Server wurder leider unterbrochen' +
                        ' (timeout after ' +
                        ms / 1000 +
                        's)'
        )
      )
    }, ms)

    promise
    // Promise resolved before timeout - keep going...
      .then(resolve, reject)
      .catch((err) => throw new Error(err))
  })

export default timeout
