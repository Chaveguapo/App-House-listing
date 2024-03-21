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

  <div class="search_container">
    <img class="add_listing" src="../assets/Add.png">
    <h1>Houses</h1>


    <div class="search_bar">
      <img class="search_icon" src="../assets/ic_search@3x.png">
      <input class="search_input" type="text" placeholder="Search for a house">
      <img class="clear-search_icon" src="../assets/ic_clear@3x.png">
    </div>
    <div>

    </div>
  </div>



  <div class="houses_container">

    <div class="listings">
      <SingleListing v-for="(listing, index) in listingsArray" :key="index" :houseListing="listing" :index="index" />
      <div>

      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
//Mobile Styles


//-----Search Styles

.search_container {
  padding: 1rem 0;
  text-align: center;
}


.add_listing {
  position: relative;
  float: right;
  width: 20px;
  height: 20px;
  right: 0;
}

.search_input {
  background-color: transparent;
  border: none;
  width: 80%;


}

.search_bar {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 0.5rem 0;
  align-self: center;
  background-color: var(--color-tertiary);
  border-radius: 5px;
  border: none;
  box-sizing: border-box;


}

.search_icon {
  padding-left: 10px;
  position: relative;
  float: left;
  top: 0;
  width: 18px;
  height: 18%;
}

.clear-search_icon {
  display: none;
  width: 18px;
  height: 18px;
}

//-----Houses listings Styles

.houses_container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.listings {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.houses_container header {
  display: flex;

}

.houses_container img {
  height: 15px;
  width: 15px;
}


//Desk styles
@media (min-width: 800px) {

  //  .search_bar

}
</style>