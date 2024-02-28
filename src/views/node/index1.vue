<script lang="ts" setup>
import { Graph, Shape, Node } from '@antv/x6';

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
    }
  });
});

function addShape() {
  const rect = new Shape.Rect({
    x: 100,
    y: 200,
    width: 80,
    height: 40,
    angle: 30,
    attrs: {
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    }
  });
  graph.addNode(rect);
}

let rectNode: Node;
function createNode() {
  rectNode = new Shape.Rect();
  // 添加到画布
  graph.addNode(rectNode);
}

function setAttrs() {
  rectNode
    // 设置节点位置
    .position(100, 200)
    // 设置节点大小
    .resize(80, 40)
    // 旋转节点
    .rotate(30)
    // 设置节点样式
    .attr({
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    });
  // 添加到画布
  graph.addNode(rectNode);
}

function addNode() {
  graph.addNode({
    shape: 'rect', // 指定使用何种图形，默认值为 'rect'
    x: 100,
    y: 200,
    width: 80,
    height: 40,
    angle: 30,
    attrs: {
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    }
  });
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="addShape">构造函数添加</a-button>
    <a-button @click="createNode">创建节点</a-button>
    <a-button @click="setAttrs">为创建的节点设置属性</a-button>
    <a-button @click="addNode">graph.addNode</a-button>
  </p>
  <div id="container" />
</template>
