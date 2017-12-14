import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login'
import frame from '@/components/frame'
import nav1 from '@/components/nav1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/frame',
      name: 'frame',
       component: frame,
       children: [
            {
                path: "nav1",
                component: nav1
            } 
        ]
    },
    {
    	path: '/login',
      name: 'login',
      component: login
    }
  ]
})
