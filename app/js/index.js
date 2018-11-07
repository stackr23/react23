import React                from 'react'
import ReactDOM             from 'react-dom'
import Component            from 'react-pure-render/component'

import {MuiThemeProvider}   from '@material-ui/core/styles'
import {react23}            from '../style/muiThemes'

import {Provider}           from 'mobx-react'
import mobxAutorun          from '../stores/autorun'

import stores               from '../stores'

import Header               from './components/Header'
import './index.styl'

// TBD: inject isBrowser per webpack
// const {isBrowser}   = require('config').default

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

mobxAutorun(stores)

class Root extends Component {
    constructor (props) {
        super(props)
        this.state = {cowsay: ''}

        console.log('muiTheme', react23)
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
            <MuiThemeProvider theme={react23}>
                <Provider {...stores}>
                    <React.Fragment>
                        <Header headline="react23" subline="free react for free people" />
                        <div id="content">
                            <pre>{this.state.cowsay}</pre>
                        </div>
                    </React.Fragment>
                </Provider>
            </MuiThemeProvider>
        )
    }
}

// if (isBrowser) { cache buster
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
// }
