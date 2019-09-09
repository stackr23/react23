// import ItemsStore       from './ItemsStore.class'
// import MessageStore     from './MessageStore.class'
import { RouterStore } from 'mobx-react-router'

import ViewStore from './ViewStore'
import initialState from './initialState'

export const computeStore = (state = {}) => {
  return {
    router:    new RouterStore(),
    // messages:   new MessageStore(state.messages).messages,
    // items:      new ItemsStore(state.items),
    viewStore: new ViewStore(state.view),
  }
}

// Initialize Stores with initialState
export default computeStore(initialState)
