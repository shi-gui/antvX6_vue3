<script lang="ts" setup>
import { Graph } from '@antv/x6';

// 2、准备数据
const data = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 80,
      height: 40,
      label: 'hello'
    },
    {
      id: 'node2',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world'
    }
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
};

const graph = ref();
onMounted(() => {
  // 3、渲染画布
  graph.value = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    background: {
      color: '#fffbe6' // 设置画布背景颜色
    },
    grid: {
      size: 10,
      visible: true
    }
  });

  graph.value.fromJSON(data);
});

// 平移
function translate() {
  graph.value.translate(80, 40);
}

// 缩放
const num = ref(0.5);
function zoom() {
  num.value = num.value === 0.5 ? -0.5 : 0.5;
  graph.value.zoom(num.value);
}
</script>

<template>
  <div class="pb-2">
    <a-button @click="translate" class="mr-2">平移</a-button>
    <a-button @click="zoom">缩放</a-button>
  </div>
  <!-- 1、创建容器 -->
  <div id="container" />
</template>
