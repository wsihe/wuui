import Vue from 'vue'
import router from './router'
// import * as Wuui from '../src/index'
import Message from '../src/packages/message/index'

Vue.prototype.$message = Message

Vue.config.productionTip = false

// console.log(Wuui)
// Vue.use(Wuui)

new Vue({
  router
}).$mount('#app')
