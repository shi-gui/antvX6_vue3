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
        path: '/canvas/demo1'
      }
    ]
  },
  {
    key: 3,
    title: '基类'
  },
  {
    key: 4,
    title: '节点'
  },
  {
    key: 5,
    title: '边'
  },
  {
    key: 6,
    title: '群组'
  },
  {
    key: 7,
    title: '连接桩'
  }
];
