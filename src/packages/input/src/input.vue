<template lang="pug">
  input(
    ref="input",
    :type="type",
    :class="inputClasses",
    :placeholder="placeholder",
    :disabled="disabled",
    :maxlength="maxlength",
    :readonly="readonly",
    :name="name"
  )
</template>

<script>
  const prefixCls = 'wu-input'

  export default {
    name: 'WuInput',

    componentName: 'WuInput',

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
      className: String
    },

    computed: {
      inputClasses () {
        return this.getInputClassName()
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
      }
    }
  }
</script>
