import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import ThemeSwitch from '../components/ThemeSwitch'
import CowSay from '../components/CowSay'

@inject('viewStore')
@observer
class Home extends React.Component {
    static propTypes = {
        viewStore: PropTypes.object.isRequired
    }

    // TBD: add mobx-router to pass /page component to Layout
    render() {
        return (
            <div id="home" className="page">
                <h2>Home</h2>
                <CowSay />
            </div>
        )
    }
}

export default Home
