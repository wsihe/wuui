<template lang="pug">
  .page
    h2 Popconfirm
    .demo-content
      wu-popconfirm(title="确定删除 ？")
        a 删除
    .demo-content
      wu-popconfirm(title="确定删除 ？", @on-confirm="handleConfirm", @on-cancel="handleCancel")
        a 删除
    .demo-content
      wu-switch(@on-change="handle", :style="{marginBottom:'20px',marginRight:'40px'}")
      wu-popconfirm(title="确定删除 ？", :disabled="disabled")
        a 删除
</template>

<script>
  export default {
    data () {
      return {
        disabled: false
      }
    },
    methods: {
      handleConfirm () {
        console.log('confirm')
      },
      handleCancel () {
        console.log('cancel')
      },
      handle (val) {
        this.disabled = val
      }
    }
  }
</script>x
