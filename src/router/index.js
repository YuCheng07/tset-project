import { createRouter, createWebHistory } from 'vue-router'
import WorkShopView from '../views/WorkShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/group-project/',
  routes: [
    {
      path: '/',
      name: 'workshop',
      component: WorkShopView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
