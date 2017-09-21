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
        default: 'vertical'
      },
      theme: {
        type: String,
        default: 'light'
      },
      inlineIndent: {
        type: Number,
        default: 24
      },
      selectedName: Array,
      openNames: Array
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
          [`${prefixCls}-${this.mode}`]: !!this.mode,
          [`${prefixCls}-${this.theme}`]: !!this.theme
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
        let openGroup = this.openGroup.slice(0)
        let index = openGroup.indexOf(item.name)
        if (index > -1) {
          openGroup.splice(index, 1)
        } else {
          openGroup.push(item.name)
        }
        this.setActiveSubmenu(openGroup)
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
        this.submenuNames.push(submenu)
      },
      addItem (item) {
        this.items.push(item)
      }
    },

    created () {
      this.$on('submenu-click', this.handleClickSubmenu)
      this.$on('item-click', this.handleClickItem)
    }
  }
</script>
