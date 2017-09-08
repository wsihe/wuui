<template lang="pug">
  .page
    h2 tabs
    .demo-content
      wu-tabs(v-model="activeKey")
        wu-tab-pane(tab="tab 1" name="1") Content of Tabs Pane 1
        wu-tab-pane(tab="tab 2" name="2") Content of Tabs Pane 2
        wu-tab-pane(tab="tab 3" name="3") Content of Tabs Pane 3
    .demo-content
      wu-tabs(v-model="activeKey2")
        wu-tab-pane(tab="tab 1" name="1") Content of Tabs Pane 1
        wu-tab-pane(tab="tab 2" name="2" disabled) Content of Tabs Pane 2
        wu-tab-pane(tab="tab 3" name="3") Content of Tabs Pane 3
    .demo-content
      wu-tabs(v-model="activeKey3", size="small")
        wu-tab-pane(tab="tab 1" name="1") Content of Tabs Pane 1
        wu-tab-pane(tab="tab 2" name="2") Content of Tabs Pane 2
        wu-tab-pane(tab="tab 3" name="3") Content of Tabs Pane 3
    .demo-content
      wu-tabs(v-model="activeKey4", type="card")
        wu-tab-pane(tab="tab 1" name="1") Content of Tabs Pane 1
        wu-tab-pane(tab="tab 2" name="2") Content of Tabs Pane 2
        wu-tab-pane(tab="tab 3" name="3") Content of Tabs Pane 3
    .demo-content
      wu-tabs(v-model="activeKey5", @on-click="onClick")
        wu-tab-pane(tab="tab 1" name="1") Content of Tabs Pane 1
        wu-tab-pane(tab="tab 2" name="2") Content of Tabs Pane 2
        wu-tab-pane(tab="tab 3" name="3") Content of Tabs Pane 3
</template>

<script>
  export default {
    data () {
      return {
        activeKey: '1',
        activeKey2: '3',
        activeKey3: '1',
        activeKey4: '1',
        activeKey5: '1'
      }
    },
    watch: {
    },
    methods: {
      onClick (item) {
        console.log('on-clcik:' + item)
      }
    }
  }
</script>

<style lang="stylus">
</style>

