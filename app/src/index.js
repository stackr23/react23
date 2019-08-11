import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'mobx-react'
import mobxAutorun from '../stores/autorun'
import stores from '../stores'

import {createBrowserHistory, createMemoryHistory} from 'history'
import {BrowserRouter as Router} from 'react-router-dom'
// import {syncHistoryWithStore} from 'mobx-react-router'

import App from './App.js'

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

mobxAutorun(stores)

let historyCreated = global.IS_BROWSER
    ? createBrowserHistory()
    // TODO: use memoryhistory on server
    // <Router history={}><StaticRouter >...</StaticRouter></Router>
    : createMemoryHistory()
// const historySynced = syncHistoryWithStore(createBrowserHistory(), stores.router)

export default class Root extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Router history={historyCreated}>
                    <App />
                </Router>
            </Provider>
        )
    }
}

if (global.IS_BROWSER) {
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render

    renderMethod(<Root />, document.getElementById('root'))
}
