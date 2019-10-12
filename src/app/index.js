import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'

import stores from 'stores/index.js'
import mobxAutorun from 'stores/autorun'
import App from 'app/App.js'

// if (!global._babelPolyfill) require('@babel/polyfill')

mobxAutorun(stores)

const { browserRoot } = process.env.APP_CONFIG

let historyCreated = global.IS_BROWSER
  ? createBrowserHistory({ basename: browserRoot })
  : createMemoryHistory()
const historySynced = syncHistoryWithStore(historyCreated, stores.router)

class Root extends React.PureComponent {
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

console.log('MOUNTING ??? process.env.IS_BROWSER', process.env.IS_BROWSER)

if (process.env.IS_BROWSER) {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  console.log('module.hot', module.hot)
  ReactDOM.render(<Root />, document.getElementById('root'))

  if (module.hot) {
    module.hot.accept(() => {
      renderMethod(<Root />, document.getElementById('root'))
    })
  }
}

// export default Root
