import Vue from 'vue'
import router from './router'
import Wuui from '../src/index'

Vue.config.productionTip = false

Vue.use(Wuui)

new Vue({
  router
}).$mount('#app')
