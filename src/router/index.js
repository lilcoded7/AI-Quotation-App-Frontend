import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/starting',
      name: 'starting',
      component: () => import('../views/starting/StartingScreen.vue')
    },
    {
      path: '/stop',
      name: 'stop',
      component: () => import('../views/stop/StopScreen.vue')
    },
  ],
})

export default router
