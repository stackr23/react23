import React                from 'react'
import ReactDOM             from 'react-dom'

import App                  from './App.js'

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

class Root extends React.Component {
    render () {
        return (
            <App />
        )
    }
}

if (process.env.IS_BROWSER) {
    ReactDOM.render(
        <Root />,
        document.getElementById('app')
    )
}
