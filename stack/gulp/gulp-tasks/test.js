import gulp         from 'gulp'
import {debugInfo}  from '../../utils/myChalk'

gulp.task('test', done => {
    let additionalStyledText = '{bgGreen.bold SUCCESS {bgBlack.white (!)}}'
    console.log('You should see a colorful debugMsg:')
    debugInfo(`it was an ${additionalStyledText} I {reset.bgWhite.red.bold love} it!`)

    done()
})
