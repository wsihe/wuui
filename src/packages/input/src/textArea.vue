<template lang="pug">
  textarea(
    :class="inputClasses",
    :style="textareaStyle",
    :placeholder="placeholder",
    :disabled="disabled",
    :readonly="readonly",
    :name="name",
    :value="currentValue",
    @input="handleInput",
    @focus="handleFocus",
    @blur="handleBlur"
  )
</template>

<script>
  import calcTextareaHeight from './calcTextareaHeight'

  const prefixCls = 'wu-input'

  export default {
    name: 'WuTextarea',

    componentName: 'WuTextarea',

    props: {
      disabled: Boolean,
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      name: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      resize: String
    },

    data () {
      return {
        currentValue: this.value,
        prefixCls: prefixCls,
        textareaCalcStyle: {}
      }
    },

    computed: {
      inputClasses () {
        return this.getInputClassName()
      },
      textareaStyle () {
        return Object.assign({}, this.textareaCalcStyle, { resize: this.resize })
      }
    },

    watch: {
      value (val) {
        this.setCurrentValue(val)
      }
    },

    methods: {
      getInputClassName () {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-disabled`]: this.disabled
        }
      },

      resizeTextarea () {
        if (this.$isServer) return
        var { autosize } = this
        if (!autosize) return
        const minRows = autosize.minRows
        const maxRows = autosize.maxRows

        this.textareaCalcStyle = calcTextareaHeight(this.$el, minRows, maxRows)
      },

      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.$nextTick(_ => {
          this.resizeTextarea()
        })
        this.currentValue = value
      },

      handleBlur (event) {
        this.$emit('blur', event)
      },

      handleInput (event) {
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
        this.$emit('change', value)
      },

      handleFocus (event) {
        this.$emit('focus', event)
      }
    },

    mounted () {
      this.resizeTextarea()
    }
  }
</script>
