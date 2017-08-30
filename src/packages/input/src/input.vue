<template lang="pug">
  span(:class="[prefixCls + '-group-wrapper']")
    span(:class="wrapperClasses")
      span(:class="[prefixCls + '-group-addon']" v-if="$slots.addonBefore")
        slot(name="addonBefore")
      input(
        ref="input",
        :type="type",
        :class="inputClasses",
        :placeholder="placeholder",
        :disabled="disabled",
        :maxlength="maxlength",
        :readonly="readonly",
        :name="name",
        :value="currentValue",
        @input="handleInput",
        @focus="handleFocus",
        @blur="handleBlur"
      )
      slot(name="icon" v-if="icon")
        icon(type="icon")
      span(:class="[prefixCls + '-group-addon']" v-if="$slots.addonAfter")
        slot(name="addonAfter")
</template>

<script>
  import Icon from '../../icon'
  const prefixCls = 'wu-input'

  export default {
    name: 'WuInput',

    componentName: 'WuInput',

    components: {Icon},

    props: {
      type: {
        type: String,
        default: 'text'
      },
      size: {
        type: String,
        default: 'default'
      },
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
      className: String,
      name: String,
      maxlength: Number,
      icon: String
    },

    data () {
      return {
        currentValue: this.value,
        prefixCls: prefixCls,
        prefix: true,
        suffix: true
      }
    },

    computed: {
      wrapperClasses () {
        const wrapperClassName = `${prefixCls}-group`
        return {
          [`${prefixCls}-wrapper`]: true,
          [wrapperClassName]: (this.addonBefore || this.addonAfter)
        }
      },
      inputClasses () {
        return this.getInputClassName()
      },
      addonBefore () {
        return this.$slots.addonBefore !== undefined
      },
      addonAfter () {
        return this.$slots.addonAfter !== undefined
      }
    },

    watch: {
      value (newVal, oldVal) {
        this.setCurrentValue(newVal)
      }
    },

    methods: {
      getInputClassName () {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-sm`]: this.size === 'small',
          [`${prefixCls}-lg`]: this.size === 'large',
          [`${prefixCls}-disabled`]: this.disabled
        }
      },

      setCurrentValue (value) {
        if (value === this.currentValue) return
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
    }
  }
</script>
