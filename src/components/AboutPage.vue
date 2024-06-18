<script setup>

</script>


<template>
  <div class="container-about">
    <h1>About</h1>
    <h2>About DTT Real Estate</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.<br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>


    <h1>Design and Development</h1>
    <img class="logo" src="../assets/LogoDTT.png">
  </div>
</template>


<style lang="scss" scoped>
.container-about {

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 3% 10%;
}

.container-about h2 {
  padding-top: 1rem;
}

.logo {
  width: 20%;
  height: auto;
}
</style>