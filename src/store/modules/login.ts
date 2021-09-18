import { Module } from 'vuex'
import { ILogin } from '@/api/login/types'
import { getUserMenu, loginRequest, requestUserInfo } from '@/api/login/login'
import cache from '@/utils/cache'
const loginModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, payload) {
      state.token = payload
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
    },
    changeUserMenus(state, payload) {
      state.userMenus = payload
    }
  },
  actions: {
    async loginAction({ commit }, payload: ILogin) {
      // 登录获取token
      const loginRes = await loginRequest(payload)
      const { id, token } = loginRes.data
      commit('changeToken', token)
      cache.set('token', token)

      // 获取用户信息
      const { data } = await requestUserInfo(id)
      commit('changeUserInfo', data)
      cache.set('userInfo', data)

      // 请求用户菜单
      const menu = await getUserMenu(data.role.id)
      commit('changeUserMenus', menu.data)
      cache.set('userMenus', menu.data)
    },
    loadLocal({ commit }) {
      const token = cache.get('token')
      token && commit('changeToken', token)
      const userInfo = cache.get('userInfo')
      token && commit('changeUserInfo', userInfo)
      const userMenus = cache.get('userMenus')
      token && commit('changeUserMenus', userMenus)
    }
  }
}

export default loginModule
