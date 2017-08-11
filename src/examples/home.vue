/**
* @file   assetView.vue
* @author river
* @create 2017-05-16 13:44
*/

<template lang="pug">
  .page.page-home
    p river-组件(components)
</template>

<script>
  export default {
    name: 'assetView',
    data () {
      return {
        totalAsset: ''      // 客户总资产
      }
    },
    created () {
    },
    activated () {
//      console.log('assetView activated')
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../css/define'
  .page-home
    display block
</style>
