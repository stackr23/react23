import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'mobx-react'
import mobxAutorun from '../stores/autorun'
import stores from '../stores'

import {createBrowserHistory, createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import {syncHistoryWithStore} from 'mobx-react-router'

import App from './App.js'

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

mobxAutorun(stores)

const {browserRoot} = process.env.APP_CONFIG

let historyCreated = global.IS_BROWSER
    ? createBrowserHistory({basename: browserRoot})
    : createMemoryHistory()
const historySynced = syncHistoryWithStore(historyCreated, stores.router)

class Root extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Router history={historySynced}>
                    <App />
                </Router>
            </Provider>
        )
    }
}

if (global.IS_BROWSER) {
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render

    renderMethod(<Root />, document.getElementById('app'))
}
