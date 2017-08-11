/**
* @file   customerInquire.vue
* @author river
* @create 2017-05-16 14:44
*/

<template lang="pug">
  .page.page-color
    p Color 色彩
</template>

<script>
  export default {
    name: 'colorDemo',
    data () {
      return {
        tableData: []
      }
    },
    created () {
      this.getVipData()
    },
    activated () {
//      console.log('customerInquire activated')
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define'
  .page-color
    display block
</style>
