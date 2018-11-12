import React                from 'react'
import Component            from 'react-pure-render/component'
import PropTypes            from 'prop-types'

import {observer, inject}   from 'mobx-react'

import {MuiThemeProvider}   from '@material-ui/core/styles'
import default23, {react23} from '../style/muiThemes'

import Switch               from '@material-ui/core/Switch'

import Header               from './components/Header'
import './index.styl'

const themes = {
    default23, react23
}

@inject('viewStore')
@observer
class App extends React.Component {
    static propTypes = {
        viewStore:  PropTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        this.state = {
            theme:  'default23',
            cowsay: ''
        }
    }

    async componentDidMount () {
        const {say} = await import(/* webpackChunkName: "cowsay" */ 'cowsay')
        this.say    = say

        setTimeout(this.fillContent.bind(this), 500)
    }

    fillContent () {
        this.setState({
            cowsay: this.say({
                text:   '\nperfect react stack to wrap your web app\n\n',
                tongue: 'U',
                eyes:   'oO'
            })
        })
    }

    render () {
        const {viewStore}       = this.props
        const theme             = themes[viewStore.theme]
        const isDefaultTheme    = viewStore.theme === 'default23'

        console.log('[App->render] viewStore.theme', viewStore.theme)
        console.log('[App->render] palette.primary', themes[viewStore.theme].palette.primary.main)
        console.log('[App->render] palette.secondary', themes[viewStore.theme].palette.secondary.main)

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <Header headline="react23" subline="free react for free people" />
                    <div id="content">
                        <pre>{this.state.cowsay}</pre>
                    </div>
                    <Switch onChange={e => viewStore.switchTheme()} checked={!isDefaultTheme} /> toggle Theme
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default App
