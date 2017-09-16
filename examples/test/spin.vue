<template lang="pug">
  .page
    h2 Spin
    .demo-content
      wu-spin
</template>

<script>
  export default {
    data () {
      return {
        value1: false,
        value2: 'a',
        value3: false
      }
    },
    watch: {
    },
    methods: {
      handle (val) {
        console.log(val)
        console.log(this.value1)
      },
      handle2 (val) {
        console.log(val)
        console.log(this.value2)
      }
    }
  }
</script>

<style lang="stylus">
</style>
