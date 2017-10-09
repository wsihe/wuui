<template lang="pug">
  button.wu-btn(:class="classes", :type="htmlType", @click="handleClick")
    Icon(class="" type="loading" v-if="loading")
    Icon(:type="icon" v-if="icon && !loading")
    span(v-if="$slots.default")
      slot
</template>

<script>
const prefixCls = 'wu-btn'
export default {
  name: 'WuButton',

  componentName: 'WuButton',

  props: {
    type: String,
    shape: String,
    htmlType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    icon: String,
    ghost: {
      type: Boolean,
      default: false
    },
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
        [`${prefixCls}-${this.type}`]: this.type,
        [`${prefixCls}-${this.shape}`]: this.shape,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-icon-only`]: this.icon && !this.loading,
        [`${prefixCls}-loading`]: this.loading,
        [`${prefixCls}-background-ghost`]: this.ghost
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
