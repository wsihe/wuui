import './style/index.less'
import Row from './packages/row'
import Col from './packages/col'
import Message from './packages/message'
import Icon from './packages/icon'
import Button from './packages/button'
import ButtonGroup from './packages/button-group'
import Input from './packages/input'
import TextArea from './packages/textarea'
import Radio from './packages/radio'
import RadioButton from './packages/radio-button'
import RadioGroup from './packages/radio-group'
import Checkbox from './packages/checkbox'
import CheckboxGroup from './packages/checkbox-group'
import Select from './packages/select'
import Option from './packages/option'
import OptionGroup from './packages/option-group'
import AutoComplete from './packages/auto-complete'
import Dropdown from './packages/dropdown'
import DropdownMenu from './packages/dropdown-menu'
import DropdownItem from './packages/dropdown-item'
import Switch from './packages/switch'
import Pagination from './packages/pagination'
import Tabs from './packages/tabs'
import TabPane from './packages/tabs-pane'
import Collapse from './packages/collapse'
import CollapseItem from './packages/collapse-item'
import Spin from './packages/spin'
import Menu from './packages/menu'
import Submenu from './packages/submenu'
import MenuItem from './packages/menu-item'
import MenuItemGroup from './packages/menu-item-group'

const components = [
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button,
  Input,
  TextArea,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  AutoComplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Switch,
  Pagination,
  Tabs,
  TabPane,
  Collapse,
  CollapseItem,
  Spin,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
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
}

export default {
  version: '0.0.4',
  Row,
  Col,
  Icon,
  ButtonGroup,
  Button,
  Input,
  TextArea,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  AutoComplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Switch,
  Pagination,
  Tabs,
  TabPane,
  Collapse,
  CollapseItem,
  Spin,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message,
  install
}
