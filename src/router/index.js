import { createRouter, createWebHistory } from 'vue-router'
import WorkShopView from '@/views/WorkShopView.vue'
import HeroMemberView from '@/views/HeroMemberView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/group-project/',
  routes: [
    {
      path: '/',
      name: 'workshop',
      component: WorkShopView,
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: () => import('../components/SideBar.vue'),
    },
    {
      path: '/page-control',
      name: 'page-control',
      component: () => import('../components/PageControl.vue'),
    },
    {
      path: '/main-footer',
      name: 'main-footer',
      component: () => import('../components/MainFooter.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/default',
      name: 'default',
      component: () => import('../views/DefaultUi.vue'),
    },
    {
      path: '/hero-member',
      name: 'hero-member',
      component: HeroMemberView,
    },
    {
      path: '/old-sidebar',
      name: 'old-sidebar',
      component: () => import('../components/OldSideBar.vue'),
    },
  ],
})

export default router
