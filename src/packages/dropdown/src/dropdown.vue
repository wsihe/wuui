<template lang="pug">
  .wu-dropdown-wrapper(v-clickoutside="handleClose")
    .wu-dropdown-trigger()
      slot
    slot(name="dropdown")
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  import clickoutside from 'wuui/directives/clickoutside'
  //  const prefixCls = 'wu-dropdown'
  export default {
    name: 'WuDropdown',

    componentName: 'WuDropdown',

    directives: {clickoutside},

    mixins: [Emitter],

    components: {
    },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      placement: {
        type: String,
        default: 'bottom-end'
      },
      splitButton: Boolean
    },

    data () {
      return {
        timeout: null,
        visible: false
      }
    },

    computed: {
    },

    watch: {
      visible (val) {
        if (val) {
          this.broadcast('WuDropdownMenu', 'updatePopper')
        } else {
          this.broadcast('WuDropdownMenu', 'destroyPopper')
        }
      }
    },

    methods: {
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = true
        }, 250)
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = false
        }, 150)
      },
      initEvent () {
        let { trigger, show, hide, toggleClick, splitButton } = this
        let triggerElm = splitButton
          ? this.$refs.trigger.$el
          : this.$slots.default[0].elm

        if (trigger === 'hover') {
          triggerElm.addEventListener('mouseenter', show)
          triggerElm.addEventListener('mouseleave', hide)

          let dropdownElm = this.$slots.dropdown[0].elm

          dropdownElm.addEventListener('mouseenter', show)
          dropdownElm.addEventListener('mouseleave', hide)
        } else if (trigger === 'click') {
          triggerElm.addEventListener('click', toggleClick)
        }
      },
      toggleClick () {
        if (this.disabled) {
          return false
        }
        this.visible = !this.visible
      },
      handleClose () {
        this.visible = false
      },
      handleItemClick (val) {
        this.$emit('on-item-click', val)
      }
    },

    created () {
    },

    mounted () {
      this.initEvent()
      this.$on('handleItemClick', this.handleItemClick)
    }
  }
</script>
