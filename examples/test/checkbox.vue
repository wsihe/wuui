<template lang="pug">
  .page
    h2 CheckBox
    .demo-content
      wu-checkbox(v-model="value") 备选项
    .demo-content
      wu-checkbox(v-model="value1" disabled) 备选项
    .demo-content
      wu-checkbox(v-model="value2", @on-change="handleChange") 备选项
    p {{value2}}
    .demo-content
      wu-checkbox-group(v-model="value3" size="small", @on-change="handleChange2")
        wu-checkbox(label="a") 备选项1
        wu-checkbox(label="b") 备选项2
</template>

<script>
  export default {
    data () {
      return {
        value: true,
        value1: true,
        value2: false,
        value3: 'a'
      }
    },
    watch: {
    },
    methods: {
      handleChange (val) {
        console.log(val)
      },
      handleChange2 (val) {
        console.log(this.value3)
      }
    }
  }
</script>
