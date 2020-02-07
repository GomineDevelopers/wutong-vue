import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import api from "./api/api";
import $ from "jquery";
import "./utils/vant";
import { Toast } from "vant";
// import Icon from "vue-svg-icon/Icon";
Vue.prototype.$api = api;
Vue.prototype.$ = $;

Vue.config.productionTip = false;
// Vue.component("Icon", Icon); //引入svg-icon

import store from "@/store";

import "@/utils/rem.js";

import "@/styles/common.css";
import "@/styles/common2.css";

import vueHeadful from "vue-headful";
Vue.component("vue-headful", vueHeadful);

import { Utils } from '@/utils/Utils'
Vue.prototype.$Utils = Utils


// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  router,
  store,
  // mapGetters,
  render: h => h(App)
}).$mount("#app");
