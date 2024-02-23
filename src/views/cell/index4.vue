<script lang="ts" setup>
import { Graph, Node } from '@antv/x6';

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: true
  });

  const metadata: Node.Metadata = {
    x: 10,
    y: 150,
    shape: 'circle',
    width: 200,
    height: 60,
    markup: [
      {
        tagName: 'circle',
        selector: 'body'
      },
      {
        tagName: 'text',
        selector: 'label'
      }
    ],
    attrs: {
      circle: {
        fill: '#fff',
        rx: 3,
        ry: 3,
        refWidth: 1,
        refHeight: 1,
        refX: 0,
        refY: 0
      },
      text: {
        fill: '#000',
        fontSize: 14,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
        pointerEvents: 'none',
        text: 'metadata'
      }
    }
  };

  graph.addNode(metadata);
});
</script>

<template>
  <p class="mb-4">addNode添加节点，通过metadata</p>
  <div id="container" />
</template>
