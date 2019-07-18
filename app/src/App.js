import React from 'react'
import {Route} from 'react-router-dom'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {observer, inject} from 'mobx-react'
import stores from '../stores'

import Layout from './Layout'
/* import createRoutes from '../routes/index'

const routesCompiled = createRoutes(stores) */

@inject('router')
class App extends React.Component {
    static propTypes = {
      router: PropTypes.object.isRequired
    }

    render() {
      /*       const {
        router: {
          location: {pathname}
        }
      } = this.props */
      // console.log('global config', global.CONFIG)

      //   const route = routesCompiled.filter((r) => r.props.path === pathname)[0]
      //   const title = route.props.meta.title
      //   const description = route.props.meta.description || ''

      return (
        <div id="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>[React23] - {"title"}</title>
            <meta name="description" content={"description"} />
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Layout />

          {/* <Layout>{routesCompiled}</Layout> */}
        </div>
      )
    }
}

export default App
