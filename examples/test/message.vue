<template lang="pug">
  .page
    h2 Message
    .demo-content
      wu-button(@click = 'info') info
    .demo-content
      wu-button(@click = 'success') success
    .demo-content
      wu-button(@click = 'warning') warning
    .demo-content
      wu-button(type="danger", @click = 'error') error
</template>

<script>
  export default {
    methods: {
      info () {
        this.$message('这是一条消息提示')
      },
      success () {
        this.$message({
          message: '这是一条成功消息',
          type: 'success'
        })
      },
      warning () {
        this.$message({
          message: '这是一条警告消息',
          type: 'warning'
        })
      },
      error () {
        this.$message({
          message: '这是一条错误消息',
          type: 'error'
        })
      },
      destroy () {
      }
    }
  }
</script>

<style lang="stylus">
  .wu-btn
    width 100px
</style>
