<template lang="pug">
  .wu-menu-submenu(:class="submenuCls")
    .wu-menu-submenu-title(ref="trigger")
      span
        slot(name="title")
    ul.wu-menu.wu-menu-sub(:class="menuCls" v-show="visible")
      slot
</template>

<script>
  const prefixCls = 'wu-menu-submenu'
  export default {
    name: 'WuSubmenu',

    componentName: 'WuSubmenu',

    props: {
      disabled: Boolean
    },

    data () {
      return {
        timeout: null,
        mode: this.$parent.mode,
        visible: false
      }
    },

    computed: {
      submenuCls () {
        return {
          [`${prefixCls}-${this.mode}`]: !!this.mode,
          [`${prefixCls}-open`]: this.visible
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
    },

    methods: {
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = true
        }, 300)
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = false
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
        this.visible = !this.visible
      }
    },
    mounted () {
      this.initEvent()
    }
  }
</script>
