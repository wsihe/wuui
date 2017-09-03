<template lang="pug">
  .wu-select-dropdown.wu-select-dropdown--single(:class="dropdownClasses", :style="{ minWidth: minWidth }")
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
      '$parent.inputWidth' () {
        this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px'
      }
    },

    mounted () {
      this.referenceElm = this.$parent.$refs.reference
      this.$parent.popperElm = this.popperElm = this.$el
      this.$on('updatePopper', () => {
//        console.log(this.$parent.$refs.reference)
        this.updatePopper()
//        if (this.$parent.visible) this.updatePopper()
      })
      this.$on('destroyPopper', this.destroyPopper)
    }
  }
</script>
