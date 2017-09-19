<template lang="pug">
  li.wu-menu-item(:class="itemCls")
    slot
</template>

<script>
  export default {
    name: 'WuMenuItem',

    componentName: 'WuMenuItem',

    props: {
      disabled: Boolean,
      name: String
    },

    data () {
      return {
      }
    },

    computed: {
      itemCls () {
      }
    }
  }
</script>
