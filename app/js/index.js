import React        from 'react'
import ReactDOM     from 'react-dom'
import Component    from 'react-pure-render/component'

import Header       from './components/Header'

// TBD: inject isBrowser per webpack
// const {isBrowser}   = require('config').default

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

class Root extends Component {
    constructor (props) {
        super(props)
        this.state = {cowsay: ''}
    }

    async componentDidMount () {
        const {say} = await import(/* webpackChunkName: "cowsay" */ 'cowsay')
        this.say    = say

        this.setState({
            cowsay: this.say({text: 'perfect react stack to wrap your app'})
        })
    }

    render () {
        return (
            <React.Fragment>
                <Header headline="react23" subline="" />
                <div id="content">
                    <pre>{this.state.cowsay}</pre>
                </div>
            </React.Fragment>
        )
    }
}

// if (isBrowser) {
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
// }
