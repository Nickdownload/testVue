import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/HelloWorld'
import Home from '../pages/Home'
import Login from '../pages/Login'
const router =new VueRouter({
    routes:[
        {
          path:'/',
          component:Index
        },
        {
          path:'/food',
          component: ()=>import(/*webpackChunkName:'food'*/'../pages/Food'),
          meta:{
            needLogin:true
          }
        },
        {
          path:'/home',
          component:Home,
        },
        {
            path:'/login',
            component:Login,
          },
          {
            path:'/news',
            component:()=>import(/*webpackChunkName:'news'*/ '../pages/New'),
          },
        {
            path:"/son/:name",
            name:'son',
            component:()=>import(/*webpackChunkName: 'Son'*/ '../pages/Son')
        }
    ]
})

const isLogin = false

router.beforeEach((to,from,next)=>{
    if(to.path==='/login'){
        if(isLogin){
            next('/home')
        }else{
            next()
        }
    }else{
      if(isLogin){
          next()
      }else{
          if(to.meta.needLogin){
            const {query} = from
            next({
                path:'/login',
                query
            })
          }
          next()
      }
    }
})

export default router