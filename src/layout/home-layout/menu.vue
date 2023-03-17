<template>
  <div class='menu-container'>
    <!--icon-->
    <router-link to="/">
      <div class="logo__wrapper">
        <img src="@/assets/images/icon_title.png" class="logo" v-bind="">
      </div>
    </router-link>

    <!--menu-->
    <el-menu
    :default-active="activeIndex"
    class="menus"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    >
      <el-menu-item 
      v-for="(item, index) in menuItems" :index="item.key"
      style="font-size: 15px; line-height: 56px;font-weight:400;">
        {{ item.label }}
      </el-menu-item>
    </el-menu>
  
    <!--user-->
    <div class="icon-menu">
      <el-avatar :src="userProfile" class="icon-avatar"/>
    </div>
  </div>
</template>

<script>
import { RouterModuleName } from '../../router/module.js'
const menuItems = [{
  key: "knowledge",
  label: "知识库"
},
{
  key: "about",
  label: "关于"
}
];
const routeNameMap = {
  HomePage: 'HomePage',
  Knowledge: 'knowledge',
  About: 'about',
};
export default {
  data() {
    return {
      menuItems,
      activeIndex: '',
      userProfile:'',
    }
  },
  watch: {
    $route(val,oldval){
        console.log(val.name);
        this.activeIndex = routeNameMap[val.name];
      }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
      switch (index) {
        case 'knowledge':
          this.$router.push({
            name: RouterModuleName.Knowledge,
          })
          break;
        case 'about':
          this.$router.push({
            name: RouterModuleName.About,
          });
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    this.activeIndex = routeNameMap[this.$route.name];
  }
}
</script>

<style lang="scss" scoped>

.menu-container {
  position: relative;
  height: 56px;
  box-shadow: 0px 0px 5px #d3d8e4, 0px 6px 10px rgb(0 0 0 / 6%);
  background: white;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  .logo__wrapper {
    display: flex;
    align-items: center;
    img {
      height: 50px;
    }
  }
  .menus {
    height: 56px;
    margin-left: 24px;
  }
  .icon-menu {
    flex: 1;
    display: flex;
    padding: 0 24px;
    justify-content: flex-end;
    align-items: center;
  }
}

.icon-avatar {
  height: 30px;
  width: 30px;
  margin-left: 10px;
} 
</style>