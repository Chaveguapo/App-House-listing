<script setup>
import SingleListing from './SingleListing.vue';
import { ref } from 'vue';



const listingsArray = ref([]);


const getHouselistings = () => {

  fetch("https://api.intern.d-tt.nl/api/houses"
    , {
      method: "get",
      headers: {
        'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t',
      }
    })
    .then(response => response.json())
    .then(data => listingsArray.value = data);

}

getHouselistings();
console.log(listingsArray.value)



</script>



<template>



  <div class="container-houses">
    <header>
      <h1>Houses</h1>
      <img src="../assets/Add.png">
    </header>
    <div>
      <input placeholder="Search for a house">
    </div>
    <div class="filters">
      <div class="priceFilter">Price</div>
      <div class="sizeFilter">Size</div>
    </div>
    <div class="listings">
      <SingleListing v-for="(listing, index) in listingsArray" :key="index" :houseListing="listing" :index="index" />
      <div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
//Mobile Styles
.container-houses {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: scroll
}

.listings {
  display: flex;
  flex-direction: column;
  width: 90vw;
  gap: 1rem;
  border: 2px solid red;
}

.container-houses header {
  display: flex;

}

.container-houses img {
  height: 15px;
  width: 15px;
}
</style>