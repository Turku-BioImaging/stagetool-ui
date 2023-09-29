import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/what-is-stagetool',
      name: 'what-is-stagetool',
      component: () => import('../views/WhatIsStageTool.vue')
    }
  ]
})

export default router
