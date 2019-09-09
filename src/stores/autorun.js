import { autorun } from 'mobx'

const { isProduction, isDebug } = process.env.APP_CONFIG

export default function(stores) {
  autorun(() => {
    if (stores) {
      // dev helper - expose stores to window
      if ((!isProduction || isDebug) && global.IS_BROWSER) {
        window.stores = stores
        // TBD: add chalk-like color output
        console.log(
          '[React23] stores exposed to window. (NODE_ENV !== \'production\')\n' +
                        '🎉 You can now use "stores.storeName" in your browser console!'
        )
      }
    }
  })
}
