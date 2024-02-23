<script lang="ts" setup>
import { Graph, Shape } from '@antv/x6';

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: true
  });

  const rect = new Shape.Rect({
    x: 40,
    y: 40,
    width: 100,
    height: 40,
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      }
      // 这里注释掉之后，审查元素将不会再出现text元素
      // {
      //   tagName: 'text',
      //   selector: 'label'
      // }
    ],
    attrs: {
      // 指定rect元素样式
      rect: {
        stroke: '#000', // 边框颜色
        fill: 'red' // 填充颜色
      }
      // 指定text元素样式
      // label: {
      //   text: 'rect', // 文字
      //   fill: 'green' // 文字颜色
      // }
    }
  });

  graph.addNode(rect);
});
</script>

<template>
  <p class="mb-4">在Shape.Rect中markup本来是默认存在的，我们这里覆盖其值</p>
  <div id="container" />
</template>
