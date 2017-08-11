<template lang="pug">
  .sidebar
    transition(name="slide-fade" mode="out-in")
      .sidebar-flex(v-if="show" key="flex")
        .sidebar__item
          i.icon.icon-sider-expand(@click="showMenu()")
        .sidebar__item(v-for="(menu, index) in menuList", @mouseenter = "focus(menu)", @mouseleave = "focus(menu)" v-cloak)
          i.icon(:class="[menu.icon]")
          transition(name="fade")
            ul.menu(v-show="menu.active")
              li.menu__list(v-for="(childMenu, index) in menu.children", @click.stop="onMenuClick(childMenu, index, menu)", :class="{active: childMenu.active}")
                span {{childMenu.name}}
      .sidebar-expand(v-else  key="expand")
        .sidebar__item(:class="{active:homeTabActive}")
          .sidebar__parent(@click.stop="onHomeMenuClick()")
            i.icon
            span Introduction
            .sidebar__item_nav
              i.icon.icon-sider-flex(@click.stop="showMenu()")
        .sidebar__item(v-for="(menu, index) in menuList", :class="{active: menu.active}", v-cloak)
          .sidebar__parent(@click.stop="onMenuClick(menu, index)")
            i.icon(:class="[menu.icon]")
            span {{menu.name}}
            .icon-expand
          ul.menu(v-show="menu.active")
            li.menu__list(v-for="(childMenu, index) in menu.children", @click.stop="onMenuClick(childMenu, index, menu)", :class="{active: childMenu.active}")
              span {{childMenu.name}}
  </template>

<script>
//  import authService from 'services/login'
  import {siderList} from 'services/getData'
  import {firstLowerCase} from '@/common/utils'
  export default {
    data () {
      return {
        show: false,
        isEmpty: false,
        homeTabActive: false,
        menuList: [],
        activeIndex: -1
      }
    },
    mounted () {
      siderList().then(res => {
        this.handleMenuData(res)
      })
    },
    methods: {
      showMenu () {
        this.show = !this.show
        let width = 0
        if (this.show) {
          width = 50
        } else {
          width = 200
        }
        this.$emit('data', width)
        this.menuList.forEach(function (firstMenu) {
          firstMenu.active = false
        })
      },
      focus (menu) {
        menu.active = !menu.active
      },
      handleMenuData (ret) {
        if (!ret || !ret.menuItem || !ret.menuItem.length) {
          this.isEmpty = true
          return
        }
        // 拷贝数据，重新生成树形节点。
        var menuList = this.buildMenuTree(ret.menuItem, null)
        // 移除没有子节点的菜单？
        this.menuList = menuList
        this.isEmpty = menuList.length === 0
        this.activeIndex = -1
      },

      onHomeMenuClick () {
        this.inactive()
        this.homeTabActive = true
        this.$router.push({name: 'home'})
      },

      onMenuClick (menu, index, parent) {
        if (!menu.leaf) {
          // 只折叠子菜单
          this.homeTabActive = false
          if (this.activeIndex === index) {
            menu.active = !menu.active
            if (!menu.active) {
              this.activeIndex = -1
            }
          } else {
            this.inactive()
            menu.active = true
            this.activeIndex = index
          }
          return
        }
        // 叶子节点，打开指定页面
        var pageName = menu.url
        if (!pageName) {
          alert('功能未实现，敬请期待！')
          return
        }
        try {
          this.$router.push({name: pageName})
        } catch (error) {
//          console.error('[ROUTER] Not found page :' + pageName)
          this.open()
        }
        if (parent) {
          parent.children.forEach(function (childMenu) {
            if (childMenu !== menu) {
              childMenu.active = false
            }
          })
        }
        menu.active = true
        this.inactiveSubMenu(parent, menu)
      },

      inactive () {
        if (this.activeIndex === -1) {
          return
        }
        var menu = this.menuList[this.activeIndex]
        menu.active = false
        this.activeIndex = -1
      },

      inactiveSubMenu (parent, menu) {
        this.menuList.forEach(function (firstMenu) {
          if (firstMenu === parent) {
            return
          }
          firstMenu.children.forEach(function (childMenu) {
            if (childMenu !== menu) {
              childMenu.active = false
            }
          })
        })
      },

      buildMenuTree (itemList, parent) {
        let _this = this
        if (!itemList || !itemList.length) {
          return []
        }
        var list = []
        itemList.forEach(function (item) {
          var menu = {}
          menu.parentId = parent ? parent.id : null
          menu.name = item.label
          menu.url = firstLowerCase(item.url)
          menu.icon = item.icon || 'icon-menu-default'
          menu.level = parent ? parent.level + 1 : 1 // 当前菜单深度
          menu.active = false // 表示是否激活
          menu.children = _this.buildMenuTree(item.menuItem, menu)
          menu.leaf = menu.children.length === 0 // 是否叶子节点
          list.push(menu)
        })
        return list
      },
      open () {
        this.$message({
          message: '该组件还未实现，努力敲代码中...',
          type: 'warning'
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define';
  .sidebar
    position absolute
    top 60px
    left 0
    bottom 0
    background #d8e2ee
    .sidebar-flex
      position relative
      top 0
      display inline-block
      width 50px
      .sidebar__item
        position relative
        height 50px
        line-height 50px
        background #b4d0ee
        border-bottom 1px solid $color_dark_white
        &:first-child
          &:hover
            background $color_dark_blue
        &:hover, &.active
          background $color_dark_blue
        .icon
          position absolute
          top 0
          right 0
          padding 14px 15px
          height 22px
          display inline-block
          as-button()
        .menu
          position absolute
          top 0px
          left 50px
          color $color_white
          background $color_dark_blue
          z-index 9999
          &__list
            position relative
            padding 0 32px
            font-size 14px
            white-space nowrap
            &:hover
              background $color_light_blue
    .sidebar-expand
      position relative
      top 0
      width 200px
      .sidebar__item_nav
        position absolute
        top 0
        right 0
        width 51px
        height 50px
        line-height 50px
        color $color_white
        background #b4d0ee
        z-index 999
        .icon
          position absolute
          top 0 !important
          margin-right 0 !important
          right 0
          padding 14px 15px
          height 22px
          display inline-block
          as-button()
      .sidebar__item
        border-bottom 1px solid $color_dark_white
      .sidebar__parent
        position relative
        padding 0 20px 0 15px
        color $color_light_black
        font-size 16px
        height 50px
        line-height 50px
        as-button()
        background #b4d0ee
        .icon
          position relative
          top 5px
          margin-right 18px
          width 22px
          height 22px
          display inline-block
        .icon-expand
          display block
          position absolute
          right 15px
          top 21px
          set-icon 15px 8px "sidebar/icon-menu-collapse.png"
      .sidebar__item.active
        border-bottom none
        .sidebar__parent
          color $color_white
          background $color_dark_blue
          .icon-expand
            set-icon 15px 8px "sidebar/icon-menu-expand.png"
        .sidebar__item_nav
          background $color_dark_blue
      .menu
        background #d8e2ee
        &__list
          position relative
          padding 0 15px 0 52px
          font-size 14px
          color #666
          height 40px
          line-height 40px
          white-space nowrap
          overflow hidden
          as-button()
          &:hover, &.active
            color #2f92d1
            &::before
              position absolute
              content ""
              width 8px
              height 8px
              border 1px solid #0f75b7
              border-radius 100%
              left 32px
              bottom 15px
              background #0f75b7
  // 设置图标, 同时指定元素大小
  set-icon-pos(width, height, image)
    set-icon(width, height, image)
    background-position center center
  .icon-sider-flex
    set-icon-pos 21px 20px "sidebar/icon-sider-flex-active.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 21px 20px "sidebar/icon-sider-flex.png"
  .icon-sider-expand
    set-icon-pos 21px 20px "sidebar/icon-sider-expand-active.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 21px 20px "sidebar/icon-sider-expand.png"
  .icon-assets
    set-icon-pos 18px 20px "sidebar/icon-assets.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-assets-active.png"
  .icon-customer
    set-icon-pos 18px 20px "sidebar/icon-customer.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-customer-active.png"
  .icon-product
    set-icon-pos 18px 20px "sidebar/icon-product.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-product-active.png"
  .icon-report
    set-icon-pos 18px 20px "sidebar/icon-report.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-report-active.png"
  .icon-market
    set-icon-pos 18px 20px "sidebar/icon-market.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-market-active.png"
  .icon-wallet
    set-icon-pos 18px 20px "sidebar/icon-wallet.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-wallet-active.png"
  .icon-model
    set-icon-pos 18px 20px "sidebar/icon-model.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-model-active.png"
  .icon-performance
    set-icon-pos 18px 20px "sidebar/icon-performance.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-performance-active.png"
  .icon-system
    set-icon-pos 18px 20px "sidebar/icon-system.png"
    .sidebar__item.active &, .sidebar-flex .sidebar__item:hover &
      set-icon-pos 18px 20px "sidebar/icon-system-active.png"
  .slide-fade-enter-active
    transition all .3s ease
  .slide-fade-leave-active
    transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-active
    transform translateX(-50px)
    opacity 0
</style>
