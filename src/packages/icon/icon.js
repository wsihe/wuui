const prefixCls = 'wu-icon'

export default {
  name: 'Icon',

  componentName: 'Icon',

  props: {
    type: String,
    size: [Number, String],
    color: String
  },

  computed: {
    classes () {
      return `${prefixCls} ${prefixCls}-${this.type}`
    },
    style () {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style['color'] = this.color
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

