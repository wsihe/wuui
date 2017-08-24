import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import color from '@/test/color'
import message from '@/test/message'
import collapse from '@/test/collapse'

Vue.use(Router)

const router = new Router({
  routes:
  [{
    path: '/index',
    redirect: '/index/color',
    component: index,
    children: [
      {
        path: 'color',
        name: 'component-color',
        component: color
      },
      {
        path: 'collapse',
        name: 'component-collapse',
        component: collapse
      },
      {
        path: 'message',
        name: 'component-message',
        component: message
      }]
  },
  {
    path: '',
    redirect: '/index'
  }]
})

export default router

