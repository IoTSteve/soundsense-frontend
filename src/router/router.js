import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reg from '../views/Regpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reg',
    name: 'Regpage',
    component: Reg
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router




/*{
  path: '/reg',
  name: 'Regpage',
  components: {
    default: () => import(/* webpackChunkName: "about" * / '../views/Regpage.vue'),
  },
  */