<template lang="pug">
  wu-popover(
    ref="popover",
    trigger="click",
    :placement="placement",
    :enterable="enterable",
    :openDelay="openDelay",
    :popperOptions="popperOptions",
    :disabled="disabled"
  )
    slot
    div(slot="confirm")
      .wu-popover-inner-content
        .wu-popover-message
          icon(type="exclamation-circle")
          .wu-popover-message-title
            slot(name="title") {{title}}
        .wu-popover-buttons
          wu-button(size="small", @click="handleCancelClick") {{cancelText}}
          wu-button(type="primary" size="small", @click="handleOkClick") {{okText}}
</template>

<script>
  import WuButton from '../../button/src/button'
  import Icon from '../../icon/src/icon'
  import WuPopover from '../../popover/src/popover'

//  const prefixCls = 'wu-popover'
  export default {
    name: 'WuPopconfirm',

    componentName: 'WuPopconfirm',

    components: {
      WuPopover,
      Icon,
      WuButton
    },

    props: {
      title: String,
      okText: {
        type: String,
        default: '确认'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      placement: {
        type: String,
        default: 'top'
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
      }
    },

    methods: {
      handleOkClick (e) {
        this.$emit('on-confirm', e)
        this.$refs.popover.showPopper = false
      },
      handleCancelClick (e) {
        this.$emit('on-cancel', e)
        this.$refs.popover.showPopper = false
      }
    }
  }
</script>
