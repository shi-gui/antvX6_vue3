export interface Menu {
  key: number;
  title: string;
  path?: string;
  children?: Menu[];
}

export const menu: Menu[] = [
  {
    key: 1,
    title: '快速上手',
    children: [
      {
        key: 11,
        title: '第一个例子',
        path: '/started-quickly/demo1'
      },
      {
        key: 12,
        title: '平移和缩放',
        path: '/started-quickly/demo2'
      },
      {
        key: 13,
        title: '内置图形节点',
        path: '/started-quickly/demo3'
      }
    ]
  },
  {
    key: 2,
    title: '画布',
    children: [
      {
        key: 21,
        title: '画布基础',
        path: '/graph/demo1'
      }
    ]
  },
  {
    key: 3,
    title: '基类',
    children: [
      {
        key: 31,
        title: '构造函数创建节点',
        path: '/cell/demo1'
      },
      {
        key: 32,
        title: '自定义节点',
        path: '/cell/demo2'
      },
      {
        key: 33,
        title: '构造函数自定义选择器',
        path: '/cell/demo3'
      },
      {
        key: 34,
        title: 'metadata添加节点',
        path: '/cell/demo4'
      },
      {
        key: 35,
        title: '群组选择器',
        path: '/cell/demo5'
      },
      {
        key: 36,
        title: 'metadata多元素',
        path: '/cell/demo6'
      },
      {
        key: 37,
        title: '使用css定制样式',
        path: '/cell/demo7'
      },
      {
        key: 38,
        title: '节点可编辑',
        path: '/cell/demo8'
      },
      {
        key: 39,
        title: '控制面板修改属性',
        path: '/cell/demo9'
      },
      {
        key: 310,
        title: '拖拽模板',
        path: '/cell/demo10'
      },
      {
        key: 311,
        title: '选项默认值',
        path: '/cell/demo11'
      }
    ]
  },
  {
    key: 4,
    title: '节点',
    children: [
      {
        key: 41,
        title: '节点基础',
        path: '/node/demo1'
      }
    ]
  },
  {
    key: 5,
    title: '边',
    children: [
      {
        key: 51,
        title: '创建边',
        path: '/edge/demo1'
      },
      {
        key: 52,
        title: '路径点和路由',
        path: '/edge/demo2'
      },
      {
        key: 53,
        title: '公交路线',
        path: '/edge/demo3'
      }
    ]
  },
  {
    key: 6,
    title: '群组',
    children: [
      {
        key: 61,
        title: '群组基础',
        path: '/group/demo1'
      },
      {
        key: 62,
        title: '通过交互创建嵌套',
        path: '/group/demo2'
      },
      {
        key: 63,
        title: '限制子节点移动',
        path: '/group/demo3'
      }
    ]
  },
  {
    key: 7,
    title: '连接桩',
    children: [
      {
        key: 71,
        title: '连接桩基础',
        path: '/port/demo1'
      }
    ]
  },
  {
    key: 8,
    title: '网格',
    children: [
      {
        key: 81,
        title: '网格基础',
        path: '/grid/demo1'
      }
    ]
  },
  {
    key: 9,
    title: '背景',
    children: [
      {
        key: 91,
        title: '背景基础',
        path: '/background/demo1'
      }
    ]
  },
  {
    key: 10,
    title: '剪切板',
    children: [
      {
        key: 101,
        title: '剪切板基础',
        path: '/clipboard/demo1'
      }
    ]
  }
];
