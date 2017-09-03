<template lang="pug">
  .wu-select(:class="classes")
    .wu-select-selection(ref="reference")
      .wu-select-selection__rendered
        .wu-select-selection__placeholder(unselectable="unselectable" v-if="false") 输入城市
        .wu-select-selection-selected-value() 北京
        .wu-select-search.wu-select-search--inline(v-if="false")
          .wu-select-search__field__wrap
            input.wu-select-search__field(
              type="text",
              ref="input",
              :value="inputValue"
            )
            span.wu-select-search__field__mirror {{inputValue}}&nbsp;
      icon.wu-select-arrow(type="down")
    wu-select-dropdown(ref="popper")
      slot
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  import Icon from '../../icon/icon'
  import WuSelectDropdown from './dropdown-menu'
//  import WuInput from '../../input/src/input'

  const prefixCls = 'wu-select'
  export default {

    mixins: [Emitter],

    components: {
//      WuInput,
      WuSelectDropdown,
      Icon
    },
    name: 'WuSelect',

    componentName: 'WuSelect',

    props: {
      className: String,
      disabled: Boolean,
      size: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        inputValue: ''
      }
    },

    computed: {
      classes () {
        return {
          [`${prefixCls}-enabled`]: true,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: !!this.disabled,
          [`${prefixCls}-allow-clear`]: !!this.disabled,
          [`${this.className}`]: !!this.className
        }
      }
    },

    watch: {
    },

    methods: {
      query (val) {
        this.$nextTick(() => {
          this.broadcast('WuSelectDropdown', 'updatePopper')
//          if (this.visible) this.broadcast('ElSelectDropdown', 'updatePopper')
        })
      }
    },

    mounted () {
      this.query()
    }
  }
</script>
