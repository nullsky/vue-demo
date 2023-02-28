<template lang="">
  <header>
    <Menu />
  </header>
  <section style="display: flex; flex-direction: row;">
    <router-view />
  </section>
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
<style lang="scss" scoped>
.container{
  background-color: #EDF1F7;
}
</style>