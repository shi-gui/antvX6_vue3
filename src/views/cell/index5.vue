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
    y: 220,
    width: 200,
    height: 60,
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'text',
        selector: 'label',
        groupSelector: 'textGroup'
      },
      {
        tagName: 'text',
        selector: 'content',
        groupSelector: 'textGroup'
      }
    ],
    attrs: {
      body: {
        stroke: '#5F95FF',
        strokeWidth: 1,
        fill: 'rgba(95,149,255,0.05)'
      },
      label: {
        text: 'Node',
        refX: 40,
        refY: 14,
        fontSize: 12,
        textAnchor: 'start'
      },
      // 优先级最大
      content: {
        text: 'this is content text',
        refX: 40,
        refY: 38,
        fontSize: 12,
        // fill: 'green',
        textAnchor: 'start'
      },
      // 优先级次之
      textGroup: {
        fill: 'red'
      }
      // 标签 优先级最小
      // text:{
      //   text: 'this is content text',
      //   fill: '#5F95FF',
      // },
    }
  };

  graph.addNode(metadata);
});
</script>

<template>
  <p class="mb-4">groupSelector 群组选择器</p>
  <div id="container" />
</template>
