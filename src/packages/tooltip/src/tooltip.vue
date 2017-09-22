<template lang="pug">
  div
    slot
</template>

<script>
  //  const prefixCls = 'wu-menu-item-group'
  export default {
    name: 'WuTooltip',

    componentName: 'WuTooltip',

    props: {
    },

    data () {
      return {
        isGroup: true
      }
    }
  }
</script>
