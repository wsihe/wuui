import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import guide from '@/pages/guide'
import component from '@/pages/component'

Vue.use(Router)

// const breadcrumb = r => require.ensure([], () => r(require('@/docs/zh-CN/breadcrumb.md')), 'breadcrumb')
const design = r => require.ensure([], () => r(require('@/docs/zh-CN/design')), 'design')
const contribution = r => require.ensure([], () => r(require('@/docs/zh-CN/contribution')), 'contribution')

const introduce = r => require.ensure([], () => r(require('@/docs/zh-CN/introduce')), 'introduce')
const installMd = r => require.ensure([], () => r(require('@/docs/zh-CN/install')), 'installMd')
const usageMd = r => require.ensure([], () => r(require('@/docs/zh-CN/usage')), 'usageMd')
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
    name: 'index',
    component: index
  },
  {
    path: '/guide',
    redirect: '/guide/design',
    component: guide,
    children: [
      {
        path: 'design',
        name: 'guide-design',
        component: design
      },
      {
        path: 'contribution',
        name: 'guide-contribution',
        component: contribution
      }
    ]
  },
  {
    path: '/component',
    redirect: '/component/introduce',
    component: component,
    children: [
      {
        path: 'introduce',
        name: 'component-introduce',
        meta: {
          title: 'Introduce'
        },
        component: introduce
      },
      {
        path: 'install',
        name: 'component-install',
        meta: {
          title: '安装'
        },
        component: installMd
      },
      {
        path: 'usage',
        name: 'component-usage',
        meta: {
          title: '使用'
        },
        component: usageMd
      },
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

