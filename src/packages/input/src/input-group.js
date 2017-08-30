const prefixCls = 'wu-input-group'

export default {
  name: 'WuInputGroup',

  componentName: 'WuInputGroup',

  props: {
    className: String,
    size: String
  },

  computed: {
    classes () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-lg`]: this.size === 'large',
        [`${prefixCls}-sm`]: this.size === 'small',
        [`${prefixCls}-compact`]: this.compact,
        [`${this.className}`]: !!this.className
      }
    }
  },

  render (h) {
    return (
      <span class={this.classes}>{this.$slots.default}</span>
    )
  }
}

