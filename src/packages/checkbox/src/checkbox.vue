<template lang="pug">
  label.wu-checkbox-wrapper(:class="wrapperClass")
    span.wu-checkbox(:class="checkboxClass")
      input.wu-checkbox-input(
        type="checkbox",
        :disabled="disabled",
        :value="currentValue"
      )
      span.wu-checkbox-inner
    span
      slot {{label}}
</template>

<script>
  const prefixCls = 'wu-checkbox'
  export default {
    name: 'WuCheckbox',

    componentName: 'WuCheckbox',

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
      checkboxClass () {
        return {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled
        }
      }
    }
  }
</script>
