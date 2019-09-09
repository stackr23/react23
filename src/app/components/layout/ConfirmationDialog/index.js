// Info for refactoring:
// noAction (or action == null)
//     => only close button

// canCancel
//     false => show only action
//         if !action => show cancel (overrule canCancel)

'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'

@inject('viewStore')
@observer
class ConfirmationDialog extends React.Component {
    // TBD: closeAction
    static propTypes = {
      viewStore: PropTypes.object.isRequired
    }

    constructor (props) {
      super(props)

      this.noop = () => {}
      this.getAction = this.getAction.bind(this)
      this.closeConfirmationDialog = this.closeConfirmationDialog.bind(this)
    }

    closeConfirmationDialog () {
      this.props.viewStore.confirmationDialog.open = false
    }

    getAction () {
      const confirmationDialogOptions = this.props.viewStore.confirmationDialog
      let { action, closeOnAction } = confirmationDialogOptions,
          myAction

      // refactor: canCancel
      // see also line 79
      if (action === 'close' || action === null) {
        myAction = this.closeConfirmationDialog
      } else {
        myAction =
            typeof action === 'function'
              ? action
              : this.noop // TBD: show warning/throw error if function is not valid
      }

      return (e) => {
        console.log('ConfirmationDialog->myAction called!')
        myAction(e)
        closeOnAction && this.closeConfirmationDialog()
      }
    }

    render () {
      let {
        viewStore: {
          confirmationDialog: {
            canCancel,
            open,
            title,
            content, // action: originalAction,
            // refactor: buttonLabels
            buttonLabels: { confirm: labelConfirm, cancel: labelCancel }
          }
        }
      } = this.props

      // always schow confirm button!
      const actions = [
        <Button // CONFIRM
          key="confirm"
          variant="contained"
          color="secondary"
          onClick={this.getAction()}
        >
          {labelConfirm != null ? labelConfirm : 'confirm'}
        </Button>
      ]

      if (canCancel) {
        // add CANCEL button (if action != cancel)
        actions.unshift(
          // .unshift(
          <Button
            key="cancel"
            variant="contained"
            color="primary"
            hoverColor="#999"
            onClick={this.closeConfirmationDialog}
          >
            {labelCancel != null ? labelCancel : 'cancel'}
          </Button>
        )
      }

      return (
        <Dialog
          open={open}
          modal={true}
          onClose={canCancel ? this.closeConfirmationDialog : this.noop}
          repositionOnUpdate={false}
          style={{ zIndex: 9999 }}
          overlayStyle={{ zIndex: 999 }}
          title={title}
        >
          <div id="ConfirmationDialog_content" style={{ padding: '3rem' }}>
            <h1>Confirmation Dialog</h1>
            {content}
            <br />
            <br />
            <DialogActions>{actions}</DialogActions>
          </div>
        </Dialog>
      )
    }
}

export default ConfirmationDialog
