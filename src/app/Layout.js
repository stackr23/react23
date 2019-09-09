import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { ThemeProvider } from '@material-ui/styles'
import Header from 'src/components/layout/Header'
import Sidenav from 'src/components/layout/Sidenav'
import Sidemenu from 'src/components/layout/Sidemenu'
import ConfirmationDialog from 'src/components/layout/ConfirmationDialog'
import themes from 'style/muiThemes/index'

if (global.IS_BROWSER) {
  require('../style/layout.styl')
}

@inject('viewStore', 'router')
@observer
class Layout extends React.Component {
    static propTypes = {
      router: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
      children: PropTypes.array,
      viewStore: PropTypes.object.isRequired
    }

    render () {
      const {
        viewStore: { theme: themeName }
      } = this.props
      const theme = themes[themeName]

      return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <main id="main" className={themeName}>
              <Header
                headline="React23"
                subline="the perfect react stack to wrap your web app"
              />
              <div id="content">{this.props.children}</div>
            </main>
            <footer id="footer">
                        made with 💕 by <a href="http://github.com/DoubleU23">DoubleU23</a>
            </footer>
            <Sidenav />
            <Sidemenu />
            <ConfirmationDialog />
          </React.Fragment>
        </ThemeProvider>
      )
    }
}

export default Layout
