
/**
 * 通用vue 指令
 */

export default {
  bind (el, binding, vnode) {
    var handler = function (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__clickOutside__ = handler
    document.addEventListener('click', handler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__clickOutside__)
    delete el.__clickOutside__
  }
}
