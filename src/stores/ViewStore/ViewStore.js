import { extendObservable, action } from 'mobx'

const confirmationDialogDefaults = {
  closeOnAction: true,
  // refactor: name it "isOpen" (bool state var)
  open:          false,
  action:        null,
  title:         'Are you sure?',
  content:       'Do you REALLY want to do that?',
  canCancel:     true,
  buttonLabels:  {
    cancel:  'cancel',
    confirm: 'confirm',
  },
}

export default class ViewStore {
  constructor(state = {}) {
    extendObservable(
      this,
      {
        status:              'inactive',
        error:               false,
        _confirmationDialog: { ...confirmationDialogDefaults },
        sidenav:             {
          headline: 'React23 Menu',
          isOpen:   false,
        },
        sidemenu: {
          headline: 'Settings',
          isOpen:   false,
        },
        theme: 'react23Theme',
      },
      state
    )
  }

  toggleSidebar = action((which = '', e) => {
    if (typeof wich === 'undefined' || typeof which !== 'string') {
      // TBD - logger.debug
      return false
    }

    let input = which.toLowerCase()

    if (input === 'sidenav') {
      console.log('toggleSidebar() :', which)
      this.sidenav.isOpen = !this.sidenav.isOpen
    }
    else if (input === 'sidemenu') {
      this.sidemenu.isOpen = !this.sidemenu.isOpen
    }

    e.preventDefault()
    return true
  })

  switchTheme(theme = 'react23Theme') {
    this.theme = this.theme === 'react23Theme' ? 'muiTheme' : theme
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
