import './style/index.less'
import Row from './packages/row'
import Col from './packages/col'
import Message from './packages/message'
import Icon from './packages/icon'
import Button from './packages/button'
import ButtonGroup from './packages/button-group'
// import Input from '../packages/input/index.js'
// import Switch from '../packages/switch/index.js'
// import Pagination from '../packages/pagination/index.js'
// import Select from '../packages/select/index.js'
// import Option from '../packages/option/index.js'
// import OptionGroup from '../packages/option-group/index.js'
// import DatePicker from '../packages/date-picker/index.js'
// import TimePicker from '../packages/time-picker/index.js'
// import MessageBox from '../packages/message-box/index.js'
// import Tabs from '../packages/tabs/index.js'
// import TabPane from '../packages/tab-pane/index.js'
// import Alert from '../packages/alert/index.js'
// import Loading from '../packages/loading/index.js'
// import Steps from '../packages/steps/index.js'
// import Step from '../packages/step/index.js'
// import Collapse from '../packages/collapse/index.js'
// import CollapseItem from '../packages/collapse-item/index.js'
// import ColorPicker from '../packages/color-picker/index.js'
// import CollapseTransition from 'element-ui/src/transitions/collapse-transition'

const components = [
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button
  // Pagination,
  // Input,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  // DatePicker,
  // TimePicker,
  // Tabs,
  // TabPane,
  // Alert,
  // Icon,
  // Steps,
  // Step,
  // Collapse,
  // CollapseItem,
  // ColorPicker,
  // CollapseTransition
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  components.map(component => {
    Vue.component(component.name, component)
  })

  // Vue.use(Loading.directive)

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

// module.exports = Object.assign(components, {install})
export default {
  version: '1.0.0',
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button,
  // locale: locale.use,
  // i18n: locale.i18n,
  // CollapseTransition,
  // Loading,
  // Pagination,
  // Input,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  // DatePicker,
  // TimePicker,
  // MessageBox,
  // Tabs,
  // TabPane,
  // Alert,
  // Notification,
  // Icon,
  Message,
  install
  // Steps,
  // Step,
  // Collapse,
  // CollapseItem,
  // ColorPicker
}
