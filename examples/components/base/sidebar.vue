<template lang="pug">
  .sidebar
    .sidebar-item
      span Wuui {{version}}
    wu-menu(expand @on-click="onMenuClick", :inline-collapsed="collapse")
      wu-submenu(:name="menu.icon", :key="index", v-for="(menu, index) in menuList")
        template(slot="title")
          i.sidebar-icon.iconfont(:class="[menu.icon]")
          span.sidebar-title {{menu.name}}
        wu-menu-item(:name="childMenu.path" v-for="(childMenu, index) in menu.children", :key="index") {{childMenu.name}}
</template>

<script>
  import Wuui from 'wuui'
  import navList from '@/i18n/nav.config.json'

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
        menuList: [],
        activeIndex: -1,
        version: Wuui.version,
        collapse: false
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
        var menuList = this.buildMenuTree(ret.menuItem)
        this.menuList = menuList
      },

      onMenuClick (menu) {
        this.$router.push({path: menu})
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
  @import '../../css/define'
  @import '../../assets/fonts/iconfont.css'
  .sidebar
    &-item
      padding-left 44px
      color rgba(0,0,0,.65)
      font-size 14px
      height 50px
      line-height 50px
      border-right 1px solid #EFF2F7
      border-bottom 1px solid #EFF2F7
      as-button()
    &-item &-item-icon
      float right
      width 50px
      text-align center
    &-icon
      font-size 13px
      margin-right 8px
    &-title
      font-size 13px
</style>
