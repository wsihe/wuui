<template lang="pug">
  .page
    h2 Message
    .demo-content
    button(@click = 'info') 打开消息提示
</template>

<script>
  export default {
    methods: {
      info () {
        this.$message('这是一条消息提示')
      },
      success () {
      },
      warning () {
      },
      error () {
      },
      destroy () {
      }
    }
  }
</script>
