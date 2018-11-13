import React                    from 'react'
import PropTypes                from 'prop-types'

import {observer, inject}       from 'mobx-react'

import {MuiThemeProvider}       from '@material-ui/core/styles'
import * as themes                   from '../style/muiThemes/index'

import {Link}                   from 'react-router-dom'
import ConfirmationDialog       from './layout/ConfirmationDialog'

import Header                   from './components/Header'

if (process.env.IS_BROWSER) {
    require('../style/layout.styl')
}

@inject('viewStore', 'router')
@observer
class Layout extends React.Component {
    static propTypes = {
        children:           PropTypes.object.isRequired,
        router:             PropTypes.object.isRequired,
        viewStore:          PropTypes.object.isRequired
    }

    componentDidMount () {
        if (this.props.children == null) {
            // this.props.router.push('/')
        }
    }

    render () {
        const {viewStore, router}   = this.props
        const theme                 = themes[viewStore.theme]

        let sheetsManager = {}
        if (!process.env.IS_BROWSER) {
            sheetsManager = {sheetsManager: new Map()}
        }

        return (
            <MuiThemeProvider theme={theme} {...sheetsManager} >
                <React.Fragment>
                    <div id="main">
                        <Header headline="React23" subline="the perfect react stack to wrap your web app" />
                        <nav id="nav" className="wrapper" style={{
                            marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #ccc'
                        }}>
                            <Link to={'/'}>Home</Link>&nbsp;|&nbsp;
                            <Link to={'/test'}>TestPage</Link>
                        </nav>
                        {this.props.children}
                    </div>
                    <ConfirmationDialog />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Layout
