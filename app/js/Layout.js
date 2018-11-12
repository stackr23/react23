import React                from 'react'
import PropTypes            from 'prop-types'

import {observer, inject}   from 'mobx-react'

import {MuiThemeProvider}   from '@material-ui/core/styles'
import default23, {react23} from '../style/muiThemes'

import Home                 from './pages/Home'

import Header               from './components/Header'
import '../style/layout.styl'

const themes = {
    default23, react23
}

@inject('viewStore')
@observer
class Layout extends React.Component {
    static propTypes = {
        viewStore:  PropTypes.object.isRequired
    }
    render () {
        const {viewStore}   = this.props
        const theme         = themes[viewStore.theme]

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <Header headline="React23" subline="the perfect react stack to wrap your web app" />
                    <div id="content" className="wrapper">
                        {/* TBD: props.router.children */}
                        <Home />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Layout
