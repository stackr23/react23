import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import Switch from '@material-ui/core/Switch'

if (global.IS_BROWSER) {
    require('./ThemeSwitch.styl')
}

@inject('viewStore')
@observer
class ThemeSwitch extends React.Component {
    static propTypes = {
        viewStore: PropTypes.object.isRequired
    }

    // TBD: add mobx-router to pass /page component to Layout
    render() {
        const {viewStore} = this.props
        // TBD: read default theme from appConfig
        const isDefaultTheme = viewStore.theme === 'react23Theme'

        return (
            <div id="ThemeSwitch" className="component">
                <Switch
                    onChange={(e) => viewStore.switchTheme()}
                    checked={!isDefaultTheme}
                    classes={{
                        root: 'Switch',
                        checked: 'checked'
                    }}
                />{' '}
                <strong>Theme:</strong> {viewStore.theme}
            </div>
        )
    }
}

export default ThemeSwitch
