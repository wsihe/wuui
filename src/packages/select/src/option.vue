<template lang="pug">
  li.wu-select-dropdown-menu-item(
      v-show="visible",
      unselectable="unselectable",
      :class="itemClasses",
      @click.stop="selectOptionClick"
    )
    slot  {{currentLabel}}
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'

  const prefixCls = 'wu-select-dropdown-menu-item'
  export default {
    mixins: [Emitter],

    name: 'WuOption',

    componentName: 'WuOption',

    props: {
      value: {
        typr: [String, Number],
        required: true
      },
      label: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        visible: true
      }
    },

    computed: {
      parent () {
        let parent = this.$parent
        while (!parent.isSelect) {
          parent = parent.$parent
        }
        return parent
      },

      itemSelected () {
        return this.parent.value === this.value
      },

      currentLabel () {
        return this.label || this.value
      },

      itemClasses () {
        return {
          [`${prefixCls}-selected`]: this.itemSelected,
          [`${prefixCls}-disabled`]: !!this.size,
          [`${prefixCls}-active`]: this.itemSelected
        }
      }
    },

    watch: {
    },

    methods: {
      selectOptionClick () {
        if (!this.disabled) {
          this.dispatch('WuSelect', 'handleOptionClick', this)
        }
      },
      queryChange (val) {
        const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1')
        this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel)
        if (!this.visible) {
          this.parent.childCount--
        } else {
          this.parent.childCount++
        }
      }
    },

    mounted () {
      this.$on('queryChange', this.queryChange)
      this.parent.options.push(this)
      this.parent.cachedOptions.push(this)
    }
  }
</script>
