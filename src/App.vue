<script setup>
import NavigationHeader from './components/NavigationHeader.vue';
import './assets/main.css';


</script>

<template>
  <div class="container">

    <!-- NavigationHeader component -->
    <NavigationHeader />
    <!-- Router View for rendering the components -->
    <router-view></router-view>


  </div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 100vh;
  padding: 0 5;

}
</style>
