<script lang="ts" setup>
import { Graph } from '@antv/x6';
import { message } from 'ant-design-vue';

let graph: Graph;
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    background: {
      color: '#fffbe6'
    },
    selecting: {
      enabled: true,
      showNodeSelectionBox: true
    },
    clipboard: {
      enabled: true,
      useLocalStorage: true
    }
  });

  graph.addNode({
    id: 'node1',
    x: 40,
    y: 40,
    width: 80,
    height: 40,
    attrs: {
      body: {
        fill: '#fffbe6',
        stroke: '#b7daff'
      },
      label: {
        text: 'Node 1',
        fill: '#b7daff'
      }
    }
  });
  graph.addNode({
    id: 'node2',
    x: 160,
    y: 200,
    width: 80,
    height: 80,
    shape: 'circle',
    attrs: {
      body: {
        fill: '#fffbe6',
        stroke: '#b7daff'
      },
      label: {
        text: 'Node 2',
        fill: '#b7daff'
      }
    }
  });

  graph.addEdge({
    source: 'node1', // 源节点
    target: 'node2' // 目标节点
  });
});

function handleCopy() {
  const cells = graph.getSelectedCells();
  if (cells.length) {
    graph.copy(cells, {
      useLocalStorage: true
    });
    message.success('复制成功');
  }
}

function handlePaste() {
  if (graph.isClipboardEmpty()) {
    message.warning('剪切板为空，不可粘贴');
  } else {
    const cells = graph.paste({ offset: 100 });
    // 清空选区
    graph.cleanSelection();
    // 清空剪切板
    graph.cleanClipboard();
    // 选中新复制的节点
    graph.select(cells);
    message.success('粘贴成功');
  }
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="handleCopy">复制</a-button>
    <a-button @click="handlePaste">粘贴</a-button>
  </p>
  <div id="container" />
</template>
