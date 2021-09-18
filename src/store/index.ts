import { createStore } from 'vuex'

import login from './modules/login'

const store = createStore({
  state: () => ({
    name: 111,
    height: 11,
    age: 33
  }),
  modules: {
    login
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocal')
}

export default store
