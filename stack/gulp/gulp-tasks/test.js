import config       from 'config'
import gulp         from 'gulp'
import {debugInfo}  from '../../utils/myChalk'


gulp.task('test:config', done => {
    console.dir(config)
})

gulp.task('test', done => {
    let additionalStyledText = '{bgGreen.bold SUCCESS {bgBlack.white (!)}}'
    console.log('You should see a colorful debugMsg:')
    debugInfo(`it was an ${additionalStyledText} I {reset.bgWhite.red.bold love} it!`)

    gulp.series('test:config')

    done()
})
