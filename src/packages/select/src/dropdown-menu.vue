<template lang="pug">
  .wu-select-dropdown(:class="dropdownClasses", :style="{ minWidth: minWidth }")
    slot
</template>

<script>
  import Popper from 'wuui/mixins/popper'

  export default {
    name: 'WuSelectDropdown',

    componentName: 'WuSelectDropdown',

    mixins: [Popper],

    props: {
      placement: {
        default: 'bottom-start'
      },

      boundariesPadding: {
        default: 0
      },

      popperOptions: {
        default () {
          return {
            forceAbsolute: true,
            gpuAcceleration: false
          }
        }
      }
    },

    data () {
      return {
        minWidth: ''
      }
    },

    computed: {
      dropdownClasses () {
        return this.$parent.popperClass
      }
    },

    watch: {
      '$parent.selectWidth' () {
        this.minWidth = this.$parent.$refs.reference.clientWidth + 2 + 'px'
      }
    },

    mounted () {
      this.referenceElm = this.$parent.$refs.reference
      this.$parent.popperElm = this.popperElm = this.$el
      this.$on('updatePopper', () => {
        if (this.$parent.visible) this.updatePopper()
      })
      this.$on('destroyPopper', this.destroyPopper)
    }
  }
</script>
