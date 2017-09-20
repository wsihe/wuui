<template lang="pug">
  li.wu-menu-item-group
    .wu-menu-item-group-title
      slot(name="title")
    ul.wu-menu-item-group-list
      slot
</template>

<script>
//  const prefixCls = 'wu-menu-item-group'
  export default {
    name: 'WuItemGroup',

    componentName: 'WuItemGroup',

    props: {
    },

    data () {
      return {
        isGroup: true
      }
    }
  }
</script>
