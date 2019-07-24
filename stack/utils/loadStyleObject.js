import fs from 'fs'
import path from 'path'
// import stylus from 'stylus'

import styleObjects from '@stackr23/styleobjects'

const {
    paths: {app: appPath}
} = require('config').default

const loadStyleObject = async () => {
//   const muiThemesPath = path.join(appPath, 'style', 'muiThemes')

    console.log('styleObjects', typeof styleObjects, styleObjects) // styleObjects.convert('#app {color: 'red'; }')

    const react23CSSO = fs.readFileSync(
        path.join(appPath, 'style', 'muiThemes', 'react23.csso'),
        'utf-8'
    )

    console.log('react23CSSO', react23CSSO)

    // stylus(react23CSSO)
    //     .set('paths', [muiThemesPath])
    //     .render((err, css) => {
    //         if (err) throw err

    //         console.log('rendered CSS', css)
    //         stylusCSS = css
    //     })

    //   let stylusCSS
    //   const util = require('util')
    //   const stylusPromised = util.promisify(stylus(react23CSSO).set('paths', [muiThemesPath]).render)

    // const stylusCSS = await stylusPromised()

    //   const generatedTheme = styleObjects.convert(stylusCSS)
//   console.log('THEMEobj', generatedTheme)
}

export default loadStyleObject
