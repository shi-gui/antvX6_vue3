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
      },
      {
        path: 'cell/demo3',
        name: 'CellDemo3',
        component: () => import('@/views/cell/index3.vue')
      },
      {
        path: 'cell/demo4',
        name: 'CellDemo4',
        component: () => import('@/views/cell/index4.vue')
      },
      {
        path: 'cell/demo5',
        name: 'CellDemo5',
        component: () => import('@/views/cell/index5.vue')
      },
      {
        path: 'cell/demo6',
        name: 'CellDemo6',
        component: () => import('@/views/cell/index6.vue')
      },
      {
        path: 'cell/demo7',
        name: 'CellDemo7',
        component: () => import('@/views/cell/index7.vue')
      },
      {
        path: 'cell/demo8',
        name: 'CellDemo8',
        component: () => import('@/views/cell/index8.vue')
      },
      {
        path: 'cell/demo9',
        name: 'CellDemo9',
        component: () => import('@/views/cell/index9.vue')
      },
      {
        path: 'cell/demo10',
        name: 'CellDemo10',
        component: () => import('@/views/cell/index10.vue')
      },
      {
        path: 'cell/demo11',
        name: 'CellDemo11',
        component: () => import('@/views/cell/index11.vue')
      },
      // 节点
      {
        path: 'node/demo1',
        name: 'NodeDemo1',
        component: () => import('@/views/node/index1.vue')
      },
      // 边
      {
        path: 'edge/demo1',
        name: 'EdgeDemo1',
        component: () => import('@/views/edge/index1.vue')
      },
      {
        path: 'edge/demo2',
        name: 'EdgeDemo2',
        component: () => import('@/views/edge/index2.vue')
      },
      {
        path: 'edge/demo3',
        name: 'EdgeDemo3',
        component: () => import('@/views/edge/index3.vue')
      },
      // 群组
      {
        path: 'group/demo1',
        name: 'GroupDemo1',
        component: () => import('@/views/group/index1.vue')
      },
      {
        path: 'group/demo2',
        name: 'GroupDemo2',
        component: () => import('@/views/group/index2.vue')
      },
      {
        path: 'group/demo3',
        name: 'GroupDemo3',
        component: () => import('@/views/group/index3.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
