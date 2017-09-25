<template lang="pug">
  .page
    h2 Popover
    .demo-content
      wu-popover(title="title" content="popover text")
        wu-button Hover me
    .demo-content
      wu-popover(title="title" placement="top")
        span(slot="content") popover text
        wu-button Hover me
    .demo-content
      wu-popover(title="title" placement="top" trigger="click")
        span(slot="content") popover text
        wu-button Click me
</template>

<script>
  export default {
    data () {
      return {
        input: ''
      }
    },
    methods: {
    }
  }
</script>x
