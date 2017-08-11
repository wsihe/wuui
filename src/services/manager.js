
import fetch from './fetch'
import * as serverConfig from './serverConfig'

/**
 * @file 首页模块fetch请求
 */
class Manager {

  /**
   * 获取首页客户概要信息
   * @resolve {Object} customer / null
   */
  getCustomerBaseInfo () {
    var url = serverConfig.manager.customerInfo
    return fetch('GET', url)
  }

  /**
   * 获取首页客户概要信息
   * @resolve {Object} customer / null
   */
  vipCustomerInfo () {
    var url = serverConfig.manager.vipCustomerInfo
    return fetch('GET', url)
  }

}

// 实例化后导出，全局单例
export default new Manager()
