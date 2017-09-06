<template lang="pug">
  .wu-collapse
    slot
</template>
<script>
  export default {
    name: 'WuCollapse',

    componentName: 'WuCollapse',

    props: {
      accordion: Boolean,
      value: {
        type: [Array, String, Number],
        default () {
          return []
        }
      }
    },

    data () {
    },

    watch: {
    },

    methods: {
    },

    created () {
    }
  }
</script>
