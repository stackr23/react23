import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
// import Typography from '@material-ui/core/Typography'

if (global.IS_BROWSER) {
  require('./Header.styl')
}

@inject('viewStore')
class Header extends React.Component {
    static propTypes = {
      viewStore: PropTypes.object.isRequired,
      headline:  PropTypes.string.isRequired,
      subline:   PropTypes.string,
    }

    handleToggle = (e) => {
      const { toggleSidebar } = this.props.viewStore
      toggleSidebar('sidenav', e)
    }

    render() {
      const { headline, subline, viewStore } = this.props

      return (
        <AppBar position="static" color="primary" style={{ marginBottom: '2rem' }} className="">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              style={{
                marginLeft:  -12,
                marginRight: 20,
              }}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={this.handleToggle('sidenav')}
            >
              <MenuIcon
                fontSize="large"
                classes={{
                  root:          'muiIcon',
                  fontSizeLarge: 'muiIconLarge',
                }}
              />
            </IconButton>
            <h1>
              {headline}
              <span>{subline}</span>
            </h1>
            <div style={{ flexGrow: 1 }} />
            <div className="header__right">
              <IconButton
                color="inherit"
                aria-label="Menu"
                style={{
                  marginLeft:  -12,
                  marginRight: 20,
                }}
                onClick={(e) => {
                  viewStore.toggleSidebar('sidemenu', e)
                }}
              >
                <SettingsIcon
                  fontSize="large"
                  style={{
                    marginRight: 0,
                  }}
                  classes={{
                    fontSizeLarge: 'muiIconLarge',
                  }}
                />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      )
    }
}

export default Header
