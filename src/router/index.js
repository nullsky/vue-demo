import RouterModuleName from './module.js';
import { createRouter, createWebHashHistory } from 'vue-router';

// 路由信息
const routes = [
  {
    path: '/',
    name: RouterModuleName.Root,
    component: () => import('../layout/home-layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: RouterModuleName.HomePage,
        component: () => import('../pages/home')
      },
      {
        path: '/knowledge',
        name: RouterModuleName.Knowledge,
        component: () => import('../pages/knowledge')
      },
      {
        path: '/about',
        name: RouterModuleName.About,
        component: () => import('../pages/about')
      }
    ]
  }
];

// 路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;