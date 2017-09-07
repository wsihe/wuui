<template lang="pug">
  .wu-message( v-show="visible", @mouseenter="clearTimer", @mouseleave="startTimer")
    .wu-message-notice
      .wu-message-notice-content
        div(:class="customClass")
          icon(:type="iconType")
          span {{ message }}
</template>

<script type="text/babel">

  import Icon from '../../icon/icon'

  const prefixCls = 'wu-message'
  export default {

    components: {Icon},

    data () {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null
      }
    },

    computed: {
      customClass () {
        return {
          [`${prefixCls}-custom-content`]: true,
          [`${prefixCls}-${this.type}`]: !!this.type
        }
      },
      iconType () {
        let iconType = ({
          info: 'info-circle',
          success: 'check-circle',
          error: 'close-circle',
          warning: 'exclamation-circle',
          loading: 'loading'
        })[this.type]
        return iconType
      }
    },

    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },

    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },

      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },

      clearTimer () {
        clearTimeout(this.timer)
      },

      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    },

    mounted () {
      this.startTimer()
    }
  }
</script>
