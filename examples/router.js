import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import grid from '@/test/grid'
import icon from '@/test/icon'
import button from '@/test/button'
import message from '@/test/message'
import collapse from '@/test/collapse'
import input from '@/test/input'
import radio from '@/test/radio'
import checkbox from '@/test/checkbox'
import select from '@/test/select'
import autoComplete from '@/test/autoComplete'
import switchTest from '@/test/switch'
import pagination from '@/test/pagination'
import dropdown from '@/test/dropdown'
import tabs from '@/test/tabs'
import spin from '@/test/spin'
import menu from '@/test/menu'
import tooltip from '@/test/tooltip'
import popover from '@/test/popover'
import popconfirm from '@/test/popconfirm'

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
        path: 'button',
        name: 'component-button',
        component: button
      },
      {
        path: 'input',
        name: 'component-input',
        component: input
      },
      {
        path: 'radio',
        name: 'component-radio',
        component: radio
      },
      {
        path: 'checkbox',
        name: 'component-checkbox',
        component: checkbox
      },
      {
        path: 'select',
        name: 'component-select',
        component: select
      },
      {
        path: 'autoComplete',
        name: 'component-autoComplete',
        component: autoComplete
      },
      {
        path: 'switch',
        name: 'component-switch',
        component: switchTest
      },
      {
        path: 'pagination',
        name: 'component-pagination',
        component: pagination
      },
      {
        path: 'dropdown',
        name: 'component-dropdown',
        component: dropdown
      },
      {
        path: 'tabs',
        name: 'component-tabs',
        component: tabs
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
      },
      {
        path: 'spin',
        name: 'component-spin',
        component: spin
      },
      {
        path: 'menu',
        name: 'component-menu',
        component: menu
      },
      {
        path: 'tooltip',
        name: 'component-tooltip',
        component: tooltip
      },
      {
        path: 'popover',
        name: 'component-popover',
        component: popover
      },
      {
        path: 'popconfirm',
        name: 'component-popconfirm',
        component: popconfirm
      }]
  },
  {
    path: '',
    redirect: '/index'
  }]
})

export default router

