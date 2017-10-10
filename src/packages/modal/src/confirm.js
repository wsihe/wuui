import Vue from 'vue'
import Modal from './modal.vue'

let modalInstance
const prefixCls = 'wu-confirm'
const typeMap = {
  confirm: 'question-circle',
  success: 'check-circle',
  warning: 'exclamation-circle',
  info: 'info-circle',
  error: 'close-circle'
}
Modal.newInstance = (options) => {
  options = options || {}

  let instance = new Vue({
    data: Object.assign({}, options, {
      visible: false,
      width: 416,
      title: '',
      content: '',
      type: '',
      showCancel: false,
      okText: '确认',
      cancelText: '取消',
      buttonLoading: false
    }),
    render (h) {
      return (
        <wu-modal value={ this.visible } width={ this.width } modalClass={ this.modalCls} hideFooter={this.hideFooter} maskClosable={this.maskClosable}>
          <div class='wu-confirm-body-wrapper'>
            <div class='wu-confirm-body'>
              <icon type={ this.iconType }></icon>
              <span class='wu-confirm-title'> {this.title} </span>
              <div class='wu-confirm-content'> {this.content} </div>
            </div>
            <div class="wu-confirm-btns" slot="footer">
              { this.showCancel ? <wu-button on-click={this.handleCancelClick} size="large"> {this.cancelText} </wu-button> : ''}
              <wu-button type="primary" on-click={this.handleOkClick} size="large"> {this.okText} </wu-button>
            </div>
          </div>
        </wu-modal>
      )
    },
    computed: {
      modalCls () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`
        ]
      },
      iconType () {
        return typeMap[this.type]
      }
    },
    methods: {
      handleCancelClick () {
        this.onCancel()
        this.remove()
      },
      handleOkClick () {
        this.onOk()
        this.remove()
      },
      remove () {
        setTimeout(() => {
          this.$destroy()
          document.body.removeChild(this.$el)
          modalInstance = null
        }, 100)
      },
      onOk () {},
      onCancel () {}
    }
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

['confirm', 'success', 'warning', 'info', 'error'].forEach(type => {
  Modal[type] = (options = {}) => {
    options.type = type
    options.showCancel = false
    if (type === 'confirm') {
      options.showCancel = true
    }
    return confirm(options)
  }
})

const confirm = function (options) {
  const render = ('render' in options) ? options.render : undefined
  let instance = getModalInstance(render)
  instance = Object.assign(instance, options)
  instance.visible = true
}

const getModalInstance = function (render = undefined) {
  modalInstance = modalInstance || Modal.newInstance({
    maskClosable: false,
    hideFooter: true,
    render: render
  })

  return modalInstance
}

export default Modal
