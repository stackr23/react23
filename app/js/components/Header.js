import React                from 'react'
import PropTypes            from 'prop-types'
import {observer, inject}   from 'mobx-react'

import AppBar               from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton           from '@material-ui/core/IconButton'
import MenuIcon             from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

if (process.env.IS_BROWSER) {
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
            <AppBar position="static" color="primary" style={{marginBottom: '2rem'}} className="">
                <Toolbar >
                    <IconButton color="inherit" aria-label="Menu" style={{
                        marginLeft: -12,
                        marginRight: 20
                    }}>
                        <MenuIcon fontSize="large"
                            classes={{
                                root:           'muiIcon',
                                fontSizeLarge:  'muiIconLarge'
                            }}
                        />
                    </IconButton>
                    <h1>{headline}<span>{subline}</span></h1>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header
