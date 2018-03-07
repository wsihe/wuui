<template lang="pug">
  .wu-tabs-tabpane(v-show="show")
    slot
</template>

<script>
  export default {
    name: 'WuTabPane',
    props: {
      name: {
        type: String
      },
      label: {
        type: [String, Function],
        default: ''
      },
      icon: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: null
      },
      isAfter: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        show: true,
        currentName: this.name
      }
    },
    methods: {
      updateNav () {
        this.$parent.updateNav()
      }
    },
    watch: {
      name (val) {
        this.currentName = val
        this.updateNav()
      },
      label () {
        this.updateNav()
      },
      icon () {
        this.updateNav()
      },
      disabled () {
        this.updateNav()
      }
    },
    mounted () {
      this.updateNav()
    }
  }
</script>
