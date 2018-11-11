import React                from 'react'
import ReactDOM             from 'react-dom'

import {Provider}           from 'mobx-react'
import mobxAutorun          from '../stores/autorun'
import stores               from '../stores'

import App                  from './App.js'

// TBD: inject isBrowser per webpack
// const {isBrowser}   = require('config').default

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

mobxAutorun(stores)


class Root extends React.Component {
    render () {
        return (
            <Provider {...stores}>
                <App />
            </Provider>
        )
    }
}

// if (isBrowser) { cache buster
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
// }
