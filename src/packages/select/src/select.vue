<template lang="pug">
  .wu-select(:class="classes", v-clickoutside="handleClose", @click="toggleSelect")
    .wu-select-selection(ref="reference")
      .wu-select-selection__rendered
        .wu-select-selection__placeholder(unselectable="unselectable" v-show="showPlaceholder  && !isInput") {{placeholder}}
        .wu-select-selection-selected-value(v-show="showSelectedValue && !isInput", :style="valStyle") {{selectedLabel}}
        .wu-select-search.wu-select-search--inline(v-show="showInput && showSearch")
          .wu-select-search__field__wrap
            input.wu-select-search__field(
              type="text",
              ref="input",
              :disabled="disabled"
              v-model="inputValue",
              @keydown="debounceChange",
              @input="debounceChange",
              @paste="debounceChange"
            )
      icon.wu-select-arrow(type="down" v-if="!remote && !remoteMethod")
    wu-select-dropdown(ref="popper" v-show="visible && showDrop")
      ul.wu-select-dropdown-menu
        slot
        li(:class="noCls", v-show="noFoundData") {{noDataText}}
        li(:class="loadingCls", v-show="loading")
          icon(type="loading-3-quarters" spin)
</template>

<script>
  import Emitter from 'wuui/mixins/emitter'
  import debounce from 'lodash.debounce'
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
      noDataText: {
        type: String,
        default: '无匹配数据'
      },
      showSearch: {
        type: [Boolean, String],
        default: false
      },
      placeholder: String,
      remote: {
        type: Boolean,
        default: false
      },
      remoteMethod: {
        type: Function
      },
      loading: {
        type: Boolean,
        default: false
      },
      autoComplete: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        isInput: false,
        showInput: false,
        valStyle: {},
        isSelect: true,
        inputValue: '',
        query: '',
        visible: false,
        selectWidth: 0,
        childTotalCount: 0,
        currentValue: this.value,
        selected: {},
        selectedLabel: '',
        cachedOptions: [],
        childCount: 0,
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
      noCls () {
        return {
          [`${prefixCls}-dropdown-menu-item`]: true,
          [`${prefixCls}-dropdown-menu-item-disabled`]: true
        }
      },
      loadingCls () {
        return {
          [`${prefixCls}-dropdown-menu-item`]: true,
          [`${prefixCls}-loading`]: true
        }
      },
      showDrop () {
        let status = true
        const options = this.$slots.default || []
        if (!this.loading && this.remote && this.query === '' && !options.length) {
          status = false
        }
        return status
      },
      showPlaceholder () {
        let status = false
        if (this.selectedLabel === '' && !this.inputValue) {
          status = true
        }
        return status
      },
      showSelectedValue () {
        let status = false
        let opacity = 1
        if (!this.inputValue.length) {
          if (!this.showSearch) {
            status = true
          } else {
            if (this.visible) {
              status = !this.inputValue
              if (status) {
                this.showInput = true
                this.$nextTick(() => {
                  this.$refs.input.focus()
                })
                opacity = 0.4
              }
            } else {
              status = true
            }
          }
        }
        this.valStyle = {opacity}
        return status
      },
      noFoundData () {
        const options = this.$slots.default || []
        let stauts = (this.childCount === -this.childTotalCount && !this.remote) ||
          (this.remote && !this.loading && !options.length && !this.autoComplete)
        return stauts
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
          if (this.remote) {
            const options = this.$slots.default || []
            if (this.query !== '' && !options.length) {
              this.remoteMethod(this.query)
            }
          }
          this.broadcast('WuSelectDropdown', 'updatePopper')
        } else {
          this.isInput = false
          this.inputValue = this.query = ''
          this.broadcast('WuSelectDropdown', 'destroyPopper')
        }
      },
      query (val) {
        this.$nextTick(() => {
          if (this.visible) this.broadcast('WuSelectDropdown', 'updatePopper')
        })
        if (!this.remote && !this.remoteMethod) {
          this.childCount = 0
          this.broadcast('WuOption', 'queryChange', val)
        } else {
          this.remoteMethod(val)
        }
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
        this.$nextTick(() => {
          this.childTotalCount = this.cachedOptions.length
        })
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
      this.debounceChange = debounce((e) => {
        if (e.target.value) {
          this.isInput = true
        } else {
          this.isInput = false
        }
        this.query = this.inputValue
      }, 100, { leading: true })
      this.$on('handleOptionClick', this.handleOptionSelect)
    },

    mounted () {
      this.setSelected()
      this.getSelectWidth()
    }
  }
</script>
