import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Montag from '@/components/Montag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Montag',
      name: 'Montag',
      component: Montag
    }
  ],
  mode: 'history'
})
