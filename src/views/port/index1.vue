<script lang="ts" setup>
import { Graph } from '@antv/x6';

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

  graph.addNode({
    x: 60,
    y: 60,
    width: 160,
    height: 80,
    label: 'Rect With Ports',
    ports: [
      { id: 'port1' },
      {
        id: 'port2',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      }
    ]
  });
});
</script>

<template>
  <div id="container" />
</template>
