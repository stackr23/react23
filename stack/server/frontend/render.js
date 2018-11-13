// REACT LIBS
import React                            from 'react'
import {renderToStaticMarkup}           from 'react-dom/server' // {renderToString}
// import Html                          from './Html.react'
// import {createMemoryHistory}            from 'history'


// import {matchPath, match, StaticRouter} from 'react-router-dom'
// import {matchPath, match} from 'react-router-server'


// OTHER LIBS
import ip                               from 'ip'
// refactor                            : use bluebird as polyfill on entrypoint(s)
// import Promise                          from 'bluebird'
// APP FILES
import getBuiltIndex                    from '../../utils/getBuiltIndex.js'
import getBuildFileNames                from '../../utils/getBuildFileNames.js'

import {StaticRouter}                   from 'react-router'
// import initialState                     from '../../../app/js/stores/initialState.js'
import {Provider}                       from 'mobx-react'
import stores                           from '../../../app/stores/index.js'

// import routes                           from '../../../app/js/Routes.js'

import App                              from '../../../app/js/App.js'
import Layout                           from '../../../app/js/Layout.js'

const {
    isProduction,
    ports: {portHMR}
} = require('config').default

const serverIp = ip.address()

export default function render (req, res, next) {
    const appHtml = renderPage({path: req.url, stores})

    let appJS, appCSS // set per NODE_ENV
    const {appJS: appJsFilename, appCSS: appCssFilename} = getBuildFileNames()

    if (isProduction || process.env.APP_BUILD_STATIC) {
        // TBD: npm run start --production
        appJS   = `/build/${appJsFilename}`
        appCSS  = `build/${appCssFilename}`
    } else {
        // TBD: prevent getBuiltIndex() CSS tag if no src is given
        appJS = `http://${serverIp}:${portHMR}/build/${appJsFilename}`
    }

    const indexHtml = getBuiltIndex({appCSS, appJS})

    const html = '<!DOCTYPE html>\n' + indexHtml.replace(
        '<div id="app"></div>', `<div id="app">${appHtml}</div>`
    )

    res.send(html)
}

const renderPage = ({path, stores, context = {}}) => {
    const appHtml   = renderToStaticMarkup(
        <Provider {...stores}>
            <StaticRouter location={path} context={context}>
                <Layout  />
            </StaticRouter>
        </Provider>
    )

    return appHtml
}

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
