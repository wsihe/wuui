import Vue from 'vue'
import TimePanel from '../panel/time'
import Picker from '../picker'

export default {

  name: 'WuTimePicker',

  mixins: [Picker],

  props: {
  },

  data () {
    return {
    }
  },

  watch: {
  },

  created () {
    const Panel = Vue.extend(TimePanel)
    this.Panel = new Panel()
  },
  mounted () {
    this.picker = this.Panel.$mount(this.pickerEle)
  }
}
