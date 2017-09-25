<template lang="pug">
  .wu-popover-wrap(v-clickoutside="hide")
    slot
    .wu-popover(:class="tooltipCls", ref="popper", v-show="showPopper")
      .wu-popover-content
        .wu-popover-arrow
        .wu-popover-inner
          div
            .wu-popover-title {{title}}
            .wu-popover-inner-content
              slot(name="content") {{content}}
</template>

<script>
  import clickoutside from 'wuui/directives/clickoutside'
  import Popper from 'wuui/mixins/popper'

  const prefixCls = 'wu-popover'
  export default {
    name: 'WuPopover',

    componentName: 'WuPopover',

    mixins: [Popper],

    directives: {clickoutside},

    props: {
      title: String,
      content: String,
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
