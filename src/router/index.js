import { createRouter, createWebHistory } from 'vue-router'

import CaixaView from '../CaixaView.vue'
import DashboardView from '../DashBoardView.vue'
import CadastroProdutos from '../CadastroProdutos.vue'
import InicioView from '../InicioView.vue'

const routes = [
  {
    path: '/CaixaView',
    name: 'CaixaView',
    component: CaixaView
  },
  {
    path: '/DashboardView',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/CadastroProdutos',
    name: 'CadastroProdutos',
    component: CadastroProdutos
  },
  {
    path: '/',
    name: 'InicioView',
    component: InicioView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
