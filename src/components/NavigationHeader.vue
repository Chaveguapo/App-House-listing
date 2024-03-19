<script setup>
import { ref } from 'vue';


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

</script>



<template>
  <div class="mobileNav">
    <img @click="setHomeActive" :src=homeIcon alt="Mobile Home" />
    <img @click="setInfoActive" :src=aboutIcon alt="Mobile Home" />
  </div>

</template>


<style lang="scss" scoped>
.mobileNav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  border-top: 2px;
  box-shadow: 0 3px 9px rgba(74, 75, 76, 0.5);
  width: 100vw;
}

.mobileNav img {
  max-width: 30px;
  max-height: 30px;
}
</style>