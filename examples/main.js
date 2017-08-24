import Vue from 'vue'
import router from './router/router'
import store from './store/'
import { tabManager } from './libs/tabManager'
import 'highlight.js/styles/color-brewer.css'
import Message from './packages/message/main'

Vue.config.productionTip = false

tabManager(Vue, store, router)

const install = function (Vue, opts = {}) {
  Vue.prototype.$message = Message
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

new Vue({
  router,
  store
}).$mount('#app')
