<script lang="ts" setup>
import { Graph, DataUri } from '@antv/x6';

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
    width: 1000,
    height: 600,
    grid: true,
    background: {
      color: '#fffbe6' // 设置画布背景颜色
    },
    // 开启画布平移
    panning: {
      enabled: true
    }
  });

  graph.value.fromJSON(data);
});

// 画布平移
function isPan() {
  alert(graph.value.isPannable());
}
function disablePan() {
  graph.value.disablePanning();
}
function enablePan() {
  graph.value.enablePanning();
}
function togglePan() {
  graph.value.togglePanning();
}

// 画布缩放
function zoom() {
  alert(graph.value.zoom());
}
function zoomAdd() {
  graph.value.zoom(0.5);
}
function zoomReduce() {
  graph.value.zoom(-0.5);
}

// 内容居中
function centerContent() {
  graph.value.centerContent();
}

// 导出 SVG
function toSVG() {
  graph.value.toSVG(
    (dataUri: string) => {
      // 下载
      DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg');
    },
    {
      // 导出 svg 的尺寸
      preserveDimensions: {
        width: 200,
        height: 200
      },
      // 自定义样式
      stylesheet: `
        rect {
          fill: red;
        }
      `,
      beforeSerialize: (svg: SVGSVGElement) => {
        console.log('我执行了', svg);
      }
    }
  );
}
function toPNG() {
  graph.value.toPNG(
    (dataUri: string) => {
      // 下载
      DataUri.downloadDataUri(dataUri, 'chart.png');
    },
    {
      width: 400,
      height: 400,
      backgroundColor: '#fffbe6',
      padding: 40,
      quality: 1
    }
  );
}

// 销毁画布
function dispose() {
  graph.value.dispose();
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="isPan">画布是否可以平移</a-button>
    <a-button @click="disablePan">禁止画布平移</a-button>
    <a-button @click="enablePan">启用画布平移</a-button>
    <a-button @click="togglePan">切换画布平移状态</a-button>

    <a-button @click="zoom">获取缩放级别</a-button>
    <a-button @click="zoomAdd">原缩放级别增加</a-button>
    <a-button @click="zoomReduce">原缩放级别减少</a-button>

    <a-button @click="centerContent">内容居中</a-button>

    <a-button @click="toSVG">导出SVG</a-button>
    <a-button @click="toPNG">导出PNG</a-button>

    <a-button @click="dispose">销毁画布</a-button>
  </p>
  <!-- 1、创建容器 -->
  <div id="container" />
</template>
