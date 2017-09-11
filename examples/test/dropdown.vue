<template lang="pug">
  .page
    h2 Dropdown
    .demo-content
      wu-dropdown
        a.wu-dropdown-link Hover me
          icon(type="down")
        wu-dropdown-menu(slot="dropdown")
          wu-dropdown-item menu item 1
          wu-dropdown-item menu item 2
          wu-dropdown-item menu item 3
    .demo-content
      wu-dropdown(@on-item-click="handleClick")
        a.wu-dropdown-link Hover me
          icon(type="down")
        wu-dropdown-menu(slot="dropdown")
          wu-dropdown-item menu item 1
          wu-dropdown-item menu item 2
          wu-dropdown-item menu item 3
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
      handleClick () {
        console.log('on-item-click')
      }
    }
  }
</script>

<style lang="stylus">
</style>

