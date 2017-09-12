<template lang="pug">
  .wu-radio-group(:class="groupClass")
    slot
</template>

<script>
  const prefixCls = 'wu-radio-group'
  export default {
    name: 'WuRadioGroup',

    componentName: 'WuRadioGroup',

    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        isGroup: true,
        currentValue: this.value
      }
    },

    computed: {
      groupClass () {
        return {
          [`${prefixCls}-${this.size}`]: !!this.size
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
