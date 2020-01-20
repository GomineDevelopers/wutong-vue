import Vue from "vue";
import {
  Button,
  Toast,
  Row,
  Col,
  DropdownMenu,
  DropdownItem,
  RadioGroup,
  Radio,
  Field,
  Checkbox,
  Icon,
  Tab,
  Tabs,
  Popup,
  Search,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sidebar,
  SidebarItem,
  Progress
} from "vant";

Vue.use(Button);
Vue.use(Toast);
Vue.use(Row);
Vue.use(Col);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem);
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Progress);
