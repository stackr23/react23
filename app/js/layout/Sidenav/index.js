import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import Drawer from '@material-ui/core/Drawer'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import Typography from '@material-ui/core/Typography'

if (process.env.IS_BROWSER) {
    require('./Sidenav.styl')
}

@inject('viewStore')
@observer
class Sidebar extends React.Component {
    static propTypes = {
        viewStore: PropTypes.object.isRequired
    }

    render() {
        const {
            viewStore: {sidenav}
        } = this.props

        return (
            <Drawer
                id="sidenav"
                anchor="left"
                open={sidenav.isOpen}
                onClose={(e) => {
                    sidenav.isOpen = false
                    e.preventDefault()
                    return false
                }}
                classes={{
                    paper: 'sidenav__content '
                }}
            >
                <h2>sidenav</h2>
            </Drawer>
        )
    }
}

export default Sidebar
