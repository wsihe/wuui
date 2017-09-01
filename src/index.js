import './style/index.less'
import Row from './packages/row'
import Col from './packages/col'
import Message from './packages/message'
import Icon from './packages/icon'
import Button from './packages/button'
import ButtonGroup from './packages/button-group'
import Input from './packages/input'
import Radio from './packages/radio'
import radioButton from './packages/radio-button'
import radioGroup from './packages/radio-group'

const components = [
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button,
  Input,
  Radio,
  radioButton,
  radioGroup
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })

  // Vue.use(Loading.directive)
  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  version: '0.0.4',
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button,
  Input,
  Radio,
  radioButton,
  radioGroup,
  Message,
  install
}
