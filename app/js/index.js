import ReactDOM from 'react-dom'
import React from 'react'
import Component from 'react-pure-render/component'

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

class Root extends Component {

    render() {
        return <h1>REACT23</h1>
    }

}
console.log('[/app/js]')

// if (process.env.IS_BROWSER) {
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
// }
