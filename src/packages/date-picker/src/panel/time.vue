<template lang="pug">
  .wu-time-picker-panel(:style="{marginTop:'-30px'}")
    time-spinner
</template>

<script>
  import TimeSpinner from '../basic/time-spinner.vue'
  //  const prefixCls = 'wu-modal'
  export default {
    name: '',

    componentName: '',

    components: { TimeSpinner },

    props: {
    },

    data () {
      return {
      }
    },

    computed: {
    },

    created () {
    }
  }
</script>
