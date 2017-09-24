<template lang="pug">
  .page
    h2 Tooltip
    .demo-content
      wu-tooltip(placement="top" content="tooltip text")
        span 鼠标经过文字提示
    .demo-content
      wu-tooltip
        span(slot="content") tooltip text more
        span 鼠标经过文字提示
</template>

<script>
  export default {
    data () {
      return {
        input: '',
        input2: 'textarea',
        input3: 'autosize'
      }
    },
    watch: {
      input (newVal, oldVal) {
        console.log(newVal)
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .wu-input, .wu-input-group-wrapper
    margin-bottom 10px
</style>
