<template lang="pug">
  .page
    h2 Pagination
    .demo-content
      wu-pagination(:total="50", :current.sync="current")
    .demo-content
      wu-pagination(:total="100")
    .demo-content
      wu-pagination(:total="100", size="small")
    .demo-content
      wu-pagination(:total="100", show-changer)
    .demo-content
      wu-pagination(:total="100", show-changer, show-total)
    .demo-content
      wu-pagination(:total="100", show-jumper)
    .demo-content
      wu-pagination(:total="100", @on-size-change="changeSize", show-changer, show-jumper)
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
      changeSize (size) {
        console.log(size)
      }
    }
  }
</script>

<style lang="stylus">
</style>

