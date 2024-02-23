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
    y: 300,
    width: 200,
    height: 60,
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'image',
        selector: 'image'
      },
      {
        tagName: 'text',
        selector: 'label'
      },
      {
        tagName: 'text',
        selector: 'text'
      }
    ],
    attrs: {
      body: {
        stroke: '#5F95FF',
        strokeWidth: 1,
        fill: 'rgba(95,149,255,0.05)'
      },
      image: {
        'xlink:href':
          'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        width: 16,
        height: 16,
        x: 12,
        y: 12
      },
      label: {
        text: 'Node',
        refX: 40,
        refY: 14,
        fontSize: 14,
        textAnchor: 'start'
      },
      text: {
        text: 'this is content text',
        refX: 40,
        refY: 38,
        fontSize: 12,
        textAnchor: 'start'
      }
    }
  };

  graph.addNode(metadata);
});
</script>

<template>
  <p class="mb-4">metadata 添加多种节点</p>
  <div id="container" />
</template>
