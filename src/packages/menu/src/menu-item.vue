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
        selected: false
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
        this.selected = true
        this.dispatch('wuMenu', 'handle-item-click', this)
      }
    }
  }
</script>
