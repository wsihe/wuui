/**
 * 通用vue 指令
 */
import $ from 'jquery'

export default {
  up_down: function (el, one) {
    var value = one.value
    var $el = $(el)
    if (isNaN(value)) {
      value = null
    } else if (typeof value === 'boolean') {
      value = value === true ? 1 : -1
    }
    if (value === null) {
      $el.removeClass('direct-up').removeClass('direct-down').addClass('null')
    } else if (value >= 0) {
      $el.removeClass('direct-down').removeClass('null').addClass('direct-up')
    } else if (value < 0) {
      $el.removeClass('direct-up').removeClass('null').addClass('direct-down')
    }
  },
  disable: function (el, value) {
    this.el.disabled = !!value
  }
  // other directives
}
