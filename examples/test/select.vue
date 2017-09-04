<template lang="pug">
  .page
    .demo-content
      wu-select(v-model="value1")
        wu-option(value="广州")
        wu-option(value="北京")
        wu-option(value="上海")
    .demo-content
      wu-select(v-model="value2" placeholder="搜索组件...", showSearch)
        wu-option(value="广州")
        wu-option(value="北京")
        wu-option(value="上海")
    .demo-content
      wu-select(disabled)
        wu-option(value="广州")
</template>

<script>
  export default {
    data () {
      return {
        value1: '北京',
        value2: '广州'
      }
    },
    watch: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .demo-content .wu-select
    width 200px
</style>

