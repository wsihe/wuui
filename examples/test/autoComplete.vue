<template lang="pug">
  .page
    h2 autoComplete
    .demo-content
      wu-auto-complete(
        :data-source="dataSource",
        placeholder="input here",
        @on-search="handleSearch"
      )
    .demo-content
      wu-auto-complete(placeholder="input here", @on-search="handleSearch2")
        wu-option(:value="item", :key="index" v-for="(item, index) in dataSource2")
</template>

<script>
  export default {
    data () {
      return {
        value1: '',
        dataSource: [],
        dataSource2: []
      }
    },
    watch: {
    },
    methods: {
      handleSearch (value) {
        this.dataSource = !value ? [] : [
          value,
          value + value,
          value + value + value
        ]
      },
      handleSearch2 (value) {
        let result
        if (!value || value.indexOf('@') >= 0) {
          result = []
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
        }
        this.dataSource2 = result
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .demo-content .wu-select
    width 200px
</style>

