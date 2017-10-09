<template lang="pug">
  div(v-show="visible")
    .wu-modal-mask
    .wu-modal-wrap(@click="handleWrapClick")
      .wu-modal(:style="modalStyle")
        .wu-modal-content
          button.wu-modal-close(@click="visible = false")
            span.wu-modal-close-x
          .wu-modal-header
            .wu-modal-title {{title}}
          .wu-modal-body
            slot
          .wu-modal-footer
            slot(name="footer")
              wu-button(size="large", @click="handleCancelClick") {{cancelText}}
              wu-button(type="primary", size="large", @click="handleOkClick") {{okText}}
</template>

<script>
  import WuButton from '../../button/src/button'
//  const prefixCls = 'wu-modal'
  export default {
    components: {WuButton},
    name: 'WuModal',

    componentName: 'WuModal',

    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: String,
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确定'
      },
      width: {
        type: [String, Number],
        default: 520
      },
      maskClosable: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        visible: this.value
      }
    },

    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        this.$emit('input', val)
      }
    },

    computed: {
      modalStyle () {
        let width = parseInt(this.width)
        return {
          width: `${width}px`
        }
      }
    },

    created () {
    },

    methods: {
      handleWrapClick (e) {
        const className = e.target.getAttribute('class')
        if (className && className.indexOf('wrap') > -1) {
          this.closeModal()
        }
      },
      handleOkClick () {
        this.visible = false
        this.$emit('on-ok')
      },
      handleCancelClick () {
        this.visible = false
        this.$emit('on-cancel')
      },
      closeModal () {
        if (this.maskClosable) this.visible = false
      }
    }
  }
</script>
