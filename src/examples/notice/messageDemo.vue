/**
* @file   model.vue
* @author river
* @create 2017-05-16 14:44
*/

<template lang="pug">
  .page.page-component
    .page-mark(v-marked="").
      ## Message 消息提示

      常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

      ### 基础用法

      从顶部出现，3 秒后自动消失。
      ### 全局方法

      Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。

      ### 单独引用

      单独引入 `Message`：

      ```javascript
      import { Message } from 'element-ui';
      ```

      此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。
      并且可以调用 `Message.closeAll()` 手动关闭所有实例。

      ### Options
      | 参数      | 说明          | 类型      | 可选值                           | 默认值  |
      |---------- |-------------- |---------- |--------------------------------  |-------- |
      | message | 消息文字 | string | — | — |
      | type | 主题 | string | success/warning/info/error | info |
      | iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
      | customClass | 自定义类名 | string | — | — |
      | duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
      | showClose | 是否显示关闭按钮 | boolean | — | false |
      | onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | — | — |

      ### 方法
      调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
      | 方法名 | 说明 |
      | ---- | ---- |
      | close | 关闭当前的 Message |
</template>

<script>
  export default {
    name: 'switchDemo',
    data () {
      return {
        input: ''
      }
    },
    computed: {
      compiledMarkdown () {
//        return marked(this.input, { sanitize: true })
      }
    },
    methods: {
//      update: _.debounce(function (e) {
//        this.input = e.target.value
//      }, 300)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define'
  .page_model_manage
    display block
</style>
