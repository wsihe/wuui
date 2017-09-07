<template lang="pug">
  .wu-tabs(:class="tabclasses")
    .wu-tabs-bar
      .wu-tabs-nav-container
        .wu-tabs-nav-wrap
          .wu-tabs-nav-scroll
            .wu-tabs-nav
              .wu-tabs-ink-bar(:class="inkClass", :style="inkStyle")
              .wu-tabs-tab.wu-tabs-tab-active Tab1
              .wu-tabs-tab Tab2
              .wu-tabs-tab Tab3
    .wu-tabs-content(:class="contentClasses")
      .wu-tabs-tabpane Content of Tab Pane 1
      .wu-tabs-tabpane Content of Tab Pane 2
      .wu-tabs-tabpane Content of Tab Pane 3
      slot
</template>

<script>
  const prefixCls = 'wu-tabs'
  export default {
    name: 'WuTabs',

    componentName: 'WuTabs',

    props: {
      type: {
        type: String,
        default: 'line'
      },
      tabPosition: {
        type: String,
        default: 'top'
      },
      animated: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        barWidth: 0,
        barOffset: 0
      }
    },

    computed: {
      tabclasses () {
        return {
          [`${prefixCls}-line`]: this.type === 'line',
          [`${prefixCls}-no-animation`]: this.type !== 'line' && !this.animated,
          [`${prefixCls}-card`]: this.type === 'card',
          [`${prefixCls}-${this.tabPosition}`]: !!this.tabPosition
        }
      },
      inkClass () {
        return {
          [`${prefixCls}-ink-bar-animated`]: !this.animated
        }
      },
      inkStyle () {
        let style = {
          display: 'none',
          width: `${this.barWidth}px`
        }
        if (this.type === 'line') style.display = 'block'
        if (this.animated) {
          style.transform = `translate3d(${this.barOffset}px, 0px, 0px)`
        } else {
          style.left = `${this.barOffset}px`
        }

        return style
      },
      contentClasses () {
        return {
          [`${prefixCls}-content-animated`]: this.animated
        }
      }
    },

    watch: {
    },

    methods: {

    },

    created () {
    },

    mounted () {
    }
  }
</script>
