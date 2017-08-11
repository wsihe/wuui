/**
 * Created by river on 2017/4/26.
 * url 地址配置，按模块或者API类型分组
 */

export const session = {
  login: '/login',
  logout: '/logout',
  getSession: '/checkauth'
}

// 菜单权限接口
export const permission = {
  menuList: '/api/permission/menulist'
}

// 首页
export const manager = {
  // 首页客户概要信息
  customerInfo: '/api/manager/custsummarize',
  // 重要客户信息
  vipCustomerInfo: '/api/customer/vipCustomers'
}
