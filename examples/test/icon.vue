<template lang="pug">
  .page
    h2 Icon
    .demo-content
      icon(type="link", :style="{ color: '#00a0e9', fontSize: '32px'}")
      icon(type="loading", :style="{ color: '#00a0e9', fontSize: '32px'}")
    .demo-content
      icon(type="github", class="icon-class")
      icon(type="check", class="icon-class")
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
  .icon-class
    font-size 32px
</style>
