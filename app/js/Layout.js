import React from 'react'
import PropTypes from 'prop-types'

import {observer, inject} from 'mobx-react'

import {MuiThemeProvider} from '@material-ui/core/styles'
import themes from '../style/muiThemes/index'

import {Link} from 'react-router-dom'
import ConfirmationDialog from './layout/ConfirmationDialog'

import Sidenav from './layout/Sidenav'
import Sidemenu from './layout/Sidemenu'
import Header from './components/Header'

if (process.env.IS_BROWSER) {
    require('../style/layout.styl')
}

@inject('viewStore' /*, 'router' */)
@observer
class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.array.isRequired,
        router: PropTypes.object,
        viewStore: PropTypes.object.isRequired
    }

    componentDidMount() {
        if (this.props.children === null) {
            // this.props.router.push('/')
        }
    }

    render() {
        const {
            viewStore: {theme: themeName, sideBar, sidenav}
        } = this.props
        const theme = themes[themeName]

        let sheetsManager = {}
        if (!process.env.IS_BROWSER) {
            sheetsManager = {sheetsManager: new Map()}
        }

        // TBD: shove theme(setup) into viewStore

        return (
            <MuiThemeProvider theme={theme} {...sheetsManager}>
                <React.Fragment>
                    <div id="main">
                        <Header
                            headline="React23"
                            subline="the perfect react stack to wrap your web app"
                        />
                        <div id="content">{this.props.children}</div>
                    </div>
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
