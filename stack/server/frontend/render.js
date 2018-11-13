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
import getBuiltIndex                    from '../../utils/getBuiltIndex'
import getBuildFileNames                from '../../utils/getBuildFileNames'

// import { StaticRouter } from 'react-router'
// import initialState                     from '../../../app/js/stores/initialState.js'
// import store                            from '../../../app/js/stores/index.js'

// import routes                           from '../../../app/js/Routes.js'

import App                              from '../../../app/js/App.js'
// import { Provider }                     from 'mobx-react'

const {
    isProduction,
    ports: {portHMR}
} = require('config').default

const serverIp = ip.address()

export default function render (req, res, next) {
    const html = renderPage({path: req.url})
    res.send(html)
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

const renderPage = ({path}) => {
    let appJS, appCSS // set per NODE_ENV
    const {appJS: appJsFilename, appCSS: appCssFilename} = getBuildFileNames()

    if (isProduction) {
        // TBD: npm run start --production
        appJS   = `/build/${appJsFilename}`
        appCSS  = `build/${appCssFilename}`
    } else {
        // TBD: prevent getBuiltIndex() CSS tag if no src is given
        appJS = `http://${serverIp}:${portHMR}/build/${appJsFilename}`
    }

    const indexHtml = getBuiltIndex({appCSS, appJS})
    // const appHtml   = renderToStaticMarkup(
    //     <StaticRouter location={path}>
    //         {/* <App /> */}
    //         <h3>server render {path}</h3>
    //     </StaticRouter>
    // )

    return '<!DOCTYPE html><!-- ' + path + '-->\n' + indexHtml

    // router.dispatch({ ...req, context }).then((component, state) => {
    //     res.status(state.statusCode).send(indexHtml)
    // }).catch(next)

    // return '<!DOCTYPE html>' + renderToStaticMarkup(
    //     <html>
    //         <head />
    //         <body>
    //             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    //             <div id="app" />
    //             <script type="text/javascript" src={appJS} />
    //             {// in dev, styles are handled by style-loader
    //                 // which directly injects them into the DOM
    //                 !isDevelopment &&
    //                 <link rel="stylesheet" href={styleSrc} name="appStyle" />}
    //         </body>
    //     </html>
    // )
}

