<template lang="pug">
  li.wu-menu-item(:class="itemCls", @click="handleClick", :style="style")
    slot
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  const prefixCls = 'wu-menu-item'
  export default {
    name: 'WuMenuItem',

    componentName: 'WuMenuItem',

    mixins: [Emitter],

    props: {
      disabled: Boolean,
      name: String
    },

    data () {
      return {
      }
    },

    computed: {
      parent () {
        let parent = this.$parent
        while (parent.isGroup) {
          parent = parent.$parent
        }
        return parent
      },
      rootMenu () {
        let parent = this.parent
        while (parent.isSubmenu) {
          parent = parent.rootMenu
        }
        return parent
      },
      selected () {
        return this.name === this.rootMenu.selected
      },
      itemCls () {
        return {
          [`${prefixCls}-selected`]: this.selected,
          [`${prefixCls}-disabled`]: this.disabled
        }
      },
      style () {
        let paddingLeft
        if (this.parent.mode !== 'inline') {
          return
        }
        paddingLeft = this.parent.inlineIndent * this.parent.level
        return {paddingLeft: `${paddingLeft}px`}
      }
    },

    methods: {
      handleClick () {
        if (this.disabled) return
        this.dispatch('WuMenu', 'item-click', this)
      }
    },

    created () {
      this.parent.addItem(this)
    }
  }
</script>
