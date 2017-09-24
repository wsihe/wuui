<template lang="pug">
  .wu-tooltip-wrap
    slot
    .wu-tooltip(:class="tooltipCls", ref="popper", v-show="showPopper")
      .wu-tooltip-content
        .wu-tooltip-arrow
        .wu-tooltip-inner
          slot(name="content") {{content}}
</template>

<script>
  import Popper from 'wuui/mixins/popper'

  const prefixCls = 'wu-tooltip'
  export default {
    name: 'WuTooltip',

    componentName: 'WuTooltip',

    mixins: [Popper],

    props: {
      content: [String, Number],
      trigger: {
        type: String,
        default: 'hover'
      },
      enterable: {
        type: Boolean,
        default: true
      },
      openDelay: {
        type: Number,
        default: 0
      },
      popperOptions: {
        default () {
          return {
            boundariesPadding: 10,
            gpuAcceleration: false
          }
        }
      }
    },

    data () {
      return {
        timeout: null
      }
    },

    computed: {
      tooltipCls () {
        return {
          [`${prefixCls}-placement-${this.placement}`]: !!this.placement
        }
      }
    },

    methods: {
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.showPopper = true
        })
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.showPopper = false
        })
      },
      toggleClick () {
        if (this.disabled) return
        this.showPopper = !this.showPopper
      },
      initEvent () {
        let {enterable, trigger, show, hide, toggleClick} = this
        let triggerElm = this.$el

        if (trigger === 'hover') {
          triggerElm.addEventListener('mouseenter', show)
          triggerElm.addEventListener('mouseleave', hide)

          if (enterable) {
            let popperElm = this.$refs.popper
            popperElm.addEventListener('mouseenter', show)
            popperElm.addEventListener('mouseleave', hide)
          }
        } else if (trigger === 'click') {
          triggerElm.addEventListener('click', toggleClick)
        }
      }
    },

    mounted () {
      this.referenceElm = this.$el
      this.initEvent()
    }
  }
</script>
