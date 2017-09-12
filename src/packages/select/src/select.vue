<template lang="pug">
  .wu-select(:class="classes", v-clickoutside="handleClose", @click="toggleSelect")
    .wu-select-selection(ref="reference")
      .wu-select-selection__rendered
        .wu-select-selection__placeholder(unselectable="unselectable" v-show="showPlaceholder") {{placeholder}}
        .wu-select-selection-selected-value(v-show="showValue", :style="valStyle") {{selectedLabel}}
        .wu-select-search.wu-select-search--inline(v-show="showInput && showSearch")
          .wu-select-search__field__wrap
            input.wu-select-search__field(
              type="text",
              ref="input",
              :disabled="disabled"
              v-model="inputValue"
            )
      icon.wu-select-arrow(type="down")
    wu-select-dropdown(ref="popper" v-show="visible")
      ul.wu-select-dropdown-menu
        slot
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  import clickoutside from 'wuui/directives/clickoutside'
  import Icon from '../../icon/src/icon'
  import WuSelectDropdown from './dropdown-menu'
  import WuOption from './option'

  const prefixCls = 'wu-select'
  export default {

    mixins: [Emitter],

    components: {
      WuOption,
      WuSelectDropdown,
      Icon
    },

    directives: {clickoutside},

    name: 'WuSelect',

    componentName: 'WuSelect',

    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      className: String,
      disabled: Boolean,
      size: {
        type: String,
        default: ''
      },
      showSearch: {
        type: [Boolean, String],
        default: false
      },
      placeholder: String
    },

    data () {
      return {
        showInput: false,
        isSelect: true,
        inputValue: '',
        visible: false,
        selectWidth: 0,
        currentValue: this.value,
        selected: {},
        selectedLabel: '',
        cachedOptions: [],
        options: []
      }
    },

    computed: {
      classes () {
        return {
          [`${prefixCls}-enabled`]: true,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: !!this.disabled,
          [`${prefixCls}-allow-clear`]: !!this.disabled,
          [`${prefixCls}-open`]: this.visible,
          [`${prefixCls}-focused`]: this.visible,
          [`${this.className}`]: !!this.className
        }
      },
      showPlaceholder () {
        let status = false
        if (this.selectedLabel === '' && !this.inputValue) {
          status = true
        }
        return status
      },
      showValue () {
        let status = false
        if (!this.showPlaceholder && !this.inputValue) {
          status = true
        }
        return status
      },
      valStyle () {
        let val = {}
        if (this.visible && this.showSearch) {
          val = {opacity: 0.4}
          this.showInput = true
          this.$nextTick(() => {
            this.$refs.input.focus()
          })
        } else {
          val = {opacity: 1}
        }
        return val
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
        this.setSelected()
        this.$emit('on-change', val)
      },

      visible (val) {
        if (val) {
          this.broadcast('WuSelectDropdown', 'updatePopper')
        } else {
          this.broadcast('WuSelectDropdown', 'destroyPopper')
        }
      },
      inputValue () {
        this.$nextTick(() => {
          if (this.visible) this.broadcast('WuSelectDropdown', 'updatePopper')
        })
      }
    },

    methods: {
      toggleSelect () {
        if (this.disabled) {
          return false
        }
        this.visible = !this.visible
      },

      handleClose () {
        this.visible = false
      },

      getSelectWidth () {
        this.selectWidth = this.$refs.reference.clientWidth
      },

      handleOptionSelect (option) {
        this.$emit('input', option.value)
        this.visible = false
      },

      setSelected () {
        if (this.disabled) return
        let option = this.getOption(this.value)
        if (!option) return
        this.selectedLabel = option.currentLabel
        this.selected = option
        this.inputValue = ''
        //        if (this.showSearch) this.inputValue = this.selectedLabel
      },

      getOption (value) {
        let option
        for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
          const cachedOption = this.cachedOptions[i]
          if (cachedOption.value === value) {
            option = cachedOption
            break
          }
        }
        if (option) return option
      }
    },

    created () {
      this.$on('handleOptionClick', this.handleOptionSelect)
    },

    mounted () {
      this.setSelected()
      this.getSelectWidth()
    }
  }
</script>
