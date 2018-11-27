import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import {withTheme} from '@material-ui/core/styles'
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch.js'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import Typography from '@material-ui/core/Typography'

if (process.env.IS_BROWSER) {
    require('./Sidemenu.styl')
}

@inject('viewStore', 'router')
@observer
class Sidemenu extends React.Component {
    static propTypes = {
        viewStore: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired
    }

    render() {
        const {
            router,
            viewStore: {sidemenu},
            theme: {
                palette: {primary}
            }
        } = this.props

        console.log('primary', primary)

        return (
            <Drawer
                id="sidemenu"
                anchor="right"
                open={sidemenu.isOpen}
                onClose={(e) => {
                    sidemenu.isOpen = false
                    e.preventDefault()
                    return false
                }}
                classes={{
                    paper: 'sidemenu__content'
                }}
            >
                <div
                    style={
                        {
                            // backgroundColor: primary.light
                        }
                    }
                >
                    <h2>{sidemenu.headline}</h2>
                    <Divider />
                    <ThemeSwitch />
                    <div className="sidemenu__list">
                        <Divider />
                        <List>
                            <ListItem
                                button
                                key={0}
                                onClick={() => {
                                    // router.push(route.path)
                                    // sidemenu.isOpen = false
                                }}
                            >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Setting Button 1'} />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>
        )
    }
}

export default withTheme()(Sidemenu)
