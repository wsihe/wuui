/**
* @file   login登陆模块
* @author river
* @create 2017-05-05 14:00
*/

<template lang="pug">
  .page_login
    .page_content
      .logo
      form.login-form
        .ui-form-item
            label.ui-label
              span.ui-icon.icon-user
            input.ui-input(type='text', placeholder='用户名', v-model='userName')
            span.ui-tips.icon-error
        .ui-form-item
          label.ui-label
            span.ui-icon.icon-password
          input.ui-input(type='password', placeholder='密码', v-model='password')
          span.ui-tips.icon-error
          .login_errors(v-cloak="" v-if="errorTip")
            p {{errorTip}}
          .btn-box(@click.prevent="submitForm()")
            button.btn.btn-submit
              i.fa.fa-unlock
              span 登录
</template>

<script>
  import {mapMutations} from 'vuex'
  import authService from 'services/login'
  import {removeStore} from '@/common/utils'
  const USER_NAME_REG = /^[\w\-.]+$/
  export default {
    data () {
      return {
        errorTip: '',         // 错误信息提示
        userName: '3009333',
        password: 'a123456'
      }
    },
    created () {
    },
    methods: {
      ...mapMutations([
        'RECORD_LOGIN'
      ]),
      async submitForm () {
        var _this = this
        var user = _this.userName
        var password = _this.password
        if (!user) {
          this.setError('请输入用户名')
          return
        }
        if (!USER_NAME_REG.test(user)) {
          this.setError('用户名包含非法字符')
          return
        }
        if (!password) {
          this.setError('请输入密码')
          return
        }
        let response = await authService.login(this.userName, this.password)
        if (response && response.code === 0) {
          removeStore('VUE_TABS')
          _this.RECORD_LOGIN(response.token)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/')
          this.$router.push({
            path: redirect
          })
        } else {
          _this.setError('OA用户验证失败')
        }
      },
      setError (error) {
        this.errorTip = error
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define'
  .page_login
    width 100%
    height 100%
    display block
    position absolute
    set-image-bg "login-bg.jpg"
    background-size 100% auto
    background-size cover
    .page_content
      width 374px
      margin 0 auto
      .logo
        margin 110px auto 0
        width 352px
        height 149px
        set-image-bg "login-logo.png"
      .login-form
        margin-top 85px
      .ui-form-item
        margin 0 0 20px
        padding 0
        zoom 1
        position relative
        overflow hidden
      .ui-label
        width 39px
        height 38px
        display block
        position absolute
        top 2px
        .ui-icon
          position relative
          top 8px
          left 13px
          width 26px
          height 27px
          display block
          overflow hidden
          text-align center
          z-index 99
          &.icon-user
            set-icon 26px 27px "login/icon-user.png"
          &.icon-password
            set-icon 26px 27px "login/icon-password.png"
      .ui-input
        padding 9px
        height 50px
        line-height 32px
        box-sizing border-box
        width 100%
        color #185589
        font-size 18px
        vertical-align middle
        border-radius 2px
        box-shadow none
        text-align center
        border hidden
        background #edf7ff
        &:focus
          background #fff
          outline 0
      .btn
        display inline-block
        color #fff
        position relative
        margin-top 10px
        padding 0
        width 100%
        height 50px
        border-radius 2px
        text-align center
        font-size 22px
        line-height 33px
        cursor pointer
        background #f1a92b
        border hidden
      .btn:hover, .btn:active, .btn[disabled], .btn.logining
        background #df920f
        outline 0
      .login_errors
        margin 1px 0
        width 100%
        height 26px
        line-height 25px
        font-size 14px
        color #e6061b
        text-align center
        background #ffdfd5
        border-radius 2px
</style>
