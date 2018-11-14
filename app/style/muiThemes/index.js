'use strict'
//     ___    ____  ____     ________  __________  ______________
//    /   |  / __ \/ __ \   /_  __/ / / / ____/  |/  / ____/ ___/
//   / /| | / /_/ / /_/ /    / / / /_/ / __/ / /|_/ / __/  \__ \
//  / ___ |/ ____/ ____/    / / / __  / /___/ /  / / /___ ___/ /
// /_/  |_/_/   /_/        /_/ /_/ /_/_____/_/  /_/_____//____/
//
//  add themes or customize react23Theme
//  TBD: export * from './'
//

import {createMuiTheme}     from '@material-ui/core/styles'
import _react23Theme        from './react23'
import _muiTheme            from './default'

let styleObjects, stylus
if (process.env.IS_BROWSER) {

} else {
    // loadStyleObjects('./react23.css')
}

// default muiTheme without modifications
export const muiTheme       = createMuiTheme(_muiTheme)

// TBD: add muiTheme.dark

// custom theme according to setup.styl
export const react23Theme   = createMuiTheme(_react23Theme)

export default {
    muiTheme, react23Theme
}
