
import fetch from './fetch'
import * as serverConfig from './serverConfig'

/**
 * @file 登陆模块fetch请求
 */
class AuthService {

  /**
   * 检测当前用户是否已经登录
   * @resolve {Object} userData / null
   */
  getSession () {
    var url = serverConfig.session.getSession
    return fetch('GET', url)
  }

  /**
   * 登录
   * @param  {String} userId
   * @param  {String} password
   * @return {Object} userData
   */
  login (userId, password) {
    var url = serverConfig.session.login
    var params = {
      userId: userId,
      password: password
    }
    return fetch('POST', url, params)
  }

  /**
   * 注销登录
   * @return {Promise}
   */
  logout () {
    var url = serverConfig.session.logout
    return fetch('POST', url)
  }

  /**
   * 获取用户菜单
   */
  getUserMenus () {
    var url = serverConfig.permission.menuList
    return fetch('GET', url)
  }

  /**
   * 获取用户菜单
   */
  getCustomerInfo () {
    var url = serverConfig.manager.customerInfo
    return fetch('GET', url)
  }

}

// 实例化后导出，全局单例
export default new AuthService()
