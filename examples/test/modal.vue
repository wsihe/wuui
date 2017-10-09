<template lang="pug">
  .page
    h2 Modal
    .demo-content
      wu-button(type="primary", @click="modalVisible = true") 打开对话框
      wu-modal(title="提示", v-model="modalVisible", @on-ok="handleOk", @on-cancel="handleCancel")
        p 内容...
        p 内容...
        p 内容...
</template>

<script>
  export default {
    data () {
      return {
        modalVisible: false
      }
    },
    methods: {
      handleOk () {
        this.$message('确定')
      },
      handleCancel () {
        this.$message('取消')
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
