import { createRouter, createWebHistory } from 'vue-router'

import CaixaView from '../CaixaView.vue'
import DashboardView from '../DashBoardView.vue'
import CadastroProdutos from '../CadastroProdutos.vue'
import InicioView from '../InicioView.vue'
import ComprasView from '../ComprasView.vue'
import PesquisaView from '../PesquisaView.vue'

import ProdutoEditar from '../ProdutoEditarView.vue'
import FornecedorEditar from '../FornecedorEditarView.vue'
import VendaEditar from '../ComprasEditarView.vue'


const routes = [
  {
    path: '/CaixaView',
    name: 'CaixaView',
    component: CaixaView
  },
  {
    path: '/ComprasView',
    name: 'ComprasView',
    component: ComprasView
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
    path: '/PesquisaView',
    name: 'PesquisaView',
    component: PesquisaView
  },
  {
    path: '/produto/editar/:id', // O ":id" é a parte que muda para cada produto
    name: 'ProdutoEditar',
    component: ProdutoEditar,
    props: true 
  },
  {
    path: '/fornecedor/editar/:id', 
    name: 'FornecedorEditar',
    component: FornecedorEditar,
    props: true 
  },
  {
    path: '/compra/editar/:id', 
    name: 'VendaEditar',
    component: VendaEditar,
    props: true 
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
