<template lang="pug">
  .main
    main-nav
    side-bar(v-on:data="inactive")
    .main__content
      main-tab
      .main__container
        tab-manager
          router-view
</template>

<script>
  import $ from 'jquery'
  import mainNav from 'components/base/head'
  import sideBar from 'components/base/sidebar'
  import mainTab from 'components/base/tab'
  export default {
    data () {
      return {
        show: true // 页签数据
      }
    },
    components: {
      mainNav,
      sideBar,
      mainTab
    },
    created () {
      // console.log(this.show)
    },
    methods: {
      inactive (data) {
        let width = data
        $('.main__content').animate({left: width + 'px'})
      }
    }
  }
</script>

<style lang="stylus">
  @import "css/index.styl"
  .main__content
    position absolute
    top 60px
    left 200px
    right 0
    bottom 0
    background #e7eef3
    .tab__container
      padding 0 20px
      background #d8e2ee
      height 32px
      overflow hidden
      .tab__item
        display inline-block
        width 150px
        height 32px
        color #666
        line-height 32px
        text-align center
        background #b4d1ee
        &--active
          background #e7eef3
        .el-icon-close
          font-size 8px
          font-weight 200
    .main__container
      position absolute
      top 30px
      bottom 0
      right 0
      left 0
      margin 20px
      padding 20px
      overflow auto
      min-width 984px
      background $color_white
      border-top 2px solid $color_dark_blue
    .router-fade-enter-active, .router-fade-leave-active
      transition opacity .3s
    .router-fade-enter, .router-fade-leave-active
      opacity 0
</style>
