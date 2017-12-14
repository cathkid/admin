// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css'
import './css/default.css'
import './css/main.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
window.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted:function(){
  }
})


Vue.component('navBox', {
  // 选项
  template: '<li>A custom component!</li>'
})