<template lang="pug">
  .page
    h2 autoComplete
    .demo-content
      wu-auto-complete(value="111")
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

