<template lang="pug">
  .wu-time-picker-panel-inner
    .wu-time-picker-panel-input-wrap
      input.wu-time-picker-panel-input()
      .wu-time-picker-panel-clear-btn(title="clear")
    .wu-time-picker-panel-combobox
      time-select(:options="hourOptions" v-model="hour")
      time-select(:options="minuteOptions" v-model="minute")
      time-select(:options="secondOptions"  v-model="second")
</template>

<script>
  import moment from 'moment'
  import TimeSelect from './time-select.vue'

  const formatOption = (option, disabledOptions) => {
    let value = `${option}`
    if (option < 10) {
      value = `0${option}`
    }
    let disabled = false
    if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
      disabled = true
    }
    return {
      value,
      disabled
    }
  }

  const generateOptions = function (length, disabledOptions, hideDisabledOptions) {
    const arr = []
    for (let value = 0; value < length; value++) {
      if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
        let option = formatOption(value, disabledOptions)
        arr.push(option)
      }
    }
    return arr
  }

  export default {

    components: { TimeSelect },

    props: {
      showHour: {
        type: Boolean,
        default: true
      },
      showMinute: {
        type: Boolean,
        default: true
      },
      showSecond: {
        type: Boolean,
        default: true
      },
      format: {
        type: Function
      }
    },

    data () {
      return {
        defaultValue: moment(),
        hourOptions: [],
        minuteOptions: [],
        secondOptions: [],
        hour: '01',
        minute: '20',
        second: '30'
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
      },

      getFormat () {
        const {format, showHour, showMinute, showSecond} = this
        if (format) {
          return format
        }

        return [
          showHour ? 'HH' : '',
          showMinute ? 'mm' : '',
          showSecond ? 'ss' : ''
        ].filter(item => !!item).join(':')
      }
    },

    created () {
      this.hourOptions = generateOptions(24)
      this.minuteOptions = generateOptions(60)
      this.secondOptions = generateOptions(60)
    }
  }
</script>
