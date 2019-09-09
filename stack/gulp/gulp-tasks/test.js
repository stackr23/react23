import config from 'config'
import logger from '@stackr23/logger'

import gulp from 'gulp'

gulp.task('test:config', () => {
  console.dir(config)
})

gulp.task('test', (done) => {
  let additionalStyledText = '{bgGreen.bold SUCCESS {bgBlack.white (!)}}'
  console.log('You should see a colorful debugMsg:')
  logger.debug(`it was an ${additionalStyledText} I {reset.bgWhite.red.bold love} it!`)

  gulp.series('test:config')

  done()
})
