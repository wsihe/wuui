<template lang="pug">
  div(:class="classes")
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
        default: 'default'
      }
    },

    computed: {
      classes () {
        let sizeCls = ''
        switch (this.size) {
          case 'large':
            sizeCls = 'lg'
            break
          case 'small':
            sizeCls = 'sm'
        }
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${sizeCls}`]: sizeCls,
          [`${this.className}`]: !!this.className
        }
      }
    }
  }
</script>
