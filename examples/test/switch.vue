<template lang="pug">
  .page
    h2 Switch
    .demo-content
      wu-switch(v-model="value1")
      wu-switch(disabled)
      wu-switch(v-model="value2")
    .demo-content
      wu-switch(v-model="value3" size="small")
      wu-switch(v-model="value4" size="small")
    .demo-content
      wu-switch(v-model="value5")
        template(slot="open") 开
        template(slot="close") 关
    .demo-content
      wu-switch(v-model="value6")
        icon(slot="open" type="check")
        icon(slot="close" type="close")
    .demo-content
      wu-switch(v-model="value7", @on-change="change")
</template>

<script>
  export default {
    data () {
      return {
        value1: true,
        value2: false,
        value3: true,
        value4: false,
        value5: false,
        value6: true,
        value7: true
      }
    },
    watch: {
      value1 (val) {
        console.log(val)
      }
    },
    methods: {
      change () {
        console.log('on-change')
      }
    }
  }
</script>

<style lang="stylus">
  .wu-switch
    margin-right 30px
</style>

