// REACT LIBS
import React                            from 'react'
import {renderToString}           from 'react-dom/server' // {renderToString}

// OTHER LIBS
import ip                               from 'ip'
// refactor                            : use bluebird as polyfill on entrypoint(s)
// import Promise                          from 'bluebird'
// APP FILES
import getBuiltIndex                    from '../../utils/getBuiltIndex.js'
import getBuildFilenames                from '../../utils/getBuildFilenames.js'

import {StaticRouter}                   from 'react-router'
// import initialState                     from '../../../app/js/stores/initialState.js'
import {Provider}                       from 'mobx-react'
import stores                           from '../../../app/stores/index.js'

import createRoutes                     from '../../../app/routes/index.js'
import App                              from '../../../app/js/App.js'
import Layout                           from '../../../app/js/Layout.js'

import {createGenerateClassName}        from '@material-ui/core/styles'
import {SheetsRegistry}                 from 'jss'
import {JssProvider}                    from 'react-jss'

const {
    isProduction,
    ports: {portHMR}
} = require('config').default

const routes            = createRoutes(stores)
const serverIp          = ip.address()

const render = (req, res, next) => {
    const {appHtml, ssrCSS} = renderPage({path: req.url, stores})

    let appJS, appCSS // set per NODE_ENV
    const {appJS: appJsFilename, appCSS: appCssFilename} = getBuildFilenames()

    if (isProduction) {
        // TBD: npm run start --production
        appJS   = `/build/${appJsFilename}`
        appCSS  = `/build/${appCssFilename}`
    } else {
        // TBD: APP_BUILD_STATIC => add /build/

        // TBD: prevent getBuiltIndex() CSS tag if no src is given
        appJS = `http://${serverIp}:${portHMR}/build/${appJsFilename}`
    }

    const indexHtml = getBuiltIndex({appCSS, appJS})

    const html = '<!DOCTYPE html>\n' + indexHtml.replace(
        '<div id="app"></div>', `<div id="app"><style id="jss-server-side">${ssrCSS}</style>${appHtml}</div>`
    )

    res.send(html)
}

const renderPage = ({path, stores, context = {}}) => {
    // see https://github.com/mui-org/material-ui/blob/master/examples/ssr/server.js

    const generateClassName = createGenerateClassName()
    const sheetsRegistry    = new SheetsRegistry()

    const appHtml           = renderToString(
        <Provider {...stores}>
            <StaticRouter location={path} context={context}>
                <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                    <React.Fragment>
                        {routes.map((route, i) =>
                            <App.LayoutWithChild key={i} {...route} />
                        )}
                    </React.Fragment>
                </JssProvider>
            </StaticRouter>
        </Provider>
    )

    const ssrCSS = sheetsRegistry.toString()

    return {appHtml, ssrCSS}
}

export default render

// TBD: fetchComponentDataAsync
// const fetchComponentDataAsync = async (dispatch, {components, location, params}) => { // eslint-disable-line space-before-function-paren
//     // const fetchActions = components.reduce((actions, component) => {
//     //     return actions.concat(component.fetchActions || [])
//     // }, [])
//     // const promises = fetchActions.map(action => dispatch(action(
//     //     {location, params}
//     // )))

//     // // Because redux-promise-middleware always returns fulfilled promise, we have
//     // // to detect errors manually.
//     // // https://github.com/pburtchaell/redux-promise-middleware#usage
//     // const results = await Promise.all(promises)
//     // results.forEach(result => {
//     //     if (result.error)
//     //         throw result.payload
//     // })
//     return  Promise.resolve()
// }
// const {appJS, appCSS} = getBuildFileNames()
// const indexHtml = getBuiltIndex({appCSS, appJS})
// const body      = /<body>(.+)<\/body>/.exec(indexHtml)
// console.log('indexHtml', indexHtml)
// console.log('parsedBody', body)
