<template lang="pug">
  .page.page-button
    p  Button 按钮
</template>

<script>
  export default {
    name: 'buttonDemo',
    data () {
      return {
        random: Math.random().toFixed(4)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../css/define'
  .page-button
    display block
</style>
