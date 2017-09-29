<template lang="pug">
  .page
    h2 Popconfirm
    .demo-content
      wu-popconfirm(title="您是否确定要删除此项 ？")
        a 删除
    .demo-content
      wu-popconfirm(title="您是否确定要删除此项 ？", @on-confirm="handleConfirm", @on-cancel="handleCancel")
        a 删除
    .demo-content
      wu-switch(@on-change="handle", :style="{marginBottom:'20px',marginRight:'40px'}")
      wu-popconfirm(title="您是否确定要删除此项 ？", :disabled="disabled")
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
