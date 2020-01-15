import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import api from "./api/api";
import $ from "jquery";
import "./utils/vant";
import { Toast } from "vant";
Vue.prototype.$api = api;
Vue.prototype.$ = $;

Vue.config.productionTip = false;

import store from "@/store";

import "@/utils/rem.js";

import "@/styles/common.css";
import "@/styles/common2.css";

import vueHeadful from "vue-headful";
Vue.component("vue-headful", vueHeadful);

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
