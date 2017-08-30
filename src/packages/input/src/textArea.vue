<template lang="pug">
  template()
    input(
    ref="input",
    :type="type",
    :class="inputClasses",
    :placeholder="placeholder",
    :disabled="disabled",
    :maxlength="maxlength",
    :readonly="readonly",
    :name="name",
    :value=""
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
      className: String
    },

    computed: {

    }
  }
</script>
