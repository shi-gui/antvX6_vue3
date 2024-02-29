<script lang="ts" setup>
import { Graph, Shape } from '@antv/x6';

let graph: Graph;
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    background: {
      color: '#fffbe6'
    },
    grid: {
      size: 10,
      visible: true
    },
    // 当源/目标是画布上的点时，需要开启 allowBlank 选项（默认已经开启）才能生效
    connecting: {
      allowBlank: true
    }
  });
});

const obj1 = {
  x: 100,
  y: 100,
  width: 80,
  height: 40,
  attrs: {
    body: {
      fill: 'blue'
    },
    label: {
      text: 'Hello',
      fill: 'white'
    }
  }
};
const obj2 = {
  x: 100,
  y: 300,
  width: 80,
  height: 40,
  attrs: {
    body: {
      fill: 'blue'
    },
    label: {
      text: 'World',
      fill: 'white'
    }
  }
};
function test1() {
  const rect = new Shape.Rect(obj1);
  const rect1 = new Shape.Rect(obj2);
  graph.addNode(rect);
  graph.addNode(rect1);

  const edge = new Shape.Edge({
    source: rect,
    target: rect1
  });
  graph.addEdge(edge);
}

const rect1 = new Shape.Rect(obj1);
const rect2 = new Shape.Rect(obj2);
const edge = new Shape.Edge();
function test2() {
  graph.addNode(rect1).position(200, 100);
  graph.addNode(rect2).position(200, 300);
  graph.addEdge(edge);
}

function test3() {
  edge.setSource(rect1);
  edge.setTarget(rect2);
}

function test4() {
  // 创建节点
  const rect1 = new Shape.Rect({
    x: 300,
    y: 100,
    width: 80,
    height: 40,
    label: 'rect1'
  });
  const rect2 = new Shape.Rect({
    x: 300,
    y: 200,
    width: 80,
    height: 40,
    label: 'rect2'
  });
  graph.addNode(rect1);
  graph.addNode(rect2);
  graph.addEdge({
    // 指定使用何种图形，默认值为 'edge' 双线边：double-edge 阴影边：shadow-edge
    shape: 'edge',
    source: rect1,
    target: rect2,
    label: '默认边'
  });

  const rect3 = new Shape.Rect({
    x: 300,
    y: 300,
    width: 80,
    height: 40,
    label: 'rect3'
  });
  graph.addNode(rect3);
  graph.addEdge({
    shape: 'double-edge',
    source: rect2,
    target: rect3,
    label: '双线边'
  });

  const rect4 = new Shape.Rect({
    x: 300,
    y: 400,
    width: 80,
    height: 40,
    label: 'rect4'
  });
  graph.addNode(rect4);
  graph.addEdge({
    shape: 'shadow-edge',
    source: rect3,
    target: rect4,
    label: '阴影边'
  });
}

function test5() {
  // 创建节点
  const rect1 = new Shape.Rect({
    id: 'rect1',
    x: 400,
    y: 100,
    width: 80,
    height: 40,
    label: 'rect1'
  });
  graph.addNode(rect1);
  const rect2 = new Shape.Rect({
    id: 'rect2',
    x: 400,
    y: 200,
    width: 80,
    height: 40,
    label: 'rect2'
  });
  graph.addNode(rect2);
  // 第一种方式
  graph.addEdge({
    source: rect1, // 源节点
    target: rect2, // 目标节点
    label: '通过节点方式添加边'
  });

  const rect3 = new Shape.Rect({
    id: 'rect3',
    x: 400,
    y: 300,
    width: 80,
    height: 40,
    label: 'rect3',
    ports: [
      {
        id: 'out-port-1',
        attrs: {
          circle: {
            r: 6,
            magnet: true, //使链接桩在连线交互时可以被连接上
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      }
    ]
  });
  graph.addNode(rect3);
  // 第二种方式
  graph.addEdge({
    source: 'rect2', // 源节点
    target: 'rect3', // 目标节点
    label: '通过节点id的方式添加边'
  });

  const rect4 = new Shape.Rect({
    id: 'rect4',
    ports: [
      {
        id: 'in-port-1',
        attrs: {
          circle: {
            r: 6,
            magnet: true, //使链接桩在连线交互时可以被连接上
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      }
    ],
    x: 400,
    y: 400,
    width: 80,
    height: 40,
    label: 'rect4'
  });
  graph.addNode(rect4);
  // 第三种方式
  graph.addEdge({
    source: { cell: rect3, port: 'out-port-1' }, // 源节点和链接桩 ID
    target: { cell: 'rect4', port: 'in-port-1' }, // 目标节点 ID 和链接桩 ID
    // （当源/目标是画布上的点时，需要开启 allowBlank 选项（默认已经开启）才能生效）（画布属性）
    label: '通过链接桩的方式添加'
  });

  // 第四种方式
  graph.addEdge({
    source: 'rect4', // 源节点 ID
    target: { x: 438, y: 500 }, // 目标点
    label: 'target为坐标'
  });
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="test1">构造函数添加边</a-button>
    <a-button @click="test2">默认边</a-button>
    <a-button @click="test3">边的再设置</a-button>
    <a-button @click="test4">边的类型</a-button>
    <a-button @click="test5">四种添加边的方式</a-button>
  </p>
  <div id="container" />
</template>
