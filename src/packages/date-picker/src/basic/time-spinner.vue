<template lang="pug">
  .wu-time-picker-panel-inner
    .wu-time-picker-panel-combobox
      .wu-time-picker-panel-select(ref="hours1")
        ul
          li(v-for="hour in hourOptions", @click="scrollToSelected(hour,120)", ref="hours") {{hour}}
      .wu-time-picker-panel-select
        ul
          li.wu-time-picker-panel-select-option-selected 00
          li(v-for="minute in minuteOptions") {{minute}}
      .wu-time-picker-panel-select
        ul
          li.wu-time-picker-panel-select-option-selected 00
          li(v-for="second in secondOptions") {{second}}
</template>

<script>
  const generateOptions = function (length, disabledOptions, hideDisabledOptions) {
    const arr = []
    for (let value = 0; value < length; value++) {
      if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
        arr.push(value)
      }
    }
    return arr
  }

  const scrollTo = (element, to, duration) => {
    const requestAnimationFrame = window.requestAnimationFrame ||
      function requestAnimationFrameTimeout () {
        return setTimeout(arguments[0], 10)
      }
    // jump to target if duration zero
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
    },

    data () {
      return {
        hourOptions: [],
        minuteOptions: [],
        secondOptions: []
      }
    },

    computed: {
    },

    methods: {
      scrollToSelected (item, duration) {
        // move to selected item
        const select = this.$refs.hours1
        const list = this.$refs.hours
        if (!list) {
          return
        }
        let index = this.hourOptions.find(obj => item === obj)
        if (index < 0) {
          index = 0
        }
        const topOption = list[index]
        const to = topOption.offsetTop
        scrollTo(select, to, duration)
      }
    },

    created () {
      this.hourOptions = generateOptions(24)
      this.minuteOptions = generateOptions(60)
      this.secondOptions = generateOptions(60)
    }
  }
</script>
