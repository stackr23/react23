import React from 'react'
import PropTypes from 'prop-types'

import {observer, inject} from 'mobx-react'

import {MuiThemeProvider} from '@material-ui/core/styles'
import themes from '../style/muiThemes/index'

import Header from './layout/Header'
import Sidenav from './layout/Sidenav'
import Sidemenu from './layout/Sidemenu'
import ConfirmationDialog from './layout/ConfirmationDialog'

if (global.IS_BROWSER) {
    require('../style/layout.styl')
}

@inject('viewStore', 'router')
@observer
class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.array.isRequired,
        viewStore: PropTypes.object.isRequired
    }

    render() {
        const {
            viewStore: {theme: themeName, sideBar, sidenav},
            router
        } = this.props
        const theme = themes[themeName]
        const themeClassName = themeName

        let sheetsManager = {}
        if (!global.IS_BROWSER) {
            //  inject sheetsManager for SSR - see /stack/server/frontend/render.js
            sheetsManager = {sheetsManager: new Map()}
        }

        console.log('router', router)
        console.log('theme', theme)

        return (
            <MuiThemeProvider theme={theme} {...sheetsManager}>
                <React.Fragment>
                    <main id="main" className={themeName}>
                        <Header
                            headline="React23"
                            subline="the perfect react stack to wrap your web app"
                        />
                        <div id="content" className="container">
                            {this.props.children}
                        </div>
                    </main>
                    <footer id="footer" />
                    {/* global UI Components */}
                    <Sidenav />
                    <Sidemenu />
                    <ConfirmationDialog />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Layout
