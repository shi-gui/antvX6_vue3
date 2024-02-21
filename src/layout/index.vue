<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <!-- log -->
      <div class="text-white flex items-center justify-center px-5">
        <img
          src="https://threejs.org/files/favicon_white.ico"
          class="w-[30px] mr-3"
        />
        <span class="text-[30px]">Antv X6</span>
      </div>
      <!-- sider -->
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handleClick"
      >
        <template v-for="item in menu">
          <a-menu-item v-if="!item.children" :key="item.key">
            {{ item.title }}
          </a-menu-item>
          <template v-else>
            <menu-item :key="item.key" :menu-info="item" />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <!-- content -->
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{
            padding: '24px',
            background: '#fff',
            minHeight: 'calc(100vh - 48px)'
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { menu, type Menu } from '../config/menu';
import MenuItem from './components/MenuItem.vue';

const collapsed = ref<boolean>(false);
const openKeys = ref<number[]>([1]);
const selectedKeys = ref<number[]>([11]);
const router = useRouter();

const handleClick = ({ key }: any) => {
  let path = undefined;
  function getCurrentMenu(m: Menu[]) {
    for (let i = 0; i < m.length; i++) {
      if (m[i].key === key) {
        path = m[i]?.path;
      } else if (m[i].children) {
        getCurrentMenu(m[i].children || []);
      }
    }
  }
  getCurrentMenu(menu);

  path && router.replace(path);
};
</script>
<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
