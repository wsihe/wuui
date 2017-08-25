const prefixCls = 'wu-col'

export default {
  name: 'WuCol',

  componentName: 'WuCol',

  props: {
    span: Number,
    order: Number,
    offset: Number,
    push: Number,
    pull: Number,
    className: String,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },

  computed: {
    classes () {
      const classA = {
        [`${prefixCls}-${this.span}`]: this.span !== undefined,
        [`${prefixCls}-order-${this.order}`]: this.order,
        [`${prefixCls}-offset-${this.offset}`]: this.offset,
        [`${prefixCls}-push-${this.push}`]: this.push,
        [`${prefixCls}-pull-${this.pull}`]: this.pull,
        [`${this.className}`]: !!this.className
      }
      let sizeClassObj = {};
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        let sizeProps = {}
        if (typeof this[size] === 'number') {
          sizeProps.span = this[size]
        } else if (typeof this[size] === 'object') {
          sizeProps = this[size] || {}
        }
        sizeClassObj = Object.assign(
          {},
          sizeClassObj,
          {
            [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
          }
        )
      })
      let classList = Object.assign({}, classA, sizeClassObj)
      return classList
    }
  },

  render (h) {
    return (
      <div class={this.classes}>
        {this.$slots.default}
      </div>
    )
  }
}

