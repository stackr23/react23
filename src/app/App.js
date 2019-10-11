import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import Layout from 'app/Layout'
import createRoutes from 'routes/index.js'
import stores from 'stores/index.js'
console.log('true :', true)

const routesCompiled = createRoutes(stores)

@inject('router')
@observer
class App extends React.Component {
    static propTypes = {
        router: PropTypes.object.isRequired,
    }

    getRouteProps = () => {
        let title = '', description = ''

        if(process.env.IS_BROWSER) {
            const {
                router: { location: { pathname }},
            } = this.props

            // extract actual route's meta data
            const route = routesCompiled.filter((r) => r.props.path === pathname)[0]
            title = route.props.meta.title
            description = route.props.meta.description || ''
        }

        return { title, description }
    }

    render() {
        const { title, description } = this.getRouteProps()

        return (
            <div id="app">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>[React23] - {title}</title>
                    <meta name="description" content={description} />
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Layout>{routesCompiled}</Layout>
            </div>
        )
    }
}

export default App
