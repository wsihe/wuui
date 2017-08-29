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
    },
    style () {
      let style = {}
      if (this.styles) {
        Object.keys(this.styles).forEach(prop => {
          if (prop === 'fontSize') {
            style['font-size'] = `${this.styles[prop]}px`
          }
          if (prop === 'color') {
            style['color'] = this.styles[prop]
          }
        })
      }
      return style
    }
  },

  render (h) {
    return (
      <i class={this.classes} style={this.style}></i>
    )
  }
}

