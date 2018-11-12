import React                from 'react'
import PropTypes            from 'prop-types'
import {observer, inject}   from 'mobx-react'

import AppBar               from '@material-ui/core/AppBar'

let style   = {}
if (process.env.IS_BROWSER) {
    style = require('./testCssObjects.csso')
    require('./Header.styl')
}

@inject('viewStore')
@observer
class Header extends React.Component {
    static propTypes = {
        viewStore:  PropTypes.object.isRequired,
        headline:   PropTypes.string.isRequired,
        subline:    PropTypes.string
    }

    render () {
        const {headline, subline} = this.props

        return (
            <AppBar position="sticky" color="primary" style={style.header} className="wrapper">
                <h1>{headline}<span>{subline}</span></h1>
            </AppBar>
        )
    }
}

export default Header
