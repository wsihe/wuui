<template lang="pug">
  .footer-container.clearfix
    .footer-main
      .footer-main__title Wuui 1.0.0
      ul.footer-main__nav
        li.footer-main__item
          a 反馈建议
        li.footer-main__item
          a 贡献指南
    .footer-social
      .i.iconfont.icon-github
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
        .footer-main__item
          opacity 0.6
          padding 4px 20px  0
          float left
          font-size 14px
    .footer-social
      float right
      .iconfont
        color #666
        font-size 32px
</style>
