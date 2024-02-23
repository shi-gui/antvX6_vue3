<script lang="ts" setup>
import { Graph, Shape } from '@antv/x6';

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: true
  });

  const textBlock = new Shape.TextBlock({
    x: 300, // Number，必选，节点位置的 x 值
    y: 40, // Number，必选，节点位置的 y 值
    width: 360, // Number，可选，节点大小的 width 值
    height: 120, // Number，可选，节点大小的 height 值
    text: 'hello',
    attrs: {
      label: {
        contenteditable: 'true'
      }
    }
  });

  graph.addNode(textBlock);
});
</script>

<template>
  <div id="container" />
</template>
