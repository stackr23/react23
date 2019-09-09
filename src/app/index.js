import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'
import App from 'src/App.js'

import stores from 'stores/index.js'
import mobxAutorun from 'stores/autorun'

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

mobxAutorun(stores)

const { browserRoot } = process.env.APP_CONFIG

let historyCreated = global.IS_BROWSER
  ? createBrowserHistory({ basename: browserRoot })
  : createMemoryHistory()
const historySynced = syncHistoryWithStore(historyCreated, stores.router)

export default class Root extends React.Component {
  render () {
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

  renderMethod(<Root />, document.getElementById('root'))
}
