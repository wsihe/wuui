/**
 * Created by river on 2017/6/23.
 */
import marked from 'marked'
import 'highlight.js/styles/monokai-sublime.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})
let install = function (Vue) {
  /* istanbul ignore if */
  if (install.installed) return
  Vue.directive('marked', {
    bind: function (el, binding) {
      el.innerHTML = marked(el.innerText)
    }
  })
}
export default install
