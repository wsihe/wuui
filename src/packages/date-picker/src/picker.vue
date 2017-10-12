<template lang="pug">
  div
    .wu-time-picker
      input.wu-time-picker-input(ref="reference")
      span.wu-time-picker-icon
    .picker(ref="picker")
</template>

<script>
  import WuInput from '../../input/src/input'

  export default {

    components: {WuInput},

    props: {
    },

    data () {
      return {
      }
    },

    computed: {
      referenceElm () {
        return this.$refs.reference.$el
      },
      pickerEle () {
        return this.$refs.picker
      }
    },

    created () {
    }
  }
</script>
