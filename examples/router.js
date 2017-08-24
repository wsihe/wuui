import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'

Vue.use(Router)

const colorMd = r => require.ensure([], () => r(require('@/docs/zh-CN/color')), 'colorMd')
const buttonMd = r => require.ensure([], () => r(require('@/docs/zh-CN/button')), 'buttonMd')
const switchMd = r => require.ensure([], () => r(require('@/docs/zh-CN/switch')), 'switchMd')
const paginationMd = r => require.ensure([], () => r(require('@/docs/zh-CN/pagination')), 'paginationMd')
const messageMd = r => require.ensure([], () => r(require('@/docs/zh-CN/message')), 'messageMd')
const collapseMd = r => require.ensure([], () => r(require('@/docs/zh-CN/collapse')), 'collapseMd')

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
        meta: {
          title: 'Color-色彩'
        },
        component: colorMd
      },
      {
        path: 'button',
        name: 'component-button',
        meta: {
          title: 'Button-按钮'
        },
        component: buttonMd
      },
      {
        path: 'pagination',
        name: 'component-pagination',
        meta: {
          title: 'Pagination-分页'
        },
        component: paginationMd
      },
      {
        path: 'message',
        name: 'component-message',
        meta: {
          title: 'Message-消息'
        },
        component: messageMd
      },
      {
        path: 'switch',
        name: 'switch',
        meta: {
          title: 'Switch-开关'
        },
        component: switchMd
      },
      {
        path: 'collapse',
        name: 'component-collapse',
        meta: {
          title: 'Collapse-折叠'
        },
        component: collapseMd
      }]
  },
  {
    path: '',
    redirect: '/index'
  }]
})

export default router

