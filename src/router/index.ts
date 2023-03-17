import { RouterModuleName } from './module';
import { createRouter, createWebHashHistory } from 'vue-router';

// 路由信息
const routes = [
  {
    path: '/',
    name: RouterModuleName.Root,
    component: () => import('../layout/home-layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: RouterModuleName.HomePage,
        component: () => import('../pages/home/index.vue')
      },
      {
        path: '/knowledge',
        name: RouterModuleName.Knowledge,
        component: () => import('../pages/knowledge/index.vue'),
        children: [
          {
            path: 'jsonFormatter',
            name: RouterModuleName.ToolOnlineJSONFormatter,
            component: () => import('../pages/knowledge/mainArea/online-json-formatter.vue')
          },
          {
            path: 'jsEditor',
            name: RouterModuleName.ToolOnlineJSEditor,
            component: () => import('../pages/knowledge/mainArea/online-js-editor.vue')
          }
        ]
      },
      {
        path: '/about',
        name: RouterModuleName.About,
        component: () => import('../pages/about/index.vue')
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