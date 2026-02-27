import { createRouter, createWebHistory } from 'vue-router'

import CaixaView from '../CaixaView.vue'
import DashboardView from '../DashBoardView.vue'
import CadastroProdutos from '../CadastroProdutos.vue'

const routes = [
  {
    path: '/',
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
