import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import {routes} from '../../../../routes'

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import Typography from '@material-ui/core/Typography'

if (global.IS_BROWSER) {
  require('./Sidenav.styl')
}

@inject('viewStore', 'router')
@observer
class Sidenav extends React.Component {
    static propTypes = {
      viewStore: PropTypes.object.isRequired,
      router: PropTypes.object.isRequired
    }

    SideList = ({router, sidenav}) => (
      <div className="sidenav__list">
        <Divider />
        <List>
          {routes.map((route, index) => (
            <ListItem
              button
              key={route.meta.name}
              onClick={() => {
                router.push(route.path)
                sidenav.isOpen = false
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={route.meta.title}
                secondary={route.meta.description}
              />
            </ListItem>
          ))}
        </List>
      </div>
    )

    render() {
      const {
        viewStore: {sidenav},
        router
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
            paper: 'sidenav__content'
          }}
        >
          <h2>{sidenav.headline}</h2>
          {this.SideList({router, sidenav})}
        </Drawer>
      )
    }
}

export default Sidenav
