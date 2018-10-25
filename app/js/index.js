import ReactDOM from 'react-dom'
import React from 'react'
import Component from 'react-pure-render/component'

import Header from './components/Header'

if (module.hot) module.hot.accept()
if (!global._babelPolyfill) require('@babel/polyfill')

class Root extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cowsay: ''
        }
    }

    async componentDidMount() {
        const {say} = await import(/* webpackChunkName: "cowsay" */ 'cowsay')
        this.setState({
            cowsay: say({text: 'perfect react stack to wrap your app'})
        })
    }

    render() {

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
console.log('[/app/js]')

// if (process.env.IS_BROWSER) {
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
