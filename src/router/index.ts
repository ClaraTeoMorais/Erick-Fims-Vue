import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/views/SobreView.vue'),
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('@/views/ServicosView.vue'),
    },
    {
      path: '/servicos/fotos',
      name: 'servico-fotos',
      component: () => import('@/views/FotosView.vue'),
    },
    {
      path: '/servicos/filmagens',
      name: 'servico-filmagens',
      component: () => import('@/views/FilmagensView.vue'),
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/views/ContatoView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'nao-encontrado',
      component: () => import('@/views/NaoEncontradoView.vue'),
    },
  ],
})

export default router
