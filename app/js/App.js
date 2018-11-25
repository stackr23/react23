import React from 'react'

import {Route} from 'react-router-dom'

import stores from '../stores'

import Layout from './Layout'
import createRoutes from '../routes/index'

import Helmet from 'react-helmet'

class App extends React.Component {
    // <React.Fragment>
    //     {routes.map((route, i)
    //     => <Route {...route} key={i} />)}
    // </React.Fragment>

    render() {
        return (
            <div id="main">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>[StackR23/react]</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Layout>
                    {// pageContent
                    createRoutes(stores)}
                </Layout>
            </div>
        )
    }
}

export default App
