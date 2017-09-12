<template lang="pug">
  li.wu-select-dropdown-menu-item-group
    .wu-select-dropdown-menu-item-group-title {{label}}
    ul.wu-select-dropdown-menu-item-group-list
      slot
</template>

<script>
//  const prefixCls = 'wu-select-dropdown-menu-item'
  export default {
    name: 'WuOptionGroup',

    componentName: 'WuOptionGroup',

    props: {
      label: {
        type: String,
        default: ''
      }
    },

    computed: {
    }
  }
</script>
