import Vue from "vue";
import Router from "vue-router";


// component imports
import ScraperWindow from "../components/ScraperWindow.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: ScraperWindow
    }
  ]
});

