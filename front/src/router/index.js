import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Pokedex from '@/views/Pokedex'
import Pokemon from '@/views/Pokemon'
import Types from '@/views/Types'

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
    component: Pokedex
  },
  {
    path: '/pokedex/:pokemonName/:pokemonId',
    name: 'Pokemon',
    component: Pokemon
  },
  {
    path: '/pokedex/types/:typeName/:typeId',
    name: 'Types',
    component: Types
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
