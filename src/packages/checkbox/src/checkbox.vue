<template lang="pug">
  label.wu-checkbox-wrapper(:class="wrapperClass")
    span.wu-checkbox(:class="checkboxClass")
      input.wu-checkbox-input(
        type="checkbox",
        :disabled="disabled",
        :checked="currentValue",
        :name="name",
        @change="change"
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
      },
      name: String
    },

    data () {
      return {
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
      checkboxClass () {
        return {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled
        }
      },
      currentValue () {
        let value
        if (this.isGroup) {
          let index = this._radioGroup.actives.indexOf(this.label)
          value = index > -1
        } else {
          value = this.value
        }
        return value
      }
    },

    watch: {
      value (val) {
        this.setCurrentValue(val)
      }
    },

    methods: {
      change (event) {
        if (this.disabled) return
        const checked = event.target.checked
        this.currentValue = checked
        if (!this.isGroup) {
          this.$emit('input', checked)
          this.$emit('on-change', checked)
        } else {
          this._radioGroup.change(this)
        }
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
      }
    }
  }
</script>
