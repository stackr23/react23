import React                from 'react'
import ReactDOM             from 'react-dom'
import Component            from 'react-pure-render/component'

import {MuiThemeProvider}   from '@material-ui/core/styles'
import appTheme             from '../style/mui/theme'

import './index.styl'
import Header from './components/Header'

import './index.styl'

// TBD: inject isBrowser per webpack
// const {isBrowser}   = require('config').default

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

class Root extends Component {
    constructor (props) {
        super(props)
        this.state = {cowsay: ''}
    }

    async componentDidMount () {
        const {say} = await import(/* webpackChunkName: "cowsay" */ 'cowsay')
        this.say    = say

        setTimeout(this.fillContent.bind(this), 500)
    }

    fillContent () {
        this.setState({
            cowsay: this.say({
                text:   '\nperfect react stack to wrap your web app\n\n',
                tongue: 'U',
                eyes:   'oO'
            })
        })
    }

    render () {
        return (
            <MuiThemeProvider theme={appTheme}>
                <React.Fragment>
                    <Header headline="react23" subline="free react for free people" />
                    <div id="content">
                        <pre>{this.state.cowsay}</pre>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

// if (isBrowser) {
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
// }
