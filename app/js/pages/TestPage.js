import React                from 'react'
import PropTypes            from 'prop-types'
import {observer, inject}   from 'mobx-react'

@inject('viewStore')
@observer
class TestPage extends React.Component {
    static propTypes = {
        viewStore:  PropTypes.object.isRequired
    }

    // TBD: add mobx-router to pass /page component to Layout
    render () {
        return (
            <div id="TestPage" className="page">
                <h2>TESTPAGE</h2>
            </div>
        )
    }
}

export default TestPage
