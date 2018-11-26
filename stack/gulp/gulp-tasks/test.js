import config from 'config'
import gulp from 'gulp'
import {debugMsg} from '../../utils/myLogger'

gulp.task('test:config', (done) => {
    console.dir(config)
})

gulp.task('test', (done) => {
    let additionalStyledText = '{bgGreen.bold SUCCESS {bgBlack.white (!)}}'
    console.log('You should see a colorful debugMsg:')
    debugMsg(
        `it was an ${additionalStyledText} I {reset.bgWhite.red.bold love} it!`
    )

    gulp.series('test:config')

    done()
})
