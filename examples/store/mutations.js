import {
  RECORD_LOGIN,
  RECORD_LOGOUT,
  RECORD_USERINFO,
  GET_USERINFO
} from './mutation-types.js'
import {setStore, removeStore} from '@/common/utils'

export default {
  // 获取登陆的token
  [RECORD_LOGIN] (state, data) {
    state.token = data
    setStore('token', data)
  },
  // 清除登陆的token
  [RECORD_LOGOUT] (state) {
    state.token = null
    removeStore('token')
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
  },
  // 获取用户信息存入vuex
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    state.userInfo = info
  }
}
