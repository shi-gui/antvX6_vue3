<script lang="ts" setup>
import { Graph } from '@antv/x6';

// 2、准备数据
const data: any = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 200,
      shape: 'rect',
      width: 80,
      height: 40,
      label: '矩形'
    },
    {
      id: 'node2',
      x: 300,
      y: 200,
      shape: 'circle',
      width: 40,
      height: 40,
      label: '圆形'
    },
    {
      id: 'node3',
      x: 500,
      y: 200,
      shape: 'ellipse',
      width: 80,
      height: 40,
      label: '椭圆'
    },
    {
      id: 'node4',
      x: 700,
      y: 200,
      shape: 'polygon',
      width: 80,
      height: 40,
      attrs: {
        polygon: {
          fill: '#efdbff',
          stroke: '#9254de',
          // 指定 refPoints 属性，多边形顶点随图形大小自动缩放
          // https://x6.antv.vision/zh/docs/api/registry/attr#refpointsresetoffset
          refPoints: '0,10 10,0 20,10 10,20' // 四个点的坐标
        }
      },
      label: '多边形'
    },
    {
      id: 'node5',
      x: 900,
      y: 200,
      shape: 'polyline',
      width: 80,
      height: 40,
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de',
          // 指定 refPoints 属性，顶点随图形大小自动缩放
          // https://x6.antv.vision/zh/docs/api/registry/attr#refpointsresetoffset
          refPoints: '0,0 0,10 10,10 10,0'
        }
      },
      label: '折线'
    },
    {
      id: 'node6',
      x: 1100,
      y: 200,
      shape: 'path', // 梯形
      width: 80,
      height: 40,
      path: 'M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z',
      attrs: {
        body: {
          fill: '#ED8A19',
          stroke: 'none'
        }
      },
      label: '路径'
    },
    {
      id: 'node7',
      x: 1300,
      y: 200,
      shape: 'image',
      width: 80,
      height: 40,
      imageUrl:
        'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg'
      // label: '图片'
    },
    {
      id: 'node8',
      x: 1300,
      y: 400,
      shape: 'image-bordered',
      width: 80,
      height: 40,
      imageUrl:
        'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg'
      // label: '带边框的图片'
    },
    {
      id: 'node9',
      x: 1100,
      y: 400,
      shape: 'image-embedded',
      width: 80,
      height: 40,
      imageUrl:
        'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg'
      // label: '内嵌入矩形的图片'
    },
    {
      id: 'node10',
      x: 900,
      y: 400,
      shape: 'image-inscribed',
      width: 80,
      height: 40,
      imageUrl:
        'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg'
      // label: '内嵌入椭圆的图片'
    },
    {
      id: 'node11',
      x: 700,
      y: 400,
      shape: 'text-block',
      width: 80,
      height: 40,
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de',
          rx: 4,
          ry: 4
        }
      },
      text: '文本节点'
    },
    {
      id: 'node12',
      x: 500,
      y: 400,
      shape: 'cylinder',
      width: 80,
      height: 120,
      attrs: {
        top: {
          fill: '#fe854f',
          fillOpacity: 0.5
        },
        body: {
          fill: '#ED8A19',
          fillOpacity: 0.8
        }
      },
      label: '圆柱'
    },
    {
      id: 'node13',
      x: 300,
      y: 400,
      shape: 'html',
      width: 80,
      height: 40,
      html() {
        const wrap = document.createElement('div');
        wrap.innerHTML = `
          <a href="#" class="text-red-500 bg-red-100">
            html渲染
          </a>`;

        return wrap;
      }
    }
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2'
    },
    {
      source: 'node2',
      shape: 'double-edge', // 双线边
      target: 'node3'
    },
    {
      source: 'node3',
      shape: 'shadow-edge', // 阴影边
      target: 'node4'
    },
    {
      source: 'node4',
      target: 'node5'
    },
    {
      source: 'node5',
      target: 'node6'
    },
    {
      source: 'node6',
      target: 'node7'
    },
    {
      source: 'node7',
      target: 'node8'
    },
    {
      source: 'node8',
      target: 'node9'
    },
    {
      source: 'node9',
      target: 'node10'
    },
    {
      source: 'node10',
      target: 'node11'
    },
    {
      source: 'node11',
      target: 'node12'
    },
    {
      source: 'node12',
      target: 'node13'
    }
  ]
};

onMounted(() => {
  // 3、渲染画布
  const graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    width: 1600,
    height: 600,
    grid: true
  });

  graph.fromJSON(data);
});
</script>

<template>
  <!-- 1、创建容器 -->
  <div id="container" />
</template>
