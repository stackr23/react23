import React                from 'react'
import PropTypes            from 'prop-types'
import Component            from 'react-pure-render/component'

import AppBar               from '@material-ui/core/AppBar'

import './Header.styl'

class Header extends Component {
    static propTypes = {
        headline:   PropTypes.string.isRequired,
        subline:    PropTypes.string
    }

    render () {
        const {headline, subline} = this.props

        return (
            <AppBar position="sticky" color="primary" style={{marginBottom: '3rem'}}>
                <h1>{headline}<span>- {subline}</span></h1>
            </AppBar>
        )
    }
}

export default Header
