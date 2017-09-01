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
      className: String,
      size: {
        type: String,
        default: ''
      }
    },

    computed: {
      groupClass () {
        return {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${this.className}`]: !!this.className
        }
      }
    }
  }
</script>
