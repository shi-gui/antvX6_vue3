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
    embedding: {
      enabled: true,
      findParent({ node }) {
        // 返回容器渲染到画布后的包围盒
        const bbox = node.getBBox();
        return this.getNodes().filter(node => {
          // 只有 data.parent 为 true 的节点才是父节点
          const data = node.getData<any>();
          if (data && data.parent) {
            const targetBBox = node.getBBox();
            return bbox.isIntersectWithRect(targetBBox);
          }
          return false;
        });
      }
    }
  });

  graph.addNode({
    x: 40,
    y: 140,
    width: 120,
    height: 60,
    label: 'Child\n(unembed)',
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
  graph.addNode({
    x: 500,
    y: 100,
    width: 120,
    height: 60,
    label: 'Child\n(unembed)',
    zIndex: 10,
    attrs: {
      body: {
        stroke: 'none',
        fill: '#47C769'
      },
      label: {
        fill: '#fff'
      }
    }
  });
  graph.addNode({
    x: 200,
    y: 80,
    width: 240,
    height: 160,
    zIndex: 1,
    label: 'Parent',
    attrs: {
      body: {
        fill: '#fffbe6'
      }
    },
    data: {
      parent: true
    }
  });
  graph.on('node:change:parent', ({ node }) => {
    node.attr({
      label: {
        text: 'Child\n(embed)'
      }
    });
  });
});
</script>

<template>
  <div id="container" />
</template>
