import React                    from 'react'
import {
    createBrowserHistory,
    createMemoryHistory
}                           from 'history'
import {Router, Route}          from 'react-router-dom'
import {
    syncHistoryWithStore
}                           from 'mobx-react-router'
import {Provider}           from 'mobx-react'
import mobxAutorun          from '../stores/autorun'
import stores               from '../stores'

import Layout               from './Layout'
import createRoutes         from '../routes/index'

const {browserRoot}         = process.env.APP_CONFIG

mobxAutorun(stores)

let _history            = process.env.IS_BROWSER
    ? createBrowserHistory({basename: browserRoot})
    : createMemoryHistory()

const history           = syncHistoryWithStore(_history, stores.router)
const routes            = createRoutes(stores)

class App extends React.Component {
    static LayoutWithChild = route => {
        const {component: Component, ...routeProps} = route

        return (
            <Route
                {...routeProps}
                render={routerProps => {
                    return (
                        <Layout {...routerProps} >
                            <Component />
                        </Layout>
                    )
                }}
            />
        )
    }

    // TBD: refactor: shove Provider and Router inti /index.js to Load App.js on SSR
    render () {
        return (
            <Provider {...stores}>
                <Router history={history}>
                    <React.Fragment>
                        {routes.map((route, i) =>
                            <App.LayoutWithChild key={i} {...route} />
                        )}
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App
