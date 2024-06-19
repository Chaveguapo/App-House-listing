<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


// The decision behind store the src for each state, was to make it more readable and use it in uppercase give us the hint that this variable will not change 

const HOME_ICON_ACTIVE = "src/assets/MobileNavHomeActive.png";
const HOME_ICON_INACTIVE = "src/assets/MobileNavHome.png";
const INFO_ICON_ACTIVE = "src/assets/MobileInfoActive.png";
const INFO_ICON_INACTIVE = "src/assets/MobileInfo.png";

const homeIcon = ref(HOME_ICON_INACTIVE)
const aboutIcon = ref(INFO_ICON_INACTIVE)

const setHomeActive = () => {
  homeIcon.value = HOME_ICON_ACTIVE;
  aboutIcon.value = INFO_ICON_INACTIVE;
}
const setInfoActive = () => {
  homeIcon.value = HOME_ICON_INACTIVE;
  aboutIcon.value = INFO_ICON_ACTIVE;
}

setHomeActive()

</script>

<template>
  <!-- NavigationHeader component -->
  <nav v-if="homeIcon" class="mobileNav">
    <!-- Logo -->
    <RouterLink class="logo" style="text-decoration: none;" to="/">
      <img src="../assets/Logo.png" class="logo" alt="Logo">
    </RouterLink>

    <RouterLink style="text-decoration: none;" to="/">
      <div @click="setHomeActive" class="navOption">
        <h1>Houses</h1>
        <img :src=homeIcon alt="Mobile Home" />
      </div>
    </RouterLink>

    <RouterLink style="text-decoration: none;" to="/about">
      <div @click="setInfoActive" class="navOption">
        <h1>About</h1>
        <img :src=aboutIcon alt="Mobile Info" />
      </div>
    </RouterLink>

  </nav>

</template>


<style lang="scss" scoped>
//Mobile Navigation Styles


.logo {
  height: 3rem;
  width: 3rem;
}

.mobileNav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 50;
  bottom: 0;
  border-top: 2px;
  box-shadow: 0 0 9px 0 rgba(74, 75, 76, 0.5);
  width: 100%;
  height: 40px;
  background-color: var(--color-backgroundwhite);
}

.navOption h1 {
  display: none;
  border-bottom-color: unset;
  color: var(--color-primarytext);
  letter-spacing: -1px;
}

.navOption img {
  display: flex;
  max-width: 30px;
  max-height: 30px;
}

.logo {
  display: none;
}

.logo img {

  max-width: 100px;
}

//Desk Navigation Styles
@media (min-width: 800px) {


  .mobileNav {
    flex-direction: row;
    justify-content: left;
    box-sizing: border-box;
    top: 0;
    padding: 0 10%;
    position: relative;
    height: 3rem;
    gap: 2rem;
    background-color: var(--color-backgroundwhite);

  }

  .logo {
    display: flex;
  }

  .containerOptionsHeader {
    gap: 2rem;
    display: flex;
    flex-direction: row;
  }


  .navOption h1 {
    display: flex;
    font-size: 20px;
    font-weight: 700;
    overflow: none;
    cursor: pointer;

  }

  .navOption h1:hover {
    color: var(--color-primary);
  }


  .navOption img {
    display: none;
  }

}
</style>