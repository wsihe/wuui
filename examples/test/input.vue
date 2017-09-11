<template lang="pug">
  .page
    h2 Input
    .demo-content
      wu-input(placeholder="large" size="large")
      wu-input(placeholder="default")
      wu-input(placeholder="small" size="small")
    .demo-content
      wu-input(v-model="input")
        template(slot="addonBefore") http://
        template(slot="addonAfter") .com
      wu-input
        template(slot="addonAfter") .com
    .demo-content
      wu-textarea
    .demo-content
      wu-textarea(v-model="input2")
    .demo-content
      wu-textarea(v-model="input3" autosize)
    .demo-content
      wu-textarea(v-model="input3", :autosize="{ minRows: 2, maxRows: 4}")
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
