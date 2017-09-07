<template lang="pug">
  span.wu-switch(:class="switchClasses", @click="toggleSwitch")
    span.wu-switch-inner
      slot(name="open" v-if="currentValue")
      slot(name="close" v-if="!currentValue")
</template>

<script>
  const prefixCls = 'wu-switch'
  export default {
    name: 'WuSwitch',

    componentName: 'WuSwitch',

    props: {
      value: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      className: String
    },

    data () {
      return {
        currentValue: this.value
      }
    },

    computed: {
      switchClasses () {
        return {
          [`${prefixCls}-small`]: this.size === 'small',
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${this.className}`]: !!this.className
        }
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
      }
    },

    methods: {
      toggleSwitch () {
        if (this.disabled) return
        this.currentValue = !this.currentValue
        this.$emit('input', this.currentValue)
        this.$emit('on-change', this.currentValue)
      }
    }
  }
</script>
