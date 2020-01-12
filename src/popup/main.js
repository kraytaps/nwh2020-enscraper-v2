import Vue from 'vue'
import App from './App.vue'

import VueSweetAlert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./routes";
import "../sass/scraper-window.sass";
import vuetify from "../plugins/vuetify";

// Vue.use(Vuetify);

Vue.use(BootstrapVue);
Vue.use(VueSweetAlert2);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: vuetify,
  router,
  render: h => h(App)
})
// .$mount("#app");