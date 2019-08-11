import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {observer, inject} from 'mobx-react'
import stores from '../stores'

import Layout from './Layout'
import createRoutes from '../routes/index'

import {withRouter} from 'react-router'
import {Switch} from 'react-router-dom'

const routesCompiled = createRoutes(stores)

// @observer
// @inject('router')
@withRouter
class App extends React.Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired
        }),
    }

    render() {
        const {
            location
        } = this.props

        // extract actual route's meta data
        const route = routesCompiled.filter((r) => r.props.path === location.pathname)[0]

        const title = route.props.meta.title
        const description = route.props.meta.description || ''

        return (
            <div id="app">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>[React23] - {title}</title>
                    <meta name="description" content={description} />
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Layout>
                    <Switch>
                        {routesCompiled}
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App
