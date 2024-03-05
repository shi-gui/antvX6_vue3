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
    },
    // 限制子节点移动的范围
    translating: {
      restrict(view) {
        const cell = view.cell;
        if (cell.isNode()) {
          const parent = cell.getParent();
          if (parent) {
            return parent.getBBox();
          }
        }
        return null as any;
      }
    }
  });
  const child = graph.addNode({
    x: 100,
    y: 80,
    width: 120,
    height: 60,
    label: 'Child',
    zIndex: 10,
    attrs: {
      body: {
        stroke: 'none',
        fill: '#3199FF'
      },
      label: {
        fill: '#fff'
      }
    }
  });
  const parent = graph.addNode({
    x: 40,
    y: 40,
    width: 240,
    height: 160,
    zIndex: 1,
    label: 'Parent\n(try to move me)',
    attrs: {
      label: { refY: 130 },
      body: {
        fill: '#fffbe6'
      }
    }
  });
  parent.addChild(child);
});
</script>

<template>
  <div id="container" />
</template>
