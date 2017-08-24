<template lang="pug">
  .home-page
    main-nav
    .home-page__logo
      <!--img.w-logo-image(src="../assets/images/w-logo-blue.png")-->
    h1.home-page__title Wuui
    h2.home-page__sub-title 基于 Vue 2.0 和 Ant Design 的 UI 组件库
    .home-button
      router-link(class='btn' to='guide') 设计规范
      router-link(class='btn' to='component') 开发指引
</template>

<script>
  import mainNav from '@/components/base/head'
  export default {
    data () {
      return {
        show: true
      }
    },
    components: {
      mainNav
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  @import '../css/define';
  .home-page
    height 100%
    background url("../assets/images/bg.png") no-repeat
    background-size 100%
    .header-navbar
      position fixed
      z-index 999
      background rgba(0, 0, 0, 0.2)
      border-bottom 1px solid transparent
      transition border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      a, .header-lang
        color #fff
        transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      .header-navbar__logo .logo
        background url("../assets/logo_wuui_w.png") no-repeat
        background-size 65%
        opacity .8
      .select-box
        font-size 14px
        color #fff
        opacity .6
  .home-page__logo
    margin 0 auto
    width 120px
    height 150px
    line-height 100px
    text-align center
    color #7e57c2
    font-size 50px
    display flex
    .w-logo-image
      margin 10px 0 0 10px
      width 80%
      height 80%
  .home-page__title
    font-size 3em
    font-weight 700
    color #fff
    text-align center
  .home-page__sub-title
    text-align center
    color #fff
  .home-button
    width 200px
    margin 30px auto
    .btn
      display inline-block
      width 90px
      font-size 14px
      line-height 32px
      text-align center
      border-radius 2px
      background #fff
      cursor pointer
      color #108ee9
      &:first-child
        margin-right 20px
</style>
