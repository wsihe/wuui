<template lang="pug">
  .page
    h2 Collapse
    .demo-content
      wu-collapse
        wu-collapse-item(header="This is panel header 1")
          p Collapse-Collapse-Collapse1
        wu-collapse-item(header="This is panel header 2")
          p Collapse-Collapse-Collapse2
        wu-collapse-item(header="This is panel header 3")
          p Collapse-Collapse-Collapse3
    .demo-content
      wu-collapse(v-model="value1")
        wu-collapse-item(header="This is panel header 1")
          p Collapse-Collapse-Collapse1
        wu-collapse-item(header="This is panel header 2" name="2")
          p Collapse-Collapse-Collapse2
        wu-collapse-item(header="This is panel header 3")
          p Collapse-Collapse-Collapse3
    .demo-content
      wu-collapse(bordered)
        wu-collapse-item(header="This is panel header 1")
          p Collapse-Collapse-Collapse1
        wu-collapse-item(header="This is panel header 2")
          p Collapse-Collapse-Collapse2
        wu-collapse-item(header="This is panel header 3")
          p Collapse-Collapse-Collapse3
    .demo-content
      wu-collapse(v-model="value", bordered, accordion)
        wu-collapse-item(header="This is panel header 1", name="1")
          p Collapse-Collapse-Collapse1
        wu-collapse-item(header="This is panel header 2", name="2")
          p Collapse-Collapse-Collapse2
        wu-collapse-item(header="This is panel header 3", name="3")
          p Collapse-Collapse-Collapse3
</template>

<script>
  export default {
    data () {
      return {
        value: '1',
        value1: '2'
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
