<script lang="ts" setup>
import { Graph } from '@antv/x6';

const formData = ref({
  type: 'dot'
});
let graph: Graph;
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: {
      size: 10,
      visible: true
    }
  });
});
function handleChange(val: string) {
  graph.drawGrid({
    type: val,
    args: {
      color: '#f0f0f0' // 网格线/点颜色
    }
  });
}
</script>

<template>
  <p class="mb-4">
    <a-select
      v-model:value="formData.type"
      style="width: 120px"
      placeholder="Automatic tokenization"
      @change="handleChange"
    >
      <a-select-option value="dot">dot</a-select-option>
      <a-select-option value="fixedDot">fixedDot</a-select-option>
      <a-select-option value="mesh">mesh</a-select-option>
    </a-select>
  </p>
  <div id="container" />
</template>
