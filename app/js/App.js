import React from 'react'
import {Route} from 'react-router-dom'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {observer, inject} from 'mobx-react'
import stores from '../stores'

import Layout from './Layout'
import createRoutes from '../routes/index'

@inject('router')
class App extends React.Component {
    static propTypes = {
        children: PropTypes.array.isRequired,
        viewStore: PropTypes.object.isRequired
    }

    render() {
        return (
            <div id="app">
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
