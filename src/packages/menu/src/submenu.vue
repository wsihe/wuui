<template lang="pug">
  .wu-menu-submenu(:class="submenuCls")
    .wu-menu-submenu-title(ref="trigger", :style="style")
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
        mode: this.$parent.mode,
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
      submenuCls () {
        return {
          [`${prefixCls}-${this.mode}`]: !!this.mode,
          [`${prefixCls}-open`]: this.visible,
          [`${prefixCls}-selected`]: this.selected
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
      },

      inlineIndent () {
        return this.$parent.inlineIndent
      },

      level () {
        return this.$parent.level + 1
      },

      style () {
        let paddingLeft
        if (this.mode !== 'inline') {
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
      }
    },

    methods: {
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.setActiveSubmenu(this.name)
        }, 300)
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.removeActiveSubmenu(this.name)
        }, 300)
      },
      initEvent () {
        let { mode, show, hide, toggleClick } = this
        let triggerElm = mode === 'horizontal'
          ? this.$el
          : this.$refs.trigger
        if (mode === 'horizontal') {
          triggerElm.addEventListener('mouseenter', show)
          triggerElm.addEventListener('mouseleave', hide)

          let itemElm = this.$slots.default.elm

          if (!itemElm) return

          itemElm.addEventListener('mouseenter', show)
          itemElm.addEventListener('mouseleave', hide)
        } else {
          triggerElm.addEventListener('click', toggleClick)
        }
      },
      toggleClick () {
        if (this.disabled) return
        this.dispatch('WuMenu', 'submenu-click', this)
      },
      addItem (item) {
        this.items.push(item)
      }
    },

    created () {
      this.rootMenu.addSubmenu(this)
    },

    mounted () {
      this.initEvent()
    }
  }
</script>
