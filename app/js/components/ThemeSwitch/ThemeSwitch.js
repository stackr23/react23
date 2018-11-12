import React                from 'react'
import PropTypes            from 'prop-types'
import {observer, inject}   from 'mobx-react'

import Switch               from '@material-ui/core/Switch'

import './ThemeSwitch.styl'

@inject('viewStore')
@observer
class ThemeSwitch extends React.Component {
    static propTypes = {
        viewStore:  PropTypes.object.isRequired
    }

    // TBD: add mobx-router to pass /page component to Layout
    render () {
        const {viewStore}       = this.props
        // TBD: read default theme from appConfig
        const isDefaultTheme    = viewStore.theme === 'default23'

        return (
            <div id="ThemeSwitch" className="component">
                <b>active theme: </b>{viewStore.theme}<br />
                <Switch
                    onChange={e => viewStore.switchTheme()} checked={!isDefaultTheme}
                    classes={{
                        root:       'Switch',
                        checked:    'checked'
                    }}
                /> toggle Theme
            </div>
        )
    }
}

export default ThemeSwitch
