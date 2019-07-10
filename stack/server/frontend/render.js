// REACT LIBS
import React from 'react'
import {renderToString} from 'react-dom/server' // {renderToString}

// OTHER LIBS
import ip from 'ip'
// refactor                            : use bluebird as polyfill on entrypoint(s)
// import Promise                          from 'bluebird'
// APP FILES
import getBuiltIndex from '../../utils/getBuiltIndex.js'
import getBuildFilenames from '../../utils/getBuildFilenames.js'

import {StaticRouter} from 'react-router'
// import initialState                     from '../../../app/js/stores/initialState.js'
import {Provider} from 'mobx-react'
import stores from '../../../app/stores/index.js'

import createRoutes from '../../../app/routes/index.js'
import App from '../../../app/src/App.js'
import Root from '../../../app/src/index.js'
import Layout from '../../../app/src/Layout.js'

import {ThemeProvider, ServerStyleSheets} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'


import AppTestSSR from '../../../app/src/AppTestSSR.js'


const {
    isProduction,
    ports: {portHMR}
} = require('config').default

const routes   = createRoutes(stores)
const serverIp = ip.address()

const renderFullPage = ({appHtml, appCSS}) => {
    let appJSPath, appCSSPath
    const {appJS: appJsFilename, appCSS: appCssFilename} = getBuildFilenames()

    if (isProduction) {
        // TBD: npm run start --production
        appJSPath = `/build/${appJsFilename}`
        appCSSPath = `/build/${appCssFilename}`
    } else {
        // TBD: APP_BUILD_STATIC => add /build/

        // TBD: prevent getBuiltIndex() CSS tag if no src is given
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
                `<div id="root"><style id="jss-server-side">${appCSS}</style>${appHtml}</div>`
            )
            .replace('<head>', '<head>' + opacityStyle)

    return htmlOuter
}

const render = ({url: path}, res) => {
  const sheets = new ServerStyleSheets();

  // Render the component to a string.
//   const html = renderToString(
//     sheets.collect(
//       <Provider {...stores}>
//             <StaticRouter location={path} context={{}}>
//                 <ThemeProvider theme={{}}>
//                     <App />
//                 </ThemeProvider>
//             </StaticRouter>
//         </Provider>
//     )
//   );

    const appHtml = renderToString(
        sheets.collect(
            <Provider {...stores}>
                <StaticRouter location={path} context={{}}>
                    <AppTestSSR />
                </StaticRouter>
            </Provider>
        )
    );

  // Grab the CSS from our sheets.
  const appCSS = sheets.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage({appHtml, appCSS}));
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
