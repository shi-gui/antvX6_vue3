<script lang="ts" setup>
import { Graph, Node } from '@antv/x6';

const graph = ref();
onMounted(() => {
  graph.value = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: true,
    background: {
      color: '#fffbe6' // 设置画布背景颜色
    }
  });

  const customNode: Node = new Node({
    id: 'customNodeId',
    shape: 'customNode',
    x: 400,
    y: 350,
    width: 200,
    height: 60,
    // 自定义节点markup是必须的
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      // 可以定义多个文本节点
      {
        tagName: 'text',
        selector: 'label'
      },
      {
        tagName: 'text',
        selector: 'label2'
      }
    ],
    attrs: {
      body: {
        ref: 'label', // 关联markup中的文本选择器label
        stroke: '#000',
        fill: '#fff',
        rx: 3,
        ry: 3,
        refWidth: 100,
        refHeight: 100,
        refX: -50,
        refY: -50
      },
      label: {
        fill: '#000',
        fontSize: 12,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
        text: '自定义node' // 文字
      },
      label2: {
        fill: 'red',
        text: '自定义node2' // 文字
      }
    }
  });

  graph.value.addNode(customNode);
});
</script>

<template>
  <p class="mb-4">new Node构造函数添加节点</p>
  <div id="container" />
</template>
