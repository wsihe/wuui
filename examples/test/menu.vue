<template lang="pug">
  .page
    h2 menu
    .demo-content

</template>

<script>
  export default {
    data () {
      return {
        input: '',
        input2: 'textarea',
        input3: 'autosize'
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
