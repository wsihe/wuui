import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
// import store from '@/store/'
// import {RECORD_LOGIN} from '@/store/mutation-types'
// import {getStore} from '@/common/utils'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/examples/home')), 'home')
const colorDemo = r => require.ensure([], () => r(require('@/examples/basic/colorDemo')), 'colorDemo')
const buttonDemo = r => require.ensure([], () => r(require('@/examples/basic/buttonDemo')), 'buttonDemo')
const switchDemo = r => require.ensure([], () => r(require('@/examples/form/switchDemo')), 'switchDemo')
const paginationDemo = r => require.ensure([], () => r(require('@/examples/data/paginationDemo')), 'paginationDemo')
const messageDemo = r => require.ensure([], () => r(require('@/examples/notice/messageDemo')), 'messageDemo')
const collapseDemo = r => require.ensure([], () => r(require('@/examples/others/collapseDemo')), 'collapseDemo')
// const login = r => require.ensure([], () => r(require('@/examples/login/login')), 'login')
const router = new Router({
  mode: 'history',
  routes:
  [{
    path: '/',
    component: index,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: 'Introduction'
        },
        component: home
      },
      {
        path: '/colorDemo',
        name: 'colorDemo',
        meta: {
          title: 'Color-色彩'
        },
        component: colorDemo
      },
      {
        path: '/buttonDemo',
        name: 'buttonDemo',
        meta: {
          title: 'Button-按钮'
        },
        component: buttonDemo
      },
      {
        path: '/switchDemo',
        name: 'switchDemo',
        meta: {
          title: 'Switch-开关'
        },
        component: switchDemo
      },
      {
        path: '/paginationDemo',
        name: 'paginationDemo',
        meta: {
          title: 'Pagination-分页'
        },
        component: paginationDemo
      },
      {
        path: '/messageDemo',
        name: 'messageDemo',
        meta: {
          title: 'Message-消息'
        },
        component: messageDemo
      },
      {
        path: '/collapseDemo',
        name: 'collapseDemo',
        meta: {
          title: 'Collapse-折叠'
        },
        component: collapseDemo
      }]
  }]
})

// if (getStore('token')) {
//   store.commit(RECORD_LOGIN, getStore('token'))
// }
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth !== 0) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router

