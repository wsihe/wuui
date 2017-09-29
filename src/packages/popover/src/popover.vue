<template lang="pug">
  .wu-popover-wrap(v-clickoutside="handleClose")
    slot
    .wu-popover(ref="popper", v-show="showPopper")
      .wu-popover-content
        .wu-popover-arrow
        .wu-popover-inner
          div(v-if="!$slots.confirm")
            .wu-popover-title {{title}}
            .wu-popover-inner-content
              slot(name="content") {{content}}
          slot(name="confirm" v-if="$slots.confirm")
</template>

<script>
  import clickoutside from 'wuui/directives/clickoutside'
  import Popper from 'wuui/mixins/popper'

//  const prefixCls = 'wu-popover'
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
        default: 10
      },
      closeDelay: {
        type: Number,
        default: 10
      },
      disabled: Boolean,
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

    methods: {
      handleClose (e) {
        let el = e.target
        let popperElm = this.$refs.popper
        if (this.trigger !== 'click' || (popperElm && popperElm.contains(el))) {
          return false
        }
        this.hide()
      },
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.showPopper = true
        }, this.openDelay)
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.showPopper = false
        }, this.closeDelay)
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
