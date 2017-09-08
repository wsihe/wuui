<template lang="pug">
  .wu-collapse-item(:class="itemCls", aria-expanded={isActive})
    .wu-collapse-header(role="tab", @click="handleHeaderClick")
      icon(type="right" class="arrow")
      | {{header}}
    .wu-collapse-content(:class="contentCls" role="tabpanel")
      .wu-collapse-content-box
        slot
</template>
<script>
  import Emitter from 'wuui/mixins/emitter'

  import Icon from '../../icon/icon'

  const prefixCls = 'wu-collapse'
  export default {

    name: 'WuCollapseItem',

    componentName: 'WuCollapseItem',

    components: {Icon},

    mixins: [Emitter],

    data () {
      return {
      }
    },

    props: {
      title: String,
      name: {
        type: [String, Number],
        default () {
          return this._uid
        }
      },
      header: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      itemCls () {
        return {
          [`${prefixCls}-item-active`]: this.isActive,
          [`${prefixCls}-item-disabled`]: this.disabled
        }
      },

      contentCls () {
        return {
          [`${prefixCls}-content-active`]: this.isActive,
          [`${prefixCls}-content-inactive`]: !this.isActive
        }
      },

      isActive () {
        let itemList = this.$parent.itemList
        return itemList.length && itemList.indexOf(this.name) > -1
      }
    },

    methods: {
      handleHeaderClick () {
        this.dispatch('WuCollapse', 'on-item-click', this)
      }
    }
  }
</script>
