<template lang="pug">
  label.wu-radio-button-wrapper(:class="wrapperClass")
    span.wu-radio-button(:class="radioClass")
      input.wu-radio-button-input(
        type="radio",
        :disabled="disabled",
        :checked="currentValue",
        @change="change"
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

    computed: {
      isGroup () {
        let parent = this.$parent
        if (parent && parent.isGroup) {
          this._radioGroup = parent
          return true
        }
        return false
      },
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
      },
      currentValue () {
        let value
        if (this.isGroup) {
          value = this._radioGroup.currentValue === this.label
        } else {
          value = this.value
        }
        return value
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
      }
    },

    methods: {
      change (event) {
        if (this.disabled) return
        const checked = event.target.checked
        this.currentValue = checked
        if (!this.isGroup) {
          this.$emit('on-change', checked)
          this.$emit('input', checked)
        } else {
          this._radioGroup.change(this)
        }
      }
    }
  }
</script>
