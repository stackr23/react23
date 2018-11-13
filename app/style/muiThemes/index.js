//     ___    ____  ____      ________  __________  _________
//    /   |  / __ \/ __ \    /_  __/ / / / ____/  |/  / ____/
//   / /| | / /_/ / /_/ /_____/ / / /_/ / __/ / /|_/ / __/
//  / ___ |/ ____/ ____/_____/ / / __  / /___/ /  / / /___
// /_/  |_/_/   /_/         /_/ /_/ /_/_____/_/  /_/_____/
//
'use strict'

import {createMuiTheme}     from '@material-ui/core/styles'
import _react23Theme        from './react23'
import _muiTheme            from './default'


export const muiTheme       = createMuiTheme(_muiTheme)

export const react23Theme   = createMuiTheme(_react23Theme)

export default {
    muiTheme, react23Theme
}
