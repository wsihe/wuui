import Vue from 'vue'
import router from './router'
import Wuui from '../src/index'
import '../src/style/index.less'

Vue.use(Wuui)

new Vue({
  router
}).$mount('#app')
