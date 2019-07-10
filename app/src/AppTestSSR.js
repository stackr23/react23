import React from 'react'
import {Route} from 'react-router-dom'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {observer, inject} from 'mobx-react'
import stores from '../stores'

import Layout from './Layout'
import createRoutes from '../routes/index'

// const routesCompiled = createRoutes(stores)

if (global.IS_BROWSER) {
    require('../style/layout.styl')
}

// @inject('router')
class AppTestSSR extends React.Component {
    static propTypes = {
        testProp: PropTypes.string.isRequired
    }

    render() {
        const {
            testProp
        } = this.props
        // console.log('global config', global.CONFIG)

        // const route = routesCompiled.filter((r) => r.props.path === pathname)[0]
        // const title = route.props.meta.title
        // const description = route.props.meta.description || ''

        return (
            <div id="app">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>[React23] - TITLE</title>
                    <meta name="description" content="description" />
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div id="content">
                    testProp: {testProp}
                    hiuhiughpiu
                </div>

            </div>
        )
    }
}

export default AppTestSSR
