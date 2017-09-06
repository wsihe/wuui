<template lang="pug">
  wu-select(
    :className = "prefixCls",
    :placeholder="placeholder"
  )
    slot
      wu-option(value="111")
      wu-option(value="222")
      wu-option(value="333")
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
        inputWidth: 0
      }
    },

    computed: {
    },

    watch: {
    },

    methods: {
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
