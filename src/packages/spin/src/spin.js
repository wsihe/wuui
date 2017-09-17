const prefixCls = 'wu-spin'
export default {
  name: 'WuSpin',

  componentName: 'WuSpin',

  props: {
    value: {
      type: Boolean,
      default: true
    },
    spinning: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  computed: {
    spinCls () {
      return {
        [`${prefixCls}-sm`]: this.size === 'small',
        [`${prefixCls}-lg`]: this.size === 'large',
        [`${prefixCls}-spinning`]: this.spinning,
        [`${prefixCls}-show-text`]: !!this.tip
      }
    },
    containerCls () {
      return {
        [`${prefixCls}-blur`]: this.currentValue
      }
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
      this.change(val)
    }
  },

  render (h) {
    let nodes
    const slot = this.$slots.default || []
    const main = (
      <div
        class={[this.spinCls, 'wu-spin']}>
        <div class='wu-spin-dot'>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        {this.tip ? <div class='wu-spin-text'></div> : ''}
      </div>
    )
    if (!slot.length) {
      nodes = ([main])
    } else {
      nodes = ([
        <div class='wu-spin-nested-loading'>
          {this.currentValue ? <div>{main}</div> : ''}
          <div class={[this.containerCls, 'wu-spin-container']}>
            {slot}
          </div>
        </div>
      ])
    }
    return h('div', nodes)
  },

  methods: {
    change (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  }
}
