import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login'
import frame from '@/components/frame'
import nav1 from '@/components/nav1'
import nav2 from '@/components/nav2'
import nav3 from '@/components/nav3'
import nav4 from '@/components/nav4'
import nav5 from '@/components/nav5'
import nav6 from '@/components/nav6'
import nav7 from '@/components/nav7'
import nav8 from '@/components/nav8'
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
                component: nav1,
                meta: {
                  requiresAuth: true,
                }
            },
           {
             path: "nav2",
             component: nav2,
             meta: {
               requiresAuth: true,
             }
           },
           {
             path: "nav3",
             component: nav3,
             meta: {
               requiresAuth: true,
             }
           },
         {
           path: "nav4",
           component: nav4,
           meta: {
             requiresAuth: true,
           }
         },
         {
           path: "nav5",
           component: nav5,
           meta: {
             requiresAuth: true,
           }
         },
         {
           path: "nav6",
           component: nav6,
           meta: {
             requiresAuth: true,
           }
         },
         {
           path: "nav7",
           component: nav7,
           meta: {
             requiresAuth: true,
           }
         },
         {
           path: "nav8",
           component: nav8,
           meta: {
             requiresAuth: true,
           }
         }
       ]
    },
    {
    	path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'frame',
      component: frame,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "nav1",
          component: nav1,
          meta: {
            requiresAuth: true,
          }
        }
      ]
    }
  ]
})
