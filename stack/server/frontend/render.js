import React from 'react'
import { renderToString } from 'react-dom/server' // {renderToString}
import ip from 'ip'
import { StaticRouter } from 'react-router'
import { Provider } from 'mobx-react'
import { ThemeProvider, ServerStyleSheets } from '@material-ui/styles'

import stores from 'stores/index.js'
import App from 'src/App.js'
import { react23Theme } from 'style/muiThemes/index'

import getBuiltIndex from '../../utils/getBuiltIndex.js'
import getBuildFilenames from '../../utils/getBuildFilenames.js'

// import initialState                     from '../../../app/js/stores/initialState.js'

// import createRoutes from '../../../app/routes/index.js'
import App from '../../../app/src/App.js'
// import Root from '../../../app/src/index.js'

import {ThemeProvider, ServerStyleSheets} from '@material-ui/styles'
import {react23Theme} from '../../../app/style/muiThemes/index'

const {
    isProduction,
    ports: {portHMR}
} = require('config').default

// const routes   = createRoutes(stores)
const serverIp = ip.address()

const renderFullPage = ({appHtml, appCSS}) => {
    let appJSPath, appCSSPath
    const {appJS: appJsFilename, appCSS: appCssFilename} = getBuildFilenames()

    if (isProduction) {
    // TODO: npm run start --production
        appJSPath = `/build/${appJsFilename}`
        appCSSPath = `/build/${appCssFilename}`
    } else {
    // TODO: APP_BUILD_STATIC => add /build/

        // TODO: prevent getBuiltIndex() CSS tag if no src is given
        appJSPath = `http://${serverIp}:${portHMR}/build/${appJsFilename}`
    }

    const indexHtml = getBuiltIndex({appJSPath, appCSSPath})

    //* hide app until layout stylesheet is loaded! */
    const opacityStyle = '<style type="text/css">#root {opacity: 0;}</style>'

    const htmlOuter =
    '<!DOCTYPE html>\n' +
    indexHtml
        .replace(
            '<div id="root"></div>',
            `<div id="root"><style id="ssr-styles">${appCSS}</style>${appHtml}</div>`
        )
        .replace('<head>', '<head>' + opacityStyle)


    return htmlOuter
}

const render = ({url: path}, res) => {
    const sheets = new ServerStyleSheets()

    const appHtml = renderToString(
        sheets.collect(
            <Provider {...stores}>
                <StaticRouter location={path} context={{}}>
                    <ThemeProvider theme={react23Theme}>
                        <App />
                    </ThemeProvider>
                </StaticRouter>
            </Provider>
        )
    )

    res.send(
        renderFullPage({ appHtml, appCSS: sheets.toString() })
    )
}

export default render

// TODO: fetchComponentDataAsync
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
