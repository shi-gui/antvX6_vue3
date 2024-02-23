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
    y: 370,
    width: 200,
    height: 60,
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'text',
        selector: 'label'
      }
    ],
    attrs: {
      rect: {
        class: 'markup-class',
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
        text: 'text',
        fontSize: 14,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
        pointerEvents: 'auto'
      }
    }
  };

  graph.addNode(metadata);
});
</script>

<template>
  <p class="mb-4">使用css定制样式</p>
  <div id="container" />
</template>

<style lang="less" scoped>
// 这里的优先级要高一点
#container ::v-deep .markup-class {
  fill: #2ecc71;
}
</style>
