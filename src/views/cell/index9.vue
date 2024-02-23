<script lang="ts" setup>
import { Graph, Node, Cell } from '@antv/x6';

const formState = reactive({
  labelText: null,
  userId: null,
  roleId: null
});
function onNameChange() {
  curCel?.attr('label/text', formState.labelText);
}
function onUserIdChange() {
  curCel?.setData({
    userId: formState.userId
  });
}
function onRoleIdChange() {
  curCel?.setData({
    roleId: formState.roleId
  });
}

let graph: Graph;
let curCel: Cell | null;
onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    height: 600,
    grid: {
      size: 10, // 网格大小 10px
      visible: true // 渲染网格背景
    }
  });

  const metadata: Node.Metadata = {
    x: 300,
    y: 200,
    width: 200,
    height: 60,
    attrs: {
      // 指定 text 元素的样式
      label: {
        text: 'rect', // 文字
        fill: 'blue' // 文字颜色
      }
    },
    data: {
      userId: 1,
      roleId: 1
    }
  };

  graph.addNode(metadata);

  // 节点点击事件，需要保证页面渲染完成
  nextTick(() => {
    graph.on('cell:click', ({ cell }: any) => {
      // 将之前选中的样式清除
      curCel?.attr('body/stroke', null);
      // 新的节点赋值
      curCel = cell;
      // 新的节点边框样式设置为红色
      curCel?.attr('body/stroke', 'red');
      // 将labelText进行赋值（labelText有可能在text/text中，也有可能在label/text中）
      let labelText = null;
      if (cell.getAttrs()?.label?.text)
        labelText = cell.getAttrs()?.label?.text;
      if (cell.getAttrs()?.text?.text) labelText = cell.getAttrs()?.text?.text;
      formState.labelText = labelText;
      // 将cell data中userId进行赋值
      formState.userId = cell.getData()?.userId;
      // 将cell data中roleId进行赋值
      formState.roleId = cell.getData()?.roleId;
    });
  });
});
function toJSON() {
  console.log(graph.toJSON());
}

function clearBorder() {
  curCel?.attr('body/stroke', null);
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="toJSON" class="mr-2">toJSON</a-button>
    <a-button @click="clearBorder">清除边框</a-button>
  </p>
  <a-row :gutter="[16, 8]">
    <!-- 左侧流程图 -->
    <a-col :span="20">
      <div id="container" />
    </a-col>
    <!-- 右侧表单 -->
    <a-col :span="4">
      <a-form :model="formState">
        <a-form-item label="标题" v-show="formState.labelText !== null">
          <a-input v-model:value="formState.labelText" @change="onNameChange" />
        </a-form-item>
        <a-form-item label="用户" v-show="formState.userId !== null">
          <a-select
            v-model:value="formState.userId"
            placeholder="请选择用户"
            @change="onUserIdChange"
          >
            <a-select-option :value="1">张三</a-select-option>
            <a-select-option :value="2">李四</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="角色" v-show="formState.roleId !== null">
          <a-select
            v-model:value="formState.roleId"
            placeholder="请选择角色"
            @change="onRoleIdChange"
          >
            <a-select-option :value="1">管理员1</a-select-option>
            <a-select-option :value="2">管理员2</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
