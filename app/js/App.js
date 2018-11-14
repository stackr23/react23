import React                    from 'react'
import {
    createBrowserHistory,
    createMemoryHistory
}                           from 'history'
import {Router, Route}          from 'react-router-dom'
import {
    syncHistoryWithStore
}                           from 'mobx-react-router'

import stores               from '../stores'

import Layout               from './Layout'
import createRoutes         from '../routes/index'

const {browserRoot}         = process.env.APP_CONFIG

let _history    = process.env.IS_BROWSER
    ? createBrowserHistory({basename: browserRoot})
    : createMemoryHistory()

const history   = syncHistoryWithStore(_history, stores.router)
const routes    = createRoutes(stores)

class App extends React.Component {
    static LayoutWithChild = route => {
        const {Component, ...routeProps} = route

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
    };

    static renderRoutes = () => (
        <React.Fragment>
            {routes.map((route, i) => <Route {...route} key={i} />)}
        </React.Fragment>
    );

    static renderWrappedRoutes = () => (
        <React.Fragment>
            {routes.map((route, i) =>
                <App.LayoutWithChild key={i} {...route} />
            )}
        </React.Fragment>
    )

    render () {
        return (
            <Router history={history}>
                {App.renderWrappedRoutes()}
            </Router>
        )
    }
}

export default App
