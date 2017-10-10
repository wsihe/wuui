<template lang="pug">
  .page
    h2 Modal
    .demo-content
      wu-button(type="primary", @click="modalVisible = true") 打开对话框
      wu-modal(title="提示", v-model="modalVisible", @on-ok="handleOk", @on-cancel="handleCancel")
        p 内容...
        p 内容...
        p 内容...
    .demo-content
      wu-button(type="primary", @click="modalVisible1 = true") 异步关闭
      wu-modal(title="提示", v-model="modalVisible1", confirm-loading, @on-ok="handleOk2")
        p 内容...
        p 内容...
        p 内容...
    .demo-content
      wu-button(type="primary", @click="modalVisible2 = true") 按钮文字
      wu-modal(title="保存", v-model="modalVisible2", ok-text="保存", cancel-text="不保存")
        p 内容...
        p 内容...
        p 内容...
    .demo-content
      wu-button(type="primary", @click="modalVisible3 = true") 自定义页脚
      wu-modal(title="保存", v-model="modalVisible3")
        p 内容...
        p 内容...
        p 内容...
        template(slot="footer")
          wu-button(size="large", @click="handleCancelClick") 取消1
          wu-button(type="primary", size="large", @click="handleOkClick", :loading="buttonLoading") 确定1
    .demo-content
      wu-button(@click="handleInstance") 实例方法confirm
    .demo-content
      wu-button(@click="instance('info')") Info
      wu-button(@click="instance('success')") Success
      wu-button(@click="instance('error')") Error
      wu-button(@click="instance('warning')") Warning
</template>

<script>
  export default {
    data () {
      return {
        modalVisible: false,
        modalVisible1: false,
        modalVisible2: false,
        modalVisible3: false,
        buttonLoading: false
      }
    },
    methods: {
      handleOk () {
        this.$message('确定')
      },
      handleOk2 () {
        setTimeout(() => {
          this.modalVisible1 = false
        }, 2000)
      },
      handleCancel () {
        this.$message('取消')
      },
      handleCancelClick () {
        this.modalVisible3 = false
      },
      handleOkClick () {
        this.buttonLoading = true
        setTimeout(() => {
          this.modalVisible3 = false
          this.buttonLoading = false
        }, 2000)
      },
      handleInstance () {
        this.$modal.confirm({
          title: '提示',
          content: '功能描述'
        })
      },
      instance (type) {
        const title = '标题'
        const content = '内容'
        switch (type) {
          case 'info':
            this.$modal.info({
              title: title,
              content: content
            })
            break
          case 'success':
            this.$modal.success({
              title: title,
              content: content
            })
            break
          case 'warning':
            this.$modal.warning({
              title: title,
              content: content
            })
            break
          case 'error':
            this.$modal.error({
              title: title,
              content: content
            })
            break
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
