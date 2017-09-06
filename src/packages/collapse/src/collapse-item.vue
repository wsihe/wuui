<template lang="pug">
  .wu-collapse-item
    slot
</template>
<script>

  export default {
    name: 'WuCollapseItem',

    componentName: 'WuCollapseItem',

    data () {
      return {
      }
    },

    props: {
      title: String,
      name: {
        type: [String, Number],
        default () {
          return this._uid
        }
      }
    },

    computed: {
    },

    watch: {
    },

    methods: {
    },

    mounted () {
    }
  }
</script>
