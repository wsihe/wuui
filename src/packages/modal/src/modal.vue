<template lang="pug">
  div
    slot
</template>

<script>
//  const prefixCls = 'wu-modal'
  export default {
    name: 'WuModal',

    componentName: 'WuModal',

    props: {
      mode: {
        type: String,
        default: 'inline'
      }
    },

    data () {
      return {
      }
    },

    computed: {
    },

    created () {
    }
  }
</script>
