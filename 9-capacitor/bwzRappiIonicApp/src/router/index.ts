import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/game'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        name: 'game',
        redirect: '/tabs/game'
      },
      {
        path: 'game',
        component: () => import('@/views/GamePage.vue')
      },
      {
        path: 'history',
        component: () => import('@/views/HistoryPage.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/AboutPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
