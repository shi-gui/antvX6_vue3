import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/started-quickly/demo1',
    component: () => import('@/layout/index.vue'),
    children: [
      // 快速上手
      {
        path: 'started-quickly/demo1',
        name: 'startedQuicklyDemo1',
        component: () => import('@/views/startedQuickly/index1.vue')
      },
      {
        path: 'started-quickly/demo2',
        name: 'startedQuicklyDemo2',
        component: () => import('@/views/startedQuickly/index2.vue')
      },
      {
        path: 'started-quickly/demo3',
        name: 'startedQuicklyDemo3',
        component: () => import('@/views/startedQuickly/index3.vue')
      },
      // 画布
      {
        path: 'canvas/demo1',
        name: 'canvasDemo1',
        component: () => import('@/views/canvas/index1.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
