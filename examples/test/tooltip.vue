<template lang="pug">
  .page
    h2 Tooltip
    .demo-content
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
