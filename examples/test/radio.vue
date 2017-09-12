<template lang="pug">
  .page
    h2 Radio
    .demo-content
      wu-radio(v-model="value1", @on-change="handle") 备选项
      p {{value1}}
    .demo-content
      wu-radio-group(v-model="value2", @on-change="handle2")
        wu-radio(label="a") 男
        wu-radio(label="b") 女
        wu-radio(label="c") 其他
    .demo-content
      wu-radio-group
        wu-radio(label="男")
        wu-radio(label="女")
        wu-radio(label="其他")
    .demo-content
      wu-radio-button(v-model="value3") 备选项
    .demo-content
      wu-radio-group(size="large")
        wu-radio-button(label="a") 男
        wu-radio-button(label="b") 女
        wu-radio-button(label="c") 其他
    .demo-content
      wu-radio-group(size="small")
        wu-radio-button(label="a") 男
        wu-radio-button(label="b") 女
        wu-radio-button(label="c") 其他
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
