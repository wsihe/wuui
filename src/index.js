import './style/index.less'
import Row from './packages/row'
import Col from './packages/col'
import Message from './packages/message'
import Icon from './packages/icon'
import Button from './packages/button'
import ButtonGroup from './packages/button-group'
import Input from './packages/input'
import Radio from './packages/radio'
import RadioButton from './packages/radio-button'
import RadioGroup from './packages/radio-group'
import Checkbox from './packages/checkbox'
import CheckboxGroup from './packages/checkbox-group'
import Select from './packages/select'
import Option from './packages/option'
import OptionGroup from './packages/option-group'

const components = [
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button,
  Input,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
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
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  Message,
  install
}
