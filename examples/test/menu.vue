<template lang="pug">
  .page
    h2 menu
    .demo-content
      wu-menu(mode="horizontal")
        wu-menu-item(name="1")
          icon(type="appstore")
          | Navigation One
        wu-menu-item(name="2") Navigation Two
        wu-submenu(name="sub1")
          template(slot="title") Navigation There
          wu-menu-item(name="3") Navigation sub One
          wu-menu-item(name="4") Navigation sub Two
        wu-submenu(name="sub2")
          template(slot="title")  Navigation Four
          wu-item-group
            template(slot="title") item 1
            wu-menu-item(name="5") Navigation sub One
            wu-menu-item(name="6") Navigation sub Two
          wu-item-group
            template(slot="title") item 2
            wu-menu-item(name="7") Navigation sub One
            wu-menu-item(name="8") Navigation sub Two
        wu-menu-item(name="9")
          a(href="https://wuui.github.io/" target="_blank") Navigation Five
    .demo-content
      wu-menu(mode="inline", :style="{width:'200px'}" accordion)
        wu-menu-item(name="0")
          icon(type="pie-chart")
          | Navigation Zero
        wu-submenu(name="sub1")
          template(slot="title")
            icon(type="appstore")
            | Navigation One
          wu-item-group
            template(slot="title") item 1
            wu-menu-item(name="1") Option 1
            wu-menu-item(name="2") Option 2
          wu-item-group
            template(slot="title") item 2
            wu-menu-item(name="3") Option 3
            wu-menu-item(name="4") Option 4
        wu-submenu(name="sub2")
          template(slot="title")
            icon(type="desktop")
            | Navigation Two
          wu-menu-item(name="5") Option 5
          wu-menu-item(name="6") Option 6
          wu-submenu(name="sub3")
            template(slot="title") submenu
            wu-menu-item(name="7") Option 7
            wu-menu-item(name="8") Option 8
        wu-submenu(name="sub4")
          template(slot="title")
            icon(type="line-chart")
            | Navigation There
          wu-menu-item(name="9") Option 9
          wu-menu-item(name="10") Option 10
          wu-menu-item(name="11") Option 11
          wu-menu-item(name="12") Option 12
    .demo-content(:style="{width:'200px'}")
      wu-switch(@on-change="handle", :style="{marginBottom:'20px'}")
      wu-menu(theme="dark",mode="inline",:inline-collapsed="collapse")
        wu-menu-item(name="0")
          icon(type="pie-chart")
          span Navigation Zero
        wu-submenu(name="sub1")
          template(slot="title")
            icon(type="appstore")
            span Navigation One
          wu-item-group
            template(slot="title") item 1
            wu-menu-item(name="1") Option 1
            wu-menu-item(name="2") Option 2
          wu-item-group
            template(slot="title") item 2
            wu-menu-item(name="3") Option 3
            wu-menu-item(name="4") Option 4
        wu-submenu(name="sub2")
          template(slot="title")
            icon(type="desktop")
            span Navigation Two
          wu-menu-item(name="5") Option 5
          wu-menu-item(name="6") Option 6
          wu-submenu(name="sub3")
            template(slot="title") submenu
            wu-menu-item(name="7") Option 7
            wu-menu-item(name="8") Option 8
        wu-submenu(name="sub4")
          template(slot="title")
            icon(type="line-chart")
            span Navigation There
          wu-menu-item(name="9") Option 9
          wu-menu-item(name="10") Option 10
          wu-menu-item(name="11") Option 11
          wu-menu-item(name="12") Option 12
    .demo-content
      wu-menu(theme="dark",mode="inline", :style="{width:'200px'}", selected-name="1", :open-names="['sub1']")
        wu-menu-item(name="0")
          icon(type="pie-chart")
          | Navigation Zero
        wu-submenu(name="sub1")
          template(slot="title")
            icon(type="appstore")
            | Navigation One
          wu-item-group
            template(slot="title") item 1
            wu-menu-item(name="1") Option 1
            wu-menu-item(name="2") Option 2
          wu-item-group
            template(slot="title") item 2
            wu-menu-item(name="3") Option 3
            wu-menu-item(name="4") Option 4
        wu-submenu(name="sub2")
          template(slot="title")
            icon(type="desktop")
            | Navigation Two
          wu-menu-item(name="5") Option 5
          wu-menu-item(name="6") Option 6
          wu-submenu(name="sub3")
            template(slot="title") submenu
            wu-menu-item(name="7") Option 7
            wu-menu-item(name="8") Option 8
        wu-submenu(name="sub4")
          template(slot="title")
            icon(type="line-chart")
            | Navigation There
          wu-menu-item(name="9") Option 9
          wu-menu-item(name="10") Option 10
          wu-menu-item(name="11") Option 11
          wu-menu-item(name="12") Option 12
    .demo-content(:style="{width:'200px'}")
      wu-menu(mode="vertical" shadow)
        wu-menu-item(name="0")
          icon(type="pie-chart")
          span Navigation Zero
        wu-submenu(name="sub1")
          template(slot="title")
            icon(type="appstore")
            span Navigation One
          wu-item-group
            template(slot="title") item 1
            wu-menu-item(name="1") Option 1
            wu-menu-item(name="2") Option 2
          wu-item-group
            template(slot="title") item 2
            wu-menu-item(name="3") Option 3
            wu-menu-item(name="4") Option 4
        wu-submenu(name="sub2")
          template(slot="title")
            icon(type="desktop")
            span Navigation Two
          wu-menu-item(name="5") Option 5
          wu-menu-item(name="6") Option 6
          wu-submenu(name="sub3")
            template(slot="title") submenu
            wu-menu-item(name="7") Option 7
            wu-menu-item(name="8") Option 8
        wu-submenu(name="sub4")
          template(slot="title")
            icon(type="line-chart")
            span Navigation There
          wu-menu-item(name="9") Option 9
          wu-menu-item(name="10") Option 10
          wu-menu-item(name="11") Option 11
          wu-menu-item(name="12") Option 12
</template>

<script>
  export default {
    data () {
      return {
        collapse: false,
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
      handle (val) {
        this.collapse = val
      }
    }
  }
</script>
