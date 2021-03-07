import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Pokedex.vue')
  },
  {
    path: '/pokedex/:pokemonName/:pokemonId',
    name: 'Pokemon',
    component: () => import('../views/Pokemon.vue')
  },
  {
    path: '/pokedex/types/:typeName/:typeId',
    name: 'Types',
    component: () => import('../views/Types.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
