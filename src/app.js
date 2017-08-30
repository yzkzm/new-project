// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router/router'
import Vuex from 'vuex'
import store from './store'
import axios from './http/index'
import './assets/css/swiper-3.4.1.min.css'
import '../static/css/reset.css'
import '../static/js/self-adaption.js'
// import '../static/js/rem.js'
// 注入路由
Vue.use(VueRouter)
/* const router = new VueRouter({
  mode: 'history',
  routes
}) */
// vuex 共享状态管理
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: createElement => createElement(App)
})
