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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }//把要跳转的地址作为参数传到下一步
    })
  }else{
    next()
  }
}else{
  next() // 确保一定要调用 next()
}
})

Vue.component('navBox', {
  // 选项
  template: '<li>A custom component!</li>'
})