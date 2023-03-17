<template lang="">
<aside class="left-aside" :style="{width: isCollapse ? '64px' : '280px'}">
  <el-menu 
  class="el-menu-vertical-demo"
  @select="handleSelect">
    <el-menu-item v-for="item in menuConfig" :index="item.key">
      <el-icon><document /></el-icon>
      <template #title>{{item.name}}</template>
    </el-menu-item>
  </el-menu>
</aside>
<main class="mainArea">
  <router-view />
</main>
</template>
<script>
import { RouterModules } from '../../router/module'
const menuConfig = [
  {
    key: RouterModules.ToolOnlineJSEditor.name,
    name: RouterModules.ToolOnlineJSEditor.title,
  },
  {
    key: RouterModules.ToolOnlineJSONFormatter.name,
    name: RouterModules.ToolOnlineJSONFormatter.title,
  }
];
export default {
  data() {
    return {
      menuConfig,
      isCollapse: false,
      asideWidth: "280px",
    }
  },
  methods: {
    handleSelect(index) {
      this.$router.push({
        name: index,
      })
    },
    handleTab() {
      this.isCollapse = !this.isCollapse;
    },
  },
}
</script>
<style lang="scss" scoped>
.left-aside {
  display: flex;
  height: calc(100vh - 56px);
  position: relative;
  overflow: auto;

  flex-direction: column;
  .el-menu-vertical-demo {
    width: 100%;
    height: 100%;
  }
}
.mainArea {
  flex: 1;
  height: calc(100vh - 56px);
  overflow: auto;
  position: relative;
}
</style>