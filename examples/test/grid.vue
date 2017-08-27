<template lang="pug">
  .page
    .demo-content
      wu-row(:gutter="16")
        wu-col(:span="6")
          .gutter-box col-6
        wu-col(:span="6")
          .gutter-box col-6
        wu-col(:span="6")
          .gutter-box col-6
        wu-col(:span="6")
          .gutter-box col-6
    .demo-content
      wu-row(:gutter="16")
        wu-col(:span="24")
          .gutter-box col-24
    .demo-content
      wu-row
        wu-col(:span="8")
          .gutter-box col-8
        wu-col(:span="8", :offset="8")
          .gutter-box col-offset-8
    .demo-content
      wu-row(type="flex" justify="space-around")
        wu-col(:span="4")
          .gutter-box col-4
        wu-col(:span="4")
          .gutter-box col-4
        wu-col(:span="4")
          .gutter-box col-4
        wu-col(:span="4")
          .gutter-box col-4
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .demo-content
    margin 30px 0
  .gutter-box
    padding 5px 0
    text-align center
    color #fff
    background #00A0E9
</style>
