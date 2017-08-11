/**
 * Created by river on 2017/5/21.
 */
// todo 改为 Vue 插件的形式, 不用es6
export const tabManager = function (vue, store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'
  var tabs = [{
    name: 'home',
    title: 'Introduction',
    active: true
  }]
  // if (window.sessionStorage.VUE_TABS) {
  //   tabs = JSON.parse(window.sessionStorage.VUE_TABS)
  // }
  var mainTabs = tabs
  var Navigator = function (moduleName) {
    store.registerModule(moduleName, {
      state: {
        routes: mainTabs
      },
      mutations: {
        'router/ROUTE_ADD': function (state, tabs) {
          state.routes.push(tabs)
        },
        'router/ROUTE_DEL': function (state, num) {
          state.routes.splice(num.index, num.count)
        },
        'router/ROUTE_REFRESH': function (state, count) {
        },
        'router/ROUTE_RESET': function (state) {
          state.routes = []
        }
      }
    })
    var add = function (tab) {
      store.commit('router/ROUTE_ADD', tab)
      window.sessionStorage.VUE_TABS = JSON.stringify(mainTabs)
    }
    var del = function (tab, count) {
      var tabIndex
      mainTabs.forEach(function (record, index) {
        if (record.name === tab.name) {
          tabIndex = index
        }
      })
      var toTab = mainTabs[tabIndex - 1]
      toTab.active = true
      router.push({name: toTab.name})
      var num = {
        index: tabIndex,
        count: count
      }
      store.commit('router/ROUTE_DEL', num)
      window.sessionStorage.VUE_TABS = JSON.stringify(mainTabs)
    }
    var reset = function () {
      store.commit('router/ROUTE_RESET')
      window.sessionStorage.VUE_TABS = JSON.stringify([])
    }
    var record = function (tab, count) {
      var nameList = []
      mainTabs.forEach(function (record) {
        nameList.push(record.name)
      })
      var index = nameList.indexOf(tab.name)
      if (index === -1) { add(tab) }
      mainTabs.forEach(function (record) {
        if (record.name === tab.name) {
          record.active = true
        } else {
          record.active = false
        }
      })
    }
    return {
      record: record,
      reset: reset,
      del: del
    }
  }
  var TabManager = {
    name: 'tabManager',
    abstract: true,
    props: {},
    data: function () {
      return ({
        routes: mainTabs
      })
    },
    computed: {
      historyStr: function () {
        var nameList = []
        this.routes.forEach(function (record) {
          nameList.push(record.name)
        })
        return nameList.join(',')
      }
    },
    render: function (createElement) {
      // console.log(this.historyStr)
      return createElement(
        'keep-alive', {
          props: {
            include: this.historyStr
          }
        },
        this.$slots.default
      )
    }
  }

  var navigator = Navigator(moduleName)

  // handle router change
  router.afterEach(function (to, from) {
    if (to.meta.title) {
      var tab = cloneRoute(to, from)
      navigator.record(tab)
    }
  })
  vue.component('tab-manager', TabManager)
  vue.tab = vue.prototype.$tab = {
    delTab: function (tab, count) { return navigator.del(tab, count) },
    cleanTabs: function () { return navigator.reset() }
  }
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    title: to.meta.title,
    active: false
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return clone
}
