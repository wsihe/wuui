import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import grid from '@/test/grid'
import icon from '@/test/icon'
import color from '@/test/color'
import message from '@/test/message'
import collapse from '@/test/collapse'

Vue.use(Router)

const router = new Router({
  routes:
  [{
    path: '/index',
    redirect: '/index/grid',
    component: index,
    children: [
      {
        path: 'grid',
        name: 'component-grid',
        component: grid
      },
      {
        path: 'icon',
        name: 'component-icon',
        component: icon
      },
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

