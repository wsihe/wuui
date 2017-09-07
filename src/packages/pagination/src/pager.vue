<template lang="pug">
  ul.wu-pagination-pager(@click="onPagerClick")
    li(:class="firstItemClass")
      a 1
    li.wu-pagination-jump-prev(v-if="showJumpPrev")
      a.wu-pagination-item-link
    li.wu-pagination-item(:class="{[prefixCls+'-active']:currentPage === page}", v-for="page in pagers")
      a {{page}}
    li.wu-pagination-jump-next(v-if="showJumpNext")
      a.wu-pagination-item-link
    li(:class="lastItemClass")
      a {{pageCount}}
</template>

<script>
  const prefixCls = 'wu-pagination-item'
  export default {
    name: 'WuPager',

    componentName: 'WuPager',

    props: {
      currentPage: Number,
      pageCount: Number
    },

    data () {
      return {
        showJumpPrev: false,
        showJumpNext: false,
        prefixCls: prefixCls
      }
    },

    computed: {

      firstItemClass () {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-active`]: this.currentPage === 1
        }
      },

      lastItemClass () {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-active`]: this.currentPage === this.pageCount
        }
      },

      pagers () {
        const pagerCount = 7

        const currentPage = Number(this.currentPage)
        const pageCount = Number(this.pageCount)

        let showJumpPrev = false
        let showJumpNext = false

        if (pageCount > pagerCount) {
          if (currentPage > pagerCount - 3) {
            showJumpPrev = true
          }

          if (currentPage < pageCount - 3) {
            showJumpNext = true
          }
        }

        const pageList = []

        if (showJumpPrev && !showJumpNext) {
          const startPage = pageCount - (pagerCount - 2)
          for (let i = startPage; i < pageCount; i++) {
            pageList.push(i)
          }
        } else if (!showJumpPrev && showJumpNext) {
          for (let i = 2; i < pagerCount; i++) {
            pageList.push(i)
          }
        } else if (showJumpPrev && showJumpNext) {
          const offset = Math.floor(pagerCount / 2) - 1
          for (let i = currentPage - offset; i <= currentPage + offset; i++) {
            pageList.push(i)
          }
        } else {
          for (let i = 2; i < pageCount; i++) {
            pageList.push(i)
          }
        }
        this.showJumpPrev = showJumpPrev
        this.showJumpNext = showJumpNext

        return pageList
      }
    },

    methods: {
      onPagerClick (event) {
        const target = event.target
        if (target.tagName === 'UL') return

        let newPage = Number(event.target.textContent)
        const pageCount = this.pageCount
        const currentPage = this.currentPage

        if (target.className.indexOf('jump-prev') !== -1) {
          newPage = currentPage - 5
        } else if (target.className.indexOf('jump-next') !== -1) {
          newPage = currentPage + 5
        }

        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1
          }

          if (newPage > pageCount) {
            newPage = pageCount
          }
        }

        if (newPage !== currentPage) {
          this.$emit('change', newPage)
        }
      }
    }

  }
</script>
