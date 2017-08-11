/**
* @file   paginationDemo.vue
* @author river
* @create 2017-05-16 14:44
*/

<template lang="pug">
  .page.page-component
    .page-mark(v-marked="").
      ## Pagination 分页

      当数据量过多时，使用分页分解数据。

      ### 基础用法
      ### Attributes
      | 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
      |--------------------|----------------------------------------------------------|-------------------|-------------|--------|
      | small | 是否使用小型分页样式 | Boolean | — | false |
      | page-size | 每页显示条目个数 | Number | — | 10 |
      | total | 总条目数 | Number | — | — |
      | page-count | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number | — | — |
      | current-page | 当前页数，支持 .sync 修饰符 | Number | — | 1 |
      | layout | 组件布局，子组件名用逗号分隔| String | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total'  |
      | page-sizes | 每页显示个数选择器的选项设置 | Number[] | — |  [10, 20, 30, 40, 50, 100] |

      ### Events
      | 事件名称 | 说明 | 回调参数 |
      |---------|--------|---------|
      | size-change | pageSize 改变时会触发 | 每页条数`size` |
      | current-change | currentPage 改变时会触发 | 当前页`currentPage` |

      ### Slot
      | name | 说明 |
      |------|--------|
      | — | 自定义内容，需要在 `layout` 中列出 `slot` |
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
