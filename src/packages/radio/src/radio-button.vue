<template lang="pug">
  label.wu-radio-button-wrapper(:class="wrapperClass")
    span.wu-radio-button(:class="radioClass")
      input.wu-radio-button-input(
      type="radio",
      :disabled="disabled",
      :value="currentValue"
      )
      span.wu-radio-button-inner
    span
      slot {{label}}
</template>

<script>
  const prefixCls = 'wu-radio-button'
  export default {
    name: 'WuRadioButton',

    componentName: 'WuRadioButton',

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
