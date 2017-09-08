<template lang="pug">
  .footer-container.clearfix
    .footer-main
      .footer-main__title Wuui
      ul.footer-main__nav
        li.footer-main__item
          a(href="https://github.com/wsihe/wuui/issues" target="_blank") 反馈建议
        li.footer-main__item
          a(href="https://wuui.github.io/#/guide/contribution" target="_blank") 贡献指南
    .footer-social
      a(href="https://github.com/wsihe/wuui" target="_blank")
        icon(type="github")
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/fonts/iconfont.css';
  .footer-container
    padding 20px 50px
    margin 0 auto
    line-height 40px
    background #EFF2F7
    .footer-main
      float left
      margin 0
      color #666
      .footer-main__title
        float left
        font-size 24px
      .footer-main__nav
        float left
        margin-left 20px
        .footer-main__item
          opacity 0.6
          padding 4px 20px 0 0
          float left
          font-size 14px
    .footer-social
      float right
      .wu-icon
        color #666
        font-size 32px
</style>
