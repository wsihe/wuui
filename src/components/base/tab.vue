/**
* @file   tab.vue
* @author river
* @create 2017-05-17 14:44
*/

<template lang="pug">
  .main__tab
    .tab__container
      .tab__item(v-for="(tab, index) in tabList" , :class="{active: tab.active}",  @click.stop='nextPage(tab)')
        span.tab__title {{tab.title}}
        .tab-close(title="关闭页面" v-show="index !== 0", @click.stop="close(tab)")
          .close-icon
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        tabList: [] // 页签数据
      }
    },
    created () {
    },
    mounted () {
      this.tabList = this.routes
    },
    computed: mapState({
      routes: state => state.route.routes
    }),
    methods: {
      nextPage (menu) {
        // 切换页面
        var pageName = menu.name
        this.$router.push({name: pageName})
      },
      close (menu) {
        let count = 1
        this.$tab.delTab(menu, count)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define'
  .main__tab
    padding 0 20px
    background #d8e2ee
    height 32px
    overflow hidden
    .tab__container
      display block
      left 0
      padding 0
      margin 0 !important
      white-space nowrap
      overflow-y hidden
      overflow-x hidden
      display flex
      flex-direction row
      .tab__item
        position relative
        display inline-block
        min-width 6px
        max-width 150px
        flex 1
        color #666
        height 32px
        line-height 32px
        text-align center
        background #b4d1ee
        border-right 1px solid $color_dark_white
        as-button()
        z-index auto
        &:first-child
          border-left 1px solid $color_dark_white
        &.active
          background #e7eef3
        &:hover
          opacity 0.8
        .tab__title
          display block
          position relative
          box-sizing border-box
          text-align center
          color #666
          font-size 14px
          font-weight normal
          left -4px
          overflow hidden
          white-space nowrap
          padding 0 6px
          text-overflow ellipsis
        .tab-close
          position absolute
          display block
          cursor pointer
          padding 3px
          top 10px
          right 16px
          z-index 3
          border-radius 7px
          .close-icon
            display block
            width 8px
            height 8px
            set-image-bg("tab-close.png")
          &:hover
            background #444444
            .close-icon
              set-image-bg("tab-close-hover.png")


</style>
