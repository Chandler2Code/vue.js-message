import Vue from 'vue'
import Router from 'vue-router'
import title from '@/components/content/home/title'
import email from '@/components/content/email'
import footer from '@/components/footer/footer'
import me from '@/components/content/me'
import service from  '@/components/content/home/service'
import help from  '@/components/content/home/help'
import sell from  '@/components/content/home/sell'
import order from '@/components/order/order'
import orderManage from '@/components/order/orderManage'
import messageManage from '@/components/order/messageManage'
import addressManage from '@/components/order/addressManage'
import updateUserInfo from '@/components/order/updateUserInfo'
Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active', 
  routes: [
    {
      path:'/',
      component:footer
    },

    {
      path:'/title',
      component:title,
      children:[
        {
          path:'/',
          name:'home',
          component: service
        },
        {
          path:'service',
          component: service,
        },
        {
          path:'sell',
          component: sell
        },
        {
          path:'help',
          component: help
        },
      ]
    },
    {
      path:'/email',
      component:email,
    },
    {
      path:'/me',
      component:me,
    },
    {
      path:'/order',
      name:'order',
      component:order,
    },
    {
      path:'/orderManage',
      component:orderManage,
    },
    {
      path:'/messageManage',
      component:messageManage,
    },
    {
      path:'/addressManage',
      name:'addressManage',
      component:addressManage,
    },
  ]
  
})
