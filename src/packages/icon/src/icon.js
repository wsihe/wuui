const prefixCls = 'wu-icon'

export default {
  name: 'Icon',

  componentName: 'Icon',

  props: {
    type: String,
    spin: Boolean,
    styles: Object
  },

  computed: {
    classes () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-spin`]: !!this.spin || this.type === 'loading',
        [`${prefixCls}-${this.type}`]: true
      }
    }
  },

  render (h) {
    return (
      <i class={this.classes}></i>
    )
  }
}

