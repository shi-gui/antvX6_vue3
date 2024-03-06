<script lang="ts" setup>
import { Graph } from '@antv/x6';

let graph: Graph;
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    background: {
      color: '#fffbe6',
      opacity: 0.1
    },
    grid: {
      size: 10,
      visible: true
    }
  });
});

function handleColorChange(e: any) {
  const color = e.target.value;
  graph.drawBackground({
    color: color
  });
}
</script>

<template>
  <input
    type="color"
    class="mb-4"
    id="color-picker"
    @change="handleColorChange"
  />
  <div id="container" />
</template>
