<template lang="pug">
  .sidebar
    .sidebar-expand
      .sidebar__item(v-for="(menu, index) in menuList", :class="{active: menu.active}", v-cloak)
        .sidebar__parent(@click.stop="onMenuClick(menu, index)")
          i.icon.iconfont(:class="[menu.icon]")
          span {{menu.name}}
          i.iconfont.icon-expand
        ul.menu(v-show="!menu.active")
          li.menu__list(v-for="childMenu in menu.children")
            router-link(active-class="active", :to='childMenu.path'  tag="span" exact) {{childMenu.name}}
  </template>

<script>
  import navList from '@/i18n/nav.config.json'

  export default {
    data () {
      return {
        show: false,
        menuList: []
      }
    },
    mounted () {
      this.handleMenuData(navList)
    },
    methods: {
      handleMenuData (ret) {
        if (!ret || !ret.menuItem || !ret.menuItem.length) {
          return
        }
        var menuList = this.buildMenuTree(ret.menuItem, null)
        this.menuList = menuList
      },

      onMenuClick (menu, index) {
        if (!menu.leaf) {
          menu.active = !menu.active
        }
        this.inactiveSubMenu(menu)
      },

      inactiveSubMenu (menu) {
        this.menuList.forEach(function (firstMenu) {
          firstMenu.children.forEach(function (childMenu) {
            if (childMenu !== menu) {
              childMenu.active = false
            }
          })
        })
      },

      buildMenuTree (itemList) {
        let _this = this
        if (!itemList || !itemList.length) {
          return []
        }
        var list = []
        itemList.forEach(function (item) {
          var menu = {}
          menu.name = item.name
          menu.path = item.path
          menu.icon = item.icon || 'icon-menu-default'
          menu.active = false
          menu.children = _this.buildMenuTree(item.menuItem, menu)
          menu.leaf = menu.children.length === 0
          list.push(menu)
        })
        return list
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define';
  @import '../../assets/fonts/iconfont.css';
  .sidebar
    font-family Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
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
</style>
