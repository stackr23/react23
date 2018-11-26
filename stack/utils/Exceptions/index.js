// extension preset
class ExtendableError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
        // This will print the custom error in the stack, and not the generic Error
        this.message = message
        // Capture the current stacktrace and remove 'ExtendableError' from the stacktrace
        // Read More: https://code.google.com/p/v8-wiki/wiki/JavaScriptStackTraceApi#Stack_trace_collection_for_custom_exceptions
        if (typeof Error.captureStackTrace === 'function') {
            // keep it isomorphic
            Error.captureStackTrace(this, this.constructor.name)
        } else {
            this.stack = new Error(message).stack
        }
    }
}

// TBD: APIError

/**
 *  @class
 *  @name  TimeoutError
 *  @description gets throw TimeoutError to indicate ServerTimeout
 *  @param  {string} message - error message
 *  @example
 *  throw new TimeoutError('Server responded with an Timeout after 30s')
 */
export class TimeoutError extends ExtendableError {
    constructor(message) {
        let msg = message || 'Request Timed out'
        super(msg)
        this.name = 'TimeoutError'
        this.type = 'timeout'
    }
}

export default ExtendableError
