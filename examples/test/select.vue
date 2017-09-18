<template lang="pug">
  .page
    h2 Select
    .demo-content
       wu-select(v-model="value" placeholder="请选择")
          wu-option(value="a" label="广州")
          wu-option(value="b" label="北京")
          wu-option(value="c" label="上海")
    .demo-content
      wu-select(v-model="value1")
        wu-option(value="广州")
        wu-option(value="北京")
        wu-option(value="上海")
    .demo-content
      wu-select(v-model="value3" placeholder="搜索城市...", showSearch)
        wu-option(:value="city.value", :label="city.label", :key="city.value" v-for="city in cityList")
    .demo-content
      wu-select(v-model="value2" placeholder="搜索城市...", showSearch)
        wu-option(value="广州")
        wu-option(value="北京")
        wu-option(value="上海")
    .demo-content
      wu-select(disabled)
        wu-option(value="广州")
    .demo-content
      wu-select(v-model="value4" placeholder="搜索城市...", showSearch, remote, :remote-method="remoteMethod", :loading="loading")
        wu-option(:value="item.value", :label="item.value", :key="index", v-for="(item, index) in options")
    .demo-content
      wu-select(
        v-model="value"
        placeholder="搜索组件..."
        showSearch)
        wu-option(:value="item.path", :label="item.name", :key="item.path", v-for="(item, index) in components")
</template>

<script>
  import list from '@/i18n/nav.config.json'
  export default {
    data () {
      return {
        value: '',
        value1: '北京',
        value2: '广州',
        value3: '',
        value4: '',
        loading: false,
        components: [],
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        options: []
      }
    },
    watch: {
    },
    methods: {
      remoteMethod (val) {
        if (val !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            const list = this.cityList.map(item => {
              return {
                value: item.value,
                label: item.value
              }
            })
            this.options = list.filter(item => item.label.toLowerCase().indexOf(val.toLowerCase()) > -1)
          }, 1000)
        } else {
          this.options = []
        }
      },
      handleMenuData (menus) {
        let comList = []
        menus.menuItem.forEach((item1) => {
          if (item1.icon !== 'icon-start') {
            item1.menuItem.forEach((item2) => {
              comList.push(item2)
            })
          }
        })
        return comList
      }
    },
    mounted () {
      this.components = this.handleMenuData(list)
    }
  }
</script>

<style lang="stylus" scoped>
  .demo-content .wu-select
    width 200px
</style>

