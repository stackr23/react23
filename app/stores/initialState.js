const getInitialState = () => {
  const clientState = global.IS_BROWSER
    // refactor: localStorage engine + engineKey in appConfig
    ? window.localStorage.getItem('react23__clientState')
    // refactor: what to do on serverSide?
    : {}

  // TBD: initial state!
  const initialState = {
    initVar1: 'foo',
    initVar2: 'bar'
  }

  return Object.assign({}, initialState, clientState)
}

export default getInitialState()
