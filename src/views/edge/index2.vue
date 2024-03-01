<script lang="ts" setup>
import { Graph, Shape, Point, EdgeView, Path } from '@antv/x6';

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
    // 当源/目标是画布上的点时，需要开启 allowBlank 选项（默认已经开启）才能生效
    connecting: {
      allowBlank: false
    }
  });
});

function test() {
  graph.addEdge({
    source: { x: 100, y: 100 },
    target: { x: 100, y: 500 },
    // 路径点
    vertices: [
      { x: 50, y: 200 },
      { x: 30, y: 350 }
    ]
  });
}

function test1() {
  graph.addEdge({
    source: { x: 200, y: 100 },
    target: { x: 200, y: 500 },
    vertices: [
      { x: 150, y: 200 },
      { x: 120, y: 350 }
    ],
    router: {
      name: 'orth',
      args: {}
    }
  });
}

function test2() {
  graph.addEdge({
    source: { x: 300, y: 100 },
    target: { x: 300, y: 500 },
    router: {
      name: 'oneSide',
      args: { side: 'left' }
    }
  });
}

function test3() {
  graph.addNode({
    id: 'barrier',
    x: 400,
    y: 200,
    width: 80,
    height: 40,
    label: '障碍节点'
  });
  graph.addEdge({
    source: { x: 400, y: 100 },
    target: { x: 400, y: 500 },
    router: {
      name: 'manhattan',
      args: {}
    }
  });
}

function test4() {
  graph.addEdge({
    source: { x: 800, y: 100 },
    target: { x: 800, y: 500 },
    // 路径点
    vertices: [
      { x: 850, y: 200 },
      { x: 850, y: 350 }
    ],
    // 地铁路由 'metro' 是曼哈顿路由 manhattan 的一个变种，它由水平或垂直的正交线段和斜角线段组成，类似地铁轨道图，并自动避开路径上的其他节点（障碍）。其选项与 manhattan 路由一样，但 maxDirectionChange 的默认值为 45，表示路由线段的最大倾斜角度为 45 度。
    router: {
      name: 'metro',
      args: {
        maxDirectionChange: 100 // 默认45
        // startDirections: ['top'],
        // endDirections: ['bottom'],
      }
    }
  });
}

function test5() {
  graph.addEdge({
    source: { x: 850, y: 100 },
    target: { x: 850, y: 500 },
    // 路径点
    vertices: [
      { x: 900, y: 200 },
      { x: 900, y: 350 }
    ],
    // 实体关系路由 'er' 由 Z 字形的斜角线段组成，常用于表示 ER 图中的实体之间的连线。
    router: {
      name: 'er',
      args: {
        // 路由的第一个点和最后一个点与节点之间的距离。当取值为 'center' 时，节点距离的中心作为路由点坐标。
        offset: 32,
        // 路由的第一个点和最后一个点与节点之间的最小距离。
        min: 16,
        // 路由方向，缺省时将自动选择最优方向。'T' | 'B' | 'L' | 'R' | 'H' | 'V'
        direction: undefined
      }
    }
  });
}

// 注册自定义路由
interface RandomRouterArgs {
  bounces?: number;
}
function randomRouter(
  vertices: Point.PointLike[],
  args: RandomRouterArgs,
  view: EdgeView
) {
  const bounces = args.bounces || 20;
  const points = vertices.map(p => Point.create(p));

  for (let i = 0; i < bounces; i++) {
    const sourceCorner = view.sourceBBox.getCenter();
    const targetCorner = view.targetBBox.getCenter();
    const randomPoint = Point.random(
      sourceCorner.x,
      targetCorner.x,
      sourceCorner.y,
      targetCorner.y
    );
    points.push(randomPoint);
  }

  return points;
}

Graph.registerRouter('custom', randomRouter);
function test6() {
  graph.addEdge({
    source: { x: 900, y: 100 },
    target: { x: 900, y: 500 },
    // 路径点
    vertices: [
      { x: 950, y: 200 },
      { x: 950, y: 350 }
    ],
    // 6、自定义路由
    router: {
      name: 'custom',
      args: {
        bounces: 3
      }
    }
  });
}

function test7() {
  graph.addEdge({
    source: { x: 1000, y: 100 },
    target: { x: 1000, y: 500 },
    vertices: [
      { x: 1050, y: 200 },
      { x: 1050, y: 300 }
    ],
    router: {
      name: 'orth',
      args: {}
    },
    // 系统的默认连接器，将起点、路由点、终点通过直线按顺序连接。
    connector: 'normal'
  });
}

const test8 = () => {
  graph.addEdge({
    source: { x: 1050, y: 100 },
    target: { x: 1050, y: 500 },
    vertices: [
      { x: 1100, y: 200 },
      { x: 1100, y: 300 }
    ],
    router: 'orth',
    // 平滑连接器，通过三次贝塞尔链接起点、路由点和终点。
    connector: 'smooth'
  });
};

function test9() {
  graph.addEdge({
    source: { x: 1100, y: 100 },
    target: { x: 1100, y: 500 },
    vertices: [
      { x: 1150, y: 200 },
      { x: 1150, y: 300 }
    ],
    router: 'orth',
    //圆角连接器，将起点、路由点、终点通过直线按顺序连接，并在线段连接处通过圆弧连接（倒圆角）。
    connector: 'rounded'
  });
}

function test10() {
  graph.addEdge({
    source: { x: 800, y: 300 },
    target: { x: 1400, y: 300 },
    // vertices: [
    //   { x: 1150, y: 200 },
    //   { x: 1150, y: 300 },
    // ],
    router: 'orth',
    // 跳线连接器，用直线连接起点、路由点和终点，并在边与边的交叉处用跳线符号链接。
    connector: {
      name: 'jumpover',
      args: {
        type: 'arc', // 'arc' | 'gap' | 'cubic' 跳线类型。
        size: 5, // 跳线大小。
        radius: 0, // 倒角半径。
        raw: false // 是否返回一个 Path 对象，默认值为 false 返回序列化后的字符串
      }
    }
  });
}

// 注册自定义链接器
interface WobbleArgs {
  spread?: number;
  raw?: boolean;
}
Graph.registerConnector(
  'wobble',
  (sourcePoint, targetPoint, vertices, args: WobbleArgs) => {
    const spread = args.spread || 20;
    const points = [...vertices, targetPoint].map(p => Point.create(p));
    let prev = Point.create(sourcePoint);
    const path = new Path();
    path.appendSegment(Path.createSegment('M', prev));

    for (let i = 0, n = points.length; i < n; i += 1) {
      const next = points[i];
      const distance = prev.distance(next);
      let d = spread;

      while (d < distance) {
        const current = prev.clone().move(next, -d);
        current.translate(
          Math.floor(7 * Math.random()) - 3,
          Math.floor(7 * Math.random()) - 3
        );
        path.appendSegment(Path.createSegment('L', current));
        d += spread;
      }

      path.appendSegment(Path.createSegment('L', next));
      prev = next;
    }

    return path;
  },
  true
);

function test11() {
  graph.addEdge({
    source: { x: 1200, y: 100 },
    target: { x: 1200, y: 500 },
    vertices: [
      { x: 1250, y: 200 },
      { x: 1250, y: 300 }
    ],
    router: 'orth',
    // 跳线连接器，用直线连接起点、路由点和终点，并在边与边的交叉处用跳线符号链接。
    connector: {
      name: 'wobble',
      args: { spread: 16 }
    }
  });
}
</script>

<template>
  <p class="mb-4">
    <a-button @click="test">vertices:路径点</a-button>
    <a-button @click="test1">orth:正交路由</a-button>
    <a-button @click="test2">oneSide:正交路由 'orth' 的受限版本</a-button>
    <a-button @click="test3">manhattan：曼哈顿路由</a-button>
    <a-button @click="test4">metro：地铁路由</a-button>
    <a-button @click="test5">er：实体关系路由</a-button>
    <a-button @click="test6">自定义路由</a-button>

    <a-button @click="test7">connector：链接器——normal：默认连接器</a-button>
    <a-button @click="test8">connector：链接器——smooth：平滑连接器</a-button>
    <a-button @click="test9">connector：链接器——rounded：圆角连接器</a-button>
    <a-button @click="test10">connector：链接器——jumpover：跳线连接器</a-button>
    <a-button @click="test11">connector：链接器——自定义连接器</a-button>
  </p>
  <div id="container" />
</template>
