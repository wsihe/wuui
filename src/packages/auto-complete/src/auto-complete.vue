<template lang="pug">
  wu-select(
    ref="select",
    v-model="currentValue",
    :className = "prefixCls",
    :placeholder="placeholder",
    @on-change="handleChange",
    auto-complete,
    showSearch,
    remote,
    :remote-method="remoteMethod"
  )
    slot
      wu-option(v-for="option in filteredData", :value="option", :key="option")
        | {{option}}
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  import WuOption from '../../option'
  import WuSelect from '../../select'

  const prefixCls = 'wu-select-auto-complete'
  export default {

    mixins: [Emitter],

    components: {
      WuSelect,
      WuOption
    },

    name: 'WuAutoComplete',

    componentName: 'WuAutoComplete',

    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: [String, Number],
        default: ''
      },
      dataSource: {
        type: Array,
        default: () => []
      },
      filterMethod: {
        type: [Function, Boolean],
        default: false
      },
      disabled: Boolean,
      size: {
        type: String,
        default: ''
      },
      placeholder: String
    },

    data () {
      return {
        prefixCls: prefixCls,
        inputWidth: 0,
        currentValue: this.value
      }
    },

    computed: {
      filteredData () {
        if (this.filterMethod) {
          return this.dataSource.filter(item => this.filterMethod(this.currentValue, item))
        } else {
          return this.dataSource
        }
      }
    },

    watch: {
      currentValue (val) {
//        this.$refs.select.query = val
        this.$emit('input', val)
        this.$emit('on-change', val)
      }
    },

    methods: {
      remoteMethod (query) {
        this.$emit('on-search', query)
      },
      handleChange (val) {
        this.currentValue = val
        this.$emit('on-select', val)
      },
      getSelectWidth () {
        this.inputWidth = this.$refs.reference.clientWidth
      }
    },

    created () {
    },

    mounted () {
    }
  }
</script>
