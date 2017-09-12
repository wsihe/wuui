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
      value: {},
      size: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        isGroup: true,
        actives: [].concat(this.value)
      }
    },

    computed: {
      groupClass () {
        return {
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      }
    },

    methods: {
      change (data) {
        let list = this.actives
        let value = data.label
        let index = list.indexOf(value)
        if (index < 0) {
          list.push(value)
        } else {
          list.splice(index, 1)
        }
        this.setActive()
      },
      setActive () {
        this.$emit('input', this.actives)
        this.$emit('on-change', this.actives)
      }
    }
  }
</script>
