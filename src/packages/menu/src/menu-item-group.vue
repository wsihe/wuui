<template lang="pug">
  li.wu-menu-item-group
    .wu-menu-item-group-title
      template(v-if="!$slots.title") {{title}}
      slot(v-if="$slots.title" name="title")
    ul.wu-menu-item-group-list
      slot
</template>

<script>
//  const prefixCls = 'wu-menu-item-group'
  export default {
    name: 'WuMenuItemGroup',

    componentName: 'WuMenuItemGroup',

    props: {
    },

    data () {
      return {
        isGroup: true
      }
    }
  }
</script>
