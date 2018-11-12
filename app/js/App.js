import React                from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import {
    Router, Route, Link
}                           from 'react-router-dom'
import {
    syncHistoryWithStore
}                           from 'mobx-react-router'
import {Provider}           from 'mobx-react'
import mobxAutorun          from '../stores/autorun'
import stores               from '../stores'

import Layout               from './Layout'
import Home                 from './pages/Home'
import TestPage             from './pages/TestPage'

mobxAutorun(stores)

const browserHistory        = createBrowserHistory()
const history               = syncHistoryWithStore(browserHistory, stores.router)

const routes = [
    {
        path:       '/',
        exact:      true,
        component:  Home
    },
    {
        path:       '/test',
        exact:      true,
        component:  TestPage
    }
]

const RouteWithSubRoutes = route => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => (
                <Layout {...props} routes={route.routes}>
                    <route.component />
                </Layout>
            )}
        />
    )
}

class App extends React.Component {
    render () {
        return (
            <Provider {...stores}>
                <Router history={history}>
                    <React.Fragment>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App
