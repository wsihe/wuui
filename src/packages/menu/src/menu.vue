<template lang="pug">
  ul.wu-menu(:class="menuCls")
    slot
</template>

<script>
  const prefixCls = 'wu-menu'
  export default {
    name: 'WuMenu',

    componentName: 'WuMenu',

    props: {
      mode: {
        type: String,
        default: 'vertical'
      },
      theme: {
        type: String,
        default: 'light'
      },
      name: String
    },

    data () {
      return {
      }
    },

    computed: {
      menuCls () {
        return {
          [`${prefixCls}-${this.mode}`]: !!this.mode,
          [`${prefixCls}-${this.theme}`]: !!this.theme
        }
      }
    }
  }
</script>
