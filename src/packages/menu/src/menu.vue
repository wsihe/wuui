<template lang="pug">
  ul.wu-menu(:class="menuCls")
    slot
</template>

<script>
  const prefixCls = 'wu-menu'
  export default {
    name: 'WuMenu',

    componentName: 'WuMenu',

    props: {
      mode: {
        type: String,
        default: 'inline'
      },
      theme: {
        type: String,
        default: 'light'
      },
      inlineIndent: {
        type: Number,
        default: 24
      },
      selectedName: [String, Number],
      openNames: Array,
      accordion: Boolean,
      inlineCollapsed: Boolean,
      expand: Boolean,
      shadow: Boolean
    },

    data () {
      return {
        level: 1,
        selected: this.selectedName,
        openGroup: this.openNames ? this.openNames.slice(0) : [],
        submenuNames: [],
        items: []
      }
    },

    computed: {
      menuCls () {
        return {
          [`${prefixCls}-root`]: !this.shadow,
          [`${prefixCls}-vertical`]: this.inlineCollapsed,
          [`${prefixCls}-${this.mode}`]: !!this.mode && !this.inlineCollapsed,
          [`${prefixCls}-${this.theme}`]: !!this.theme,
          [`${prefixCls}-inline-collapsed`]: this.inlineCollapsed
        }
      }
    },

    methods: {
      handleClickItem (item) {
        let name = item.name
        this.selected = name
        this.$emit('on-click', name)
      },
      handleClickSubmenu (item) {
        let {submenu, depth} = item
        if (this.accordion && !depth) {
          let name = (this.openGroup[0] || this.openGroup[0] === 0) &&
          this.openGroup[0] === submenu.name
            ? '' : submenu.name
          this.setActiveSubmenu(name)
        } else {
          let openGroup = this.openGroup.slice(0)
          let index = openGroup.indexOf(submenu.name)
          if (index > -1) {
            openGroup.splice(index, 1)
          } else {
            openGroup.push(submenu.name)
          }
          this.setActiveSubmenu(openGroup)
        }
      },
      setActiveSubmenu (openGroup) {
        openGroup = [].concat(openGroup)
        this.openGroup = openGroup
        this.$emit('on-open-change', openGroup)
      },
      removeActiveSubmenu (name) {
        this.openGroup.splice(this.openGroup.indexOf(name), 1)
      },
      addSubmenu (submenu) {
        this.submenuNames.push(submenu.name)
      },
      addItem (item) {
        this.items.push(item)
      },
      initDefaultNames () {
        if (this.expand) {
          this.$nextTick(() => {
            this.openGroup = this.submenuNames
          })
        }
      }
    },

    created () {
      this.initDefaultNames()
      this.$on('submenu-click', this.handleClickSubmenu)
      this.$on('item-click', this.handleClickItem)
    }
  }
</script>
