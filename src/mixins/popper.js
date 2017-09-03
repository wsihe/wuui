import Vue from 'vue'

const PopperJS = Vue.prototype.$isServer ? function () {} : require('popper.js')
const stop = e => e.stopPropagation()

export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    transition: String,
    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      showPopper: false,
      currentPlacement: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.showPopper = val
        this.$emit('input', val)
      }
    },

    showPopper (val) {
      val ? this.updatePopper() : this.destroyPopper()
      this.$emit('input', val)
    }
  },

  methods: {
    createPopper () {
      if (this.$isServer) return
      this.currentPlacement = this.currentPlacement || this.placement
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return
      }

      const options = this.popperOptions

      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference

      if (!reference &&
        this.$slots.reference &&
        this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm
      }

      if (!popper || !reference) return
      if (this.visibleArrow) this.appendArrow(popper)
      if (this.appendToBody) document.body.appendChild(this.popperElm)
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }

      options.placement = this.currentPlacement
      options.offset = this.offset
      this.popperJS = new PopperJS(reference, popper, options)
      this.popperJS.onCreate(_ => {
        this.$emit('created', this)
        this.resetTransformOrigin()
        this.$nextTick(this.updatePopper)
      })
      if (typeof options.onUpdate === 'function') {
        this.popperJS.onUpdate(options.onUpdate)
      }
      // this.popperJS._popper.style.zIndex = PopupManager.nextZIndex()
      this.popperElm.addEventListener('click', stop)
    },

    updatePopper () {
      this.popperJS ? this.popperJS.update() : this.createPopper()
    },

    doDestroy () {
      /* istanbul ignore if */
      if (this.showPopper || !this.popperJS) return
      this.popperJS.destroy()
      this.popperJS = null
    },

    destroyPopper () {
      if (this.popperJS) {
        this.resetTransformOrigin()
      }
    },

    resetTransformOrigin () {
      let placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      }
      let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0]
      let origin = placementMap[placement]
      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? `center ${origin}` : `${origin} center`
    },

    appendArrow (element) {
      let hash
      if (this.appended) {
        return
      }

      this.appended = true

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name
          break
        }
      }

      const arrow = document.createElement('div')

      if (hash) {
        arrow.setAttribute(hash, '')
      }
      arrow.setAttribute('x-arrow', '')
      arrow.className = 'popper__arrow'
      element.appendChild(arrow)
    }
  },

  beforeDestroy () {
    this.doDestroy()
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop)
      document.body.removeChild(this.popperElm)
    }
  },

  deactivated () {
    this.$options.beforeDestroy[0].call(this)
  }
}
