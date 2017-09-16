<template lang="pug">
  .wu-spin(:class="spinCls")
    .wu-spin-dot
      i
      i
      i
      i
</template>

<script>
  const prefixCls = 'wu-spin'
  export default {
    name: 'WuSpin',

    componentName: 'WuSpin',

    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      spinning: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        currentValue: this.value
      }
    },

    computed: {
      spinCls () {
        return {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-spinning`]: this.spinning
        }
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
      }
    },

    methods: {
      change (data) {
        var value = data.label
        this.currentValue = value
        this.$emit('input', value)
        this.$emit('on-change', value)
      }
    }
  }
</script>
