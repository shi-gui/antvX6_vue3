<script lang="ts" setup>
import { Graph, Shape } from '@antv/x6';

const graph = ref();
onMounted(() => {
  graph.value = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: true
  });

  const rect = new Shape.Rect({
    x: 40,
    y: 40,
    width: 100,
    height: 40,
    attrs: {
      // 指定 rect 元素的样式
      body: {
        stroke: '#000', // 边框颜色
        fill: 'red' // 填充颜色
      },
      // 指定 text 元素的样式
      label: {
        text: 'rect', // 文字
        fill: 'green' // 文字颜色
      }
    }
  });
  const circle = new Shape.Circle({
    x: 280,
    y: 200,
    width: 60,
    height: 60,
    label: 'circle',
    zIndex: 2
  });
  const edge = new Shape.Edge({
    id: 'edge1',
    source: rect,
    target: circle,
    zIndex: 1
  });

  graph.value.addNode(rect);
  graph.value.addNode(circle);
  graph.value.addEdge(edge);
});
</script>

<template>
  <p class="mb-4">内置Shape构造函数添加节点</p>
  <div id="container" />
</template>
