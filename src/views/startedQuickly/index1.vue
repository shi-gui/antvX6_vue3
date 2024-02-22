<script lang="ts" setup>
import { Graph } from '@antv/x6';

// 2、准备数据
const data = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 80,
      height: 40,
      label: 'hello'
    },
    {
      id: 'node2',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world'
    }
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
};

onMounted(() => {
  // 3、渲染画布
  const graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: true
  });

  graph.fromJSON(data);
});
</script>

<template>
  <!-- 1、创建容器 -->
  <div id="container" />
</template>
