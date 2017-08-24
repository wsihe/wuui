<template lang="pug">
  .sidebar
    transition(name="slide-fade" mode="out-in")
      .sidebar-flex(v-if="show" key="flex")
        .sidebar__item(@click.stop="showMenu()")
          i.iconfont.icon-zhankai
        .sidebar__item(v-for="(menu, index) in menuList", @mouseenter = "focus(menu)", @mouseleave = "focus(menu)" v-cloak)
          i.icon.iconfont(:class="[menu.icon]")
          transition(name="fade")
            ul.menu(v-show="menu.active")
              li.menu__list(v-for="childMenu in menu.children")
                router-link(active-class="active", :to='childMenu.url'  tag="span" exact) {{childMenu.name}}
      .sidebar-expand(v-else  key="expand")
        .sidebar__item(:class="{active:homeTabActive}" v-if="isComponentNav" )
          .sidebar__parent(@click.stop="onHomeMenuClick()")
            i.icon
            span Wuui1.0.0
            .sidebar__item_nav(@click.stop="showMenu()")
              i.iconfont.icon-shousuo
        .sidebar__item(v-for="(menu, index) in menuList", :class="{active: menu.active}", v-cloak)
          .sidebar__parent(@click.stop="onMenuClick(menu, index)")
            i.icon.iconfont(:class="[menu.icon]")
            span {{menu.name}}
            i.iconfont.icon-expand(v-if="isComponentNav")
          ul.menu(v-show="!menu.active")
            li.menu__list(v-for="childMenu in menu.children")
              router-link(active-class="active", :to='childMenu.url'  tag="span" exact) {{childMenu.name}}
  </template>

<script>
  import navList from '@/i18n/nav.config.json'
  import {firstLowerCase} from '@/common/utils'

  const MAX_LEFT_WIDTH = 200
  const MIN_LEFT_WIDTH = 40
  export default {
    props: {
      typeName: {
        type: String,
        default: 'sider'
      },
      base: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        show: false,
        isEmpty: false,
        homeTabActive: false,
        menuList: [],
        activeIndex: -1
      }
    },
    computed: {
      isComponentNav () {
        return this.typeName === 'sider'
      }
    },
    mounted () {
      if (this.isComponentNav) {
        this.handleMenuData(navList)
      }
    },
    methods: {
      showMenu () {
        this.show = !this.show
        let width = 0
        if (this.show) {
          width = MIN_LEFT_WIDTH
        } else {
          width = MAX_LEFT_WIDTH
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
//            this.inactive()
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
          message: '待添加...',
          type: 'warning'
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define';
  @import '../../assets/fonts/iconfont.css';
  .sidebar
    font-family Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    .sidebar-flex
      position relative
      top 0
      display inline-block
      width 40px
      .sidebar__item
        position relative
        height 40px
        text-align center
        line-height 40px
        background #D3DCE6
        border-bottom 1px solid $color_dark_white
        &:first-child
          as-button()
        &:hover, &.active
          background #E5E9F2
        .icon
          opacity .6
        .menu
          position absolute
          top 0px
          left 40px
          color #666
          background #E5E9F2
          z-index 9999
          &__list
            position relative
            font-size 14px
            white-space nowrap
            span
              display inline-block
              padding 0 32px
              as-button()
              &:hover
                background #EFF2F7
    .sidebar-expand
      position relative
      top 0
      width 200px
      .sidebar__item_nav
        position absolute
        top 0
        right 0
        width 50px
        line-height 49px
        background #fff
        z-index 999
        .icon-shousuo
          margin-left 20px
      .sidebar__item
        border-bottom 1px solid #EFF2F7
      .sidebar__parent
        position relative
        padding 0 20px 0 15px
        color rgba(0,0,0,.65)
        font-size 14px
        height 50px
        line-height 50px
        as-button()
        background #fff
        .icon
          margin-right 20px
          display inline-block
        .icon-expand
          position absolute
          right 15px
          top 0
          opacity .5
      .sidebar__item.active
        .sidebar__parent
          background $color_white
          .icon-expand
            -moz-transform scaleY(-1)
            -webkit-transform scaleY(-1)
            -o-transform scaleY(-1)
            transform scaleY(-1)
            filter FlipV
      .menu
        background #fff
        &__list
          position relative
          overflow hidden
          span
            display inline-block
            width 100%
            padding-left 52px
            font-size 14px
            color rgba(0,0,0,.65)
            height 40px
            line-height 40px
            white-space nowrap
            as-button()
            &:hover, &.active
              color #2f92d1
              &::before
                position absolute
                content ""
                width 6px
                height 6px
                border 1px solid #2f92d1
                border-radius 100%
                left 34px
                bottom 17px
                background #2f92d1
  .slide-fade-enter-active
    transition all .3s ease
  .slide-fade-leave-active
    transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-active
    transform translateX(-50px)
    opacity 0
</style>
