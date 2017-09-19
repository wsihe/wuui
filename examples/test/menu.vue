<template lang="pug">
  .page
    h2 menu
    .demo-content
      wu-menu(mode="horizontal")
        wu-menu-item
          icon(type="appstore")
          | Navigation One
        wu-menu-item Navigation Two
        wu-submenu
          template(slot="title") Navigation There
          wu-menu-item Navigation sub One
          wu-menu-item Navigation sub Two
        wu-submenu
          template(slot="title")  Navigation Four
          wu-item-group
            template(slot="title") item 1
            wu-menu-item Navigation sub One
            wu-menu-item Navigation sub Two
          wu-item-group
            template(slot="title") item 2
            wu-menu-item Navigation sub One
            wu-menu-item Navigation sub Two
        wu-menu-item
          a(href="https://wuui.github.io/" target="_blank") Navigation Five
    .demo-content
      wu-menu(mode="inline", :style="{width:'200px'}")
        wu-submenu
          template(slot="title")  Navigation One
          wu-item-group
            template(slot="title") item 1
            wu-menu-item Option 1
            wu-menu-item Option 2
          wu-item-group
            template(slot="title") item 2
            wu-menu-item Option 3
            wu-menu-item Option 4
        wu-submenu
          template(slot="title") Navigation Two
          wu-menu-item Option 5
          wu-menu-item Option 6
          wu-submenu
            template(slot="title") submenu
            wu-menu-item Option 7
            wu-menu-item Option 8
        wu-submenu
          template(slot="title") Navigation There
          wu-menu-item Option 9
          wu-menu-item Option 10
          wu-menu-item Option 11
          wu-menu-item Option 12
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
