//     ___    ____  ____      ________  __________  _________
//    /   |  / __ \/ __ \    /_  __/ / / / ____/  |/  / ____/
//   / /| | / /_/ / /_/ /_____/ / / /_/ / __/ / /|_/ / __/
//  / ___ |/ ____/ ____/_____/ / / __  / /___/ /  / / /___
// /_/  |_/_/   /_/         /_/ /_/ /_/_____/_/  /_/_____/
//
'use strict'

import {createMuiTheme}     from '@material-ui/core/styles'
import defaultTheme         from './default'
import _react23             from './react23.csso'

export default createMuiTheme(Object.assign({}, {
    defaultTheme
}))

console.log('_react23', _react23)
console.log('_react23', _react23['palette__primary'].main)

export const react23 = createMuiTheme(Object.assign({}, {
    _react23
}))
