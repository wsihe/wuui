<template lang="pug">
  ul.wu-pagination(:class="wrapCls")
    li.wu-pagination-prev(:class="{[prefixCls + '-disabled']: currentPage <= 1}", @click="onPrevClick")
      a.wu-pagination-item-link
    wu-pager(:current-page="currentPage", :page-count="pageCount", @change="handleCurrentChange")
    li.wu-pagination-next(:class="{[prefixCls + '-disabled']: currentPage === pageCount}", @click="onNextClick")
      a.wu-pagination-item-link
</template>

<script>
  import WuPager from './pager'

  const prefixCls = 'wu-pagination'
  export default {

    name: 'WuPagination',

    componentName: 'WuPagination',

    components: {WuPager},

    props: {
      total: Number,
      current: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      size: {
        type: String,
        default: ''
      },
      pageSizeOptions: {
        type: Array,
        default () {
          return [10, 20, 30, 40]
        }
      }
    },

    data () {
      return {
        prefixCls: prefixCls,
        currentPage: this.current,
        currentPageSize: this.pageSize
      }
    },

    computed: {
      wrapCls () {
        return {
          'mini': this.size === 'small'
        }
      },
      pageCount () {
        return Math.ceil(this.total / this.currentPageSize)
      }
    },

    watch: {
      current (val) {
        this.currentPage = val
      },
      pageSize (val) {
        this.currentPageSize = val
      }
    },

    methods: {
      onPrevClick () {
        const newPage = this.currentPage - 1
        this.currentPage = this.getValidCurrentPage(newPage)
      },

      onNextClick () {
        const newPage = this.currentPage + 1
        this.currentPage = this.getValidCurrentPage(newPage)
      },

      handleCurrentChange (val) {
        this.currentPage = this.getValidCurrentPage(val)
      },
      getValidCurrentPage (value) {
        value = parseInt(value, 10)

        const havePageCount = typeof this.pageCount === 'number'

        let resetValue
        if (!havePageCount) {
          if (isNaN(value) || value < 1) resetValue = 1
        } else {
          if (value < 1) {
            resetValue = 1
          } else if (value > this.pageCount) {
            resetValue = this.pageCount
          }
        }

        if (resetValue === undefined && isNaN(value)) {
          resetValue = 1
        } else if (resetValue === 0) {
          resetValue = 1
        }
        resetValue = resetValue === undefined ? value : resetValue

        this.changePage(resetValue)

        return resetValue
      },
      changePage (val) {
        if (this.currentPage !== val) {
          this.$emit('update:current', val)
          this.$emit('on-change', val)
        }
      }
    },

    created () {
    },

    mounted () {
    }
  }
</script>
