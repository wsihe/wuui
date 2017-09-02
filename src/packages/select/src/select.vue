<template lang="pug">
  .wu-select(:class="classes")
    .wu-select-selection
      .wu-select-selection__rendered
        .wu-select-selection__placeholder(unselectable="unselectable" v-if="false") 输入城市
        .wu-select-selection-selected-value() 北京
      icon.wu-select-arrow(type="down")
</template>

<script>
  import Icon from '../../icon/icon'
  const prefixCls = 'wu-select'
  export default {
    components: {Icon},
    name: 'WuSelect',

    componentName: 'WuSelect',

    props: {
      className: String,
      disabled: Boolean,
      size: {
        type: String,
        default: ''
      }
    },

    computed: {
      classes () {
        return {
          [`${prefixCls}-enabled`]: true,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: !!this.disabled,
          [`${prefixCls}-allow-clear`]: !!this.disabled,
          [`${this.className}`]: !!this.className
        }
      }
    }
  }
</script>
