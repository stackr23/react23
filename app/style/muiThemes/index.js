//     ___    ____  ____      ________  __________  _________
//    /   |  / __ \/ __ \    /_  __/ / / / ____/  |/  / ____/
//   / /| | / /_/ / /_/ /_____/ / / /_/ / __/ / /|_/ / __/
//  / ___ |/ ____/ ____/_____/ / / __  / /___/ /  / / /___
// /_/  |_/_/   /_/         /_/ /_/ /_/_____/_/  /_/_____/
//
'use strict'

import {createMuiTheme}     from '@material-ui/core/styles'
import defaultTheme         from './default'

let _react23
if (process.env.IS_BROWSER) {
    _react23    = require('./react23.csso')
} else {
    _react23    = {}
}

export default createMuiTheme(Object.assign({}, defaultTheme))

export const react23 = createMuiTheme(Object.assign({}, _react23))
