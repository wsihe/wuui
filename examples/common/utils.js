/**
 * 常用, 通用工具类函数封装, 改模块不能依赖于太多文件
 */

export const parseInt = num => {
  var n = parseInt(num, 10)
  return isNaN(n) ? null : n
}

/**
 * 字符串首字母小写
 */
export const firstLowerCase = str => {
  if (str === null) { return null }
  return str.replace(/^./, (L) => L.toLowerCase())
}

/**
 * 存储localStorage／sessionStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取localStorage／sessionStorage
 */
export const getStore = name => {
  if (!name) return
  var data = window.localStorage.getItem(name) || window.sessionStorage.getItem(name)
  return data
}

/**
 * 删除localStorage／sessionStorage
 */
export const removeStore = name => {
  if (!name) return
  window.sessionStorage && window.sessionStorage.removeItem(name)
  window.localStorage && window.localStorage.removeItem(name)
}

/**
 * 格式化日期
 * @param date
 * @param [year] 指定年份, 可选
 * @returns {string} 返回yyyy-MM-dd日期格式, 例如2016-05-11
 */
export const formatDate = (date, year) => {
  if (typeof date === 'number') {
    date = new Date(date)
  }
  var str = (year || date.getFullYear()) + ''
  str += '-'
  var month = date.getMonth() + 1
  if (month < 10) {
    str += '0' + month
  } else {
    str += month + ''
  }
  str += '-'
  var day = date.getDate()
  if (day < 10) {
    str += '0' + day
  } else {
    str += day + ''
  }
  return str
}
