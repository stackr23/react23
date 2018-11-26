'use strict'

import {extendObservable} from 'mobx'

const confirmationDialogDefaults = {
    closeOnAction: true,
    // refactor: name it "isOpen" (bool state var)
    open: false,
    action: null,
    title: 'Are you sure?',
    content: 'Do you REALLY want to do that?',
    canCancel: true,
    buttonLabels: {
        cancel: 'cancel',
        confirm: 'confirm'
    }
}

export default class ViewStore {
    constructor(state = {}) {
        extendObservable(
            this,
            {
                status: 'inactive',
                error: false,
                _confirmationDialog: {...confirmationDialogDefaults},
                sidenav: {
                    headline: 'React23 Menu',
                    isOpen: false
                },
                navBar: {
                    isOpen: false
                },
                theme: 'react23Theme'
            },
            state
        )
    }

    toggleSidebar(which, e) {
        if (typeof wich === undefined || typeof which !== 'string') {
            // TBD - logger.debug
            return false
        }

        let input = which.toLowerCase()
        console.log('sidenav input', input, input.indexOf('side') > -1)
        console.log('sidenav before', this.sidenav.isOpen)

        if (input === 'side' || input === 'sidenav') {
            this.sidenav.isOpen = !this.sidenav.isOpen
        } else if (input.indexOf('nav') > -1) {
            this.navBar.isOpen = !this.navBar.isOpen
        }

        console.log('sidenav after', this.sidenav.isOpen)

        e.preventDefault()
        return true
    }

    switchTheme(theme = 'react23Theme') {
        this.theme = this.theme === 'react23Theme' ? 'muiTheme' : 'react23Theme'
    }

    set confirmationDialog(confirmationDialog) {
        // extend given option with defaults
        confirmationDialog = Object.assign(
            confirmationDialogDefaults,
            confirmationDialog
        )

        // then extend the observable
        extendObservable(this._confirmationDialog, confirmationDialog)
    }

    get confirmationDialog() {
        return this._confirmationDialog
    }
}
