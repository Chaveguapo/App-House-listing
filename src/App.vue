<script setup>
import NavigationHeader from './components/NavigationHeader.vue';
import './assets/main.css';


</script>

<template>
  <main class="app_container">

    <!-- NavigationHeader component -->
    <NavigationHeader />
    <!-- Router View for rendering the components -->
    <div class="main_container">

      <router-view></router-view>


    </div>


  </main>
</template>

<style lang="scss" scoped>
.app_container {
  width: 100vw;
  height: 100vh;

}

.main_container {
  height: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
}

// @media</style>
