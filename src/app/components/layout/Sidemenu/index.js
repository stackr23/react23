import React from 'src/components/layout/Sidemenu/react'
import PropTypes from 'src/components/layout/Sidemenu/prop-types'
import { observer, inject } from 'src/components/layout/Sidemenu/mobx-react'
import { withTheme } from 'src/components/layout/Sidemenu/@material-ui/core/styles'
import Drawer from 'src/components/layout/Sidemenu/@material-ui/core/Drawer'
// import Button from '@material-ui/core/Button'
import List from 'src/components/layout/Sidemenu/@material-ui/core/List'
import Divider from 'src/components/layout/Sidemenu/@material-ui/core/Divider'
import ListItem from 'src/components/layout/Sidemenu/@material-ui/core/ListItem'
import ListItemIcon from 'src/components/layout/Sidemenu/@material-ui/core/ListItemIcon'
import ListItemText from 'src/components/layout/Sidemenu/@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'

import ThemeSwitch from '../../ThemeSwitch'
// import MailIcon from '@material-ui/icons/Mail'

if (global.IS_BROWSER) {
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

    render () {
      const {
        // router,
        viewStore: { sidemenu }
        // theme: { palette: {primary} }
      } = this.props

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
                  key={0}
                  onClick={() => {
                    // router.push(route.path)
                    // sidemenu.isOpen = false
                  }}
                  button
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

export default withTheme(Sidemenu)
