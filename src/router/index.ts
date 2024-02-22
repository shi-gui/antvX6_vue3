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
        path: 'graph/demo1',
        name: 'GraphDemo1',
        component: () => import('@/views/graph/index1.vue')
      },
      // 基类
      {
        path: 'cell/demo1',
        name: 'CellDemo1',
        component: () => import('@/views/cell/index1.vue')
      },
      {
        path: 'cell/demo2',
        name: 'CellDemo2',
        component: () => import('@/views/cell/index2.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
