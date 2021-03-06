import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Logup from '@/components/Logup'
import Home from '@/pages/Home/Home'
import Topic from '@/pages/Topic/Topic'
import Explore from '@/pages/Explore/Explore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logup',
      name: 'Logup',
      component: Logup
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
