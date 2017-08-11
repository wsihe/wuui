import authService from 'services/login'
import {
  RECORD_USERINFO
} from './mutation-types.js'

export default {
  async getUserInfo ({commit, state}) {
    let res = await authService.getSession()
    commit(RECORD_USERINFO, res)
  }
}
