<template lang="pug">
  li.wu-dropdown-menu-item(
    unselectable="unselectable",
    :class="itemClasses",
    @click.stop="handleClick"
  )
    slot
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  const prefixCls = 'wu-dropdown-menu-item'
  export default {
    mixins: [Emitter],

    name: 'WuDropdownItem',

    componentName: 'WuDropdownItem',

    props: {
      name: {
        typr: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      divider: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      itemClasses () {
        return {
          [`${prefixCls}-selected`]: this.selected,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-divider`]: this.divider
        }
      }
    },

    methods: {
      handleClick () {
        if (!this.disabled) {
          this.dispatch('WuDropdown', 'handleItemClick', this)
        }
      }
    }
  }
</script>
