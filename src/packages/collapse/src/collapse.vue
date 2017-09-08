<template lang="pug">
  .wu-collapse(:class="collapseCls")
    slot
</template>
<script>
  const prefixCls = 'wu-collapse'
  export default {
    name: 'WuCollapse',

    componentName: 'WuCollapse',

    props: {
      value: {
        type: String,
        default: ''
      },
      bordered: {
        type: Boolean,
        default: false
      },
      accordion: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        collapseList: [],
        itemList: [].concat(this.value),
        activeKey: this.value
      }
    },

    computed: {
      collapseCls () {
        return {
          [`${prefixCls}-borderless`]: !!this.bordered
        }
      }
    },

    watch: {
      value (newVal) {
        this.itemList = [].concat(newVal)
      }
    },

    methods: {
      handleTabClick (item) {
        if (item.disabled) return
        let list = this.itemList
        if (this.accordion) {
          let name = list[0] && list[0] === item.name ? '' : item.name
          list = [].concat(name)
          this.setActiveItem(name)
        } else {
          let index = list.indexOf(item.name)
          if (index < 0) {
            list.push(item.name)
          } else {
            list.splice(index, 1)
          }
          this.setActiveItem(item.name)
        }
      },
      setActiveItem (name) {
        this.$emit('on-click', name)
        this.$emit('input', name)
        this.$emit('change', name)
      }
    },

    created () {
      this.$on('on-item-click', this.handleTabClick)
    }
  }
</script>
