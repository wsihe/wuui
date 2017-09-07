<template lang="pug">
  .page
    h2 Pagination
    .demo-content
      wu-pagination(:total="20")
    .demo-content
      wu-pagination(:total="100")
</template>

<script>
  export default {
    data () {
      return {
        value1: ''
      }
    },
    watch: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
</style>

