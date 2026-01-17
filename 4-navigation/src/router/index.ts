import { createRouter, createWebHistory } from 'vue-router'
import HistoryView from '../views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/game',
    },
    {
      path: '/game',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (Game.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GameBoardView.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
  ],
})

export default router
