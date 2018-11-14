import React                from 'react'

import {Route}              from 'react-router-dom'

import stores               from '../stores'

import Layout               from './Layout'
import createRoutes         from '../routes/index'


const routes    = createRoutes(stores)

class App extends React.Component {
    static renderRoutes = () => (
        <React.Fragment>
            {routes.map((route, i) => <Route {...route} key={i} />)}
        </React.Fragment>
    );

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

    render () {
        return (
            <React.Fragment>
                {routes.map((route, i) =>
                    <App.LayoutWithChild key={i} {...route} />
                )}
            </React.Fragment>
        )
    }
}

export default App
