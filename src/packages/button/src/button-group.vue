<template lang="pug">
  div.wu-btn-group(:class="classes")
    slot
</template>

<script>
const prefixCls = 'wu-btn-group'
export default {
  name: 'WuButtonGroup',

  componentName: 'WuButtonGroup',

  props: {
    className: String,
    size: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    classes () {
      let sizeCls = ''
      switch (this.size) {
        case 'large':
          sizeCls = 'lg'
          break
        case 'small':
          sizeCls = 'sm'
      }
      return {
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${this.className}`]: !!this.className
      }
    }
  }
}
</script>
