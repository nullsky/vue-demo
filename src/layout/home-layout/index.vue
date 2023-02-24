<template lang="">
  <div class="container">
    <Menu />
    <router-view />
  </div>
</template>
<script>
import Menu from './menu.vue';
export default {
  name: 'home-layout',
  components: {
    Menu
  }
}
</script>
<style lang="css">
.container{
  background-color: #EDF1F7;
}
</style>