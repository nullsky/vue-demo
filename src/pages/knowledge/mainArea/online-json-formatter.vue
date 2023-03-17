/**
  在线JSON格式化工具
 */

<template lang="">
  <div class="container">
    <div class="top">
      <h1>原始值</h1>
      <el-input
        class="in"
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please Input"
      />
    </div>
    <div class="line"></div>
    <div class="bottom">
      <h1>输出</h1>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  // test: 'Please Input',
  // setup() {
  //   test = '11'
  // }
  
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--el-border-color);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .top {
    flex: 1;
    display: flex;
    flex-direction: column;
    .in {
      flex: 1;
    }
  }
  .line {
    height: 2.5px;
    width: 100%;
    border: 1px solid var(--el-border-color);
    // background-color: antiquewhite;
  }
  .bottom {
    flex: 1;
  }
}

</style>