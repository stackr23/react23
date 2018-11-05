import {autorun} from 'mobx'

export default function ({viewStore}) {
    // Update document title whenever it changes
    autorun(() => {
        if (viewStore) {
            console.log('mobx autoRun -> viewStore', viewStore)
            if (global.IS_BROWSER) {
                window.viewStore = viewStore
            }
        }
    })
}
