/**
* @file   collapse.vue
* @author river
* @create 2017-05-16 14:44
*/

<template lang="pug">
  .page.page-component
    .page-mark(v-marked="").
      ## Collapse 折叠面板

      通过折叠面板收纳内容区域

      ### 基础用法
      ### Collapse Attributes
      | 参数      | 说明          | 类型      | 可选值                           | 默认值  |
      |---------- |-------------- |---------- |--------------------------------  |-------- |
      | accordion | 是否手风琴模式 | boolean | — | false |
      | value | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | string/array | — | — |

      ### Collapse Events
      | 事件名称 | 说明 | 回调参数 |
      |---------|---------|---------|
      | change | 当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames` 类型为`string`，否则为`array`) | (activeNames: array\|string) |

      ### Collapse Item Attributes
      | 参数      | 说明          | 类型      | 可选值                           | 默认值  |
      |---------- |-------------- |---------- |--------------------------------  |-------- |
      | name | 唯一标志符 | string/number | — | — |
      | title | 面板标题 | string | — | — |
</template>

<script>
  export default {
    name: 'collapseDemo',
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
