
const prefixCls = 'wu-row'

export default {
  name: 'WuRow',

  componentName: 'WuRow',

  props: {
    type: String,
    align: {
      type: String,
      default: 'top'
    },
    justify: {
      type: String,
      default: 'start'
    },
    className: String,
    gutter: {
      type: Number,
      default: 0
    }
  },

  computed: {
    classes () {
      return {
        [`${prefixCls}`]: !this.type,
        [`${prefixCls}-${this.type}`]: this.type,
        [`${prefixCls}-${this.type}-${this.justify}`]: this.type && this.justify,
        [`${prefixCls}-${this.type}-${this.align}`]: this.type && this.align,
        [`${this.className}`]: !!this.className
      }
    },
    style () {
      const rowStyle = this.gutter > 0 ? { marginLeft: `${this.gutter / -2}px`, marginRight: `${this.gutter / -2}px` } : {}
      return rowStyle
    }
  },

  render (h) {
    const data = {
      class: this.classes,
      style: this.style
    }
    return (
      <div {...data}>{this.$slots.default}</div>
    )
  }
}
