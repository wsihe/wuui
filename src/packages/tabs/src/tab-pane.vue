<template lang="pug">
  .wu-tabs-tabpane(v-show="active")
    slot
</template>

<script>
  export default {
    name: 'WuTabPane',

    componentName: 'WuTabPane',

    props: {
      tab: String,
      name: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        index: null
      }
    },

    computed: {
      active () {
        return this.$parent.activeKey === (this.name || this.index)
      }
    },

    watch: {
    },

    methods: {
    },

    created () {
    },

    mounted () {
      this.$parent.addPanes(this)
    }
  }
</script>
