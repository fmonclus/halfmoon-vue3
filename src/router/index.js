import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/Menu1',
      name: 'Menu1',      
      component: () => import('../views/Menu1View.vue')
    },
    {
      path: '/Menu2',
      name: 'Menu2',
      component: () => import('../views/Menu2View.vue')
    },
    {
      path: '/Menu3',
      name: 'Menu3',
      component: () => import('../views/Menu3View.vue')
    }
  ]
})

export default router
