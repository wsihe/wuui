import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  token: '',           // 登陆token
  userInfo: null       // 用户信息
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    const newGetters = require('./getters').default
    const newActions = require('./actions').default
    const newMutations = require('./mutations').default
    store.hotUpdate({
      getters: newGetters,
      actions: newActions,
      mutations: newMutations
    })
  })
}

export default store

