/**
* @file   model.vue
* @author river
* @create 2017-05-16 14:44
*/

<template lang="pug">
  .page.page-component
    .page-mark(v-marked="").
      ## Switch 开关

      表示两种相互对立的状态间的切换，多用于触发「开/关」。

      ### 基本用法
      ### Attributes

      | 参数      | 说明    | 类型      | 可选值       | 默认值   |
      |---------- |-------- |---------- |-------------  |-------- |
      | disabled  | 是否禁用    | boolean   | — | false   |
      | width  | switch 的宽度（像素）    | number   | — | 58（有文字）/ 46（无文字） |
      | on-icon-class  | switch 打开时所显示图标的类名，设置此项会忽略 `on-text`    | string   | — | — |
      | off-icon-class  | switch 关闭时所显示图标的类名，设置此项会忽略 `off-text`    | string   | — | — |
      | on-text  | switch 打开时的文字    | string   | — | ON |
      | off-text  | switch 关闭时的文字    | string   | — | OFF |
      | on-value  | switch 打开时的值    | boolean / string / number | — | true |
      | off-value  | switch 关闭时的值    | boolean / string / number | — | false |
      | on-color  | switch 打开时的背景色    | string   | — | #20A0FF |
      | off-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
      | name  | switch 对应的 name 属性    | string   | — | — |

      ### Events
      | 事件名称      | 说明    | 回调参数      |
      |---------- |-------- |---------- |
      | change  | switch 状态发生变化时的回调函数    | 新状态的值 |
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
