'use strict'

import gulpNotify from 'gulp-notify'

export default function(error) {
  if (!global.isProd) {
    let args = Array.prototype.slice.call(arguments)

    // Send error to notification center with gulp-notify
    gulpNotify
      .onError({
        title:   'Compile Error',
        message: '<%= error.message %>',
      })
      .apply(this, args)

    // Keep gulp from hanging on this task
    this.emit('end')
  }
  else {
    // Log the error and stop the process
    // to prevent broken code from building
    console.log(error)
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  }
}
