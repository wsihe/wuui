<template lang="pug">
  ul.wu-pagination
    li.wu-pagination-prev(:class="{[prefixCls + '-disabled']: internalCurrentPage <= 1}", @click="onPrevClick")
      a.wu-pagination-item-link
    wu-pager(:current-page="internalCurrentPage", :page-count="internalPageCount", @change="handleCurrentChange")
    li.wu-pagination-next(:class="{[prefixCls + '-disabled']: internalCurrentPage === internalPageCount}", @click="onNextClick")
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
      total: Number
    },

    data () {
      return {
        prefixCls: prefixCls,
        internalCurrentPage: 1,
        internalPageSize: 5
      }
    },

    computed: {
      internalPageCount () {
        if (typeof this.total === 'number') {
          return Math.ceil(this.total / this.internalPageSize)
        }
        return null
      }
    },

    watch: {
    },

    methods: {
      onPrevClick () {
        const newPage = this.internalCurrentPage - 1
        this.internalCurrentPage = this.getValidCurrentPage(newPage)
      },

      onNextClick () {
        const newPage = this.internalCurrentPage + 1
        this.internalCurrentPage = this.getValidCurrentPage(newPage)
      },

      handleCurrentChange (val) {
        this.internalCurrentPage = this.getValidCurrentPage(val)
        console.log('internalCurrentPage:' + this.internalCurrentPage)
      },
      getValidCurrentPage (value) {
        value = parseInt(value, 10)

        const havePageCount = typeof this.internalPageCount === 'number'

        let resetValue
        if (!havePageCount) {
          if (isNaN(value) || value < 1) resetValue = 1
        } else {
          if (value < 1) {
            resetValue = 1
          } else if (value > this.internalPageCount) {
            resetValue = this.internalPageCount
          }
        }

        if (resetValue === undefined && isNaN(value)) {
          resetValue = 1
        } else if (resetValue === 0) {
          resetValue = 1
        }

        return resetValue === undefined ? value : resetValue
      }
    },

    created () {
    },

    mounted () {
    }
  }
</script>
