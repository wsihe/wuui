<template lang="pug">
  .page
    h2 Tooltip
    .demo-content
      wu-tooltip(placement="top" content="tooltip text")
        span 鼠标经过文字提示
    .demo-content
      wu-tooltip
        span(slot="content") tooltip text more
        span 鼠标经过文字提示
    .demo-content
      div(:style={marginLeft:'60px'})
        wu-tooltip(placement="top-start", :content="content")
          a TL
        wu-tooltip(placement="top", :content="content")
          a Top
        wu-tooltip(placement="top-end", :content="content")
          a TR
      div(:style={width:'60px', float: 'left'})
        wu-tooltip(placement="left-start", :content="content")
          a LT
        wu-tooltip(placement="left", :content="content")
          a Left
        wu-tooltip(placement="left-end", :content="content")
          a LB
      div(:style={width:'60px', marginLeft: '270px'})
        wu-tooltip(placement="right-start", :content="content")
          a RT
        wu-tooltip(placement="right", :content="content")
          a Right
        wu-tooltip(placement="right-end", :content="content")
          a RB
      div(:style={marginLeft:'60px', clear: 'both'})
        wu-tooltip(placement="bottom-start", :content="content")
          a BT
        wu-tooltip(placement="bottom", :content="content")
          a Bottom
        wu-tooltip(placement="bottom-end", :content="content")
          a BB
</template>

<script>
  export default {
    data () {
      return {
        content: 'tooltip text'
      }
    },
    watch: {
      input (newVal, oldVal) {
        console.log(newVal)
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  .demo-content a
    display inline-block
    line-height 32px
    height 32px
    width 60px
    font-size 14px
    text-align center
    background #f5f5f5
    margin-right 1em
    margin-bottom 1em
    border-radius 6px
</style>
