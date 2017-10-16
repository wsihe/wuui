<template lang="pug">
  .wu-time-picker-panel-inner
    .wu-time-picker-panel-input-wrap
      input.wu-time-picker-panel-input(v-model="defaultOpenValue")
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
    let value = option
//    if (option < 10) {
//      value = `0${option}`
//    }
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

  const defaultOpenValue = moment()

  export default {

    components: { TimeSelect },

    props: {
      value: Object,
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
        defaultOpenValue: moment(),
//        defaultValue: this.value || this.defaultOpenValue,
        hourOptions: [],
        minuteOptions: [],
        secondOptions: [],
        hour: defaultOpenValue.hour(),
        minute: defaultOpenValue.minute(),
        second: defaultOpenValue.second()
      }
    },

    computed: {
    },

    methods: {
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
