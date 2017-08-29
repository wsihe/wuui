<template lang="pug">
  .page
    .demo-content
      wu-button(type="primary") Primary
      wu-button Default
      wu-button(type="dashed") dashed
      wu-button(type="danger") danger
    .demo-content
      wu-button(type="primary" shape="circle" icon="search")
      wu-button(type="primary" icon="search") search
      wu-button(icon="search") search
    .demo-content
      wu-button(type="primary" size="small" loading) search
    .demo-content
      wu-button-group(size="large")
        wu-button Large
        wu-button default
        wu-button small
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
</style>
