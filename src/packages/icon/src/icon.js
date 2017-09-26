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

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },

  render (h) {
    return (
      <i class={this.classes} on-click={this.handleClick}></i>
    )
  }
}

