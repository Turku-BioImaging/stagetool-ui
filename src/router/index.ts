import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import { inject } from 'vue'
import HomeView from '../views/HomeView.vue'
import OutputView from '../views/OutputView.vue'
// import { useTaskStore } from '../stores/task'
import { StageToolClient } from '@/classes/StageToolClient'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/output/:id',
      name: 'output',
      component: OutputView
    },
    {
      path: '/what-is-stagetool',
      name: 'what-is-stagetool',
      component: () => import('../views/WhatIsStageTool.vue')
    }
  ]
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  if (to.name === 'output') {
    const taskId = to.params.id
    const store: any = inject('taskStore')
    try {
      let fetchedTask = await StageToolClient.getTask(taskId.toString())
      await fetchedTask.populate()
      await fetchedTask.getImages()
      await fetchedTask.getVisualizations()
      await store.setTask(fetchedTask)
      next()
    } catch (error) {
      console.error('Error fetching task:', error)
      next(false)
    }
  } else {
    next()
  }
})

export default router
