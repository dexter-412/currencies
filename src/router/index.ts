import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import { RouteName, RoutePath } from '@/application/types/app/enums';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: RoutePath.Home,
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: RouteName.Home,
          component: () => import('@/pages/HomePage.vue'),
        },
      ],
    },
    {
      path: RoutePath.Edited,
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: RouteName.Edited,
          component: () => import('@/pages/EditedPage.vue'),
        },
      ],
    },
    {
      path: RoutePath.Edit,
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: RouteName.Edit,
          component: () => import('@/pages/EditPage.vue'),
        },
      ],
    },
    {
      path: RoutePath.Search,
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: RouteName.Search,
          component: () => import('@/pages/SearchPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/404Page.vue'),
    },
  ],
})

export default router
