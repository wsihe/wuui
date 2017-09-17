<template lang="pug">
  .page
    h2 Spin
    .demo-content
      wu-spin
    .demo-content
      .example
        wu-spin
    .demo-content
      wu-spin
        .example
          p content of spin
    .demo-content
      wu-switch(@on-change="handle")
      wu-spin(v-model="value")
        .example
          p content of spin
    .demo-content
      wu-switch(@on-change="handle2")
      wu-spin(v-model="value2", :delay="800")
        .example
          p content of spin delay
</template>

<script>
  export default {
    data () {
      return {
        value: false,
        value2: false
      }
    },
    watch: {
    },
    methods: {
      handle (val) {
        this.value = val
      },
      handle2 (val) {
        this.value2 = val
      }
    }
  }
</script>

<style lang="stylus">
  .example
    text-align center
    background rgba(0,0,0,0.05)
    border-radius 4px;
    margin-bottom 20px
    padding 30px 50px
    margin 20px 0
</style>
