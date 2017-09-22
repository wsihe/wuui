<template lang="pug">
  div
    slot
</template>

<script>
  //  const prefixCls = 'wu-menu-item-group'
  export default {
    name: 'WuPopover',

    componentName: 'WuPopover',

    props: {
    },

    data () {
      return {
        isGroup: true
      }
    }
  }
</script>
