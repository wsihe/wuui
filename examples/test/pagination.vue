<template lang="pug">
  .page
    h2 Pagination
    .demo-content
      wu-pagination(:total="50", :current.sync="current")
    .demo-content
      wu-pagination(:total="100")
    .demo-content
      wu-pagination(:total="100", size="small")
</template>

<script>
  export default {
    data () {
      return {
        current: 1
      }
    },
    watch: {
      current (page) {
        console.log(page)
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
</style>

