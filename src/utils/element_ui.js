import Vue from 'vue'
import {
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  TimeSelect,
  TimePicker,
  Tabs,
  TabPane,
  Alert,

  Input,
  Checkbox,
  CheckboxGroup,
  Button,
  Select,
  Option,
  DatePicker,
  Dialog,
  Form,
  FormItem,
  Radio,
  Switch,
  Loading,
  Notification,
  Tooltip,
  MessageBox,
  Pagination
} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Alert)

Vue.use(Input)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)

Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Loading)
// Vue.use(Notification)
Vue.use(Tooltip)
Vue.prototype.$notify = Notification   //消息提示
Vue.prototype.$confirm = MessageBox.confirm   //弹框

Vue.use(Pagination)









