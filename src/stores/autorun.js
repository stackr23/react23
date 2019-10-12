import { autorun } from 'mobx'

const { isProduction, isDebug } = process.env.APP_CONFIG

function mobxAutorun(stores) {
  console.log('mobxAutorun() -> isProduction :', isProduction)
  console.log('mobxAutorun() -> stores :', stores)
  autorun(() => {
    if (stores) {
      // dev helper - expose stores to window
      window.stores = stores
      if ((!isProduction || isDebug) && global.IS_BROWSER) {
        // TBD: add chalk-like color output
        console.log(
          '[React23] stores exposed to window. (NODE_ENV !== \'production\')\n' +
                        '🎉 You can now use "stores.storeName" in your browser console!'
        )
      }
    }
  })
}

export default mobxAutorun
