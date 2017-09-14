<template lang="pug">
  .page
    h2 Select
    .demo-content
       wu-select(v-model="value" placeholder="请选择")
          wu-option(value="a" label="广州")
          wu-option(value="b" label="北京")
          wu-option(value="c" label="上海")
    .demo-content
      wu-select(v-model="value1")
        wu-option(value="广州")
        wu-option(value="北京")
        wu-option(value="上海")
    .demo-content
      wu-select(v-model="value3" placeholder="搜索城市...", showSearch)
        wu-option(:value="city.value", :label="city.label", :key="city.value" v-for="city in cityList")
    .demo-content
      wu-select(v-model="value2" placeholder="搜索城市...", showSearch)
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
        value: '',
        value1: '北京',
        value2: '广州',
        value3: '',
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ]
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

