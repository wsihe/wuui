<template lang="pug">
  .wu-menu-submenu(:class="submenuCls")
    .wu-menu-submenu-title
      span
        slot(name="title")
    ul.wu-menu.wu-menu-sub(:class="menuCls")
      slot
</template>

<script>
  const prefixCls = 'wu-menu-submenu'
  export default {
    name: 'WuSubmenu',

    componentName: 'WuSubmenu',

    props: {
    },

    data () {
      return {
        mode: this.$parent.mode
      }
    },

    computed: {
      submenuCls () {
        return {
          [`${prefixCls}-${this.mode}`]: !!this.mode,
          [`${prefixCls}-open`]: true
        }
      },
      menuCls () {
        let subMode
        if (this.mode === 'inline') {
          subMode = this.mode
        } else {
          subMode = 'vertical'
        }
        return {
          [`wu-menu-${subMode}`]: true
        }
      }
    }
  }
</script>
