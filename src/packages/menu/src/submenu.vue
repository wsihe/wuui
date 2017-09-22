<template lang="pug">
  li.wu-menu-submenu(:class="submenuCls", @mouseenter="handleMouseenter", @mouseleave="handelMouseleave")
    .wu-menu-submenu-title(:style="style", @click="handleClick")
      span
        slot(name="title")
    ul.wu-menu.wu-menu-sub(:class="menuCls" v-show="visible")
      slot
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  const prefixCls = 'wu-menu-submenu'
  export default {
    name: 'WuSubmenu',

    componentName: 'WuSubmenu',

    mixins: [Emitter],

    props: {
      disabled: Boolean,
      name: String
    },

    data () {
      return {
        timeout: null,
        isSubmenu: true,
        items: []
      }
    },

    computed: {
      rootMenu () {
        let parent = this.$parent
        while (parent.isSubmenu) {
          parent = parent.$parent
        }
        return parent
      },
      mode () {
        return this.rootMenu.mode
      },
      inlineCollapsed () {
        return this.rootMenu.inlineCollapsed
      },
      submenuCls () {
        return {
          [`${prefixCls}-vertical`]: this.inlineCollapsed,
          [`${prefixCls}-${this.mode}`]: !!this.mode && !this.inlineCollapsed,
          [`${prefixCls}-open`]: this.visible,
          [`${prefixCls}-selected`]: this.selected
        }
      },
      menuCls () {
        let subMode
        if (this.mode === 'inline' && !this.inlineCollapsed) {
          subMode = this.mode
        } else {
          subMode = 'vertical'
        }
        return {
          [`wu-menu-${subMode}`]: true
        }
      },

      inlineIndent () {
        return this.$parent.inlineIndent
      },

      level () {
        return this.$parent.level + 1
      },

      style () {
        let paddingLeft
        if (this.mode !== 'inline' || this.inlineCollapsed) {
          return
        }
        paddingLeft = this.inlineIndent * this.$parent.level
        return {paddingLeft: `${paddingLeft}px`}
      },

      visible () {
        return this.rootMenu.openGroup.indexOf(this.name) > -1
      },

      selected () {
        let selected = false
        if (this.mode !== 'inline') {
          const name = this.items.find(item => item.selected === true)
          if (name) selected = true
        }
        return selected
      },

      isOpen () {
        return this.rootMenu.openGroup.indexOf(this.$parent.name) !== -1
      }
    },

    methods: {
      show () {
        clearTimeout(this.timeout)
        let names = []
        if (this.isOpen) {
          names = [].concat(this.name, this.$parent.name)
        } else {
          names = [].concat(this.name)
        }
        this.timeout = setTimeout(() => {
          this.rootMenu.setActiveSubmenu(names)
        }, 300)
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.removeActiveSubmenu(this.name)
        }, 300)
      },
      handleMouseenter () {
        let {mode, inlineCollapsed} = this
        if (mode !== 'inline' || inlineCollapsed) {
          this.show()
        }
      },
      handelMouseleave () {
        let {mode, inlineCollapsed} = this
        if ((mode !== 'inline' || inlineCollapsed)) {
          this.hide()
        }
      },
      handleClick () {
        let {mode, inlineCollapsed} = this
        if (mode === 'inline' && !inlineCollapsed) {
          this.toggleClick()
        }
      },
      toggleClick () {
        if (this.disabled) return
        const pram = {
          submenu: this,
          depth: this.isOpen
        }
        this.dispatch('WuMenu', 'submenu-click', pram)
      },
      addItem (item) {
        this.items.push(item)
      }
    },

    created () {
      this.rootMenu.addSubmenu(this)
    }
  }
</script>
