import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import Routes from "./routes.js"

Vue.use(VueFire);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
