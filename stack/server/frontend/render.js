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
// import getAppAssetFilenamesAsync        from './getAssetPaths'
import getAssetFilenamesAsync           from './getAssetFilenamesAsync'
import appConfig                        from '../../../config/appConfig.js'

// import initialState                     from '../../../app/js/stores/initialState.js'
// import store                            from '../../../app/js/stores/index.js'

// import routes                           from '../../../app/js/Routes.js'

// import App                              from '../../../app/js/App.js'
// import { Provider }                     from 'mobx-react'

const {
    isDevelopment,
    ports: {portHMR}
} = appConfig

const serverIp  = ip.address()

export default async function render (req, res, next) {
    const html = await renderPageAsync({url: req.url})
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

const renderPageAsync = async ({url}) => {
    const {js: appJsFilename, css: appCssFilename} = await getAssetFilenamesAsync()
    const scriptSrc = isDevelopment
        ? `http://${serverIp}:${portHMR}/build/app.js`
        : `/build/${appJsFilename}`

    const styleSrc  = `/build/${appCssFilename}`

    // return renderToString(
    //     <StaticRouter location={url} context={context} >
    //         <div>
    //             <Root />
    //             <script type="text/javascript" src={scriptSrc} />
    //         </div>
    //     </StaticRouter>
    // )

    return '<!DOCTYPE html>' + renderToStaticMarkup(
        <html>
            <head />
            <body>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div id="app" />
                <script type="text/javascript" src={scriptSrc} />
                {// in dev, styles are handled by style-loader
                    // which directly injects them into the DOM
                    !isDevelopment &&
                    <link rel="stylesheet" href={styleSrc} name="appStyle" />}
            </body>
        </html>
    )
}

// function renderPage() {
//  return '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
//    <Html
//      appCssFilename={appCssFilename}
//      bodyHtml={`<div id="app">${appHtml}</div>${scriptHtml}`}
//      googleAnalyticsId={appConfig.googleAnalyticsId}
//      helmet={Helmet.rewind()}
//      isProduction={appConfig.isProduction}
//    />
//  )
// }
