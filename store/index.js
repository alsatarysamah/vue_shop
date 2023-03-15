import Vuex from 'vuex'
import mainStore from './module/itemStore'
const createStore = () => {
  return new Vuex.Store({
    modules: {
        mainStore
    },
  })
}
export default createStore;