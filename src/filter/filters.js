/**
 * 定义页面公用filter, 实现复杂的filter应独立放在一个js文件中。
 */

/**
 * 空值占位符, 如果值等于null或者空字符串, 则显示--
 * @params value      处理值
 * @params [holder]  默认显示 "--"
 */
export function nullHolder (value, holder) {
  holder = holder || '--'
  return (value == null || value === '') ? holder : value
}

/**
 * @filter 百分比filter，将数字转换成百分比
 * @params value      {Number}      数字，未转化的
 * @params [digits]   {Number}      转化成百分比数字所携带的小数点，默认2
 * @params [force]    {Boolean}      是否强制加给0添加百分号，默认为false
 */
export function percent (value, digits, force) {
  if (!force && value === 0) {
    return value
  }
  digits = digits === null ? 2 : digits
  var number = value * 100
  if (isNaN(number)) {
    return '--'
  }
  var result
  if (digits === 0) {
    result = parseInt(number, 10) + '%'
  } else {
    result = number.toFixed(digits) + '%'
  }
  return result
}

/**
 * 格式化数字，固定几位小数点，并转为万位
 * @param amount 数字
 * @param [digits] 几位小数点, 默认无
 * @param [show] 是否隐藏单位“万”,默认false
 * @param [force] 是否强制不给小于10000的转为“万”，默认false
 * @param [noPad=false]    是否去掉小数点尾部的0
 * @return 指定小数点位数后的字符串格式
 */
export function tenThousand (amount, digits, show, force, noPad) {
  if (!amount) {
    return '--'
  }
  if (typeof amount !== 'number') {
    amount = parseFloat(amount)
    if (isNaN(amount)) { return '--' }
  }
  if (force && Math.abs(amount) < 10000) {
    // return parseInt(amount, 10);
    return amount.toFixed(0)
  }
  var num = amount / 10000
  var str
  if (digits >= 0) {
    str = (num).toFixed(digits)
    if (noPad) {
      if (str.match(/\.0+$/)) { str = parseInt(num, 10) } else {
        var matched = str.match(/\.\d*[1-9](0+)$/)
        if (matched) { str = str.substring(0, str.length - matched[1].length) }
      }
    }
  } else {
    str = num
  }
  if (show) {
    return str
  }
  return str + '万'
}

export function risk (code) {
  switch (code) {
    case 'S001':
      return '保守型'
    case 'S002':
      return '谨慎型'
    case 'S003':
      return '稳健型'
    case 'S004':
      return '积极型'
    case 'S005':
      return '进取型'
    default:
      return '--'
  }
}

