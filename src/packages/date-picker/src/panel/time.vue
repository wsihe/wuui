<template lang="pug">
  .wu-time-picker-panel(:class="getPopupClassName", :style="{marginTop:'-30px'}")
    time-spinner
</template>

<script>
  import TimeSpinner from '../basic/time-spinner.vue'
  const prefixCls = 'wu-time-picker'
  export default {
    name: '',

    componentName: '',

    components: { TimeSpinner },

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
      popupClassName: String
    },

    data () {
      return {
        prefixCls: prefixCls
      }
    },

    computed: {
      getPopupClassName () {
        const { showHour, showMinute, showSecond, prefixCls } = this
        let popupClassName = this.popupClassName || ''
        if (!showHour || !showMinute || !showSecond) {
          popupClassName += ` ${prefixCls}-panel-narrow`
        }
        let selectColumnCount = 0
        if (showHour) {
          selectColumnCount += 1
        }
        if (showMinute) {
          selectColumnCount += 1
        }
        if (showSecond) {
          selectColumnCount += 1
        }
        popupClassName += ` ${prefixCls}-panel-column-${selectColumnCount}`
        return popupClassName
      }
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
    }
  }
</script>
