import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'

import Button from '@material-ui/core/Button'

@inject('viewStore')
@observer
class TestPage extends React.Component {
    static propTypes = {
        viewStore: PropTypes.object.isRequired
    }

    // TBD: add mobx-router to pass /page component to Layout
    render() {
        const {
            viewStore: {confirmationDialog}
        } = this.props

        return (
            <div id="TestPage" className="page">
                <h2>TESTPAGE</h2>
                <Button // CONFIRM
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        confirmationDialog.open = true
                    }}
                >
                    test ConfirmationDialog
                </Button>
            </div>
        )
    }
}

export default TestPage
