import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { IRootState, IStoreType } from './types'

import login from './modules/login/login'

const store = createStore<IRootState>({
  state: () => ({
    name: 111,
    height: 11,
    age: 33
  }),
  modules: {
    login
  },
  plugins: [createPersistedState()]
})

export const setupStore = () => {
  store.dispatch('login/loadLocal')
}

export const useStore = (): Store<IStoreType> => {
  return useVuexStore()
}

export default store
