import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import School from '../views/school.vue'
import Special from '../views/special.vue'
import Upc from '../views/upc.vue'
import SE from '../views/SE.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/school',
    name: 'School',
    component: () => import('../views/school.vue')
  },
  {
	  path: '/special',
	  name: 'Speical',
	  component: () => import('../views/special.vue')
  },
  {
  	  path: '/upc',
  	  name: 'Upc',
  	  component: () => import('../views/upc.vue')
  },
  {
  	  path: '/SE',
  	  name: 'SE',
  	  component: () => import('../views/SE.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
