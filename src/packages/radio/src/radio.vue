<template lang="pug">
  label.wu-radio-wrapper(:class="wrapperClass")
    span(:class="radioClass")
      input.wu-radio-input(
        type="radio",
        :disabled="disabled",
        :value="currentValue"
      )
      span.wu-radio-inner
    slot {{label}}
</template>

<script>
  const prefixCls = 'wu-radio'
  export default {
    name: 'WuRadio',

    componentName: 'WuRadio',

    props: {
      value: {
        type: Boolean,
        default: false
      },
      label: {
        type: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        currentValue: this.value,
        group: false
      }
    },

    computed: {
      wrapperClass () {
        return {
          [`${prefixCls}-wrapper-checked`]: this.currentValue,
          [`${prefixCls}-wrapper-disabled`]: this.disabled
        }
      },
      radioClass () {
        return {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled
        }
      }
    }
  }
</script>
