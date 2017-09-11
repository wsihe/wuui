<template lang="pug">
  .wu-dropdown(:class="dropdownClasses" v-show="showMenu")
    ul.wu-dropdown-menu(role="menu")
      slot
</template>

<script>
  import Popper from 'wuui/mixins/popper'

  export default {
    name: 'WuDropdownMenu',

    componentName: 'WuDropdownMenu',

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
        minWidth: '',
        showMenu: false
      }
    },

    computed: {
      dropdownClasses () {
        return this.$parent.popperClass
      }
    },

    watch: {
      '$parent.placement': {
        immediate: true,
        handler (val) {
          this.currentPlacement = `${val}`
        }
      },
      '$parent.visible': {
        immediate: true,
        handler (val) {
          this.showMenu = val
        }
      }
    },

    mounted () {
      this.$parent.popperElm = this.popperElm = this.$el
      this.referenceElm = this.$parent.$el
      this.$on('updatePopper', () => {
        if (this.$parent.visible) this.updatePopper()
      })
      this.$on('destroyPopper', this.destroyPopper)
    }
  }
</script>
