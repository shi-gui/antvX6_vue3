<script lang="ts" setup>
import { Graph, Shape, ObjectExt } from '@antv/x6';

let graph: Graph;
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    background: {
      color: '#fffbe6'
    },
    grid: {
      visible: true,
      size: 10
    }
  });
});

function addShape() {
  const rect = new Shape.Rect({
    x: 10,
    y: 40,
    width: 100,
    height: 45,
    label: 'rect'
  });
  graph.addNode(rect);
}

function setDefaultConfig() {
  Shape.Rect.config({
    width: 80,
    height: 40,
    attrs: {
      label: {
        fill: 'red'
      }
    },
    data: {
      id: 1
    },
    // 通过钩子将 label 应用到 'attrs/text/text' 属性上(之前是通过label直接设置的)
    propHooks(metadata) {
      const { label, ...others } = metadata;
      if (label) {
        ObjectExt.setByPath(others, 'attrs/text/text', label);
      }
      return others;
    }
  });
  addShape();
}

function toJSON() {
  const data = graph.toJSON();
  console.log(data);
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="addShape">添加图形</a-button>
    <a-button @click="setDefaultConfig">设默认值并添加图形</a-button>
    <a-button @click="toJSON">toJSON</a-button>
  </p>
  <div id="container" />
</template>
