<script lang="ts" setup>
import { Graph, Addon, Shape, Node, Cell } from '@antv/x6';

const tableData = [
  {
    id: 1,
    title: '标题1',
    content: '内容1'
  },
  {
    id: 2,
    title: '标题2',
    content: '内容2'
  },
  {
    id: 3,
    title: '标题3',
    content: '内容3'
  }
];

let graph: Graph;
let stencil: Addon.Stencil;
let curCel: Cell | null;

// 左侧可拖拽模板
function buildStencil() {
  stencil = new Addon.Stencil({
    target: graph,
    stencilGraphWidth: 300,
    collapsable: true,
    groups: [
      {
        name: 'basic',
        title: '基础节点',
        graphHeight: 180
      },
      {
        name: 'combination',
        title: '组合节点',
        graphHeight: 260
      }
    ]
  });

  document.querySelector('#stencil')?.appendChild(stencil.container);
}
// 左侧模板数据
function stencilLoadData() {
  // createNode方式
  const bizNode1 = graph.createNode({
    shape: 'rect',
    width: 100,
    height: 50,
    attrs: {
      label: {
        fontSize: 12,
        text: '业务节点1'
      }
    }
  });
  // 构造函数方式
  const bizNode2 = new Shape.Rect({
    width: 100,
    height: 50,
    attrs: {
      label: {
        fontSize: 12,
        text: '业务节点2'
      }
    }
  });
  // 节点元数据方式
  const bizNode3: Node.Metadata = {
    width: 100,
    height: 50,
    attrs: {
      label: {
        fontSize: 12,
        text: '业务节点3'
      }
    }
  };
  stencil.load([bizNode1, bizNode2, bizNode3], 'basic');

  const bizNode4 = graph.createNode({
    width: 80,
    height: 80,
    shape: 'circle',
    attrs: {
      label: {
        fontSize: 12,
        text: '业务节点4'
      }
    }
  });
  stencil.load([bizNode4], 'combination');
}

// 中间画布
function buildGraph() {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    background: {
      color: '#fffbe6' // 设置画布背景颜色
    },
    grid: {
      size: 10, // 网格大小 10px
      visible: true // 渲染网格背景
    }
  });
}

// 初始化事件
function initEvent() {
  graph.on('cell:click', ({ cell }) => {
    // 将之前被选中的节点样式清除
    curCel?.attr('body/stroke', null);
    // 新的节点赋值
    curCel = cell;
    // 新的节点边框样式设置为红色
    curCel?.attr('body/stroke', 'red');

    // 将cell data中Id进行赋值
    formData.id = cell.getData()?.id;
    if (formData.id) {
      const tableDataRow = tableData.filter(item => item.id === formData.id)[0];
      formData.title = tableDataRow.title;
      formData.content = tableDataRow.content;
    } else {
      formData.title = '';
      formData.content = '';
    }
  });
}

onMounted(() => {
  buildGraph();
  buildStencil();
  stencilLoadData();
  initEvent();
});

const formData = reactive({
  id: null,
  title: '',
  content: ''
});
function handleChange() {
  const tableDataRow = tableData.filter(item => item.id === formData.id)[0];
  formData.title = tableDataRow?.title;
  formData.content = tableDataRow?.content;
  curCel?.setData({
    id: formData.id
  });
  curCel?.attr('label/text', formData.title);
}
function toJSON() {
  const data = graph.toJSON();
  console.log(data);
}
</script>

<template>
  <a-row :gutter="[8, 8]">
    <a-col :span="5">
      <div id="stencil" />
    </a-col>
    <a-col :span="14">
      <div id="container" />
    </a-col>
    <a-col :span="5">
      <a-form :form="formData">
        <a-form-item label="数据" v-show="formData.id !== null">
          <a-select
            v-model:value="formData.id"
            placeholder="请选择数据"
            @change="handleChange"
          >
            <a-select-option
              v-for="item in tableData"
              :key="item.id"
              :value="item.id"
            >
              {{ item.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
      <a-button @click="toJSON">toJSON</a-button>
    </a-col>
  </a-row>
</template>
