<template lang="pug">
  .wu-checkbox-group(:class="groupClass")
    slot
</template>

<script>
  const prefixCls = 'wu-checkbox-group'
  export default {
    name: 'WuCheckboxGroup',

    componentName: 'WuCheckboxGroup',

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
