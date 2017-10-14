<template lang="pug">
  .wu-time-picker-panel-select(ref="select")
    ul
      li(:class="optionCls(time)", v-for="(time, index) in options", @click="handleClick(time)", ref="times") {{time.value}}
</template>

<script>

  const prefixCls = 'wu-time-picker-panel-select'

  const scrollTo = (element, to, duration) => {
    const requestAnimationFrame = window.requestAnimationFrame ||
      function requestAnimationFrameTimeout () {
        return setTimeout(arguments[0], 10)
      }
    if (duration <= 0) {
      element.scrollTop = to
      return
    }
    const difference = to - element.scrollTop
    const perTick = difference / duration * 10

    requestAnimationFrame(() => {
      element.scrollTop = element.scrollTop + perTick
      if (element.scrollTop === to) return
      scrollTo(element, to, duration - 10)
    })
  }

  export default {

    props: {
      options: Array,
      value: {
        type: String,
        default: '00'
      }
    },

    data () {
      return {
        selectedIndex: this.value
      }
    },

    watch: {
      value (val) {
        this.selectedIndex = val
        this.scrollToSelected(120)
      }
    },

    methods: {
      handleClick (item) {
        this.$emit('input', item.value)
        this.$emit('on-change', item)
      },
      scrollToSelected (duration) {
        const select = this.$refs.select
        const list = this.$refs.times
        if (!list) {
          return
        }
        let item = this.options.find(option => option.value === this.selectedIndex)
        let index = this.options.indexOf(item)
        if (index < 0) {
          index = 0
        }
        const topOption = list[index]
        const to = topOption.offsetTop
        scrollTo(select, to, duration)
      },
      optionCls (option) {
        return {
          [`${prefixCls}-option-selected`]: this.selectedIndex === option.value,
          [`${prefixCls}-option-disabled`]: option.disabled
        }
      }
    },

    mounted () {
      this.scrollToSelected(0)
    }
  }
</script>
